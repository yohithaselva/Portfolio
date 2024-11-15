import logo from "../assets/images/logo.png";
import { useState } from "react";
import underline from "../assets/assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between my-5 mx-8 mt-0 sm:mx-20 lg:mx-40">
        <img src={logo} alt="" className="h-14 sm:h-20 lg:h-28 transform -rotate-6" />
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300"
          >
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
        <ul className={`hidden md:flex items-center gap-12 text-xl`}>
          <li className="flex flex-col gap-1 cursor-pointer">
            <AnchorLink href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={underline} alt="" className="flex m-auto" /> : null}
          </li>
          <li className="flex flex-col gap-1 cursor-pointer">
            <AnchorLink offset={50} href="#about">
              <p onClick={() => setMenu("about")}>About Me</p>
            </AnchorLink>
            {menu === "about" ? <img src={underline} alt="" className="flex m-auto" /> : null}
          </li>
          <li className="flex flex-col gap-1 cursor-pointer">
            <AnchorLink offset={50} href="#services">
              <p onClick={() => setMenu("services")}>Services</p>
            </AnchorLink>
            {menu === "services" ? <img src={underline} alt="" className="flex m-auto" /> : null}
          </li>
          <li className="flex flex-col gap-1 cursor-pointer">
            <AnchorLink offset={50} href="#work">
              <p onClick={() => setMenu("work")}>Portfolio</p>
            </AnchorLink>
            {menu === "work" ? <img src={underline} alt="" className="flex m-auto" /> : null}
          </li>
          <li className="flex flex-col gap-1 cursor-pointer">
            <AnchorLink offset={50} href="#contact">
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" ? <img src={underline} alt="" className="flex m-auto" /> : null}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden flex flex-col items-center gap-4 text-lg mt-4 transition-all duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        {isOpen && (
          <>
            <li className="flex flex-col gap-1 cursor-pointer">
              <AnchorLink href="#home" onClick={() => { setMenu("home"); setIsOpen(false); }}>
                Home
              </AnchorLink>
              {menu === "home" ? <img src={underline} alt="" className="flex m-auto" /> : null}
            </li>
            <li className="flex flex-col gap-1 cursor-pointer">
              <AnchorLink offset={50} href="#about" onClick={() => { setMenu("about"); setIsOpen(false); }}>
                About Me
              </AnchorLink>
              {menu === "about" ? <img src={underline} alt="" className="flex m-auto" /> : null}
            </li>
            <li className="flex flex-col gap-1 cursor-pointer">
              <AnchorLink offset={50} href="#services" onClick={() => { setMenu("services"); setIsOpen(false); }}>
                Services
              </AnchorLink>
              {menu === "services" ? <img src={underline} alt="" className="flex m-auto" /> : null}
            </li>
            <li className="flex flex-col gap-1 cursor-pointer">
              <AnchorLink offset={50} href="#work" onClick={() => { setMenu("work"); setIsOpen(false); }}>
                Portfolio
              </AnchorLink>
              {menu === "work" ? <img src={underline} alt="" className="flex m-auto" /> : null}
            </li>
            <li className="flex flex-col gap-1 cursor-pointer">
              <AnchorLink offset={50} href="#contact" onClick={() => { setMenu("contact"); setIsOpen(false); }}>
                Contact
              </AnchorLink>
              {menu === "contact" ? <img src={underline} alt="" className="flex m-auto" /> : null}
            </li>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
