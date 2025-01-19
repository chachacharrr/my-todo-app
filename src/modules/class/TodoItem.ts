import { ITodoItem } from "@/types/interface/todo";
import { Timestamp } from "firebase/firestore";

export class TodoItem implements ITodoItem {
  public id: string;
  public text: string;
  public complete: boolean;
  public createDate: Timestamp;
  public toggleState(): void {
    this.complete = !this.complete;
  }

  constructor(
    id: string,
    text: string,
    complete: boolean,
    createDate: Timestamp
  ) {
    this.id = id;
    this.text = text;
    this.complete = complete;
    this.createDate = createDate;
  }
}
