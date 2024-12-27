import { Link } from "react-router-dom";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-[#0D1117] text-[#E3B341]">
      {/* Navbar Title with Typing Animation (Flickering Cursor) */}
      <div className="text-xl font-bold animate-cjTyping">
        CaseyJan(); <span className="animate-caret">|</span>
      </div>

      {/* Navbar Links */}
      <ul className="flex gap-8 text-base">
        <li className="relative group">
          <Link to="/" className="text-[#AAAAAA] font-bold hover:text-[#E3B341]">HOME</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#E3B341] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link to="/about" className="text-[#AAAAAA] font-bold hover:text-[#E3B341]">ABOUT</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#E3B341] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link to="/projects" className="text-[#AAAAAA] font-bold hover:text-[#E3B341]">PROJECTS</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#E3B341] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link to="/contact" className="text-[#AAAAAA] font-bold hover:text-[#E3B341]">CONTACT ME</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#E3B341] transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

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
