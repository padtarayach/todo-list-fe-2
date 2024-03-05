import React from "react";
import { SiNotepadplusplus } from "react-icons/si";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed drawer hidden md:block ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-[#227B9D] text-white rounded-b-2xl">
          
          <div className="flex-1 px-2 mx-2"><SiNotepadplusplus size={50} /></div>
          <div className="flex-none hidden md:block">
            <ul className="menu menu-horizontal text-[18px]">
              {/* Navbar menu content here */}
              <Link to={"/timeline"}>
              <li className="hover:text-gray-300">
                <a>Timeline</a>
              </li>
              </Link>
              <Link to={"/add"}>
              <li className="hover:text-gray-300">
                <a>Create Task</a>
              </li>
              </Link>
              <Link to={"/"}>
              <li className="hover:text-gray-300">
                <a>Type</a>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>


      
    </div>
  );
}

export default Navbar;
