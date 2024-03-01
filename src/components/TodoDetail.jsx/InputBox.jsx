import React from 'react'

function InputBox({label,detail,placeholder,setState}) {

  const handleChange = (e) => {
    setState(e.target.value)
  }
  return (
    <div className="py-2">
      <p className="text-[#227B9D] font-semibold">{label}</p>
      <input className="p-2 bg-white rounded-lg drop-shadow-xl w-full" value={detail} type='text' placeholder = {placeholder} onChange={handleChange}/>
    </div>
  )
}

export default InputBox