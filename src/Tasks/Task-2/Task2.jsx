import React, { useRef } from "react";
import { useGlobalContext } from "../../context/Context";

const Task2 = () => {
  const ref = useRef();
  const inputRef = useRef();
  const changeText = () => {
    ref.current.innerText = inputRef.current.value;
  };
  const { contextState, setContextState } = useGlobalContext();
  return (
    <div className="flex flex-col items-center gap-3 h-screen py-24">
      <h1 className="text-3xl font-bold">useRef and useContext Hooks</h1>
      <h1>
        Write anything and click on change button, text will be changed by
        useRef hook
      </h1>
      <h2 className="text-xl font-semibold" ref={ref}>
        DEFAULT TEXT
      </h2>
      <input
        type="text"
        name="text"
        id="text"
        ref={inputRef}
        className="border rounded-lg border-zinc-300 focus:outline-none px-3 py-1"
      />
      <button
        className="bg-green-500 rounded-lg px-6 py-1 text-white font-bold"
        onClick={changeText}
      >
        Change
      </button>
      <div className="py-4 mt-4 border-t flex flex-col items-center justify-center gap-3 border-zinc-400 ">
        <h1 className="text-2xl font-bold">State managed by useContext</h1>
        <h3>{contextState}</h3>
        <button
          className="bg-green-500 rounded-lg px-6 py-1 text-white font-bold"
          onClick={() => setContextState(contextState + 1)}
        >
          Increase Count
        </button>
      </div>
    </div>
  );
};

export default Task2;
