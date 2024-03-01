import React, { useState } from "react";
import HeaderTodo from "../components/TodoDetail.jsx/HeaderTodo";
import InputBox from "../components/TodoDetail.jsx/InputBox";
import Dropdown from "../components/TodoDetail.jsx/Dropdown";
import { Toaster, toast } from "react-hot-toast";
import { createTodo } from "../../functions/API";
import { formatDate } from "../../functions/Utils";
import {useNavigate} from "react-router-dom"

function AddTodo() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("pending");
  const [type, setType] = useState("work");
  const [dueDate, setDuedate] = useState(new Date());

  const typeArray = ["work", "study", "life", "personal"];
  const statusArray = ["pending", "working", "finish"];

  const navigate = useNavigate()

  const createTodoOnclick = () => {
    const todoObj = {
      name: name,
      description: desc,
      status: status,
      type: type,
      dueDate: formatDate(dueDate),
    };
    console.log(todoObj);

    createTodo(todoObj).then(() => navigate('/timeline'));
  };

  return (
    <div className="">
      <HeaderTodo title={"New Task"} path={"/"} />
      <div className="flex justify-center">
        <img className="w-[250px]" src="./notebook.svg" alt="" />
      </div>
      <div className="px-6 pt-5">
        <Toaster position="top-right" reverseOrder={false} />

        <InputBox label={"Title"} detail={name} setState={setName} />
        <InputBox label={"Description"} detail={desc} setState={setDesc} />
        <Dropdown
          label={"Status"}
          array={statusArray}
          detail={status}
          setState={setStatus}
        />
        <Dropdown
          label={"Type"}
          array={typeArray}
          detail={type}
          setState={setType}
        />
        <div className="py-2">
          <p className="text-[#227B9D] font-semibold">Due Date</p>
          <input
            className="p-2 bg-white rounded-lg drop-shadow-xl w-full"
            type="date"
            value={dueDate}
            onChange={(e) => setDuedate(e.target.value)}
          />
        </div>
        <button onClick={() => createTodoOnclick()} className="text-white bg-[#227B9D] p-2 px-4 rounded-lg mt-7 w-full active:scale-105 duration-200">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
