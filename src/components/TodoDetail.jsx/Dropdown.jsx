import React from "react";

function Dropdown({ label, array, detail, setState }) {
  const handleChange = (e) => {
    setState(e.target.value)
  }
  return (
    <div className="py-2">
      <p className="text-[#227B9D] font-semibold">{label}</p>
      <select
        value={detail}
        className="p-2 bg-white rounded-lg drop-shadow-xl w-full focus:outline-[#FC9421] " onChange={handleChange}
      >
        {array.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
