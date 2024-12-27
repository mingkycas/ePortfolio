import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-[#0D1117] text-[#E3B341]">
      {/* Navbar Title with Typing Animation (Flickering Cursor) */}
      <div className="text-xl font-bold animate-cjTyping">
        CaseyJan(); <span className="animate-caret">|</span>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#AAAAAA] hover:text-[#E3B341] transition-colors duration-300"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navbar Links (Desktop) */}
      <ul className="hidden md:flex gap-8 text-base">
        {["HOME", "ABOUT", "PROJECTS", "CONTACT ME"].map((item) => (
          <li key={item} className="relative group">
            <Link
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className="text-[#AAAAAA] font-bold hover:text-[#E3B341] transition-colors duration-300"
            >
              {item}
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#E3B341] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-[#0D1117] py-4 px-8 md:hidden`}
      >
        <ul className="flex flex-col items-center gap-6 text-base">
          {["HOME", "ABOUT", "PROJECTS", "CONTACT ME"].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={`/${item.toLowerCase().replace(" ", "")}`}
                className="text-[#AAAAAA] font-bold hover:text-[#E3B341] transition-colors duration-300"
                onClick={toggleMenu} // Close the menu after clicking a link
              >
                {item}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#E3B341] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-4">
        <a
          href="https://github.com/mingkycas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#AAAAAA] hover:text-[#E3B341] transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://instagram.com/cee.__.ji"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#AAAAAA] hover:text-[#E3B341] transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
