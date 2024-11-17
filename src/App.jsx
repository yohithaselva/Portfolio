import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mywork from "./Components/Mywork";
import Contacts from "./Components/Contacts";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [rotateIcon, setRotateIcon] = useState(false);

  const toggleDarkMode = () => {
    setRotateIcon(true); // Add rotation class
    setDarkMode(!darkMode);

    // Remove rotation class after animation ends
    setTimeout(() => setRotateIcon(false), 500);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="m-0 p-0 h-fit font-outfit">
        <button
          onClick={toggleDarkMode}
          className={`absolute top-10 right-5 p-2 z-[100] rounded-full mr-[140px] md:-mr-[10px] md:-mt-[10.5px] -mt-5 lg:mt-[5px] lg:mr-[80px] text-white ${
            rotateIcon ? "rotate" : ""
          }`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <Navbar />
        <Hero />
        <About />
        <Mywork />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
