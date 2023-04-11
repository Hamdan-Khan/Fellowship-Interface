import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[500px] flex flex-col items-center justify-center gap-6">
      <h1 className="text-8xl font-bold text-center">
        Fellowship Tasks Interface.
      </h1>
      <p className="text-zinc-500">Made by Hamdan</p>
      <div>
        <Link
          to={"/tasks"}
          className="text-white bg-zinc-800 shadow-md hover:shadow-xl rounded-lg py-3 my-3 max-w-max text-xl px-12"
        >
          Visit Tasks
        </Link>
      </div>
    </div>
  );
};

export default Home;
