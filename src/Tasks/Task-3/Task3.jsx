import React, { useMemo, useState } from "react";

const Task3 = () => {
  const [count, setCount] = useState(0);
  console.log("Parent Component rendered");
  const changeCount = () => setCount(count + 1);
  return (
    <div className="flex flex-col items-center gap-3 h-screen py-24">
      <h1 className="text-3xl font-bold">useMemo Hook</h1>
      <div className="p-4 mt-4 border flex flex-col items-center justify-center gap-3 border-zinc-400 min-w-[300px] w-[400px]">
        <h1 className="text-2xl font-bold">useMemo demonstration</h1>
        <p className="text-justify">
          In this example, the React memo feature is demonstrated which is used
          to temporarily memorize such functions/components in which expensive
          computation is required.{" "}
          <span className="font-bold text-zinc-700">
            Open console log and observe the rendering.
          </span>
        </p>
        <ExpensiveComponent />
        <h2>Count: {count}</h2>
        <button
          className="bg-green-500 rounded-lg px-6 py-1 text-white font-bold"
          onClick={changeCount}
        >
          Change State
        </button>
      </div>
    </div>
  );
};

export const ExpensiveComponent = React.memo(() => {
  console.log("Expensive component rendered");
  return (
    <div className="border border-zinc-400 p-3">
      <h1 className="text-lg font-semibold">Expensive Component</h1>
    </div>
  );
});

export default Task3;
