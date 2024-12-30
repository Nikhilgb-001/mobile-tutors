import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What subjects do you offer?",
      answer:
        "We offer a variety of subjects including math, science, history, and language arts.",
    },
    {
      question: "How can I check your credibility?",
      answer:
        "You can check our reviews, testimonials, and accreditations on our website.",
    },
    {
      question: "Do you run courses at other times of the year?",
      answer:
        "Yes, we have sessions throughout the year, including summer and winter terms.",
    },
    {
      question: "Are there any special requirements for enrolling?",
      answer:
        "Some courses may require prerequisites; please check the specific course details.",
    },
    {
      question: "What's your success rate?",
      answer:
        "Our success rate is over 90%, with students achieving their goals consistently.",
    },
    {
      question: "Can I speak directly to the teachers?",
      answer:
        "Yes, we encourage direct communication with teachers during office hours or scheduled sessions.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">FAQ</h1>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className="flex justify-between w-full p-4 text-left font-medium text-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
