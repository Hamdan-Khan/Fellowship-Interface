import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});
export const todoItemState = atom({
  key: "todoItem",
  default: "",
});
