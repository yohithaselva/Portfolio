import theme from "../assets/assets/theme_pattern.svg";
import mail from "../assets/assets/mail_icon.svg";
import location from "../assets/assets/location_icon.svg";
import call from "../assets/assets/call_icon.svg";
import {useState} from "react"

const Contacts = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9d6c9354-33a6-4ebb-97d5-770c9a09012e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className="flex flex-col items-center justify-center gap-20 px-4 pb-10 lg:px-20 xl:px-40">
      {/* Header Section */}
      <div className="relative text-center">
        <h1 className="text-3xl md:text-5xl lg:text-[80px] font-semibold relative z-10">
          Get in touch
        </h1>
        <img
          src={theme}
          alt="Theme Pattern"
          className="absolute bottom-0 right-0 hidden lg:block z-0"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 items-center lg:ml-48">
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-[80px] font-bold bg-inherit text-transparent bg-clip-text bg-lets">
            Let&apos;s talk
          </h1>
          <p className="max-w-md lg:max-w-[550px] text-gray-400 text-lg md:text-xl leading-relaxed">
            Feel free to reach out to me at any time. I&apos;m always open to
            discussing your ideas and projects.
          </p>
          <div className="flex flex-col gap-4 text-gray-400 text-lg md:text-xl">
            <div className="flex items-center gap-4">
              <img src={mail} alt="Mail Icon" className="w-6 h-6" />
              <p>rampandiyar2@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={call} alt="Call Icon" className="w-6 h-6" />
              <p>+91 6380046371</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={location} alt="Location Icon" className="w-6 h-6" />
              <p>27-Kaveri Street, Anbu Nagar, Tirupalai, Madurai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full lg:w-auto">
          <label htmlFor="name" className="text-gray-400 text-lg font-medium">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border-none w-full lg:w-[700px] h-[60px] pl-4 rounded-md bg-gray-800 text-gray-300"
          />
          <label htmlFor="email" className="text-gray-400 text-lg font-medium">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border-none w-full lg:w-[700px] h-[60px] pl-4 rounded-md bg-gray-800 text-gray-300"
          />
          <label htmlFor="message" className="text-gray-400 text-lg font-medium">
            Write your message here
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="border-none w-full lg:w-[700px] p-4 rounded-md bg-gray-800 text-gray-300"
          />
          <button
            type="submit"
            className="bg-btn w-[200px] text-white rounded-full text-lg font-semibold py-3 px-8 mt-4 transition-transform duration-300 hover:scale-105"
          >
            Submit Now
          </button> 
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contacts;
