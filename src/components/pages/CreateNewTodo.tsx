"use client";

import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { useTodoListContext } from "@/context/TodoContext";
import { TodoItem } from "@/modules/class/TodoItem";
import { TodoList } from "@/modules/class/TodoList";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../firebase.config";
import { addDoc, collection } from "firebase/firestore";

export default function CreateNewTodo() {
  const router = useRouter();
  const { todoList, setTodoList } = useTodoListContext();
  const [text, setText] = useState("");
  const { user } = useTodoListContext();

  const onClickAddTodo = async () => {
    if (text !== "") {
      const newTodo = new TodoItem(uuidv4(), text, false);
      const newTodoList = new TodoList([...todoList.item]);
      newTodoList.addItem(newTodo);
      setTodoList(newTodoList);
      console.log(`ユーザーID_${user?.uid}`);
      try {
        const todoRef = collection(db, "todo", user?.uid as string, "items");

        await addDoc(todoRef, {
          id: newTodo.id,
          text: newTodo.text,
          complete: newTodo.complete,
        });
        console.log("追加成功");
      } catch (e) {
        console.log(`エラー発生：${e}`);
      }

      router.push("/");
    } else {
      alert("Todoを入力して下さい");
    }
  };

  return (
    <div>
      <div className="flex justify-around mt-56">
        <div className="border-lime-50 border-b-2 border-t-2 w-11/12 md:w-6/12 h-1/5 flex items-center  justify-center">
          <form
            action="submit"
            className="m-0 p-0  md:m-3 flex md:p-5 flex-auto"
          >
            <label htmlFor="todo" className=" mr-3">
              新規Todo
            </label>
            <input
              placeholder="Todoを入力してください"
              type="text"
              name="todos"
              onChange={(e) => setText(e.target.value)}
              className="bg-gray-300  text-gray-800 flex-grow"
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
          <div className="flex h-1/5 mr-0 md:mr-4">
            <PrimaryButton text="追加" onClick={onClickAddTodo} />
          </div>
        </div>
      </div>
    </div>
  );
}
