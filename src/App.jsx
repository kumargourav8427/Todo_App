import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />}></Route>
          <Route path="/input" element={<TaskInput />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
