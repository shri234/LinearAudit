import { useState } from "react";
import TopNav from "./topnav";
import Footer from "./Footer";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    spamFree: true,
    howYouKnow: "",
    query: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", content: "" });

    try {
      // Basic validation
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.howYouKnow ||
        !formData.query
      ) {
        setMessage({
          type: "error",
          content: "Please fill in all required fields.",
        });
        setIsSubmitting(false);
        return;
      }

      // API call
      const response = await fetch(
        "https://linearaudit-backend.onrender.com/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage({ type: "success", content: result.message });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          spamFree: true,
          howYouKnow: "",
          query: "",
        });
      } else {
        setMessage({
          type: "error",
          content: result.error || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({
        type: "error",
        content: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0042A8] to-[#0053D6] text-white">
      {/* Top Bar */}
      <TopNav />

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between mt-14 px-8 md:px-20 py-10 flex-grow">
        {/* Left Text */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            We're here to help you
            <br />
            navigate compliance,
            <br />
            audits, & business growth
          </h1>
          <p className="text-gray-200 text-base md:text-lg">
            Whether you're a startup seeking guidance, an enterprise aiming for
            compliance, or an organization in need of expert audit and advisory
            services — our team is ready to help.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-transparent md:w-1/2 space-y-4"
        >
          <p className="text-white text-sm mb-2">
            Please fill these details For Enquiry
          </p>

          {/* Success/Error Message */}
          {message.content && (
            <div
              className={`p-3 rounded-md text-sm font-medium ${
                message.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {message.content}
            </div>
          )}

          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail address"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="+91 - Phone number*"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <div className="bg-blue-100 text-blue-800 text-sm p-3 rounded-md flex items-start gap-2">
            <input
              type="checkbox"
              name="spamFree"
              id="spamFree"
              checked={formData.spamFree}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <label htmlFor="spamFree" className="flex-1">
              <span className="font-medium">It is Linearaudit's promise</span>{" "}
              to offer a strictly spam-free service. We only call you if you
              want us to do so.
            </label>
          </div>

          <input
            type="text"
            name="howYouKnow"
            placeholder="How you came to know about us*"
            value={formData.howYouKnow}
            onChange={handleChange}
            className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <textarea
            name="query"
            placeholder="Write your query here*"
            value={formData.query}
            onChange={handleChange}
            // rows=4
            className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300 resize-vertical"
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 rounded-full shadow-md transition font-medium ${
              isSubmitting
                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
