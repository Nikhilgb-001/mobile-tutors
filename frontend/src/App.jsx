import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import LovedByStudents from "./components/LovedByStudents";
import TutoringSections from "./components/TutoringSections";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BoostGrades from "./components/BoostGrades";
import FAQ from "./components/Faq";

const App = () => {
  return (
    <>
      <div className="space-y-12 w-full h-screen p-6">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <LovedByStudents />
        <BoostGrades />
        <FAQ />
        <TutoringSections />
        <TestimonialCarousel />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default App;
