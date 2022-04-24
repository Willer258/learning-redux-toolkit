import React from 'react'
import { useSelector } from 'react-redux';
import TaskCompleted from './SubComponent/TaskCompleted'
import TaskWorking from './SubComponent/TaskWorking'

function HeaderTask() {
  
  const taskData = useSelector((state:any) => state.tasks.tasks);
  const completedtasks = taskData.filter((task:any) => task.completed === true);
  const workingtasks = taskData.filter((task:any) => task.completed === false);
  return (
    <div >
      <h3>Total des taches {taskData.length}</h3>
 <div className='flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0'>
   <TaskWorking tasks={workingtasks}/>
    <TaskCompleted tasks={completedtasks}/>
 </div>
    </div>
   
  )
}

export default HeaderTask