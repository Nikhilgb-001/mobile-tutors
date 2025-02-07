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
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 md:p-16 rounded-2xl shadow-xl text-center md:text-left flex flex-col items-center md:items-start w-full max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Let's Connect & Make Learning Fun!
      </h2>
      <p className="text-lg md:text-xl text-white mb-8 w-full md:w-4/5">
        Get expert guidance and tailored learning strategies. Discover how
        Mobile Tutors can elevate your child's education.
      </p>

      {/* HubSpot Form Embed */}
      <div
        id="hubspotForm"
        className="w-full md:w-4/5 bg-white p-6 rounded-lg shadow-md"
      ></div>

      <p className="text-sm text-gray-100 mt-6 w-full md:w-4/5">
        By clicking, you agree to receive emails and messages from Mobile
        Tutors. You can unsubscribe anytime. See our{" "}
        <a href="#" className="text-white font-semibold underline">
          privacy policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-white font-semibold underline">
          terms
        </a>{" "}
        for more info.
      </p>
    </div>
  );
};

export default ContactComponent;
