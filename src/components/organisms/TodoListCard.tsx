import { useTodoListContext } from "@/context/TodoContext";
import { TodoItemComponent } from "./TodoItem";
import { ITodoItem, ITodoList } from "@/types/interface/todo";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
// import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { TodoList } from "@/modules/class/TodoList";
// import { TodoList } from "@/modules/class/TodoList";

export const TodoListCard = () => {
  const { todoList, setTodoList } = useTodoListContext();
  const { user } = useTodoListContext();

  useEffect(() => {
    const fetchTodos = async () => {
      if (user) {
        const q = query(collection(db, `todo/${user.uid}/items`));
        const snapshot = await getDocs(q);
        // console.log(`スナップショット：${snapshot}`);
        const todoItems = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            text: data.text,
            complete: data.complete,
          };
        }) as ITodoItem[];
        setTodoList(new TodoList(todoItems));
      }
    };
    fetchTodos();
  }, [user, setTodoList]);

  console.log(todoList);

  const deleteItem = (id: string) => {
    const newTodoList = todoList.deleteItem(id) as ITodoList;
    deleteDoc(doc(db, `todo/${user?.uid}/items/${id}`));
    setTodoList(newTodoList);
  };

  // 次はアップデートの実装から！
  const updateItem = (item: ITodoItem) => {
    const newTodoList = todoList.updateItem(item) as ITodoList;
    const updateRef = doc(db, `todo/${user?.uid}/items/${item.id}`);
    updateDoc(updateRef, {
      text: item.text,
      complete: item.complete,
    });
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
