import React from "react";
import DataBox from "./DataBox";
import { formatDate } from "../../../functions/Utils";
import { deleteTodo } from "../../../functions/API";
import { useNavigate } from "react-router-dom";

function ShowData({ selectedTodo }) {
  const navigate = useNavigate();
  const afterClick = () => {
    deleteTodo(selectedTodo._id).then(() => navigate("/timeline"));
  };

  return (
    <div>
      {/* Show data */}

      <div className="px-10">
        <DataBox label={"Title"} detail={selectedTodo.name} />
        <DataBox label={"Description"} detail={selectedTodo.description} />
        <DataBox label={"Status"} detail={selectedTodo.status} />
        <DataBox label={"Type"} detail={selectedTodo.type} />
        <DataBox label={"Due Date"} detail={formatDate(selectedTodo.dueDate)} />

        <button
          className="text-red-500 outline outline-red-500 p-2 px-4 rounded-lg mt-9 w-full 
          hover:bg-red-500 hover:duration-300 hover:text-white"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Delete
        </button>
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg text-red-600">Delete</h3>
            <p className="py-4">Are you sure you want to delete this item?</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn border-sky-600 text-sky-600 border-2 hover:bg-sky-600 hover:text-white">
                  Cancel
                </button>
              </form>
              <button onClick={()=>afterClick()} className=" btn border-red-600 text-red-600 border-2 hover:bg-red-600 hover:text-white">
                Delete
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default ShowData;
