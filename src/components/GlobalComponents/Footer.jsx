import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinePostAdd } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineHistory } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="md:hidden text-white bg-[#227B9D] h-[60px] fixed w-full bottom-0 rounded-ss-2xl rounded-se-2xl flex justify-evenly items-center">
      <Link to={"/timeline"}>
        <GiHamburgerMenu size={40} />
      </Link>
      <Link to={"/add"}>
        <MdOutlinePostAdd size={40} />
      </Link>
      <Link to={"/history"}>
      <MdOutlineHistory size={40} />
      </Link>
      <Link to={"/"}>
        <RxDashboard size={40} />
      </Link>
      
    </div>
  );
}

export default Footer;
