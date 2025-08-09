import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Lineraudit.svg";

const Footer = ({
  logoHref = "/",
  contactHref = "#contact",
  onContactClick = null,
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white pt-10">
      {/* Top: Logo and Nav */}
      <div className="max-w-7xl mx-auto px-4 flex  mb-5 flex-col md:flex-row justify-between items-center pb-0 ">
        {/* Logo */}
        <a
          href={logoHref}
          className="flex items-center ml-0 hover:opacity-80 transition-opacity sm:ml-18"
          style={{ height: "48px" }}
        >
          <Logo className="h-8 sm:h-14 w-auto" />
        </a>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-13 text-sm sm:text-base">
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

      <div className="border-b border-gray-800"></div>

      {/* Address box */}
      <div className="w-[22rem] sm:w-[40rem] md:w-[50rem] xl:w-[80rem]  mx-auto px-6 py-6">
        <div className="bg-[#1e1e1e] rounded-lg px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-gray-300">
            No 36-B, Karthikeyan Salai, Periyar Nagar, Chennai 600 082.
            <br></br>
            (opp. to appollo pharmacy)
          </p>
          <button
            className="bg-[#2a2a2a] text-white font-semibold px-5 py-2 rounded-md shadow-sm w-[16rem] sm:w-[10rem] md:w-[12rem] 
 hover:bg-gray-700 transition"
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
          <a href="https://www.instagram.com/linearinsights/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/28765624/admin/page-posts/published/">
            <FaLinkedinIn />
          </a>
          <a href="https://x.com/Linearinsights">
            <img src="/icon.png" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
