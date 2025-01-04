// ContactComponent.jsx
import React from "react";

const ContactComponent = () => {
  return (
    <div className="bg-yellow-400 p-8 md:p-12 lg:p-16 rounded-xl text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Contact us to get tailored advice
        </h2>
        <p className="text-lg text-black mb-6 w-4/5 ">
          Get personalised help and all the information you need. Learn how
          Mobile Tutors can help your child!
        </p>
        <form className="space-y-4 w-4/5">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center border border-gray-300 rounded-md">
            <input
              type="tel"
              placeholder="07400 123456"
              className="w-full p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-4 px-6 rounded-md w-full hover:bg-gray-800 transition-all"
          >
            Learn More →
          </button>
        </form>
        <p className="text-sm text-gray-700 mt-4 w-4/5">
          By clicking, you agree to receive emails and messages from Mobile Tutors.
          You can unsubscribe anytime. See our{" "}
          <a href="#" className="text-blue-500 underline">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 underline">
            terms
          </a>{" "}
          for more info.
        </p>
      </div>

      {/* Right Content */}
      <div className="flex-none w-48 h-48 md:w-72 md:h-72">
        <img
          src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhbGwlMjBjZW50ZXJ8ZW58MHx8MHx8fDA%3D"
          alt="Team Lead"
          className="rounded-full mb-4 md:mb-6 w-full h-full object-center"
        />
        <div className="text-center md:text-left">
          <p className="text-black text-lg font-semibold text-center">Team Mobile Tutors</p>
          <p className="text-gray-700 text-sm text-center">
            Contact Us now to get started...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
