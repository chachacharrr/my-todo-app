export interface ITodoList {
  item: ITodoItem[];
  addItem(item: ITodoItem): void;
  deleteItem(id: string): void;
  updateItem(item: ITodoItem): void;
}

export interface ITodoItem {
  id: string;
  text: string;
  complete: boolean;
}

export interface ITodoState {
  toggleState(item: ITodoItem): void;
}
