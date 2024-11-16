import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Service";
import Mywork from "./Components/Mywork";
import Contacts from "./Components/Contacts";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="m-0 p-0 h-fit font-outfit">
        <button
          onClick={toggleDarkMode}
          className="absolute top-10 right-5 p-2 z-[100] rounded-full mr-[140px] -mt-5 lg:mt-[5px] lg:mr-[80px] text-white"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Mywork />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
