import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-apex-gray h-[57px] flex items-center justify-between px-12 fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center gap-16 text-white">
        <Link to="/" className="text-xl font-medium hover:text-apex-orange transition-colors">
          Programs
        </Link>
        <Link to="/" className="text-xl font-medium hover:text-apex-orange transition-colors">
          Student life
        </Link>
        <Link to="/" className="text-xl font-medium hover:text-apex-orange transition-colors">
          News & Events
        </Link>
        <Link to="/" className="text-xl font-medium hover:text-apex-orange transition-colors">
          About Us
        </Link>
        <Link to="/" className="text-xl font-medium hover:text-apex-orange transition-colors">
          Contact
        </Link>
      </nav>
      <button className="bg-apex-maroon text-white px-10 py-3 rounded text-base font-medium hover:bg-opacity-90 transition-opacity">
        Apply Now
      </button>
    </header>
  );
}
