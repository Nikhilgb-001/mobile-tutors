// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { SiTrustpilot } from "react-icons/si";

// const HeroSection = () => {
//   return (
//     <div className="p-3 pt-14 lg:p-20">
//       <div className="bg-purple-600 text-white rounded-3xl flex flex-col lg:flex-row justify-between items-center lg:items-start flex-wrap md:p-12 p-6 relative overflow-hidden w-full h-full">
//         {/* Text Section */}
//         <div className="relative z-10 p-5 w-full lg:w-1/2">
//           <h1 className="uppercase text-base sm:text-lg tracking-widest mb-1 font-bold text-yellow-500 ">
//             MOBILE TUTORS
//           </h1>
//           <h1 className="uppercase text-base sm:text-lg tracking-widest mb-2 font-bold">
//             Live lessons from world-class teachers Private tuition
//           </h1>
//           <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
//             Help Your Child Get a —<br />
//             Grade 9/A*
//           </h1>
//           <p className="mt-4 text-base sm:text-lg font-semibold">
//             Choose your child’s year tuition
//           </p>

//           {/* Trustpilot Section */}
//           <div className="mt-4 flex items-center">
//             <a
//               href="https://uk.trustpilot.com/review/mobiletutors.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount"
//               className="flex items-center mr-2"
//             >
//               <span className="mr-2 text-sm sm:text-base font-semibold">
//                 See our 115 reviews on
//               </span>
//               <SiTrustpilot size={20} color="#04DA8D" />
//             </a>
//             <span className="text-xl sm:text-2xl">4.7</span>
//           </div>

//           <p className="mt-6 text-base sm:text-lg font-semibold">
//             We offer home and online tuition. See our full list of services
//             below.
//           </p>
//         </div>

//         {/* Image and Button Section */}
//         <div className="flex flex-col items-center justify-center w-full lg:w-1/4 p-6 md:p-12">
//           <div className="flex justify-center">
//             <img
//               src="https://mobiletutors.co.uk/wp-content/uploads/2022/01/Trophy.png"
//               alt="Teachers"
//               className="h-32 sm:h-40 md:h-60"
//             />
//           </div>
//           <a
//             href="#"
//             className="px-4 mt-4 py-3 bg-zinc-100 text-zinc-800 font-semibold text-sm sm:text-base md:text-xl rounded"
//           >
//             Learn More
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import { SiTrustpilot } from "react-icons/si";
const HeroSection = () => {
  return (
    <div className="flex flex-col rounded-3xl mt-4 lg:flex-row items-center justify-between shadow-lg lg:px-20 p-12 bg-[#FFFFFF">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Help Your Child Get a{" "}
          <span className="text-purple-500">Grade 9/A*</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Live lessons from world-class teachers
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">
          Learn More &rarr;
        </button>
        <div className="mt-4 flex items-center">
          <a
            href="https://uk.trustpilot.com/review/mobiletutors.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount"
            className="flex items-center mr-2"
          >
            <span className="mr-2 text-sm sm:text-base font-semibold">
              See our 115 reviews on
            </span>
            <SiTrustpilot size={20} color="#04DA8D" />
          </a>
          <span className="text-xl sm:text-2xl">4.7</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHR1dG9yc3xlbnwwfHwwfHx8MA%3D%3D" // Replace with your hosted image URL
          alt="Mockup"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
