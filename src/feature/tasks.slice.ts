import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [{
         id: 0,
        task:'Init React project',
        completed: false,
    },
    {   id: 1,
        task:'Learn redux toolkit',
        completed:true
    }],
  },
  reducers: {
    getTask: (state, { payload }) => {
      state.tasks = payload;
    },
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
  completedTask: (state, { payload }) => {
    state.tasks[payload].completed = true;
  },
  NocompletedTask: (state, { payload }) => {
    state.tasks[payload].completed = false;
  },
  deleteTask: (state, { payload }) => {
    state.tasks.splice(payload, 1);

  }
  
  },
});




export const { getTask,addTask,completedTask,NocompletedTask,deleteTask} =
tasksSlice.actions;

export default tasksSlice.reducer;