import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Tasks from "./Pages/Tasks";
import React, { Suspense } from "react";
import { tasks } from "./context/tasks";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <>
          {tasks.map((task) => (
            <Route
              key={task.link}
              path={`/tasks/${task.link}`}
              element={
                <TaskWrapper taskNum={task.taskNum} taskLink={task.link} />
              }
            />
          ))}
        </>
      </Routes>
    </div>
  );
}

function TaskWrapper({ taskNum, taskLink }) {
  const TaskComponent = React.lazy(() =>
    import(`./Tasks/Task-${taskNum}/Task${taskNum}.jsx`)
  );

  return (
    <Suspense
      fallback={
        <div className="text-center font-bold text-3xl mt-5">Loading...</div>
      }
    >
      <TaskComponent />
    </Suspense>
  );
}

export default App;
