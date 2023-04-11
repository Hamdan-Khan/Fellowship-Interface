import { Route, Routes } from "react-router-dom";
import Task1 from "./Tasks/Task-1/Task1";
import Home from "./Pages/Home";
import Task2 from "./Tasks/Task-2/Task2";
import Tasks from "./Pages/Tasks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/task-1" element={<Task1 />} />
        <Route path="/tasks/task-2" element={<Task2 />} />
        <Route path="/tasks/task-3" element={<Task1 />} />
        <Route path="/tasks/task-4" element={<Task1 />} />
      </Routes>
    </div>
  );
}

export default App;
