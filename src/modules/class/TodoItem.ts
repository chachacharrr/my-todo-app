import { ITodoItem } from "@/types/interface/todo";

export class TodoItem implements ITodoItem {
  public id: string;
  public text: string;
  public complete: boolean;
  public toggleState(item: ITodoItem): void {
    item.complete = !item.complete;
  }

  constructor(id: string, text: string, complete: boolean) {
    this.id = id;
    this.text = text;
    this.complete = complete;
  }
}
