import React from "react";
import HeroSection from "../components/WelcomeComponents/HeroSection";
import TypeButton from "../components/WelcomeComponents/TypeButton";
import Layout from "../components/GlobalComponents/Layout";

function Welcome() {
  return (
    <div className="bg-[#F8F8F8] h-screen">
      <Layout>
        <div className="container mx-auto ">
          <HeroSection />
          <TypeButton />
        </div>
      </Layout>
    </div>
  );
}

export default Welcome;
