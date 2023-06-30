import { useRecoilState } from "recoil";
import { todoItemState, todoListState } from "./Store";

const Task10 = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [todoItem, setTodoItem] = useRecoilState(todoItemState);

  const handleAddTodo = () => {
    if (todoItem !== "") {
      setTodoList([...todoList, todoItem]);
      setTodoItem("");
    } else {
      alert("Please enter something");
    }
  };

  const handleRemoveTodo = (index) => {
    setTodoList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col p-4 mt-7 gap-1 max-w-[500px] border border-zinc-300">
        <h1 className="font-semibold text-2xl text-center mb-4">
          Todos App managed by Recoil
        </h1>
        <div className="flex flex-row">
          <input
            type="text"
            className="focus:outline-none border border-zinc-300 mr-2 flex-grow px-2"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="bg-green-500 text-white px-5 py-0.5 rounded-md font-semibold max-w-max"
          >
            Add Todo
          </button>
        </div>
        {todoList.map((todo, index) => (
          <div key={index} className="flex border border-zinc-300 my-1">
            <p className="px-2 border-r border-zinc-300 py-0.5">{index + 1}</p>
            <p className="flex-grow px-2 py-0.5">{todo}</p>
            <button
              className="border-l select-none bg-red-500 text-white border-zinc-300 px-2 py-0.5 font-semibold"
              onClick={() => handleRemoveTodo(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task10;
