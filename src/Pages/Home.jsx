import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[500px] flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold text-center">
        Fellowship Tasks Interface.
      </h1>
      <p className="text-zinc-500">
        Made by{" "}
        <a
          className="inline hover:underline font-semibold text-zinc-600"
          href="https://hamdan-k.me"
          target="_blank"
        >
          Hamdan
        </a>
      </p>
      <div>
        <Link
          to={"/tasks"}
          className="text-white bg-zinc-800 shadow-md hover:shadow-xl rounded-lg py-2 sm:py-3 my-3 max-w-max text-xl px-9 sm:px-12"
        >
          Visit Tasks
        </Link>
      </div>
    </div>
  );
};

export default Home;
