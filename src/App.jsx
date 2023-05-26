import { Route, Routes } from "react-router-dom";
import Task1 from "./Tasks/Task-1/Task1";
import Home from "./Pages/Home";
import Task2 from "./Tasks/Task-2/Task2";
import Tasks from "./Pages/Tasks";
import Navbar from "./components/Navbar";
import Task3 from "./Tasks/Task-3/Task3";
import Task4 from "./Tasks/Task-4/Task4";
import Task5 from "./Tasks/Task-5/Task5";
import Task6 from "./Tasks/Task-6/Task6";
import Task7 from "./Tasks/Task-7/Task7";
import Task8 from "./Tasks/Task-8/Task8";
import Task9 from "./Tasks/Task-9/Task9";
import Task10 from "./Tasks/Task-10/Task10";
import Task11 from "./Tasks/Task-11/Task11";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/task-1" element={<Task1 />} />
        <Route path="/tasks/task-2" element={<Task2 />} />
        <Route path="/tasks/task-3" element={<Task3 />} />
        <Route path="/tasks/task-4" element={<Task4 />} />
        <Route path="/tasks/task-5" element={<Task5 />} />
        <Route path="/tasks/task-6" element={<Task6 />} />
        <Route path="/tasks/task-7" element={<Task7 />} />
        <Route path="/tasks/task-8" element={<Task8 />} />
        <Route path="/tasks/task-9" element={<Task9 />} />
        <Route path="/tasks/task-10" element={<Task10 />} />
        <Route path="/tasks/task-11" element={<Task11 />} />
      </Routes>
    </div>
  );
}

export default App;
