export interface ITodoList {
  item: ITodoItem[];
  addItem(item: ITodoItem): void;
  deleteItem(id: string | number): void;
  updataItem(id: string | number, item: ITodoItem): void;
}

export interface ITodoItem {
  id: string | number;
  text: string;
  complete: boolean;
}

export interface ITodoState {
  toggleState(): void;
}
