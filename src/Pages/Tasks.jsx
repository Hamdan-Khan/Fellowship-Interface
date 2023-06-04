import React from "react";
import { Link } from "react-router-dom";
import { tasks } from "../context/tasks";

const Tasks = () => {
  return (
    <div className="flex flex-col items-center min-h-[450px] pb-6 border justify-center shadow-2xl rounded-xl m-8">
      <h1 className="text-3xl font-semibold my-4">LINKS TO TASKS:</h1>
      <ul className="text-xl flex flex-col gap-2">
        {tasks.map((task) => {
          const { title, taskNum, link } = task;
          return (
            <li key={taskNum}>
              <Link to={`/tasks/${link}`}>
                &#8658; <span className="underline">{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
