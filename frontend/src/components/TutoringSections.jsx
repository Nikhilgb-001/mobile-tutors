import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const TutoringSections = () => {
  return (
    <div className="p-6 md:p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Our Full Courses: Learn From The Best
      </h2>

      {/* Subjects Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { name: "KS3", color: "bg-blue-500" },
          { name: "GCSE", color: "bg-purple-500" },
          { name: "A-Level", color: "bg-orange-500" },
        ].map((subject, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full text-white font-medium ${subject.color}`}
          >
            {subject.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TutoringSections;
