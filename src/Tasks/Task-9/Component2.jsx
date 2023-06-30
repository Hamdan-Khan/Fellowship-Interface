import { useRecoilState, useRecoilValue } from "recoil";
import { countAtom, countSelector, modifier } from "./Store";

const Component2 = () => {
  const [count, setCount] = useRecoilState(countAtom);
  const [mod, setMod] = useRecoilState(modifier);

  const modifiedCount = useRecoilValue(countSelector);
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-2">
      <label htmlFor="modifier">Modifier Value</label>
      <input
        type="number"
        id="modifier"
        value={mod}
        min={0}
        onChange={(e) => setMod(e.target.value)}
        className="border px-3 py-0.5 rounded-md focus:outline-none border-zinc-300"
      />
      <p className=" mt-4 font-semibold">
        Modified count = Modifier value * Count
      </p>
      <button
        className="bg-yellow-600 text-white font-semibold px-6 py-1 rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        Modified Count is {modifiedCount}
      </button>
    </div>
  );
};

export default Component2;
