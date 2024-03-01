import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../../functions/Utils'

function Card({title, duedate, status, type, id}) {
  return (
    <Link to={`/detail/${id}`}>
    <div className="bg-white shadow-xl rounded-lg flex flex-col p-2 gap-2 text-[#FC9421]">
      <div className="flex justify-between">
        <p className="text-[#227B9D] text-lg font-semibold">{title}</p>
        <p>{status}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs">{formatDate(duedate)}</p>
        <p>{type}</p>
      </div>
    </div>
    </Link>
  )
}

export default Card