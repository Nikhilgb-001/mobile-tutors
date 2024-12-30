import React, { useState } from "react";

const ContactForm = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const subjects = ["Maths", "Biology", "Chemistry", "Physics", "English", "Economics"];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // Add subject to the selected list
      setSelectedSubjects((prev) => [...prev, value]);
    } else {
      // Remove subject from the selected list
      setSelectedSubjects((prev) => prev.filter((subject) => subject !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Subjects:", selectedSubjects);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left Section */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Book a Tutor</h1>
            <p className="text-gray-600 text-sm mb-6">
              Use this form to book a tutor. Provide your details and the subjects you are interested in. All information will be treated with confidentiality.
            </p>
            <p className="text-gray-800 font-medium">Feel free to contact us:</p>
            <p className="text-gray-500 text-sm mb-2">info@mobiletutors.com</p>
            <p className="text-gray-500 text-sm">+44 789 123 4567</p>
          </div>

          {/* Right Section - Form */}
          <form className="md:w-1/2 space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Checkboxes for Subjects */}
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Subjects</p>
              {subjects.map((subject, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value={subject}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm text-gray-700">{subject}</label>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
