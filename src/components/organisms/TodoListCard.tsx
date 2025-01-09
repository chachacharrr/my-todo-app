import { useTodoListContext } from "@/context/TodoContext";
import { TodoItemComponent } from "./TodoItem";
import { ITodoItem, ITodoList } from "@/types/interface/todo";
// import { TodoItem } from "@/modules/class/TodoItem";

export const TodoListCard = () => {
  const { todoList, setTodoList } = useTodoListContext();

  const deleteItem = (id: string) => {
    const newTodoList = todoList.deleteItem(id) as ITodoList;
    setTodoList(newTodoList);
  };

  const updateItem = (item: ITodoItem) => {
    const newTodoList = todoList.updateItem(item) as ITodoList;
    setTodoList(newTodoList);
  };

  return (
    <div className=" flex justify-center">
      <div className="border rounded-xl w-2/3">
        <h1 className="justify-self-center m-3">TodoList</h1>
        {todoList.item.length > 0 ? (
          todoList.item.map((todo) => {
            return (
              <TodoItemComponent
                key={todo.id}
                todo={todo}
                deleteItem={deleteItem}
                updateItem={updateItem}
              />
            );
          })
        ) : (
          <div className="justify-self-center m-5 border-b-2">
            現在Todoはありません
          </div>
        )}
      </div>
    </div>
  );
};
