import React, { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  const stats = [
    { value: 1200, label: "Students Tutored", suffix: "+" },
    { value: 2, label: "Average grade increase", prefix: "+" },
    { value: 100, label: "Would recommend us", suffix: "%" },
  ];

  const [counts, setCounts] = useState([0, 0, 0]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      const durations = [2000, 2000, 2000]; // Animation duration for each number
      const intervalIds = stats.map((stat, index) => {
        const increment = Math.ceil(stat.value / (durations[index] / 30)); // Increment based on duration
        return setInterval(() => {
          setCounts((prev) => {
            const updatedCounts = [...prev];
            updatedCounts[index] = Math.min(updatedCounts[index] + increment, stat.value);
            return updatedCounts;
          });
        }, 30);
      });

      return () => {
        intervalIds.forEach(clearInterval);
      };
    }
  }, [visible, stats]);

  return (
    <div ref={sectionRef} className="bg-yellow-100 py-10 px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900">
              {stat.prefix || ""}
              {counts[index]}
              {stat.suffix || ""}
            </h2>
            <p className="mt-2 text-lg text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
