import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../../functions/Utils'
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { TiHeartOutline } from "react-icons/ti";
import { MdOutlineSchool } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";

function Card({title, duedate, status, type, id}) {
  const checkTypeIcon = (typeToIcon) => {
      if(typeToIcon == "work"){
        return <MdOutlineWorkOutline size={27} />
      }else if(typeToIcon == "personal"){
        return <IoPersonOutline size={27}/>
      }else if(typeToIcon == "study"){
        return <MdOutlineSchool size={27}/>
      }else if(typeToIcon == "life"){
        return <TiHeartOutline size={27}/>
      }
  }
  return (
    <Link to={`/detail/${id}`}>
    <div className=" hover:bg-[#f0fbff] bg-white shadow-xl rounded-lg flex flex-col p-2 gap-2 text-[#FC9421]">
      <div className="flex justify-between">
        <p className="text-[#227B9D] text-lg font-semibold">{title}</p>
        <div className="">{checkTypeIcon(type)}</div>
  
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1"><GiSandsOfTime />
        <p className="text-xs">{formatDate(duedate)}</p>
        </div>
        <p>{status}</p>
      </div>
    </div>
    </Link>
  )
}

export default Card