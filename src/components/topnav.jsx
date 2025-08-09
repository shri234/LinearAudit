import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Lineraudit.svg";

const TopNav = ({
  logoHref = "/",
  contactHref = "#contact",
  onContactClick = null,
  className = "",
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#1266D4] ${className}`}
      style={{ boxShadow: "0 1px 8px 0 rgba(0,0,0,0.04)" }}
    >
      <header className="flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-10 py-4 max-w-full">
        <a
          href={logoHref}
          className="flex items-center ml-8 hover:opacity-80 transition-opacity"
          style={{ height: "48px" }}
        >
          <Logo className="h-8 sm:h-14 w-auto" />
        </a>

        <a
          href={contactHref}
          onClick={() => navigate("/contact")}
          className="border border-white mr-10 text-white rounded-md px-2 py-1 sm:px-5 sm:py-2 transition hover:bg-white/20 text-xs sm:text-sm whitespace-nowrap"
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "8px",
            borderWidth: "1px",
            minWidth: "70px",
            textAlign: "center",
          }}
        >
          <span className="hidden sm:inline">Contact us</span>
          <span className="sm:hidden">Contact us</span>
        </a>
      </header>
    </div>
  );
};

export default TopNav;
