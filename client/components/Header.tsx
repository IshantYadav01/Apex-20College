import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("/");

  const navLinks = [
    { label: "Programs", path: "/" },
    { label: "Student life", path: "/" },
    { label: "News & Events", path: "/" },
    { label: "About Us", path: "/" },
    { label: "Contact", path: "/" },
  ];

  return (
    <header className="bg-apex-gray h-[57px] flex items-center justify-between px-6 sm:px-8 lg:px-12 fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="flex items-center gap-4 sm:gap-8 lg:gap-16 text-white flex-1 overflow-x-auto sm:overflow-visible">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setActiveLink(link.path)}
            className={`text-[20px] font-medium whitespace-nowrap transition-all duration-300 hover:text-apex-orange ${
              activeLink === link.path
                ? "text-apex-orange border-b-2 border-apex-orange"
                : "hover:opacity-80"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <button className="bg-apex-maroon text-white px-6 sm:px-10 py-3 rounded text-base font-medium hover:bg-red-700 active:bg-red-800 transition-all duration-200 whitespace-nowrap ml-4 flex-shrink-0 shadow-md hover:shadow-lg">
        Apply Now
      </button>
    </header>
  );
}
