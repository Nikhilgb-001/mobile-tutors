import React, { useState } from "react";

const PricingComponent = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const subjectsList = ["Mathematics", "Physics", "Chemistry", "Biology"];
  const coursesList = ["KS3", "GCSE", "A-Level"];

  const baseProPrice = isYearly ? 72 : 80;
  const baseStandardPrice = isYearly ? 54 : 60;
  const additionalPrice =
    (selectedSubjects.length + selectedCourses.length) * 10;

  const totalProPrice = baseProPrice + additionalPrice;
  const totalStandardPrice = baseStandardPrice + additionalPrice;

  const handleCheckboxChange = (e, setSelection, selection) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelection([...selection, value]);
    } else {
      setSelection(selection.filter((item) => item !== value));
    }
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-2xl text-center font-bold mb-8">
        Choose Your Package
      </h1>

      {/* Toggle Switch */}
      <div className="flex justify-center items-center mb-6">
        <div className="flex items-center space-x-4">
          <span
            className={`text-sm ${!isYearly ? "text-white" : "text-gray-500"}`}
          >
            Pay Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-purple-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
          <span
            className={`text-sm ${isYearly ? "text-white" : "text-gray-500"}`}
          >
            Pay Yearly <span className="text-green-400 ml-1">Save 10%</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="bg-gray-800 border border-purple-700 rounded-lg p-6 w-full md:w-1/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">PRO</h2>
            <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
              Recommended
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-4">£{totalProPrice}</h3>
          <p className="text-sm mb-4">
            {isYearly && "Entire 9 month course for £648"}
          </p>
          <button className="w-32 bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md mb-6">
            Sign Up
          </button>
          <ul className="space-y-2">
            <li>✔ 1-1 Personal Mentor</li>
            <li>✔ Workbooks For Each Lesson</li>
            <li>✔ 8 Live Lessons A Month</li>
            <li>✔ Homework For Each Lesson</li>
            <li>✔ Video Solution For Each Question</li>
            <li>✔ Community Of Like-Minded Students</li>
          </ul>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Standard</h2>
          <h3 className="text-3xl font-bold mb-4">£{totalStandardPrice}</h3>
          <p className="text-sm mb-4">
            {isYearly && "Entire 9 month course for £486"}
          </p>
          <button className="w-32 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md mb-6">
            Sign Up
          </button>
          <ul className="space-y-2">
            <li className="line-through text-gray-500">
              ✖ 1-1 Personal Mentor
            </li>
            <li>✔ Workbooks For Each Lesson</li>
            <li>✔ 8 Live Lessons A Month</li>
            <li>✔ Homework For Each Lesson</li>
            <li>✔ Video Solution For Each Question</li>
            <li>✔ Community Of Like-Minded Students</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-start justify-center gap-6">
        <div className="p-4 rounded-lg w-full md:w-1/3">
          <label className="block mb-2 font-bold">Select Subjects:</label>
          <div className="mb-4">
            {subjectsList.map((subject, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value={subject}
                  onChange={(e) =>
                    handleCheckboxChange(
                      e,
                      setSelectedSubjects,
                      selectedSubjects
                    )
                  }
                  className="mr-2"
                />
                <label>{subject}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-lg w-full md:w-1/3 mb-4">
          <label className="block mb-2 font-bold">Select Courses:</label>
          <div>
            {coursesList.map((course, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value={course}
                  onChange={(e) =>
                    handleCheckboxChange(e, setSelectedCourses, selectedCourses)
                  }
                  className="mr-2"
                />
                <label>{course}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
