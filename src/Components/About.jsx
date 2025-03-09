import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../assets/images/Profile2.jpg";

const About = () => {
  useEffect(() => {
    // Initialize AOS with 'once: false' so animations trigger on every scroll
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <div
      id="about"
      className="py-6 flex flex-col items-center gap-16 px-4 lg:px-20 xl:px-40"
    >
      {/* Title */}
      <div className="relative text-center lg:text-left" data-aos="fade-left">
        <h1 className="text-3xl md:text-5xl lg:text-[80px] font-semibold gradient-underline relative z-10">
          About Me
        </h1>
      </div>
      <div className="flex justify-center lg:justify-start" data-aos="fade-up">
        <img
          src={profile}
          alt="Profile"
          className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover mb-6 lg:mb-0"
        />
      </div>
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
        {/* Profile Image */}

        {/* About Text and Skills */}
        <div
          className="flex flex-col gap-12 lg:gap-16 text-center lg:text-left"
          data-aos="fade-left"
        >
          {/* About Text */}
          <div className="flex flex-col gap-6 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
            <p>
              I am passionate about web development, with hobbies centered
              around creativity and design. I am currently working towards
              becoming a MEAN stack developer, and I am deeply committed to
              honing my skills in both front-end and back-end technologies.
            </p>
            <p>
              My expertise spans across the MERN and MEAN stacks, enabling me to
              build robust, scalable applications with seamless user
              experiences. As a highly motivated, positive, and hardworking
              individual, I am dedicated to continuously enhancing my knowledge
              and skills. I seek a responsible role where I can leverage my
              expertise, make a meaningful contribution to the organization's
              growth, and play a key role in its success.
            </p>
          </div>
          <div className="flex justify-center items-center text">
            <h1
              className="text-3xl md:text-5xl lg:text-[80px] font-semibold relative z-10  gradient-underline transition duration-300"
              data-aos="fade-up"
            >
              Technologies
            </h1>
          </div>
          {/* Skills */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            {[
              {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              },
              {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              },
              {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
              },
              {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
              },
              {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              },
              {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              },
              {
                logo: "https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/tailwindcss.svg",
              }, // Added Tailwind CSS logo
              {
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              }, // Added CSS logo
            ].map(({ logo }, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center lg:justify-center gap-20 hover:scale-105 transition duration-300"
                data-aos="fade-up"
              >
                <img
                  src={logo}
                  alt={`Logo ${idx}`}
                  className="w-12 h-12 md:w-16 lg:ml-7 cursor-pointer hover:scale-[1.2] duration-[0.5s]  lg:w-20 md:h-16 lg:h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div
        className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-0 w-full"
        data-aos="fade-up"
      >
        {[
          { value: "2", label: "YEARS OF EXPERIENCE ON WORKING IN PROJECTS" },
          { value: "5", label: "PROJECTS COMPLETED" },
        ].map(({ value, label }, idx) => (
          <div
            key={idx}
            className="text-center hover:scale-110 transition duration-300"
          >
            <h1 className="text-5xl md:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#B415FF] to-[#DF8908]">
              {value}
            </h1>
            <p className="text-sm md:text-lg font-medium">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
