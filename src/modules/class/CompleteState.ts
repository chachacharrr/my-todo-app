import { ITodoItem, ITodoState } from "@/types/interface/todo";

export class CompleteState implements ITodoState {
  toggleState(item: ITodoItem): void {
    item.complete = true;
  }
}
