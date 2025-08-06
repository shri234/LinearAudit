import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import "../App.css";

const testimonials = [
  {
    text: "I have known LMA since inception..Mr. Vishnu and Mr. Kiruba are two ambitious and passionate youngsters who started this journey together. They helped me start my own company and believe I never thought it will be such a smooth sail. The level of hand holding that they do is par excellence and you are assured of a hassle free service anytime everywhere. I wish LMA a wonderful accomplishing journey ahead. Kudos !!",
    name: "Sathya Barathy",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    text: "I am happy taking their services during the last 10 years.They are prompt and dependable in their work.",
    name: "Ravi Padmanabhan",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "A great professional service by Linear Audit team, a special thanks to Mr. Kirubakaran.He hand held me throughout the incorporation process. His ability and capacity to resolve the issue and guidance is commendable.I strongly recommend him and I will continue my journey with him and Linear Audit Team.Thank you!!!",
    name: "Joseph Gerold",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    text: "Hassle free service from the firm. Mr. Kirubakaran was very attentive and present during every step of our company registration process. Everything was well explained and presented neatly. Would recommend 10/10.",
    name: "B",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    text: "We have been working with them for several years. They have always been responsive, professional and competent in addressing our needs. As a growing MSME they fit our scale and ambitions well.",
    name: "Chidambaram Kattuputhur",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Very professional and most important, they understand what you what and act accordingly. Irrespective of the number of questions you have, they patiently explain the procedure and handhold you through and through. I'm very happy and hope to go a long way with Linear Management.",
    name: "Bidisha Banerjee",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-purple-600 font-semibold tracking-widest text-sm mb-3 uppercase">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Voices of trust, Words of impact.
            <br />
            <span className="text-gray-700">Proof of our dedication.</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out h-[400px]" // Add a fixed height (e.g., h-[400px])
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl  p-8 md:p-12 relative overflow-hidden shadow-only-sides">
                    {/* Decorative Quote */}
                    <div className="absolute top-8 right-8 text-purple-100 text-8xl font-serif leading-none select-none">
                      "
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
                      />
                      <div>
                        <div className="text-gray-900 font-bold text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-purple-600 font-medium">
                          Verified Client
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 mr-10 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
          </button>
        </div>

        {/* Dots Navigation */}
        {/* <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-12 h-3 bg-purple-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-purple-300"
              }`}
            />
          ))}
        </div> */}

        {/* Client Count */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-gray-700">
              <span className="font-bold text-purple-600">500+</span> Happy
              Clients
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
