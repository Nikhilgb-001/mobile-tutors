import React, { useEffect } from "react";

const ContactComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "145738604",
          formId: "da9dab7d-5a67-4db1-9538-9c30dd97741c",
          target: "#hubspotForm",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-yellow-400 p-8 md:p-12 lg:p-16 rounded-xl text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Contact us to get tailored advice
        </h2>
        <p className="text-lg text-black mb-6 w-4/5">
          Get personalised help and all the information you need. Learn how
          Mobile Tutors can help your child!
        </p>

        {/* HubSpot Form Embed */}
        <div id="hubspotForm" className="w-4/5"></div>

        <p className="text-sm text-gray-700 mt-4 w-4/5">
          By clicking, you agree to receive emails and messages from Mobile
          Tutors. You can unsubscribe anytime. See our{" "}
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
          <p className="text-black text-lg font-semibold text-center">
            Team Mobile Tutors
          </p>
          <p className="text-gray-700 text-sm text-center">
            Contact Us now to get started...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
