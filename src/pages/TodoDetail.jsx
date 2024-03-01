import React, { useEffect, useState } from "react";

import { MdOutlineEdit } from "react-icons/md";
import Footer from "../components/GlobalComponents/Footer";
import HeaderTodo from "../components/TodoDetail.jsx/HeaderTodo";
import ShowData from "../components/TodoDetail.jsx/ShowData";
import EditData from "../components/TodoDetail.jsx/EditData";
import { useParams } from "react-router-dom";
import { getById } from "../../functions/API";

function TodoDetail() {
  const [editMode, setEditMode] = useState(false);
  const [selectedTodo,setSelectedTodo] = useState([]);
  const {id} = useParams()
  useEffect(()=>{
    getById(id).then((res) => setSelectedTodo(res))
  },[])

  return (
    <div className="bg-[#F8F8F8] h-screen">
      <HeaderTodo title={"Run with Me"} path={"/timeline"}/>
      <div className="flex justify-end p px-10">
        {editMode ? (
          <button
            onClick={() => setEditMode(!editMode)}
            className="flex justify-center items-center gap-2 outline-[#FC9421] outline text-[#FC9421] rounded-lg px-3 py-1"
          >
            Discard
          </button>
        ) : (
          <button
            onClick={() => setEditMode(!editMode)}
            className="flex justify-center items-center gap-2 bg-[#FC9421] text-white rounded-lg px-3 py-1"
          >
            Edit Task
            <MdOutlineEdit />
          </button>
        )}
      </div>
      {editMode ? <EditData selectedTodo={selectedTodo}/>:<ShowData selectedTodo={selectedTodo}/>}
      

      <Footer />
    </div>
  );
}

export default TodoDetail;
