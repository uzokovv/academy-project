import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import logo  from '../assets/milliardev.jpg'
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 lg:px-16 py-4 text-[20px] ${darkMode ? "text-white" : "text-black"} shadow-md`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Milliardev companya" className="h-10 rounded-[50%]" />
          <h1>Milliardev</h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-[18px] font-medium">
          <li className="hover:text-blue-500 cursor-pointer"><Link to={"/"}>Bosh sahifa </Link></li>
          <li className="hover:text-blue-500 cursor-pointer"><Link to={'/about'}>Biz haqimizda</Link></li>
          <li className="hover:text-blue-500 cursor-pointer"><Link to={'/partfoli'}>Portfolio</Link></li>
          <li className="hover:text-blue-500 cursor-pointer">Kurslar</li>
          <li className="hover:text-blue-500 cursor-pointer">Tadbirlar</li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:block text-sm font-medium">📞 78 113-60-02</span>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button><BsTelegram /></button>
          <button><FaInstagram /></button>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-md  cursor-pointer">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className={`md:hidden bg-gray-100 dark:bg-gray-900 p-4 space-y-2`}>
          <li className="hover:text-blue-500 cursor-pointer">Bosh sahifa</li>
          <li className="hover:text-blue-500 cursor-pointer">Biz haqimizda</li>
          <li className="hover:text-blue-500 cursor-pointer">Portfolio</li>
          <li className="hover:text-blue-500 cursor-pointer">Kurslar</li>
          <li className="hover:text-blue-500 cursor-pointer">Tadbirlar</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
