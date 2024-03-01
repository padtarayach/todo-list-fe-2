import React from 'react'
import DataBox from './DataBox'
import { formatDate } from '../../../functions/Utils'
import { deleteTodo } from '../../../functions/API'
import { useNavigate } from 'react-router-dom'

function ShowData({selectedTodo}) {

  const navigate = useNavigate()
  const afterClick = () => {
    deleteTodo(selectedTodo._id).then(()=>navigate('/timeline'))
  } 

  return (
    <div>

  {/* Show data */}

  <div className="px-10">
    
    <DataBox label={"Title"} detail={selectedTodo.name}/>
    <DataBox label={"Description"} detail={selectedTodo.description}/>
    <DataBox label={"Status"} detail={selectedTodo.status}/>
    <DataBox label={"Type"} detail={selectedTodo.type}/>
    <DataBox label={"Due Date"} detail={formatDate(selectedTodo.dueDate)}/>
    <button onClick={() => afterClick()} className="text-red-500 outline outline-red-500 p-2 px-4 rounded-lg mt-9 w-full">Delete</button>
  </div></div>
  )
}

export default ShowData