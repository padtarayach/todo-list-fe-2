import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

function HeaderTodo({ title , path}) {
  return (
    <div>
      <div className="flex justify-between p-6 items-center text-[#227B9D]">
        <Link to={path}>
          <MdOutlineArrowBackIos size={20} />
        </Link>
        <p className="text-xl font-semibold">{title}</p>
        <div className=""></div>
      </div>
    </div>
  );
}

export default HeaderTodo;
