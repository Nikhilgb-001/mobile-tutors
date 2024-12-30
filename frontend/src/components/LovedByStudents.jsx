import React from "react";

const LovedByStudents = () => {
  const students = [
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/01/2-225x300.png",
      name: "Vanesha",
      description: "On an apprenticeship at a Big 4 firm",
    },
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/01/11-225x300.png",
      name: "Omid",
      description: "Achieved an A* in A-Level Maths",
    },
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/01/6-225x300.png",
      name: "Anamaria",
      description: "Now studying at King's College London",
    },
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/01/4-225x300.png",
      name: "Mojtaba",
      description: "Now studying Economics at UCL",
    },
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/01/5-225x300.png",
      name: "Ankit",
      description: "Now feels way more confident for university",
    },
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/01/8-225x300.png",
      name: "Student 6",
      description: "Achieved top grades in GCSE Maths",
    },
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/10/13-225x300.png",
      name: "Student 7",
      description: "Got into a Russell Group university",
    },
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/01/7-225x300.png",
      name: "Student 8",
      description: "Improved overall confidence in academics",
    },
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/01/1-225x300.png",
      name: "Student 9",
      description: "Secured a scholarship for further studies",
    },
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/01/3-225x300.png",
      name: "Student 10",
      description: "Excelled in A-Level Science",
    },
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/01/9-225x300.png",
      name: "Student 11",
      description: "Now studying Engineering at Imperial College",
    },
    {
      image:
        "https://mobiletutors.co.uk/wp-content/uploads/2022/10/14-225x300.png",
      name: "Student 12",
      description: "Achieved perfect scores in Maths",
    },
  ];

  return (
    <div className="p-6 md:p-12 bg-white">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6">
        Loved By Students
      </h2>
      <div className="flex items-center gap-4 justify-center flex-wrap overflow-x-auto">
        {students.map((student, index) => (
          <div
            key={index}
            className="w-64 flex-shrink-0 rounded-lg shadow-md bg-white text-center p-4"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover mb-4"
            />
            <h3 className="text-lg md:text-xl font-bold">{student.name}</h3>
            <p className="text-sm md:text-base text-gray-600">
              {student.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LovedByStudents;
