import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

const Task9 = () => {
  return (
    <div className="my-8">
      <h1 className="sm:text-3xl font-semibold text-center text-2xl">
        State Management - Intro to Redux, Recoil, Context
      </h1>
      <div>
        <Component1 />
        <Component2 />
      </div>
    </div>
  );
};

export default Task9;
