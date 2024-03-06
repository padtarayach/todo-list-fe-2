import React from "react";
import { Link } from "react-router-dom";

function TypeCard({ icon, name }) {
  return (
    <div>
      <Link to={"/add"}>
      <div className=" hover:scale-[102%] duration-200 hover:bg-[#f0fbff] w-[136px] h-[136px] md:w-[300px] bg-white 
      rounded-2xl flex flex-col justify-center items-center gap-y-3">
        {icon}
        <p className="font-semibold text-[20px] text-[#227B9D]">{name}</p>
      </div>
      </Link>
    </div>
  );
}

export default TypeCard;
