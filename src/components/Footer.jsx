import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white pt-10">
      {/* Top: Logo and Nav */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center pb-0 border-b border-gray-800">
        <div className="mb-8 md:mb-0">
          <img
            src="/logo.svg"
            alt="LinearAudit Logo"
            className="w-40 mb-6 md:mb-0"
          />
          {/* Replace with your logo image */}
        </div>
        <nav className="flex space-x-6 text-sm md:text-base">
          <a href="/" className="text-white hover:text-gray-400 font-medium">
            Home
          </a>
          <a href="/#about-us" className="hover:text-gray-400">
            About us
          </a>
          <a href="/#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="/#founders" className="hover:text-gray-400">
            Founders
          </a>
          <a href="/#testimonials" className="hover:text-gray-400">
            Testimonial
          </a>
        </nav>
      </div>

      {/* Address box */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="bg-[#1e1e1e] rounded-lg px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-gray-300">
            No 36-B, Karthikeyan Salai, Periyar Nagar, Chennai 600 082.
            <br></br>
            (opp. to appollo pharmacy)
          </p>
          <button
            className="bg-[#2a2a2a] text-white font-semibold px-5 py-2 rounded-md shadow-sm hover:bg-gray-700 transition"
            onClick={() => navigate("/contact")}
          >
            Contact us
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 pb-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
        <div>
          <span className="text-white">linearaudit@gmail.com</span> |
          +91-7200319660
        </div>
        <div>LinearAudit © 2025. All Rights Reserved.</div>
        <div className="flex space-x-4 text-white text-lg">
          <a>
            <FaFacebookF />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaLinkedinIn />
          </a>
          <a>
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
