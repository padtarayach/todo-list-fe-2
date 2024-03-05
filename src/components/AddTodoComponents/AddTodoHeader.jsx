import React from "react";
import HeaderTodo from "../TodoDetail.jsx/HeaderTodo";

const AddTodoHeader = () => {
  return (
    <div>
      <HeaderTodo title={"New Task"} path={"/"} />
      <div className="flex justify-center">
        <img className="w-[250px]" src="./notebook.svg" alt="" />
      </div>
    </div>
  );
};

export default AddTodoHeader;
