import React from "react";

const Task7 = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center flex-col gap-1 items-center shadow-xl border px-4 py-6 mt-20 rounded-xl">
        <h1 className="text-4xl font-bold">Tailwind CSS</h1>
        <p className="text-xl underline text-green-500 font-semibold">
          My Personal Favourite!
        </p>
        <p>This whole Tasks interface is styled using Tailwind CSS</p>
        <a
          target="_blank"
          href="https://github.com/Hamdan-Khan/Fellowship-Interface/tree/master/src/Tasks/Task-7"
          className="border border-black px-3 py-1 font-semibold bg-black text-white rounded-sm mt-3"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default Task7;
