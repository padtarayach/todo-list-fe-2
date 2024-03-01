import React from 'react'

function TypeCard({icon,name}) {
  return (
    <div><div className="w-[136px] h-[136px] bg-white rounded-2xl flex flex-col justify-center items-center gap-y-3">
    {icon}
    <p className='font-semibold text-[20px] text-[#227B9D]'>{name}</p>
    </div></div>
  )
}

export default TypeCard