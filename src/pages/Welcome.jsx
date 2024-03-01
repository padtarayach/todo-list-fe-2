import React from "react";

import HeroSection from "../components/WelcomeComponents/HeroSection";
import TypeButton from "../components/WelcomeComponents/TypeButton";
import Footer from "../components/GlobalComponents/Footer";

function Welcome() {
  return (
    <div className="bg-[#F8F8F8] h-screen">
      <HeroSection />
      <TypeButton />
      <Footer />
    </div>
  );
}

export default Welcome;
