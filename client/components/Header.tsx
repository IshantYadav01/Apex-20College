import { Link } from "react-router-dom";

export default function Header() {
  const navLinks = [
    { label: "Programs", path: "/" },
    { label: "Student life", path: "/" },
    { label: "News & Events", path: "/" },
    { label: "About Us", path: "/" },
    { label: "Contact", path: "/" },
  ];

  return (
    <header className="bg-apex-gray h-[57px] flex items-center justify-between px-6 sm:px-8 lg:px-12 fixed top-0 left-0 right-0 z-50 w-full shadow-md">
      <nav className="flex items-center gap-4 sm:gap-8 lg:gap-12 text-white flex-1 overflow-x-auto sm:overflow-visible">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-base sm:text-lg lg:text-xl font-normal whitespace-nowrap transition-all duration-300 text-white hover:text-apex-orange hover:opacity-100 opacity-90"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <button className="bg-apex-maroon text-white px-6 sm:px-10 py-3 rounded text-base font-medium hover:bg-red-700 active:bg-red-800 transition-all duration-200 whitespace-nowrap ml-4 flex-shrink-0 shadow-md hover:shadow-lg transform hover:scale-105">
        Apply Now
      </button>
    </header>
  );
}
