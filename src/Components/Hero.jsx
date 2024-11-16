import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import profile from "../assets/images/Profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import TypingEffect from "react-typing-effect";

const Hero = () => {
  // Initialize AOS with custom settings
  useEffect(() => {
    Aos.init({
      duration: 1500,  // Animation duration
      easing: "ease-out", // Easing type
      once: false,  // Set to false to trigger animation every time on scroll
      mirror: true,  // Ensure elements reanimate when scrolling back into view
    });
  }, []);

  return (
    <div id="home" className="flex items-center lg:pt-36 pt-24 flex-col gap-6 px-4 lg:gap-10 lg:px-0">
      {/* Profile Image */}
      <img
        src={profile}
        alt="Ram Pandiyar Profile"
        className="rounded-full w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-80"
        data-aos="slide-up" // Slide up animation on scroll
      />

      {/* Title */}
      <h1
        className="font-semibold text-3xl md:text-5xl lg:text-[80px] text-center w-full md:w-[80%] lg:w-[70%]"
        data-aos="fade-in" // Fade in animation for title
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#DF8908] from-[#B415FF]">
          <TypingEffect
            text="I'm Ram Pandiyar"
            speed={100}
            eraseDelay={1000}
            typingDelay={500}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          />
        </span>
        , frontend developer based in India
      </h1>

      {/* Description */}
      <p
        className="w-full text-center text-base md:text-lg lg:text-[24px] leading-[1.5] md:leading-[1.8] lg:leading-[1.8] md:w-[80%] lg:w-[65%]"
        data-aos="slide-up" // Slide up animation for description
      >
        I am a frontend developer from Tamil Nadu, India with 2 years of experience in multiple companies like Microsoft, Tesla, and Apple.
      </p>

      {/* Buttons */}
      <div
        className="flex items-center gap-4 md:gap-8 text-sm md:text-lg lg:text-[24px] font-medium mb-10"
        data-aos="slide-up" // Slide up animation for buttons
      >
        <AnchorLink offset={50} href="#contact">
          <div className="p-3 md:p-4 lg:p-[20px_40px] hover:duration-300 duration-300 rounded-full bg-gradient-to-r to-[#DF8908] from-[#B415FF] cursor-pointer hover:scale-110">
            Connect with Me
          </div>
        </AnchorLink>
        <div className="p-3 md:p-4 lg:p-[20px_40px] hover:scale-110 rounded-full border-2 border-white cursor-pointer hover:transition hover:duration-300 duration-300 hover:border-violet-800 hover:text-yellow-500">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
