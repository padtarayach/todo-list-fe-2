import React, { useState } from "react";
import AddTodoHeader from "../components/AddTodoComponents/AddTodoHeader";
import AddTodoForm from "../components/AddTodoComponents/AddTodoForm";

function AddTodo() {
  

  return (
    <div className="bg-[#F8F8F8]">
      <AddTodoHeader/>

      {/* Input form */}
      <AddTodoForm/>
    </div>
  );
}

export default AddTodo;
