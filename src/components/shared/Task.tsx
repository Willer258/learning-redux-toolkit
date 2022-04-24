import React from "react";
import { useDispatch } from "react-redux";
import { completedTask, deleteTask, NocompletedTask } from "../../feature/tasks.slice";

function Task({ task }: any) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center space-x-3">
      <span> {task.task}</span>{" "}
      <div className="space-x-3">
       {
        !task.completed === true ? (
          <button onClick={()=>dispatch(completedTask(task.id))} className={`bg-green-300  rounded px-2 py-3`}>
          Terminé 
        </button>) : (<button onClick={()=>dispatch(NocompletedTask(task.id))} className={`bg-blue-300  rounded px-2 py-3`}>
          Non Terminé
        </button>)
       } 
        <button onClick={()=>dispatch(deleteTask(task.id))} className="bg-red-400 text-white duration-300 hover:bg-red-600 rounded-full h-10 w-10">X</button>
      </div>{" "}
    </div>
  );
}

export default Task;
