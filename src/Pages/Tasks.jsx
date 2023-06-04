import React from "react";
import { Link } from "react-router-dom";

const tasks = [
  { title: "Routing in React", taskNum: 1, link: "task-1" },
  { title: "React Hooks- useContext & useRef", taskNum: 2, link: "task-2" },
  { title: "React Hooks- useMemo & useReducer", taskNum: 3, link: "task-3" },
  { title: "Custom Hooks in React", taskNum: 4, link: "task-4" },
  { title: "Styling: CSS Modules", taskNum: 5, link: "task-5" },
  { title: "Styling: Styled Components", taskNum: 6, link: "task-6" },
  { title: "Styling: Tailwind CSS", taskNum: 7, link: "task-7" },
  { title: "Styling: Framer Motion", taskNum: 8, link: "task-8" },
  {
    title: "State Management - Intro to Redux, Recoil, Context",
    taskNum: 9,
    link: "task-9",
  },
  { title: "Using Recoil with React", taskNum: 10, link: "task-10" },
  { title: "Forms in React", taskNum: 11, link: "task-11" },
  { title: "Forms Validation", taskNum: 12, link: "task-12" },
  { title: "React Hook Form", taskNum: 13, link: "task-13" },
];

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
