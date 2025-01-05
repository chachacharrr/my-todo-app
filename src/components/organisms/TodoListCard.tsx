"use client";

import { useTodoListContext } from "@/context/TodoContext";
import { TodoItem } from "@/modules/class/TodoItem";
import { useState } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { SecondaryButton } from "../atoms/SecondaryButton";
import { useRouter } from "next/navigation";

export const TodoListCard = () => {
  const router = useRouter();
  const { todoList } = useTodoListContext();
  const [checkState, setCheackState] = useState(false);

  const onChangeCheck = (todo: TodoItem) => {
    todo.toggleState(todo);
    setCheackState(todo.complete);
  };

  const onClickUpdate = () => {
    router.push("/update");
  };

  return (
    <div className="flex justify-center h-auto">
      <div className=" border-stone-800 border w-6/12 ">
        <h1 className="flex justify-center">TodoList</h1>
        {todoList.item.map((todo) => (
          <div key={todo.id} className="flex m-3">
            <input
              type="checkbox"
              className="mr-3"
              onChange={() => onChangeCheck(todo)}
            />
            <div className="mr-3">
              {checkState ? <s> {todo.text}</s> : <p>{todo.text}</p>}
            </div>
            <PrimaryButton text="更新" onClick={onClickUpdate} />
            <SecondaryButton text="削除" />
          </div>
        ))}
      </div>
    </div>
  );
};
