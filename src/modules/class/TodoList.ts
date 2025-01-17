import { ITodoItem, ITodoList } from "@/types/interface/todo";

export class TodoList implements ITodoList {
  item: ITodoItem[];
  constructor(item: ITodoItem[]) {
    this.item = item;
  }

  addItem(item: ITodoItem): void {
    this.item.push(item);
  }
  deleteItem(id: string): ITodoList {
    return new TodoList(
      (this.item = this.item.filter((todo) => todo.id !== id))
    );
  }

  updateItem(item: ITodoItem): ITodoList {
    return new TodoList(
      (this.item = this.item.map((currentItem) => {
        if (currentItem.id === item.id) {
          return item;
        }
        return currentItem;
      }))
    );
  }
}
