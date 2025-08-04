import React from "react";
import { useNavigate } from "react-router-dom";

const TopNav = ({
  logoHref = "/",
  contactHref = "#contact",
  onContactClick = null,
  className = "",
}) => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    if (onContactClick) {
      e.preventDefault();
      onContactClick();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#1266D4] ${className}`}
      style={{ boxShadow: "0 1px 8px 0 rgba(0,0,0,0.04)" }}
    >
      <header className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <a
          href={logoHref}
          className="flex items-center hover:opacity-80 transition-opacity"
          style={{ height: "48px" }} // match header height
        >
          <img
            src="/logo2.svg"
            alt="Linearaudit"
            className="h-12 sm:h-14 w-auto object-contain"
            style={{ maxHeight: "60px" }}
          />
        </a>

        <a
          href={contactHref}
          onClick={() => navigate("/contact")}
          className="border border-white text-white rounded-md px-3 py-2 sm:px-5 sm:py-2 transition hover:bg-white/20 text-xs sm:text-sm whitespace-nowrap"
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "8px",
            borderWidth: "1px",
            minWidth: "90px",
            textAlign: "center",
          }}
        >
          <span className="hidden sm:inline">Contact us</span>
          <span className="sm:hidden">Contact</span>
        </a>
      </header>
    </div>
  );
};

export default TopNav;
