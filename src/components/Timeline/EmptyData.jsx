import React from "react";

function EmptyData() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-full gap-y-4 pt-[100px]">
        <img src="./superthank.svg" alt="" className="w-[300px]" />
        <p className="text-[#227B9D] font-semibold">Marvelous!</p>
        <p className="text-[#227B9D] font-semibold">
          You cleared all the <span className="text-[#FC9421]">tasks</span>
        </p>
      </div>
    </div>
  );
}

export default EmptyData;
