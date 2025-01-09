export interface ITodoList {
  item: ITodoItem[];
  addItem(item: ITodoItem): void;
  deleteItem(id: string): ITodoList;
  updateItem(item: ITodoItem): ITodoList;
}

export interface ITodoItem {
  id: string;
  text: string;
  complete: boolean;
  toggleState(item: ITodoItem): void;
}

export interface ITodoState {
  toggleState(item: ITodoItem): void;
}
