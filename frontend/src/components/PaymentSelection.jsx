// // src/components/PaymentSelection.js
// import React from "react";

// const PaymentSelection = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
//       <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md">
//         <button className="text-gray-600 mb-4">← Back</button>
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold">Choose Payment</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="border-2 border-indigo-500 rounded-lg p-4 text-center relative">
//             <span className="absolute top-2 right-2 bg-indigo-500 text-white px-2 py-1 rounded text-sm">RECOMMENDED</span>
//             <h3 className="text-lg font-bold text-indigo-600">Pay full price today</h3>
//             <p className="text-gray-600 mt-2">
//               and <span className="font-bold text-indigo-600">save £50</span>
//             </p>
//             <p className="text-gray-600 mt-2">One-off payment</p>
//           </div>
//           <div className="border rounded-lg p-4 text-center">
//             <h3 className="text-lg font-bold">Pay in 4 instalments</h3>
//             <ul className="text-gray-600 mt-2 space-y-1">
//               <li>£149.75 Today</li>
//               <li>£149.75 1st February</li>
//               <li>£149.75 1st March</li>
//               <li>£149.75 1st April</li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Your total comes to just: <span className="text-red-500 line-through">£1,800.00</span>{" "}
//             <span className="text-green-500">-70%</span>
//           </p>
//           <p className="text-2xl font-bold mt-1">£549.00</p>
//           <button className="bg-black text-white px-6 py-3 rounded mt-4">Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentSelection;

import React, { useState } from "react";

const StepFour = () => {
  const [selectedPayment, setSelectedPayment] = useState("Full Payment");

  return (
    <div className="flex flex-col items-center space-y-6 p-4 md:p-8">
      <button className="text-gray-500 text-sm">&larr; Back</button>
      <h1 className="text-2xl font-bold text-center">Choose Payment</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Full Payment */}
        <div
          onClick={() => setSelectedPayment("Full Payment")}
          className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${
            selectedPayment === "Full Payment"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300"
          }`}
        >
          <span className="text-blue-500 text-sm font-bold uppercase">
            Recommended
          </span>
          <h2 className="text-xl font-bold text-blue-700">
            Pay full price today
          </h2>
          <p className="text-blue-700 mt-2">and save £50</p>
          <p className="text-gray-500 mt-1 text-sm">One-off payment</p>
        </div>
        {/* Installment Payment */}
        <div
          onClick={() => setSelectedPayment("Installments")}
          className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${
            selectedPayment === "Installments"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300"
          }`}
        >
          <h2 className="text-xl font-bold text-gray-700">
            Pay in 4 installments
          </h2>
          <p className="text-gray-500 mt-2">£149.75 Today</p>
          <p className="text-gray-500">£149.75 1st February</p>
          <p className="text-gray-500">£149.75 1st March</p>
          <p className="text-gray-500">£149.75 1st April</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Your total comes to just:</p>
        <p className="text-3xl font-bold text-red-500">
          £549.00{" "}
          <span className="line-through text-gray-400 text-sm">£1,800.00</span>
          <span className="text-green-500 text-sm ml-2">-70%</span>
        </p>
      </div>
      <button
        onClick={handleContinue}
        className="w-full bg-black text-white py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
};

export default StepFour;
