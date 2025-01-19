import React, { useState } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [showError, setShowError] = useState(false);

  const subjects = ["English", "Maths", "Science", "History"];
  const totalSubjects = subjects.length;
  const subjectPrice = 200; // Price per subject
  const totalSubjectsPrice = totalSubjects * subjectPrice;

  // Apply discount only if all subjects are selected
  const discount = selectedSubjects.length === totalSubjects ? 0.4 : 0;
  const totalPrice =
    selectedSubjects.length === totalSubjects
      ? totalSubjectsPrice * (1 - discount)
      : selectedSubjects.length * subjectPrice;

  const handleClassSelection = (value) => {
    setSelectedClass(value);
    setShowError(false);
  };

  const [selectedPlan, setSelectedPlan] = useState("Pro");
  const [selectedPayment, setSelectedPayment] = useState("Full Payment");

  const handleSubjectToggle = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const handleUltimatePassSelection = () => {
    if (selectedSubjects.length < totalSubjects) {
      setSelectedSubjects(subjects); // Select all subjects if not already selected
    } else {
      setSelectedSubjects([]); // Deselect all if all are selected
    }
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

    setShowError(false);
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getPlanPrice = () => {
    if (selectedPlan === "Pro") {
      return { price: 899, discount: "-63%", original: 2400 };
    } else {
      return { price: 599, discount: "-67%", original: 1800 };
    }
  };

  const getPaymentDetails = () => {
    const { price } = getPlanPrice();
    if (selectedPayment === "Full Payment") {
      return { total: price, installment: null };
    } else {
      const installment = (price / 4).toFixed(2);
      return { total: price, installment };
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
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
            {[1, 2, 3, 4, 5].map((step) => (
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
              {[
                "Year 5/6",
                "Year 7/8",
                "Year 9/10",
                "Year 11",
                "Year 12",
                "Year 13",
              ].map((year) => (
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
              ))}
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

            {/* Ultimate Pass Section */}
            <div
              className={`w-full p-4 border rounded-lg cursor-pointer flex items-center justify-between ${
                selectedSubjects.length === totalSubjects
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-green-500 border-green-500"
              }`}
              onClick={handleUltimatePassSelection}
            >
              <span className="font-semibold">ULTIMATE PASS</span>
              <span>
                {selectedSubjects.length === totalSubjects
                  ? "-40% Discount Applied!"
                  : "Select all subjects for our best deal!"}
              </span>
            </div>

            {/* Pricing and Discount */}
            <div className="mt-6 text-center">
              <p className="text-lg">
                Your total comes to:{" "}
                <span className="font-bold">£{totalPrice.toFixed(2)}</span>{" "}
                {selectedSubjects.length === totalSubjects && (
                  <span className="line-through text-gray-500 ml-2">
                    £{totalSubjectsPrice.toFixed(2)}
                  </span>
                )}
              </p>
              {selectedSubjects.length === totalSubjects && (
                <p className="text-green-600">-40% Discount Applied</p>
              )}
            </div>

            <button
              onClick={handleContinue}
              className="w-full bg-black text-white py-2 rounded-lg mt-4"
            >
              Continue
            </button>
          </div>
        )}

        {/* Placeholder for Steps 3-5 */}
        {currentStep === 3 && (
          <div className="flex flex-col items-center space-y-6 p-4 md:p-8">
            <h1 className="text-2xl font-bold text-center">
              Unlock your child's full potential
            </h1>
            <p className="text-gray-600 text-center max-w-xl">
              With our Pro courses, your child will get a 1-to-1 personal mentor
              to ask unlimited questions anytime via message. All mentors are
              students at top UK universities.
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
              {/* <p className="text-3xl font-bold text-red-500">
                £899.00{" "}
                <span className="line-through text-gray-400 text-sm">
                  £2,400.00
                </span>
                <span className="text-green-500 text-sm ml-2">-63%</span>
              </p> */}
              <p className="text-lg text-red-500 font-bold">
                £{getPlanPrice().price.toFixed(2)}
                <span className="line-through text-gray-400 text-sm ml-2">
                  £{getPlanPrice().original.toFixed(2)}
                </span>
              </p>
              <p className="text-green-500 text-sm">
                {getPlanPrice().discount}
              </p>
            </div>
            <button
              onClick={handleContinue}
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Continue
            </button>
          </div>
        )}

        {currentStep === 4 && (
          <div className="flex flex-col items-center space-y-6 p-4 md:p-8">
            {/* <button className="text-gray-500 text-sm">&larr; Back</button> */}
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
              <p className="text-sm text-gray-500 inline">
                Your total comes to just: {""}
              </p>
              {selectedPayment === "Full Payment" ? (
                <span className="text-lg font-bold text-red-500">
                  £{getPlanPrice().price.toFixed(2)}
                </span>
              ) : (
                <span className="text-lg font-bold text-red-500">
                  £{(getPlanPrice().price / 4).toFixed(2)} today
                </span>
              )}
            </div>
            <button
              onClick={handleContinue}
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Continue
            </button>
          </div>
        )}
        {currentStep === 5 && (
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
                {[selectedPlan, selectedPayment].map((discount, index) => (
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
                    className="w-full max-w-xs border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="text-right space-y-2">
                  <p className="text-sm text-gray-500">
                    Your total comes to just:
                  </p>
                  <p className="text-3xl font-bold text-red-500">
                    £{getPaymentDetails().total} {}
                    <span className="line-through text-gray-400 text-sm">
                      £1,800.00
                    </span>
                    <span className="text-green-700 text-sm ml-2">-70%</span>
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
