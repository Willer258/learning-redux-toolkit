import React from "react";
import Task from "../../shared/Task";

function TaskWorking(tasks:any) {
//   const latache: string = "Tache1";
const mesTaches: any[] = tasks.tasks;
// console.log(tasks.tasks[0].)
  return (
    <div className='bg-blue-400 rounded text-white min-h-64 p-4'>
      <h3>Tache a faire : {tasks.tasks.length}</h3>
      <div className='space-y-3'>
      {mesTaches.map((task:any,index) => <div key={index}> <Task task={task}/></div>) }</div>
    </div>
  );
}

export default TaskWorking;
