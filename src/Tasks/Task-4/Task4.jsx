import React, { useEffect, useState } from "react";

// useFetch is a custom hook which can be used to make API calls by providing the URL.
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
};
const Task4 = () => {
  const data = useFetch("https://dummyjson.com/todos?limit=6");
  const todos = data.todos;
  return (
    <div className="flex flex-col items-center gap-3 h-screen py-24">
      <div className="min-w-[300px] w-[450px] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Custom Hooks</h1>
        <p>
          Hooks in React.js are reusable functions that provide a specific
          purpose. Their main purpose is to provide reusability and to aviod
          repitition of similar function. Their name begins with "use". Learn
          about it from the following demonstration:
        </p>
        <div className="p-4 mt-4 border flex flex-col items-center justify-center gap-3 border-zinc-400 ">
          <h1 className="text-lg font-semibold">
            These todos are obtained from useFetch Custom hook,{" "}
            <a
              href="https://github.com/Hamdan-Khan/Fellowship-Interface/blob/master/src/Tasks/Task-4/Task4.jsx"
              target="_blank"
              className="inline font-bold underline"
            >
              Link to code here
            </a>
          </h1>
          <ul>
            {todos.map((tod) => {
              const { todo } = tod;
              return <li>&rarr; {todo}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task4;
