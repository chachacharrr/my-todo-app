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
    const newTodo = new TodoItem(uuidv4(), text, false);
    const newTodoList = new TodoList([...todoList.item]);
    newTodoList.addItem(newTodo);
    setTodoList(newTodoList);
    router.push("/");
  };

  return (
    <div>
      <div className="flex justify-center mt-56">
        <div className="border-gray-800 border w-6/12 h-1/5 ">
          <form action="submit" className="m-3 flex">
            <label htmlFor="todo" className="w-20">
              Todo
            </label>
            <input
              placeholder="Todoを入力してください"
              type="text"
              name="todos"
              onChange={(e) => setText(e.target.value)}
              className="bg-gray-300 w-60"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onClickAddTodo();
                  e.preventDefault();
                }
              }}
            />
          </form>
          <PrimaryButton text="追加" onClick={onClickAddTodo} />
        </div>
      </div>
    </div>
  );
}
