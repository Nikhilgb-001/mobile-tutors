import React from "react";
import { SiTrustpilot } from "react-icons/si";
const HeroSection = () => {
  return (
    <div className="flex flex-col rounded-3xl mt-16 lg:flex-row items-center justify-between shadow-lg lg:px-20 p-12 bg-[#FFFFFF">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Help Your Child Get a{" "}
          <span className="text-purple-500">Grade 9/A*</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Live lessons from world-class teachers
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">
          Learn More &rarr;
        </button>
        <div className="mt-4 flex items-center">
          <a
            href="https://uk.trustpilot.com/review/mobiletutors.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount"
            className="flex items-center mr-2"
          >
            <span className="mr-2 text-sm sm:text-base font-semibold">
              See our 115 reviews on
            </span>
            <SiTrustpilot size={20} color="#04DA8D" />
          </a>
          <span className="text-xl sm:text-2xl">4.7</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHR1dG9yc3xlbnwwfHwwfHx8MA%3D%3D" // Replace with your hosted image URL
          alt="Mockup"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
