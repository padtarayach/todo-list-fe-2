import React from 'react';


function FilterBar({setReload, reload, todo, setTodoFilter, textHeader, icon}) {

  const filterType = (type) => {
    if (type == 'all'){
      setReload(!reload)
    }

  const todoFiltered = todo.filter((e) => e.type == type)
  setTodoFilter(todoFiltered)
  }
 


  return (
    <div className="  pt-[25px] md:pt-[110px]">
      <div className="text-[#227B9D] md:justify-center text-3xl font-bold pb-6 px-6 flex gap-x-2 items-center">
        <p className="">{textHeader}</p>
        {icon}
      </div>

      <div className="flex justify-evenly font-semibold">
        <p
          onClick={() => filterType("all")}
          className="active:bg-[#227B9D] text-[#227B9D] px-4 py-1 rounded-md active:text-white"
        >
          All
        </p>
        <p
          onClick={() => filterType("personal")}
          className="active:bg-[#227B9D] text-[#227B9D] px-4 py-1 rounded-md active:text-white"
        >
          Personal
        </p>
        <p
          onClick={() => filterType("work")}
          className="active:bg-[#227B9D] text-[#227B9D] px-4 py-1 rounded-md active:text-white"
        >
          Work
        </p>
        <p
          onClick={() => filterType("life")}
          className="active:bg-[#227B9D] text-[#227B9D] px-4 py-1 rounded-md active:text-white"
        >
          Life
        </p>
        <p
          onClick={() => filterType("study")}
          className="active:bg-[#227B9D] text-[#227B9D] px-4 py-1 rounded-md active:text-white"
        >
          Study
        </p>
      </div>
    </div>
  )
}

export default FilterBar