import { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between p-4 lg:px-[170px] lg:py-[20px]">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-20 lg:h-28 transform -rotate-6" />

      {/* Hamburger Menu for Small Screens */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      {/* Navigation Links (Desktop) */}
      <ul className="hidden md:flex items-center gap-4 lg:gap-[60px] text-[16px] lg:text-[19px]">
        <li className="cursor-pointer hover:text-indigo-500">Home</li>
        <li className="cursor-pointer hover:text-indigo-500">About Me</li>
        <li className="cursor-pointer hover:text-indigo-500">Services</li>
        <li className="cursor-pointer hover:text-indigo-500">Portfolio</li>
        <li className="cursor-pointer hover:text-indigo-500">Contact</li>
      </ul>

      {/* Connect Button */}
      <div className="hidden md:block transition duration-300 cursor-pointer p-4 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 text-[16px] lg:text-[20px] hover:scale-110">
        Connect With Me
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col items-center w-full mt-4 md:hidden py-4 rounded-lg shadow-lg text-[16px]">
          <li className="cursor-pointer hover:text-indigo-500 py-2">Home</li>
          <li className="cursor-pointer hover:text-indigo-500 py-2">About Me</li>
          <li className="cursor-pointer hover:text-indigo-500 py-2">Services</li>
          <li className="cursor-pointer hover:text-indigo-500 py-2">Portfolio</li>
          <li className="cursor-pointer hover:text-indigo-500 py-2">Contact</li>
          <div className="transition duration-300 cursor-pointer p-4 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 text-[16px] hover:scale-110 mt-4">
            Connect With Me
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
