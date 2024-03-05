import React, { useState } from "react";
import InputBox from "./InputBox";
import Dropdown from "./Dropdown";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../functions/Utils";
import { updateTodo } from "../../../functions/API";
import { toast, Toaster } from "react-hot-toast";

function EditData({ selectedTodo }) {
  const [name, setName] = useState(selectedTodo.name);
  const [desc, setDesc] = useState(selectedTodo.description);
  const [status, setStatus] = useState(selectedTodo.status);
  const [type, setType] = useState(selectedTodo.type);
  const [dueDate, setDuedate] = useState(formatDate(selectedTodo.dueDate));

  const typeArray = ["work", "study", "life", "personal"];
  const statusArray = ["pending", "working", "finish"];

  const { id } = useParams();

  const updateTodoOnclick = () => {
    const todoObj = {
      name: name,
      description: desc,
      status: status,
      type: type,
      dueDate: dueDate,
    };
    console.log(todoObj);

    updateTodo(id, todoObj).then(() => toast.success("Successfully updated!"));
  };

  return (
    <div>
      <div className="px-10">
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
            className="focus:outline-[#FC9421] p-2 bg-white rounded-lg drop-shadow-xl w-full"
            type="date"
            value={dueDate}
            onChange={(e) => setDuedate(e.target.value)}
          />
        </div>
        <button
          className="hover:bg-[#32708a]  hover:duration-300 text-white bg-[#227B9D] p-2 px-4 rounded-lg mt-9 w-full"
          onClick={() => updateTodoOnclick()}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditData;
