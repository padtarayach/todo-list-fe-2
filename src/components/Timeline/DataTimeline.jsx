import React from "react";
import Card from "./Card";

function DataTimeline({ todoData }) {
  return (
    <div className=" p-5 flex flex-col gap-y-3 pb-20">
      {todoData.map((item) => (
        <Card
          title={item.name}
          duedate={item.dueDate}
          status={item.status}
          type={item.type}
          id = {item._id}
        />
      ))}
    </div>
  );
}

export default DataTimeline;
