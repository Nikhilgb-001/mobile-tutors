// import React from "react";
// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";
// import LovedByStudents from "./components/LovedByStudents";
// import TutoringSections from "./components/TutoringSections";
// import TestimonialCarousel from "./components/TestimonialCarousel";
// import Footer from "./components/Footer";
// import BoostGrades from "./components/BoostGrades";
// import FAQ from "./components/Faq";
// import PricingComponent from "./components/PricingComponent";
// import ContactComponent from "./components/ContactComponent";
// import MultiStepForm from "./components/MultiStepForm";

// const App = () => {
//   return (
//     <>
//       <div className="space-y-12 w-full h-screen p-3 lg:p-6">
//         <Navbar />
//         <HeroSection />
//         <BoostGrades />
//         <TutoringSections />
//         <PricingComponent />
//         <FAQ />
//         <TestimonialCarousel />
//         <LovedByStudents />
//         <ContactComponent />
//         <MultiStepForm />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import LovedByStudents from "./components/LovedByStudents";
import TutoringSections from "./components/TutoringSections";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";
import BoostGrades from "./components/BoostGrades";
import FAQ from "./components/Faq";
import PricingComponent from "./components/PricingComponent";
import ContactComponent from "./components/ContactComponent";
import MultiStepForm from "./components/MultiStepForm";

const Home = () => (
  <div className="space-y-12 w-full h-screen p-3 lg:p-6">
    <HeroSection />
    <BoostGrades />
    <TutoringSections />
    {/* <PricingComponent /> */}
    <FAQ />
    <TestimonialCarousel />
    <LovedByStudents />
    <ContactComponent />
    <Footer />
  </div>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<MultiStepForm />} />
      </Routes>
    </>
  );
};

export default App;
