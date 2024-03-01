import React from 'react'

function DataBox({label,detail}) {
  return (
    <div className="py-2">
      <p className="text-[#227B9D] font-semibold">{label}</p>
      <p className="p-2 bg-white rounded-lg drop-shadow-xl">
       {detail}
      </p>
    </div>
  )
}

export default DataBox