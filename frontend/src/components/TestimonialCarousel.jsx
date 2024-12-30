import React, { useState } from "react";

const testimonials = [
  {
    name: "Jasmin",
    title: "Student",
    text: "I went from a U to a C in less than a year, thanks to Mobile Tutors. My tutor simplified difficult concepts and boosted my confidence. I’m now studying my dream course at university!",
    image:
      "https://mobiletutors.co.uk/wp-content/uploads/elementor/thumbs/Jasmin-pk85upj7z007quzsvrz8eawnkgiin5kf61ipt0tpe8.png",
    rating: 5,
  },
  {
    name: "Alina",
    title: "Student",
    text: "My tutor turned my fear of math into confidence. I achieved a grade 9 in my exams and feel well-prepared for IB Maths now. Highly recommend Mobile Tutors!",
    image:
      "https://mobiletutors.co.uk/wp-content/uploads/elementor/thumbs/Alina-pk85r1xte702lgay873gp844eij4pj1zzy6qma8tlc.png",
    rating: 5,
  },
  {
    name: "Vaibhav",
    title: "Student",
    text: "I went from a U to an A* in A-Level Maths. My tutor broke down tough topics and improved my exam technique. Mobile Tutors exceeded my expectations!",
    image:
      "https://mobiletutors.co.uk/wp-content/uploads/elementor/thumbs/Vaibhav-pk85xj1sh3v6kqwcezuxvlafq2m5qgrfjzz5mwn6q8.png",
    rating: 5,
  },
];

const TestimonialCards = () => {
  const [showRating, setShowRating] = useState(null);

  const handleTap = (index) => {
    setShowRating((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-10 px-5 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">
        What Our Students Say
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg w-80 cursor-pointer"
            onClick={() => handleTap(index)}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{testimonial.title}</p>
            <p className="text-center text-sm">{testimonial.text}</p>
            {showRating === index && (
              <div className="flex mt-4">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                {Array(5 - testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-gray-300 text-lg">
                      ★
                    </span>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCards; 