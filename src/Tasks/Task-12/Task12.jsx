import React, { useState } from "react";

const Task12 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState([]);
  const [details, setDetails] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const namePattern = /^[a-zA-Z0-9!@#$%^&*]{5,50}$/;
    const cityPattern = /^[a-zA-Z]{1,100}$/;
    const newErrors = [];

    if (!namePattern.test(name)) {
      newErrors.push("Username must be at least 5 characters long");
    }

    if (!age) {
      newErrors.push("Age is required");
    }

    if (!cityPattern.test(city)) {
      newErrors.push("City name is invalid");
    }

    if (newErrors.length > 0) {
      setDetails({});
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    setDetails({ name, age, city });
    console.log(details);
    setName("");
    setCity("");
    setAge("");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col w-[550px] gap-3 p-6">
        <h1 className="text-3xl font-bold">React Form</h1>
        <div className="w-full">
          <input
            type="text"
            className="focus:outline-none border w-full border-zinc-400 px-3 py-1 rounded-md"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          {errors.includes("Username must be at least 5 characters long") && (
            <p className="text-sm px-1 text-red-500">
              Username must be at least 5 characters long
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            type="number"
            className="focus:outline-none border w-full border-zinc-400 px-3 py-1 rounded-md"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.includes("Age is required") && (
            <p className="text-sm px-1 text-red-500">*Age is required field</p>
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            className="focus:outline-none border w-full border-zinc-400 px-3 py-1 rounded-md"
            value={city}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.includes("City name is invalid") && (
            <p className="text-sm px-1 text-red-500">*City name is invalid</p>
          )}
        </div>
        <button
          onClick={submitHandler}
          className="bg-black px-4 py-1 font-semibold text-white rounded-md"
        >
          Submit
        </button>
      </form>
      {(details.name || details.age || details.city) && (
        <div className="border p-4 w-[550px]">
          <h1 className="text-lg font-bold text-green-700">
            Validated Successfully!
          </h1>
        </div>
      )}
    </div>
  );
};

export default Task12;
