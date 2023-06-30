import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-row justify-evenly text-2xl sm:text-3xl bg-zinc-800 font-semibold text-white py-3">
        <li className="hover:text-zinc-200">
          <Link to={-1}>&#x2190; Back</Link>
        </li>
        <li className="hover:text-zinc-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-zinc-200">
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
