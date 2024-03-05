import React from "react";

function HeroSection() {
  return (
    <>
      <div className="font-bold text-[36px] pt-[80px] px-[25px] pb-[48px] md:pt-[150px] md:px-[50px]">
        <p>Let's begin your effective day!</p>
      </div>
      <div className="flex justify-end">
        <img className="h-[150px] pe-[36px] md:h-[190px]" src="./learn.svg" alt="" />
      </div>
    </>
  );
}

export default HeroSection;
