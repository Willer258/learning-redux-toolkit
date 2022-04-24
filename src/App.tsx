import React from "react";
import FormTask from "./components/FormTask";
import HeaderTask from "./components/HeaderTask";

function App() {
  return (
    <div className="h-[90vh] w-full flex flex-col items-center justify-between py-10">
      <h1 className="text-4xl text-center">My todolist</h1>
      <FormTask />
      <div>
        <HeaderTask />
      </div>
    </div>
  );
}

export default App;
