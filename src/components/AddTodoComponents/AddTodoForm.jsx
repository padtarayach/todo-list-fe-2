import React, { useState } from "react";
import { createTodo } from "../../../functions/API";
import { useNavigate } from "react-router-dom";
import InputBox from "../TodoDetail.jsx/InputBox";
import Dropdown from "../TodoDetail.jsx/Dropdown";
import { formatDate } from "../../../functions/Utils";

const AddTodoForm = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("pending");
  const [type, setType] = useState("work");
  const [dueDate, setDuedate] = useState(new Date());

  const typeArray = ["work", "study", "life", "personal"];
  const statusArray = ["pending", "working", "finish"];

  const navigate = useNavigate();

  const createTodoOnclick = () => {
    const todoObj = {
      name: name,
      description: desc,
      status: status,
      type: type,
      dueDate: formatDate(dueDate),
    };
    console.log(todoObj);

    createTodo(todoObj).then(() => navigate("/timeline"));
  };

  return (
    <div className="px-6 pt-5 container mx-auto">
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
          className="focus:outline-[#FC9421] p-2 bg-white rounded-lg drop-shadow-xl w-full"
          type="date"
          value={dueDate}
          onChange={(e) => setDuedate(e.target.value)}
        />
      </div>
      <button
        onClick={() => createTodoOnclick()}
        className="text-white  bg-[#227B9D] p-2 px-4 rounded-lg mt-7 w-full hover:scale-[102%] duration-300"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodoForm;
