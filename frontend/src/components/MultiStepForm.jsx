import React, { useState } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [showError, setShowError] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // No default plan
  const [email, setEmail] = useState("");

  const subjects = ["English", "Biology", "Chemistry", "Physics", "Maths"];
  const totalSubjects = subjects.length;

  const pricing = {
    "Launch GCSE": [20, 37, 52, 67, 92],
    "GCSE Mastery": [5, 10, 15, 20, 30],
  };

  const calculatePrice = () => {
    const numSubjects = selectedSubjects.length;
    if (numSubjects === 0 || !selectedPlan) return 0;
    return pricing[selectedPlan][numSubjects - 1];
  };

  const totalPrice = calculatePrice();

  const handleClassSelection = (value) => {
    setSelectedClass(value);
    setShowError(false);
  };

  const handleSubjectToggle = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handleContinue = () => {
    if (currentStep === 1 && !selectedClass) {
      setShowError(true);
      return;
    }
    if (currentStep === 2 && selectedSubjects.length === 0) {
      setShowError(true);
      return;
    }
    if (currentStep === 3 && !selectedPlan) {
      setShowError(true);
      return;
    }

    setShowError(false);
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="h-screen flex flex-col mt-32 items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        {/* Step Navigation */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleBack}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
            disabled={currentStep === 1}
          >
            &larr; Back
          </button>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                  currentStep === step
                    ? "bg-black text-white border-black"
                    : "bg-gray-200 text-gray-400 border-gray-200"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Which year group is your child in?
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {["KS3 - Year 7/8/9", "KS4 - Year 10/11", "A-level"].map(
                (year) => (
                  <label
                    key={year}
                    className={`block p-4 border rounded-lg cursor-pointer text-center ${
                      selectedClass === year
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      value={year}
                      checked={selectedClass === year}
                      onChange={() => handleClassSelection(year)}
                      className="hidden"
                    />
                    {year}
                  </label>
                )
              )}
            </div>
            {showError && (
              <p className="text-red-500 text-sm mb-4">
                Please select a year group to continue.
              </p>
            )}
            <button
              onClick={handleContinue}
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Continue
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Select subjects for{" "}
              <span className="text-purple-500">{selectedClass}</span>
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {subjects.map((subject) => (
                <label
                  key={subject}
                  className={`block p-4 border rounded-lg cursor-pointer text-center flex items-center justify-center space-x-2 ${
                    selectedSubjects.includes(subject)
                      ? "bg-purple-500 text-white border-purple-500"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={subject}
                    checked={selectedSubjects.includes(subject)}
                    onChange={() => handleSubjectToggle(subject)}
                    className="hidden"
                  />
                  {subject}
                </label>
              ))}
            </div>

            {showError && (
              <p className="text-red-500 text-sm mb-4">
                Please select at least one subject to continue.
              </p>
            )}
            <button
              onClick={handleContinue}
              className="w-full bg-black text-white py-2 rounded-lg mt-4"
            >
              Continue
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="flex flex-col items-center space-y-6 p-4 md:p-8">
            <h1 className="text-2xl font-bold text-center">
              Unlock your child's full potential
            </h1>

            {/* Two Plans Side by Side */}
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
              {/* Launch GCSE Plan */}
              <div
                className={`bg-gray-800 border-4 ${
                  selectedPlan === "Launch GCSE"
                    ? "border-purple-700 shadow-lg"
                    : "border-gray-800"
                } rounded-lg p-6 w-full md:w-1/2 transition-all flex flex-col justify-between`}
              >
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">
                    Launch GCSE
                  </h2>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    £{pricing["Launch GCSE"][selectedSubjects.length - 1]}
                  </h3>
                  <p className="mb-4 text-sm text-gray-300">
                    Lessons per week: <strong>{selectedSubjects.length}</strong>
                  </p>
                  <button
                    onClick={handleContinue}
                    className="w-full bg-gradient-to-r from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500 text-white py-2 rounded-md mb-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Sign Up
                  </button>

                  <h4 className="font-bold mb-2 text-white">
                    Launch GCSE Includes:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
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

                {/* Select Plan Button at the Bottom */}
                <button
                  onClick={() => handlePlanSelection("Launch GCSE")}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-2 rounded-md mt-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Select Plan
                </button>
              </div>

              {/* GCSE Mastery Plan */}
              <div
                className={`bg-gray-800 border-4 ${
                  selectedPlan === "GCSE Mastery"
                    ? "border-purple-500 shadow-lg"
                    : "border-gray-800"
                } rounded-lg p-6 w-full md:w-1/2 transition-all flex flex-col justify-between`}
              >
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">
                    GCSE Mastery
                  </h2>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    £{pricing["GCSE Mastery"][selectedSubjects.length - 1]}
                  </h3>
                  <p className="mb-4 text-sm text-gray-300">
                    Lessons per week: <strong>{selectedSubjects.length}</strong>
                  </p>
                  <button
                    onClick={handleContinue}
                    className="w-full bg-gradient-to-r from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500 text-white py-2 rounded-md mb-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Sign Up
                  </button>

                  <h4 className="font-bold mb-2 text-white">
                    GCSE Mastery Includes:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>✔ Access to lesson notes and recordings</li>
                    <li>✔ Proven results with a proven system</li>
                    <li>✔ Weekly homework with solutions</li>
                    <li>✔ Mock exams every 8 weeks with solutions</li>
                    <li>✔ Community support group</li>
                    <li>✔ 14-day Money-back Guarantee</li>
                  </ul>
                </div>

                {/* Select Plan Button at the Bottom */}
                <button
                  onClick={() => handlePlanSelection("GCSE Mastery")}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-2 rounded-md mt-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Select Plan
                </button>
              </div>
            </div>

            {showError && (
              <p className="text-red-500 text-sm mb-4">
                Please select a plan to continue.
              </p>
            )}

            <button
              onClick={handleContinue}
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Continue
            </button>
          </div>
        )}

        {currentStep === 4 && (
          <div className="flex flex-col items-center p-4 md:p-8 space-y-8 bg-gray-50 min-h-screen">
            {/* Title */}
            <h1 className="text-2xl font-bold text-center">Order Details</h1>

            {/* Chosen Subjects Section */}
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-gray-700 font-semibold">
                  Chosen subjects for Year{" "}
                  <span className="text-purple-500">{selectedClass}</span>
                </h2>
                <button className="text-blue-500 text-sm flex items-center space-x-1">
                  <span onClick={() => setCurrentStep(2)}>Edit</span>
                </button>
              </div>
              <div className="flex space-x-4">
                {selectedSubjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {selectedPlan}
                </span>
              </div>
            </div>

            {/* Footer Section */}
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-6">
              <div className="flex items-center space-x-2 text-green-700">
                <span>&#10003;</span>
                <p className="text-sm">
                  No hidden payments or fees. 14-day money-back guarantee from
                  start date!
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full max-w-xs border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="text-right space-y-2">
                  <p className="text-sm text-gray-500">
                    Your total comes to just:
                  </p>
                  <p className="text-3xl font-bold text-red-500">
                    £{totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => alert("Work in progress...!")}
                className="w-full bg-black text-white py-2 rounded-lg"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
