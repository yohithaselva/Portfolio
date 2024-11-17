import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import work from "../assets/assets/mywork_data";
import { FaLink } from "react-icons/fa";
import "../App.css"

const Mywork = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <div id="work" className="flex flex-col py-10 items-center justify-center gap-20 px-4 lg:px-20 xl:px-40">
      {/* Header Section */}
      <div className="relative text-center" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl lg:text-[80px] font-semibold relative z-10 gradient-underline">
          My Projects
        </h1>
      </div>

      {/* Work Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {work.map((item, index) => (
          <a
            key={index}
            href={item.w_link} // Link for the entire image
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full h-52 max-w-[400px] md:max-w-none cursor-pointer rounded-md shadow-md"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            {/* Work Image */}
            <img
              src={item.w_img}
              alt={`Work ${index + 1}`}
              className="w-full h-full object-full rounded-md"
            />
            {/* Overlay and Icon */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <span className="text-white text-3xl">
                <FaLink />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Mywork;
