import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import social media icons
import logo from "../assets/images/logo.png";
import underline from "../assets/assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSpring, animated } from "react-spring"; // Import for animations

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Animation for the mobile menu
  const mobileMenuAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(-20px)",
    config: { tension: 200, friction: 20 },
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Highlight active menu when scrolling to a section
  useEffect(() => {
    const sections = ["home", "about", "services", "work", "contact"];
    const handleScroll = () => {
      let currentMenu = "home"; // default to home
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentMenu = section;
        }
      });
      setMenu(currentMenu);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative top-0 left-0 w-full z-50 shadow-lg">
        <div className="flex items-center justify-between px-7 py-4 sm:px-16 lg:px-40">
          {/* Logo with Hover Effect */}
          <img
            src={logo}
            alt="Logo"
            className="h-14 sm:h-20 lg:h-28 transform -rotate-6 transition-transform duration-300 hover:rotate-0"
          />

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.364 5.636a1 1 0 10-1.414-1.414L12 9.172 7.05 4.222a1 1 0 10-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 101.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-12 text-lg">
            {["home", "about", "services", "work", "contact"].map((section) => (
              <li key={section} className="flex flex-col gap-1 cursor-pointer hover:scale-105 transition-transform duration-300">
                <AnchorLink
                  href={`#${section}`}
                  offset="80" // Add offset for the scroll position
                  onClick={() => setMenu(section)}
                >
                  <p>{section.charAt(0).toUpperCase() + section.slice(1)}</p>
                </AnchorLink>
                {menu === section && <img src={underline} alt="" className="m-auto" />}
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-6 items-center lg:">
            <a href="https://www.linkedin.com/in/ram-pandiyar-109212299/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 opacity-70 hover:text-blue-600 hover:opacity-100 transition-all duration-300 text-2xl" />
            </a>
            <a href="https://github.com/Rampandiyar" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 opacity-70 hover:text-white hover:opacity-100 transition-all duration-300 text-2xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 opacity-70 hover:text-pink-600 hover:opacity-100 transition-all duration-300 text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <animated.ul
          style={mobileMenuAnimation}
          className="md:hidden flex flex-col mt-20 items-center gap-4 text-lg transition-all duration-500 w-full py-4"
        >
          {["home", "about", "services", "work", "contact"].map((section) => (
            <li key={section} className="flex flex-col gap-1 cursor-pointer hover:scale-105 transition-transform duration-300">
              <AnchorLink
                href={`#${section}`}
                offset="80" // Add offset for smooth scrolling
                onClick={() => {
                  setMenu(section);
                  setIsOpen(false);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </AnchorLink>
              {menu === section && <img src={underline} alt="" className="m-auto" />}
            </li>
          ))}
        </animated.ul>
      )}
    </>
  );
};

export default Navbar;
