// import React, { useState } from "react";

// const PricingComponent = () => {
//   const [isYearly, setIsYearly] = useState(false);
//   const [selectedSubjects, setSelectedSubjects] = useState([]);
//   const [selectedCourses, setSelectedCourses] = useState([]);

//   const subjectsList = ["Mathematics", "Physics", "Chemistry", "Biology"];
//   const coursesList = ["KS3", "GCSE", "A-Level"];

//   const baseProPrice = isYearly ? 72 : 80;
//   const baseStandardPrice = isYearly ? 54 : 60;
//   const additionalPrice =
//     (selectedSubjects.length + selectedCourses.length) * 10;

//   const totalProPrice = baseProPrice + additionalPrice;
//   const totalStandardPrice = baseStandardPrice + additionalPrice;

//   const handleCheckboxChange = (e, setSelection, selection) => {
//     const value = e.target.value;
//     if (e.target.checked) {
//       setSelection([...selection, value]);
//     } else {
//       setSelection(selection.filter((item) => item !== value));
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-white p-8">
//       <h1 className="text-2xl text-center font-bold mb-8">
//         Choose Your Package
//       </h1>

//       {/* Toggle Switch */}
//       <div className="flex justify-center items-center mb-6">
//         <div className="flex items-center space-x-4">
//           <span
//             className={`text-sm ${!isYearly ? "text-white" : "text-gray-500"}`}
//           >
//             Pay Monthly
//           </span>
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               checked={isYearly}
//               onChange={() => setIsYearly(!isYearly)}
//               className="sr-only peer"
//             />
//             <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-purple-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
//           </label>
//           <span
//             className={`text-sm ${isYearly ? "text-white" : "text-gray-500"}`}
//           >
//             Pay Yearly <span className="text-green-400 ml-1">Save 10%</span>
//           </span>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row justify-center gap-6">
//         <div className="bg-gray-800 border border-purple-700 rounded-lg p-6 w-full md:w-1/3">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold">GCSE Mastery</h2>
//             <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
//               Recommended
//             </span>
//           </div>
//           <h3 className="text-3xl font-bold mb-4">£{totalProPrice}</h3>
//           <p className="text-sm mb-4">
//             {isYearly && "Entire 9 month course for £648"}
//           </p>
//           <button className="w-32 bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md mb-6">
//             Sign Up
//           </button>
//           <ul className="space-y-2">
//             <li>✔ Access to lesson notes and recordings</li>
//             <li>✔ Proven results with a proven system</li>
//             <li>✔ Weekly homework with solutions</li>
//             <li>✔ Mock exams every 8 weeks with solutions</li>
//             <li>✔ Community support group</li>
//             <li>✔ 14 day Money-back Guarantee</li>
//           </ul>
//         </div>

//         <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 w-full md:w-1/3">
//           <h2 className="text-xl font-bold mb-4">Launch GCSE</h2>
//           <h3 className="text-3xl font-bold mb-4">£{totalStandardPrice}</h3>
//           <p className="text-sm mb-4">
//             {isYearly && "Entire 9 month course for £486"}
//           </p>
//           <button className="w-32 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md mb-6">
//             Sign Up
//           </button>
// <ul className="space-y-2">
//   <li>✔ Access to lesson notes and recordings</li>
//   <li>✔ Proven results with a proven system</li>
//   <li>✔ Weekly marked homework with feedback</li>
//   <li>✔ Marked Mock exams every 8 weeks with feedback</li>
//   <li>✔ Unlimited 1-1 out-of-hours support</li>
//   <li>✔ 2 Grade improvement in 12 weeks Guaranteed</li>
//   <li>✔ Small focused interactive classes</li>
//   <li>✔ Initial assessment</li>
// </ul>
//         </div>
//       </div>

//       <div className="mt-6 flex flex-col md:flex-row items-start justify-center gap-6">
//         <div className="p-4 rounded-lg w-full md:w-1/3">
//           <label className="block mb-2 font-bold">Select Subjects:</label>
//           <div className="mb-4">
//             {subjectsList.map((subject, index) => (
//               <div key={index} className="flex items-center mb-2">
//                 <input
//                   type="checkbox"
//                   value={subject}
//                   onChange={(e) =>
//                     handleCheckboxChange(
//                       e,
//                       setSelectedSubjects,
//                       selectedSubjects
//                     )
//                   }
//                   className="mr-2"
//                 />
//                 <label>{subject}</label>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="p-4 rounded-lg w-full md:w-1/3 mb-4">
//           <label className="block mb-2 font-bold">Select Courses:</label>
//           <div>
//             {coursesList.map((course, index) => (
//               <div key={index} className="flex items-center mb-2">
//                 <input
//                   type="checkbox"
//                   value={course}
//                   onChange={(e) =>
//                     handleCheckboxChange(e, setSelectedCourses, selectedCourses)
//                   }
//                   className="mr-2"
//                 />
//                 <label>{course}</label>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingComponent;

import React, { useState } from "react";

const PricingComponent = () => {
  const [isProPlan, setIsProPlan] = useState(true);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedCombination, setSelectedCombination] = useState("");

  const pricingTable = [
    {
      combination: "1 Subject",
      subjects:
        "Choose any one (Physics, Chemistry, Biology, English, Mathematics)",
      lessonsPerWeek: 1,
      launchPrice: 20,
      masteryPrice: 5,
    },
    {
      combination: "2 Subjects",
      subjects: "Any two subjects",
      lessonsPerWeek: 2,
      launchPrice: 37,
      masteryPrice: 10,
    },
    {
      combination: "3 Subjects",
      subjects: "Any three subjects",
      lessonsPerWeek: 3,
      launchPrice: 52,
      masteryPrice: 15,
    },
    {
      combination: "4 Subjects",
      subjects: "Any four subjects",
      lessonsPerWeek: 4,
      launchPrice: 67,
      masteryPrice: 20,
    },
    {
      combination: "5 Subjects",
      subjects: "Maths, English, Biology, Chemistry, Physics",
      lessonsPerWeek: 5,
      launchPrice: 77,
      masteryPrice: 25,
    },
    {
      combination: "All 5 Subjects",
      subjects: "Maths, English, Biology, Chemistry, Physics",
      lessonsPerWeek: 6,
      launchPrice: 92,
      masteryPrice: 30,
    },
  ];

  const calculatePrice = () => {
    if (selectedCombination) {
      const selectedCombo = pricingTable.find(
        (item) => item.combination === selectedCombination
      );
      return selectedCombo
        ? isProPlan
          ? selectedCombo.masteryPrice
          : selectedCombo.launchPrice
        : 0;
    }
    const subjectPrice = isProPlan ? 5 : 20;
    return selectedSubjects.length * subjectPrice;
  };

  const totalPrice = calculatePrice();
  const lessonsPerWeek = selectedCombination
    ? pricingTable.find((item) => item.combination === selectedCombination)
        ?.lessonsPerWeek || 0
    : selectedSubjects.length;

  const handleCheckboxChange = (e, setSelection, selection) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelection([...selection, value]);
    } else {
      setSelection(selection.filter((item) => item !== value));
    }
  };

  const clearSelections = () => {
    setSelectedSubjects([]);
    setSelectedCombination("");
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-2xl text-center font-bold mb-8">
        Choose Your Package
      </h1>

      {/* Toggle Switch for Plans */}
      <div className="flex justify-center items-center mb-6">
        <div className="flex items-center space-x-4">
          <span
            className={`text-sm ${!isProPlan ? "text-white" : "text-gray-500"}`}
          >
            Launch GCSE
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isProPlan}
              onChange={() => setIsProPlan(!isProPlan)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-purple-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-purple-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
          <span
            className={`text-sm ${isProPlan ? "text-white" : "text-gray-500"}`}
          >
            GCSE Mastery
          </span>
        </div>
      </div>

      {/* Pricing Display */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="bg-gray-800 border border-purple-700 rounded-lg p-6 w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-4">
            {isProPlan ? "GCSE Mastery" : "Launch GCSE"}
          </h2>
          <h3 className="text-3xl font-bold mb-4">£{totalPrice}</h3>
          <p className="mb-4 text-sm">
            Lessons per week: <strong>{lessonsPerWeek}</strong>
          </p>
          <button className="w-32 bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md mb-6">
            Sign Up
          </button>

          {/* Feature Lists */}
          {isProPlan ? (
            <div>
              <h4 className="font-bold mb-2">GCSE Mastery Includes:</h4>
              <ul className="space-y-2 text-sm">
                <li>✔ Access to lesson notes and recordings</li>
                <li>✔ Proven results with a proven system</li>
                <li>✔ Weekly homework with solutions</li>
                <li>✔ Mock exams every 8 weeks with solutions</li>
                <li>✔ Community support group</li>
                <li>✔ 14-day Money-back Guarantee</li>
              </ul>
            </div>
          ) : (
            <div>
              <h4 className="font-bold mb-2">Launch GCSE Includes:</h4>
              <ul className="space-y-2 text-sm">
                <li>✔ Access to lesson notes and recordings</li>
                <li>✔ Proven results with a proven system</li>
                <li>✔ Weekly marked homework with feedback</li>
                <li>✔ Marked Mock exams every 8 weeks with feedback</li>
                <li>✔ Unlimited 1-1 out-of-hours support</li>
                <li>✔ 2 Grade improvement in 12 weeks Guaranteed</li>
                <li>✔ Small focused interactive classes</li>
                <li>✔ Initial assessment</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Subject Combinations Table */}
      <div className="p-4 rounded-lg w-full mt-6 overflow-x-auto">
        <label className="block mb-2 font-bold">
          Select Subject Combination:
        </label>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-purple-700">
              <tr>
                <th className="p-4">Combination</th>
                <th className="p-4">Subjects</th>
                <th className="p-4 text-center">Lessons/Week</th>
                <th className="p-4 text-center">Price (£)</th>
                <th className="p-4 text-center">Select</th>
              </tr>
            </thead>
            <tbody>
              {pricingTable.map((combo, index) => (
                <tr
                  key={index}
                  className="bg-gray-800 hover:bg-gray-750 transition-colors"
                >
                  <td className="p-4 border-b border-gray-700">
                    {combo.combination}
                  </td>
                  <td className="p-4 border-b border-gray-700">
                    {combo.subjects}
                  </td>
                  <td className="p-4 border-b border-gray-700 text-center">
                    {combo.lessonsPerWeek}
                  </td>
                  <td className="p-4 border-b border-gray-700 text-center">
                    £{isProPlan ? combo.masteryPrice : combo.launchPrice}
                  </td>
                  <td className="p-4 border-b border-gray-700 text-center">
                    <input
                      type="radio"
                      name="subjectCombination"
                      value={combo.combination}
                      onChange={(e) => {
                        setSelectedCombination(e.target.value);
                        setSelectedSubjects([]);
                      }}
                      className="form-radio h-5 w-5 text-purple-600"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Clear All Button */}
      <div className="flex justify-center mt-6">
        <button
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
          onClick={clearSelections}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default PricingComponent;
