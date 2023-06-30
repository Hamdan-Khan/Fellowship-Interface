import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "count",
  default: 0,
});

export const modifier = atom({
  key: "modifier",
  default: 0,
});

export const countSelector = selector({
  key: "count-modifier",
  get: ({ get }) => {
    const count = get(countAtom);
    const currentMod = get(modifier);

    return count * currentMod;
  },
});
