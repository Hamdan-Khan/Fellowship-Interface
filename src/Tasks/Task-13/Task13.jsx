import React from "react";

const Task13 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [details, setDetails] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
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
        <input
          type="text"
          className="focus:outline-none border border-zinc-400 px-3 py-1 rounded-md"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="focus:outline-none border border-zinc-400 px-3 py-1 rounded-md"
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          className="focus:outline-none border border-zinc-400 px-3 py-1 rounded-md"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={submitHandler}
          className="bg-black px-4 py-1 font-semibold text-white rounded-md"
        >
          Submit
        </button>
      </form>
      {(details.name || details.age || details.city) && (
        <div className="border p-4 w-[550px]">
          <h1 className="text-2xl font-bold">Details:</h1>
          <h4 className="text-md font-semibold my-1">
            Name:{"  "}
            <span className="underline font-normal">
              {details.name ? details.name : ""}
            </span>
          </h4>
          <h4 className="text-md font-semibold my-1">
            Age:{"  "}
            <span className="underline font-normal">
              {details.age ? details.age : ""}
            </span>
          </h4>
          <h4 className="text-md font-semibold my-1">
            City:{"  "}
            <span className="underline font-normal">
              {details.city ? details.city : ""}
            </span>
          </h4>
        </div>
      )}
    </div>
  );
};

export default Task13;
