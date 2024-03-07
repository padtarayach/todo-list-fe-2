import React, { useEffect, useState } from "react";
import Footer from "../components/GlobalComponents/Footer";
import FilterBar from "../components/Timeline/FilterBar";
import EmptyData from "../components/Timeline/EmptyData";
import DataTimeline from "../components/Timeline/DataTimeline";
import {getUnfinish } from "../../functions/API";
import Layout from "../components/GlobalComponents/Layout";
import { MdOutlineFormatListBulleted } from "react-icons/md";

function Timeline() {

  const [todo,setTodo] = useState([]);
  const [todoFilter,setTodoFilter] = useState([]);
  const [reload,setReload] = useState(false);


  useEffect(()=> {
    getUnfinish().then((res)=>{
      setTodo(res)
      setTodoFilter(res)
    });
  },[reload])
  return (
    <div className="bg-[#f8f8f8] h-screen">
      <Layout>
      <FilterBar reload={reload} setTodoFilter={setTodoFilter} setReload={setReload} todo={todo} icon = {<MdOutlineFormatListBulleted />} textHeader={"Timeline"}  />
      {todo.length !== 0 ? <DataTimeline todoData = {todoFilter} /> : <EmptyData/>}
      </Layout>
    </div>
  );
}

export default Timeline;
