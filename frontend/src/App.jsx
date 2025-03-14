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

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";
// import LovedByStudents from "./components/LovedByStudents";
// import TutoringSections from "./components/TutoringSections";
// import TestimonialCarousel from "./components/TestimonialCarousel";
// import Footer from "./components/Footer";
// import BoostGrades from "./components/BoostGrades";
// import FAQ from "./components/Faq";
// import ContactComponent from "./components/ContactComponent";
// import MultiStepForm from "./components/MultiStepForm";
// import Pricing from "./components/Pricing";

// const Home = () => (
//   <div className="space-y-12 w-full h-screen p-3 lg:p-6">
//     <HeroSection />
//     <BoostGrades />
//     <TutoringSections />
//     {/* <PricingComponent /> */}
//     <FAQ />
//     <TestimonialCarousel />
//     <LovedByStudents />
//     <ContactComponent />
//     <Pricing />
//     <Footer />
//   </div>
// );

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/get-started" element={<MultiStepForm />} />
//         <Route path="/pricing" element={<Pricing />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import LovedByStudents from "./components/LovedByStudents";
import TutoringSections from "./components/TutoringSections";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";
import BoostGrades from "./components/BoostGrades";
import FAQ from "./components/Faq";
import ContactComponent from "./components/ContactComponent";
import MultiStepForm from "./components/MultiStepForm";
import Pricing from "./components/Pricing";
import ApplicationForm from "./components/ApplicationForm";

const Home = () => (
  <div className="space-y-12 w-full h-screen p-3 lg:p-6">
    <HeroSection />
    <BoostGrades />
    <TutoringSections />
    <FAQ />
    <TestimonialCarousel />
    <LovedByStudents />
    {/* <Pricing /> */}
    {/* <ApplicationForm /> */}
    <Footer />
  </div>
);

const App = () => {
  const location = useLocation(); // Get the current route

  return (
    <div className="space-y-12 w-full h-screen p-6 lg:p-20">
      {/* Conditionally render Navbar based on the route */}
      {location.pathname !== "/pricing" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<MultiStepForm />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/apply-for-tutor" element={<ApplicationForm />} />
        <Route path="/contact-us" element={<ContactComponent />} />
      </Routes>
    </div>
  );
};

export default App;
