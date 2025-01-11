"use client";

import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { useTodoListContext } from "@/context/TodoContext";
import { TodoItem } from "@/modules/class/TodoItem";
import { TodoList } from "@/modules/class/TodoList";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateNewTodo() {
  const router = useRouter();
  const { todoList, setTodoList } = useTodoListContext();
  const [text, setText] = useState("");

  const onClickAddTodo = () => {
    if (text !== "") {
      const newTodo = new TodoItem(uuidv4(), text, false);
      const newTodoList = new TodoList([...todoList.item]);
      newTodoList.addItem(newTodo);
      setTodoList(newTodoList);
      router.push("/");
    } else {
      alert("Todoを入力して下さい");
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-56">
        <div className="border-lime-50 border-b-2 border-t-2 w-6/12 h-1/5 flex items-center">
          <form action="submit" className="m-3 flex p-5">
            <label htmlFor="todo" className="w-20 mr-3">
              新規Todo
            </label>
            <input
              placeholder="Todoを入力してください"
              type="text"
              name="todos"
              onChange={(e) => setText(e.target.value)}
              className="bg-gray-300 w-60 text-gray-800"
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.nativeEvent.isComposing === true) {
                  return;
                }
                if (e.key === "Enter") {
                  onClickAddTodo();
                  e.preventDefault();
                }
              }}
            />
          </form>
          <div className="flex h-1/5">
            <PrimaryButton text="追加" onClick={onClickAddTodo} />
          </div>
        </div>
      </div>
    </div>
  );
}
