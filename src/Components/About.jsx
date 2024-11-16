import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from "../assets/images/Profile.jpg";
import pattern from "../assets/assets/theme_pattern.svg";

const About = () => {
  useEffect(() => {
    // Initialize AOS with 'once: false' so animations trigger on every scroll
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <div id='about' className="py-6 flex flex-col items-center gap-16 px-4 lg:px-20 xl:px-40">
      {/* Title */}
      <div className="relative" data-aos="fade-left">
        <h1 className="text-3xl md:text-5xl lg:text-[80px] font-semibold relative z-10 text-center lg:text-left">
          About Me
        </h1>
        <img
          src={pattern}
          alt="Pattern"
          className="absolute -bottom-3 right-0 hidden lg:block z-0"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Profile Image */}
        <div className="flex justify-center" data-aos="fade-right">
          <img
            src={profile}
            alt="Profile"
            className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover"
          />
        </div>

        {/* About Text and Skills */}
        <div className="flex flex-col gap-12 lg:gap-16" data-aos="fade-left">
          {/* About Text */}
          <div className="flex flex-col gap-6 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
            <p>
              I am an experienced frontend developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-6">
            {[{ skill: "HTML & CSS", width: "w-1/2" }, { skill: "React Js", width: "w-3/4" }, { skill: "JavaScript", width: "w-2/3" }, { skill: "Angular Js", width: "w-1/2" }].map(({ skill, width }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 hover:scale-105 transition duration-300"
                data-aos="fade-up"
              >
                <p className="min-w-[150px] text-lg md:text-xl lg:text-2xl font-medium">
                  {skill}
                </p>
                <hr
                  className={`h-2 ${width} rounded-md bg-gradient-to-r from-[#B415FF] to-[#DF8908]`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-0 w-full" data-aos="fade-up">
        {[{ value: "10+", label: "YEARS OF EXPERIENCE" }, { value: "100+", label: "PROJECTS COMPLETED" }, { value: "15+", label: "HAPPY CLIENTS" }].map(({ value, label }, idx) => (
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
