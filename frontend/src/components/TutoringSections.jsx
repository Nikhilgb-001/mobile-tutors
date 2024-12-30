import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const TutoringSections = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Our Full Courses: Learn From The Best
      </h2>

      {/* Subjects Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { name: "Maths", color: "bg-blue-500" },
          { name: "Biology", color: "bg-green-500" },
          { name: "Chemistry", color: "bg-yellow-500" },
          { name: "Physics", color: "bg-purple-500" },
          { name: "English", color: "bg-red-500" },
          { name: "11 Plus", color: "bg-pink-500" },
        ].map((subject, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full text-white font-medium ${subject.color}`}
          >
            {subject.name}
          </span>
        ))}
      </div>

      {/* Tutor Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 md:p-12">
        {/* Details Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Mobile Tutors</h3>
          <div className="flex items-center space-x-4 text-gray-500 mb-4">
            <FaInstagram className="cursor-pointer hover:text-gray-700" />
            <FaTiktok className="cursor-pointer hover:text-gray-700" />
            <FaYoutube className="cursor-pointer hover:text-gray-700" />
            <FaFacebookF className="cursor-pointer hover:text-gray-700" />
          </div>

          <p className="text-gray-700 mb-4">
            Head of Maths at Mobile Tutors. 1st Class Honours degree from UCL. 9+
            years teaching experience as an examiner & Head of A-Level Maths at
            multiple prestigious schools.
          </p>
          <p className="text-gray-700 mb-4">
            37% of his GCSE students got grades 9-7, compared to the national
            average of 17%.
          </p>

          {/* Levels */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Year 5/6",
              "Year 7/8",
              "GCSE: Year 9/10",
              "GCSE: Year 11",
              "Year 12",
              "Year 13",
            ].map((level, index) => (
              <button
                key={index}
                className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium"
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutoringSections;
