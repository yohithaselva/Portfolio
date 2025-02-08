import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import profile from "../assets/images/Profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import TypingEffect from "react-typing-effect";
import './hero.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true, // Animate only once
    });
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1DEQRam1vrUmJFLGz54egbr2hbeuZaYq3/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ram_Pandiyar_Resume.pdf";
    link.click();
  };

  return (
    <div id="home" className="flex items-center lg:pt-14 pt-14 flex-col gap-6 px-4 lg:gap-10 lg:px-0">
      {/* Profile Image */}
      <img
        src={profile}
        alt="Ram Pandiyar Profile"
        className="rounded-full w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-80"
        data-aos="slide-up"
      />

      {/* Typing Effect Title */}
      <h1
        className="font-semibold text-3xl md:text-5xl lg:text-[80px] text-center w-full md:w-[80%] lg:w-[70%] min-h-[80px] md:min-h-[100px] lg:min-h-[140px]"
        data-aos="fade-in"
      >
        <span
          className="gradient-text"
          style={{
            backgroundImage: "linear-gradient(to right, #DF8908, #B415FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            color: "#B415FF", // Fallback color
          }}
        >
          <TypingEffect
            text="I'm Ram Pandiyar"
            speed={100}
            eraseDelay={1000}
            typingDelay={500}
            cursorRenderer={(cursor) => <span>{cursor}</span>}
          />
        </span>
        , frontend developer based in India
      </h1>

      {/* Description */}
      <p
        className="w-full text-center text-base md:text-lg lg:text-[24px] leading-[1.5] md:leading-[1.8] lg:leading-[1.8] md:w-[80%] lg:w-[65%]"
        data-aos="slide-up"
      >
        I am a Front-End Developer with expertise in ReactJS, AngularJS, and Tailwind CSS. I focus on building responsive, user-friendly web applications. Motivated and eager to contribute to organizational growth while expanding my skills.
      </p>

      {/* Buttons */}
      <div
        className="flex items-center gap-4 md:gap-8 text-sm md:text-lg lg:text-[24px] font-medium mb-10"
        data-aos="slide-up"
      >
        {/* Connect with Me Button */}
        <AnchorLink offset={50} href="#contact">
          <div className="p-3 md:p-4 lg:p-[20px_40px] hover:duration-300 duration-300 rounded-full bg-gradient-to-r to-[#DF8908] from-[#B415FF] cursor-pointer hover:scale-110">
            Connect with Me
          </div>
        </AnchorLink>

        {/* My Resume Button */}
        <div
          onClick={handleDownloadResume}
          className="p-3 md:p-4 lg:p-[20px_40px] hover:scale-110 rounded-full border-2 border-white cursor-pointer hover:transition hover:duration-300 duration-300 hover:border-violet-800 hover:text-yellow-500"
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;