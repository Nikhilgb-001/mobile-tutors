// // src/components/PlanSelection.js
// import React from "react";

// const PlanSelection = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
//       <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md">
//         <button className="text-gray-600 mb-4">← Back</button>
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold mb-2">
//             Unlock your child's full potential
//           </h2>
//           <p className="text-gray-600">
//             With our Pro courses, your child will get a 1-to-1 personal mentor
//             to ask unlimited questions anytime via message. All mentors are
//             students at top UK universities.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="border-2 border-indigo-500 rounded-lg p-4 text-center relative">
//             <span className="absolute top-2 right-2 bg-indigo-500 text-white px-2 py-1 rounded text-sm">
//               RECOMMENDED
//             </span>
//             <h3 className="text-lg font-bold text-indigo-600">Pro</h3>
//             <p className="text-gray-600 mt-2">✓ 1-1 Mentor</p>
//           </div>
//           <div className="border rounded-lg p-4 text-center">
//             <h3 className="text-lg font-bold">Standard</h3>
//             <p className="text-gray-600 mt-2 line-through">✕ 1-1 Mentor</p>
//           </div>
//         </div>
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Your total comes to just:{" "}
//             <span className="text-red-500 line-through">£2,400.00</span>{" "}
//             <span className="text-green-500">-63%</span>
//           </p>
//           <p className="text-2xl font-bold mt-1">£899.00</p>
//           <button className="bg-black text-white px-6 py-3 rounded mt-4">
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlanSelection;

import React, { useState } from "react";

const StepThree = () => {
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  return (
    <div className="flex flex-col items-center space-y-6 p-4 md:p-8">
      <h1 className="text-2xl font-bold text-center">
        Unlock your child's full potential
      </h1>
      <p className="text-gray-600 text-center max-w-xl">
        With our Pro courses, your child will get a 1-to-1 personal mentor to
        ask unlimited questions anytime via message. All mentors are students at
        top UK universities.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Pro Plan */}
        <div
          onClick={() => setSelectedPlan("Pro")}
          className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${
            selectedPlan === "Pro"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300"
          }`}
        >
          <span className="text-blue-500 text-sm font-bold uppercase">
            Recommended
          </span>
          <h2 className="text-xl font-bold text-blue-700">Pro</h2>
          <p className="text-gray-600 mt-2">✔ 1-1 Mentor</p>
        </div>
        {/* Standard Plan */}
        <div
          onClick={() => setSelectedPlan("Standard")}
          className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${
            selectedPlan === "Standard"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300"
          }`}
        >
          <h2 className="text-xl font-bold text-gray-700">Standard</h2>
          <p className="text-gray-400 mt-2 line-through">✖ 1-1 Mentor</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Your total comes to just:</p>
        <p className="text-3xl font-bold text-red-500">
          £899.00{" "}
          <span className="line-through text-gray-400 text-sm">£2,400.00</span>
          <span className="text-green-500 text-sm ml-2">-63%</span>
        </p>
      </div>
      <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
        Continue
      </button>
    </div>
  );
};

export default StepThree;
