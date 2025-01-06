import { TodoItemComponent } from "./TodoItem";
import { TodoItem } from "@/modules/class/TodoItem";

export const TodoListCard = () => {
  const deleteItem = () => {
    alert("deleteが実行");
  };

  const updateItem = () => {
    alert("updateが実行");
  };

  const todo: TodoItem = {
    id: "1",
    text: "サンプルテキスト",
    complete: false,
    toggleState(): void {},
  };

  return (
    <TodoItemComponent
      todo={todo}
      deleteItem={deleteItem}
      updateItem={updateItem}
    />
  );
};
