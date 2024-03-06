import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { TiHeartOutline } from "react-icons/ti";
import { MdOutlineSchool } from "react-icons/md";
import TypeCard from "./TypeCard";
import { Link } from "react-router-dom";

function TypeButton() {
  return (
    <div className="flex flex-col gap-y-8 mt-[40px]">
      <div className="flex justify-center gap-x-8 drop-shadow-xl">
        
        <TypeCard
          icon={<MdOutlineWorkOutline size={50} color="#FC9421" />}
          name={"Work"}
        />
        <TypeCard
          icon={<IoPersonOutline size={50} color="#FC9421" />} 
          name={"Personal"}
        />
      </div>
      <div className="flex justify-center gap-x-8 drop-shadow-xl">
        <TypeCard
          icon={<TiHeartOutline size={50} color="#FC9421" />}
          name={"Life"}
        />
        <TypeCard
          icon={<MdOutlineSchool size={50} color="#FC9421" />}
          name={"Study"}
        />
      </div>
    </div>
  );
}

export default TypeButton;
