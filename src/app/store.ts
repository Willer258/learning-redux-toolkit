import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../feature/tasks.slice";

export default configureStore({
    reducer: {
      tasks:taskReducer ,
    },
  });
  