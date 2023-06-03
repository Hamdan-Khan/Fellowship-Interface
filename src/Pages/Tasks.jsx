import React from "react";
import { Link } from "react-router-dom";

const Tasks = () => {
  return (
    <div className="flex flex-col items-center min-h-[450px] pb-6 border justify-center shadow-2xl rounded-xl m-8">
      <h1 className="text-3xl font-semibold my-4">LINKS TO TASKS:</h1>
      <ul className="text-xl flex flex-col gap-2">
        <li>
          <Link to="/tasks/task-1">
            &#8658; <span className="underline">Routing in React</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks/task-2">
            &#8658;{" "}
            <span className="underline">React Hooks- useContext & useRef</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks/task-3">
            &#8658;{" "}
            <span className="underline">React Hooks- useMemo & useReducer</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks/task-4">
            &#8658; <span className="underline">Custom Hooks in react</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks/task-5">
            &#8658; <span className="underline">Styling: CSS Modules</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks/task-6">
            &#8658;{" "}
            <span className="underline">Styling: Styled Components</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks/task-7">
            &#8658; <span className="underline">Styling: Tailwind CSS</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks/task-8">
            &#8658; <span className="underline">Styling: Framer Motion</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks/task-9">
            &#8658;{" "}
            <span className="underline">
              {" "}
              State Management - Intro to Redux, Recoil, Context
            </span>
          </Link>
        </li>
        <li>
          <Link to="/tasks/task-10">
            &#8658; <span className="underline">Using Recoil with React</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks/task-11">
            &#8658; <span className="underline">Forms in React</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks/task-12">
            &#8658; <span className="underline">Forms Validation</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tasks;
