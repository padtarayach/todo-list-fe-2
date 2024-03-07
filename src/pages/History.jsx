import React, { useEffect, useState } from 'react'
import { getFinish } from '../../functions/API';
import Layout from '../components/GlobalComponents/Layout';
import FilterBar from '../components/Timeline/FilterBar';
import DataTimeline from '../components/Timeline/DataTimeline';
import EmptyData from '../components/Timeline/EmptyData';
import { MdWorkHistory } from "react-icons/md";

const History = () => {
    const [todo,setTodo] = useState([]);
    const [todoFilter,setTodoFilter] = useState([]);
    const [reload,setReload] = useState(false);
  
    useEffect(()=> {
        getFinish().then((res)=>{
          setTodo(res)
          setTodoFilter(res)
        });
      },[reload])

      return (
        <div className="bg-[#f8f8f8] h-screen">
          <Layout>
          <FilterBar reload={reload} setTodoFilter={setTodoFilter} setReload={setReload} todo={todo} icon = {<MdWorkHistory />} textHeader={"History"} />
          {todo.length !== 0 ? <DataTimeline todoData = {todoFilter} /> : <EmptyData/>}
          </Layout>
        </div>
      );
}

export default History