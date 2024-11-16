import { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Font Awesome Icons
import { HiArrowRight } from "react-icons/hi"; // Example of another icon
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  const [result, setResult] = useState({ message: "", type: "" });

  useEffect(() => {
    if (result.message) {
      const timer = setTimeout(() => {
        setResult({ message: "", type: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
    AOS.init({ duration: 1500, once: false }); // Initialize AOS
  }, [result]);

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const form = event.target;

    // Validation Check
    if (!form.checkValidity()) {
      setResult({ message: "Please fill out all required fields.", type: "error" });
      return;
    }

    setResult({ message: "Sending...", type: "info" });

    // Create FormData from the form
    const formData = new FormData(form);
    formData.append("access_key", "9d6c9354-33a6-4ebb-97d5-770c9a09012e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({ message: "Form Submitted Successfully", type: "success" });
        form.reset();
      } else {
        setResult({ message: data.message || "Form submission failed.", type: "error" });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult({ message: "An error occurred while submitting the form.", type: "error" });
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-20 px-4 pb-10 lg:px-20 xl:px-40">
      {/* Header Section */}
      <div className="relative text-center" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl lg:text-[80px] font-semibold relative z-10">
          Get in touch
        </h1>
        {/* Add pattern as background */}
        <div className="absolute bottom-0 right-0 hidden lg:block z-0 bg-cover bg-theme-pattern" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 items-center lg:ml-48" data-aos="fade-up">
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-[80px] font-bold bg-inherit text-transparent bg-clip-text bg-lets">
            Let&apos;s talk
          </h1>
          <p className="max-w-md lg:max-w-[550px] text-gray-400 text-lg md:text-xl leading-relaxed">
            Feel free to reach out to me at any time. I&apos;m always open to discussing your ideas and projects.
          </p>
          <div className="flex flex-col gap-4 text-gray-400 text-lg md:text-xl">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-blue-500" />
              <p>rampandiyar2@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-green-500" />
              <p>+91 6380046371</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-5xl text-red-500" />
              <p>27-Kaveri Street, Anbu Nagar, Tirupalai, Madurai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full lg:w-auto shadow-lg p-6 rounded-xl bg-gray-800" noValidate data-aos="fade-up">
          <label htmlFor="name" className="text-gray-400 text-lg font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="border-none w-full lg:w-[700px] h-[60px] pl-4 rounded-md bg-gray-700 text-gray-300"
            required
          />
          <label htmlFor="email" className="text-gray-400 text-lg font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border-none w-full lg:w-[700px] h-[60px] pl-4 rounded-md bg-gray-700 text-gray-300"
            required
          />
          <label htmlFor="message" className="text-gray-400 text-lg font-medium">Write your message here</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Enter your message"
            className="border-none w-full lg:w-[700px] p-4 rounded-md bg-gray-700 text-gray-300"
            required
          />
          <button
            type="submit"
            className="bg-btn w-[200px] hover:duration-300  text-white rounded-full text-lg font-semibold py-3 px-8 mt-4 transition-transform duration-300 hover:scale-105 flex items-center justify-center"
          >
            Submit Now <HiArrowRight className="ml-2 text-xl" />
          </button>
        </form>
      </div>

      {/* Inline Custom Alert */}
      {result.message && (
        <div
          className={`fixed top-24 right-5 z-[50] px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-transform transform ${
            result.type === "success"
              ? "bg-green-500"
              : result.type === "error"
              ? "bg-red-500"
              : "bg-blue-500"
          }`}
        >
          {result.message}
        </div>
      )}
    </div>
  );
};

export default Contacts;
