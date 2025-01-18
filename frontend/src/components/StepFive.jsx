import React from "react";

const StepFive = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 space-y-8 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center">Order Details</h1>

      {/* Chosen Subjects Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-700 font-semibold">
            Chosen subjects for Year 5/6
          </h2>
          <button className="text-blue-500 text-sm flex items-center space-x-1">
            <span>Edit</span>
          </button>
        </div>
        <div className="flex space-x-4">
          {["English", "Maths", "Science"].map((subject, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {subject}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          {["+ Ultimate Pass", "+ Pay Upfront"].map((discount, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
            >
              {discount}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-6">
        <div className="flex items-center space-x-2 text-green-700">
          <span>&#10003;</span>
          <p className="text-sm">
            No hidden payments or fees. 14-day money-back guarantee from start
            date!
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm text-gray-500">
              Enter your email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-xs border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-right space-y-2">
            <p className="text-sm text-gray-500">Your total comes to just:</p>
            <p className="text-3xl font-bold text-red-500">
              £549.00{" "}
              <span className="line-through text-gray-400 text-sm">
                £1,800.00
              </span>
              <span className="text-green-700 text-sm ml-2">-70%</span>
            </p>
          </div>
        </div>
        <button
          onClick={handleContinue}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepFive;
