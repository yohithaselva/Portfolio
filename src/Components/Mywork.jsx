import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import theme from "../assets/assets/theme_pattern.svg";
import work from "../assets/assets/mywork_data";
import arrow from "../assets/assets/arrow_icon.svg";

const Mywork = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false }); // Initialize AOS with settings
  }, []);

  return (
    <div id='work' className="flex flex-col items-center justify-center gap-20 px-4 lg:px-20 xl:px-40">
      {/* Header Section */}
      <div className="relative text-center" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl lg:text-[80px] font-semibold relative z-10">
          My Latest Work
        </h1>
        <img
          src={theme}
          alt="Theme Pattern"
          className="absolute -bottom-3 right-0 hidden lg:block z-0"
        />
      </div>

      {/* Work Grid Section */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10  ">
        {work.map((item, index) => (
          
          <img
  key={index}
  src={item.w_img}
  alt={`Work ${index + 1}`}
  className="w-full h-auto hover:rounded-2xl hover:border-[#ff00ff] hover:border-4 max-w-[400px] md:max-w-none duration-300 cursor-pointer hover:scale-150 rounded-md shadow-md"
  data-aos="zoom-in" 
  data-aos-delay={index * 150}
/>
     
        ))}
      </div>

      {/* Show More Button */}
      <div
        className="flex items-center gap-4 rounded-full border-2 border-gray-300 p-4 px-8 text-lg lg:text-2xl font-semibold mb-20 transition-all hover:gap-6 hover:border-[#ff00ff]  duration-[0.5s] hover:duration-[0.5s] cursor-pointer"
        data-aos="fade-up"
      >
        <p>Show More</p>
        <img src={arrow} alt="Arrow Icon" className="mt-1" />
      </div>
    </div>
  );
};

export default Mywork;
