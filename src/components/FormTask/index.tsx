import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTask } from "../../feature/tasks.slice";

function FormTask() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const taskData = useSelector((state:any) => state.tasks.tasks);
  const validateTask: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    let taskAdded: any = {};
  taskAdded.id = taskData.length;
   taskAdded.task = name;
   taskAdded.completed = false;
   dispatch(addTask(taskAdded));
   setName('')
    e.preventDefault();
  };
  return (
    <div className="space-y-5">
      <h3>Ajouter une tache</h3>
      <div className="">
        <form onSubmit={validateTask} className="flex flex-col space-y-9">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="mytask"
            className="outline-none duration-300 px-5 py-3 border-b-2 border-gray-400 hover:border-black focus:border-blue-500"
            type="text"
            placeholder="Nom de la tache"
          />
          <input
            className="px-5 py-3 rounded-lg self-end bg-blue-500 text-white duration-300 hover:bg-blue-700"
            type="submit"
            value="Ajouter"
          />
        </form>
      </div>
    </div>
  );
}

export default FormTask;
