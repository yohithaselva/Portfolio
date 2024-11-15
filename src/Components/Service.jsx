import theme from "../assets/assets/theme_pattern.svg";
import service from "../assets/assets/services_data.js";
import arrow from "../assets/assets/arrow_icon.svg";

const Service = () => {
  return (
    <div id='services' className="flex flex-col items-center justify-center gap-20 px-4 lg:px-20 xl:px-40">
      {/* Header Section */}
      <div className="relative text-center">
        <h1 className="text-3xl md:text-5xl lg:text-[80px] font-semibold relative z-10">
          My Service
        </h1>
        <img
          src={theme}
          alt="Theme pattern"
          className="absolute bottom-0 right-0 hidden lg:block z-0"
        />
      </div>

      {/* Service Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-20">
        {service.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-5 p-6 rounded-lg border-2 border-white transition-transform hover:scale-105 hover:border-[#ff00ff] hover:bg-custom-hover-gradient cursor-pointer"
          >
            {/* Service Number */}
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
              {service.s_no}
            </h3>

            {/* Service Name */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-service">
              {service.s_name}
            </h2>

            {/* Service Description */}
            <p className="text-sm md:text-base lg:text-lg text-[#d4d4d4] leading-6 lg:leading-8">
              {service.s_desc}
            </p>

            {/* Read More Section */}
            <div className="flex gap-4 items-center mt-5">
              <p className="text-base md:text-lg lg:text-xl">Read More</p>
              <img src={arrow} alt="Arrow Icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
