import React from 'react'

function FilterBar({setReload, reload, todo, setTodoFilter}) {

  const filterByType = (type) => {
    if (type == 'all'){
      setReload(!reload)
    }

  const todoFiltered = todo.filter((e) => e.type == type)
  setTodoFilter(todoFiltered)
  }
 


  return (
    <div className="flex justify-evenly pt-[60px] md:pt-[115px]">
            <p onClick={() => filterByType('all')} className='px-4 py-1 rounded-md text-[#227B9D] active:bg-[#227B9D] active:text-white font-semibold'>All</p>
            <p onClick={() => filterByType('work')} className='px-4 py-1 rounded-md text-[#227B9D] active:bg-[#227B9D] active:text-white font-semibold'>Work</p>
            <p onClick={() => filterByType('personal')} className='px-4 py-1 rounded-md text-[#227B9D] active:bg-[#227B9D] active:text-white font-semibold'>Personal</p>
            <p onClick={() => filterByType('life')} className='px-4 py-1 rounded-md text-[#227B9D] active:bg-[#227B9D] active:text-white font-semibold'>Life</p>
            <p onClick={() => filterByType('study')} className='px-4 py-1 rounded-md text-[#227B9D] active:bg-[#227B9D] active:text-white font-semibold'>Study</p>
        </div>
  )
}

export default FilterBar