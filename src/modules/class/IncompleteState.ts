import { ITodoItem, ITodoState } from "@/types/interface/todo";

export class IncompleteState implements ITodoState {
  toggleState(item: ITodoItem): void {
    item.complete = false;
  }
}
