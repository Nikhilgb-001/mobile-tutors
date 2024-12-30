import React from "react";

const BoostGrades = () => {
  return (
    <div className="px-6 lg:px-20 py-12 bg-gray-50">
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12">
        How Mobile Tutors Boosts Grades
      </h1>

      {/* Features Container */}
      <div className="space-y-16">
        {/* Live Lessons */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
              <span className="bg-black text-white text-xs uppercase px-2 py-1 rounded">
                Live
              </span>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Anthology Poetry: Approaches
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  <strong>1a) </strong>What is the relationship between events X
                  and Y?
                </p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D" // Replace with actual image URL
              alt="Teacher"
              className="absolute -bottom-6 left-6 w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-12 text-center lg:text-left">
            <h2 className="text-xl font-semibold text-gray-800">
              Live Lessons
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              2 interactive lessons every week. Delivered online by the best
              teachers in the country.
            </p>
          </div>
        </div>

        {/* Homework */}
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <p className="text-xs uppercase bg-gray-100 px-2 py-1 rounded-full w-max">
                Your progress
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">
                  1a) State in words the relationship between two events X and
                  Y.
                </p>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" checked />
                  <label className="text-sm text-green-500 font-semibold">
                    Mutually Exclusive
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-sm text-gray-600">Independent</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-sm text-gray-600">
                    Mutually Inclusive
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-sm text-gray-600">Conditional</label>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pr-12 text-center lg:text-left">
            <h2 className="text-xl font-semibold text-gray-800">Homework</h2>
            <p className="mt-2 text-sm text-gray-600">
              After each lesson, we set our students a homework task. These are
              exam-style questions designed to practice key skills.
            </p>
          </div>
        </div>

        {/* 24/7 Mentor Support */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <p className="text-sm text-gray-600">
                "Hi teacher, I can't do this question on my homework. Can you
                explain it step by step?"
              </p>
              <p className="text-sm text-green-500 mt-2">
                "Of course! Let's break it down."
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-12 text-center lg:text-left">
            <h2 className="text-xl font-semibold text-gray-800">
              24/7 Mentor Support
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Our Pro packages include a Personal Mentor for unlimited support.
              Mentors are experts from top UK universities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostGrades;
