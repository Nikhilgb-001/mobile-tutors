import React from "react";
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
import PlanSelection from "./components/PlanSelection";
import PaymentSelection from "./components/PaymentSelection";
import StepFive from "./components/StepFive";

const App = () => {
  return (
    <>
      <div className="space-y-12 w-full h-screen p-3 lg:p-6">
        <Navbar />
        <HeroSection />
        <BoostGrades />
        <TutoringSections />
        <PricingComponent />
        <FAQ />
        <TestimonialCarousel />
        <LovedByStudents />
        <ContactComponent />
        <MultiStepForm />
        {/* <PlanSelection />
        <PaymentSelection /> */}
        {/* <StepFive /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
