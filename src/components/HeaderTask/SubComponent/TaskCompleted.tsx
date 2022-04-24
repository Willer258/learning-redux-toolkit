import React from 'react'
import Task from '../../shared/Task'

function TaskCompleted({tasks}:any) {
const mesTaches: any[] = tasks
  return (
    <div className='bg-green-400 rounded text-white min-h-64 p-4'>
    <h3>Taches completés : {mesTaches.length}</h3>
  <div className='space-y-3'>
  {mesTaches.map((task:any,index) => <div key={index} > <Task task={task}/> </div>) }
    </div> 
  </div>
  )
}

export default TaskCompleted