import React, { useState } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [showError, setShowError] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // No default plan

  const subjects = ["English", "Biology", "Chemistry", "Physics", "Maths"];

  // const paymentLinks = {
  //   "Launch GCSE": [
  //     "https://buy.stripe.com/14kaHb0GJ2ho2PK9AO",
  //     "https://buy.stripe.com/bIY8z3dtvaNU8a4dR0",
  //     "https://buy.stripe.com/28obLfexz9JQ61W008",
  //     "https://buy.stripe.com/3cs5mRgFH6xEgGA7sz",
  //     "https://buy.stripe.com/eVacPjgFH3ls8a46oA",
  //     "https://buy.stripe.com/14kcPjcpr9JQ0HC9AN",
  //   ],
  //   "GCSE Mastery": [
  //     "https://buy.stripe.com/14k3eJexz8FMeys28u",
  //     "https://buy.stripe.com/eVa7uZ1KN3lseys8wF",
  //     "https://buy.stripe.com/aEUg1v2ORcW23TOcN1",
  //     "https://buy.stripe.com/6oE4iN89b3lsbmg3cx",
  //     "https://buy.stripe.com/eVa6qV89baNU4XS14r",
  //     "https://buy.stripe.com/3cs16B89b8FMfCw28o",
  //   ],
  // };

  let liveLessons = 0;
  // const calculatePrice = (plan) => {
  //   const numSubjects = selectedSubjects.length;
  //   const hasMaths = selectedSubjects.includes("Maths");
  //   const otherSubjects = selectedSubjects.filter(
  //     (sub) => sub !== "Maths"
  //   ).length;

  //   if (numSubjects === 0 || !plan) return 0;

  //   let launchPrice = 0;
  //   let masteryPrice = 0;

  //   if (numSubjects === 1) {
  //     if (hasMaths) {
  //       launchPrice = 37;
  //       masteryPrice = 10;
  //       liveLessons = 2;
  //     } else {
  //       launchPrice = 20;
  //       masteryPrice = 5;
  //       liveLessons = 1;
  //     }
  //   } else if (numSubjects === 2) {
  //     if (hasMaths) {
  //       launchPrice = 52;
  //       masteryPrice = 15;
  //       liveLessons = 3;
  //     } else {
  //       launchPrice = 37;
  //       masteryPrice = 10;
  //       liveLessons = 2;
  //     }
  //   } else if (numSubjects === 3) {
  //     if (hasMaths) {
  //       launchPrice = 67;
  //       masteryPrice = 20;
  //       liveLessons = 4;
  //     } else {
  //       launchPrice = 52;
  //       masteryPrice = 15;
  //       liveLessons = 3;
  //     }
  //   } else if (numSubjects === 4) {
  //     if (hasMaths) {
  //       launchPrice = 77;
  //       masteryPrice = 25;
  //       liveLessons = 5;
  //     }
  //   } else if (numSubjects === 5) {
  //     launchPrice = 92;
  //     masteryPrice = 30;
  //     liveLessons = 6;
  //   }

  //   return plan === "Launch GCSE" ? launchPrice : masteryPrice;
  // };

  const calculatePrice = (plan) => {
    const numSubjects = selectedSubjects.length;
    const hasMaths = selectedSubjects.includes("Maths");
    const otherSubjects = selectedSubjects.filter(
      (sub) => sub !== "Maths"
    ).length;

    if (numSubjects === 0 || !plan) return 0;

    let launchPrice = 0;
    let masteryPrice = 0;

    if (numSubjects === 1) {
      if (hasMaths) {
        launchPrice = 37;
        masteryPrice = 10;
        liveLessons = 2;
      } else {
        launchPrice = 20;
        masteryPrice = 5;
        liveLessons = 1;
      }
    } else if (numSubjects === 2) {
      if (hasMaths) {
        launchPrice = 52;
        masteryPrice = 15;
        liveLessons = 3;
      } else {
        launchPrice = 37;
        masteryPrice = 10;
        liveLessons = 2;
      }
    } else if (numSubjects === 3) {
      if (hasMaths) {
        launchPrice = 67;
        masteryPrice = 20;
        liveLessons = 4;
      } else {
        launchPrice = 52;
        masteryPrice = 15;
        liveLessons = 3;
      }
    } else if (numSubjects === 4) {
      if (hasMaths) {
        launchPrice = 77;
        masteryPrice = 25;
        liveLessons = 5;
      } else {
        launchPrice = 67; // Added this line for 4 subjects without Maths
        masteryPrice = 20; // Added this line for 4 subjects without Maths
        liveLessons = 4; // Added this line for 4 subjects without Maths
      }
    } else if (numSubjects === 5) {
      launchPrice = 92;
      masteryPrice = 30;
      liveLessons = 6;
    }

    return plan === "Launch GCSE" ? launchPrice : masteryPrice;
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

  // const handlePlanSelection = (plan) => {
  //   setSelectedPlan(plan);
  // };

  // const handlePlanSelection = (plan) => {
  //   if (selectedSubjects.length > 0) {
  //     const numSubjects = selectedSubjects.length;
  //     const paymentLink = paymentLinks[plan][numSubjects - 1];
  //     window.location.href = paymentLink;
  //   } else {
  //     setShowError(true);
  //   }
  // };

  // const handlePlanSelection = (plan) => {
  //   if (selectedSubjects.length > 0) {
  //     let paymentLink = "";

  //     // Check if Maths is selected OR any two subjects from the list
  //     const selectedCoreSubjects = selectedSubjects.filter((subject) =>
  //       ["Physics", "Chemistry", "Biology", "English"].includes(subject)
  //     );

  //     if (
  //       selectedSubjects.includes("Maths") ||
  //       selectedCoreSubjects.length === 2
  //     ) {
  //       paymentLink =
  //         plan === "Launch GCSE"
  //           ? "https://buy.stripe.com/bIY8z3dtvaNU8a4dR0"
  //           : "https://buy.stripe.com/eVa7uZ1KN3lseys8wF";
  //     } else {
  //       const numSubjects = selectedSubjects.length;
  //       paymentLink = paymentLinks[plan][numSubjects - 1];
  //     }

  //     window.location.href = paymentLink;
  //   } else {
  //     setShowError(true);
  //   }
  // };

  // final code
  const handlePlanSelection = (plan) => {
    if (selectedSubjects.length > 0) {
      let paymentLink = "";
      const selectedCoreSubjects = selectedSubjects.filter((subject) =>
        ["Physics", "Chemistry", "Biology", "English"].includes(subject)
      );
      const numCoreSubjects = selectedCoreSubjects.length;
      const hasMaths = selectedSubjects.includes("Maths");

      if (numCoreSubjects === 1 && !hasMaths) {
        paymentLink =
          plan === "Launch GCSE"
            ? "https://buy.stripe.com/14kaHb0GJ2ho2PK9AO"
            : "https://buy.stripe.com/14k3eJexz8FMeys28u";
      } else if (numCoreSubjects === 2 || (hasMaths && numCoreSubjects === 0)) {
        paymentLink =
          plan === "Launch GCSE"
            ? "https://buy.stripe.com/bIY8z3dtvaNU8a4dR0"
            : "https://buy.stripe.com/eVa7uZ1KN3lseys8wF";
      } else if (numCoreSubjects === 3 || (numCoreSubjects === 1 && hasMaths)) {
        paymentLink =
          plan === "Launch GCSE"
            ? "https://buy.stripe.com/28obLfexz9JQ61W008"
            : "https://buy.stripe.com/aEUg1v2ORcW23TOcN1";
      } else if (numCoreSubjects === 4 || (numCoreSubjects === 2 && hasMaths)) {
        paymentLink =
          plan === "Launch GCSE"
            ? "https://buy.stripe.com/3cs5mRgFH6xEgGA7sz"
            : "https://buy.stripe.com/6oE4iN89b3lsbmg3cx";
      } else if (numCoreSubjects === 3 && hasMaths) {
        paymentLink =
          plan === "Launch GCSE"
            ? "https://buy.stripe.com/eVacPjgFH3ls8a46oA"
            : "https://buy.stripe.com/eVa6qV89baNU4XS14r";
      } else if (numCoreSubjects === 4 && hasMaths) {
        paymentLink =
          plan === "Launch GCSE"
            ? "https://buy.stripe.com/14kcPjcpr9JQ0HC9AN"
            : "https://buy.stripe.com/3cs16B89b8FMfCw28o";
      }

      if (paymentLink) {
        window.location.href = paymentLink;
      } else {
        setShowError(true);
      }
    } else {
      setShowError(true);
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

  // const handleCheckout = () => {
  //   if (selectedPlan && selectedSubjects.length > 0) {
  //     const numSubjects = selectedSubjects.length;
  //     const paymentLink = paymentLinks[selectedPlan][numSubjects - 1];
  //     window.location.href = paymentLink;
  //   } else {
  //     setShowError(true);
  //   }
  // };

  return (
    <div className="h-screen flex flex-col mt-32 items-center justify-center">
      <div className="w-full h-full max-w-4xl mt-12 bg-white p-6 rounded-lg shadow-md lg:h-fit">
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
            {[1, 2, 3].map((step) => (
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
              {["KS3 - Year 7/8/9", "KS4 - Year 10/11"].map((year) => (
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
          <div className="flex flex-col items-center space-y-6 p-4 md:p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Unlock Your Child's Full Potential
            </h1>

            {/* Two Plans Side by Side */}
            <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
              {/* Launch GCSE Plan */}
              <div
                className={`bg-gray-800 border-2 ${
                  selectedPlan === "Launch GCSE"
                    ? "border-purple-500 shadow-2xl"
                    : "border-gray-700 hover:border-purple-500"
                } rounded-xl p-6 w-full md:w-1/2 transition-all duration-300 transform hover:scale-105 flex flex-col justify-between`}
              >
                <div className="relative">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Launch GCSE
                  </h2>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold float-end absolute top-0 right-0 animate-pulse">
                    Popular
                  </span>
                  <h3 className="text-4xl font-bold mb-4 text-white">
                    £{calculatePrice("Launch GCSE")}
                  </h3>
                  <p className="mb-2 text-sm text-gray-400">
                    Cost per lesson:{" "}
                    <strong className="text-purple-400">
                      £
                      {(calculatePrice("Launch GCSE") / liveLessons).toFixed(2)}
                    </strong>
                  </p>
                  <p className="mb-4 text-sm text-gray-400">
                    Live Lessons per week:{" "}
                    <strong className="text-purple-400">{liveLessons}</strong>
                  </p>
                  <h4 className="font-bold mb-2 text-white">
                    Launch GCSE Includes:
                  </h4>
                  <ul className="space-y-2 text-sm text-yellow-400">
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
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-3 rounded-lg mt-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Sign Up
                </button>
              </div>

              {/* GCSE Mastery Plan */}
              <div
                className={`bg-gray-800 border-2 ${
                  selectedPlan === "GCSE Mastery"
                    ? "border-purple-500 shadow-2xl"
                    : "border-gray-700 hover:border-purple-500"
                } rounded-xl p-6 w-full md:w-1/2 transition-all duration-300 transform hover:scale-105 flex flex-col justify-between`}
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    GCSE Mastery
                  </h2>
                  <h3 className="text-4xl font-bold mb-4 text-white">
                    £{calculatePrice("GCSE Mastery")}
                  </h3>
                  <p className="mb-2 text-sm text-gray-400">
                    Cost per lesson:{" "}
                    <strong className="text-purple-400">
                      £
                      {(calculatePrice("GCSE Mastery") / liveLessons).toFixed(
                        2
                      )}
                    </strong>
                  </p>
                  <p className="mb-4 text-sm text-gray-400">
                    Live Lessons per week:{" "}
                    <strong className="text-purple-400">{liveLessons}</strong>
                  </p>
                  <h4 className="font-bold mb-2 text-white">
                    GCSE Mastery Includes:
                  </h4>
                  <ul className="space-y-2 text-sm text-yellow-400">
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
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-3 rounded-lg mt-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Sign Up
                </button>
              </div>
            </div>

            {showError && (
              <p className="text-red-400 text-sm mb-4 animate-bounce">
                Please select a plan to continue.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
