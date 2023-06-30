import { useRecoilState } from "recoil";
import { countAtom } from "./Store";

const Component1 = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div className="flex justify-center items-center p-4">
      <button
        className="bg-green-600 text-white font-semibold px-6 py-1 rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        Count is {count}
      </button>
    </div>
  );
};

export default Component1;
