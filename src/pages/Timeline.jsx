import React, { useEffect, useState } from "react";
import Footer from "../components/GlobalComponents/Footer";
import FilterBar from "../components/Timeline/FilterBar";
import EmptyData from "../components/Timeline/EmptyData";
import DataTimeline from "../components/Timeline/DataTimeline";
import { getAll } from "../../functions/API";

function Timeline() {

  const [todo,setTodo] = useState([]);
  const [todoFilter,setTodoFilter] = useState([]);
  const [reload,setReload] = useState(false);


  useEffect(()=> {
    getAll().then((res)=>{
      setTodo(res)
      setTodoFilter(res)
    });
  },[reload])
  return (
    <div className="bg-[#f8f8f8] h-screen">
      <FilterBar reload={reload} setTodoFilter={setTodoFilter} setReload={setReload} todo={todo}  />
      {todo.length !== 0 ? <DataTimeline todoData = {todoFilter} /> : <EmptyData/>}
      <Footer />
    </div>
  );
}

export default Timeline;
