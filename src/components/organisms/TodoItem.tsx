"use client";

import React, { FC, useEffect, useState } from "react";
import { ITodoItem, ITodoList } from "@/types/interface/todo";
import { SecondaryButton } from "../atoms/SecondaryButton";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { db } from "../../../firebase.config";
import { useTodoListContext } from "@/context/TodoContext";
import { doc, updateDoc } from "firebase/firestore";

interface Props {
  todo: ITodoItem;
  deleteItem(id: string): void;
  updateItem(item: ITodoItem): void;
}

export const TodoItemComponent: FC<Props> = ({
  todo,
  deleteItem,
  updateItem,
}) => {
  const [checkState, setCheckState] = useState(todo.complete);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.text);
  const { user } = useTodoListContext();
  const { todoList, setTodoList } = useTodoListContext();

  // completeの状態でチェックボックスを更新
  useEffect(() => {
    setCheckState(todo.complete);
  }, [todo.complete]);

  const onChangeCheck = async (todo: ITodoItem) => {
    try {
      //firestoreの更新
      const updateRef = doc(db, `todo/${user?.uid}/items/${todo.id}`);
      await updateDoc(updateRef, {
        complete: !checkState,
      });
      //checkの状態を更新
      setCheckState(!checkState);
      //todoリストの更新
      const updatedTodo = { ...todo, complete: !checkState };
      const newTodoList = todoList.updateItem(updatedTodo) as ITodoList;
      setTodoList(newTodoList);
    } catch (error) {
      console.error("チェック状態の更新エラー:", error);
    }
  };

  const onDoubleClickUpdate = () => {
    setEdit(true);
  };

  const onBlurUpdate = (todo: ITodoItem) => {
    if (text !== "") {
      todo.text = text;
      updateItem(todo);
      setEdit(false);
    } else {
      alert("Todoを入力して下さい");
    }
  };

  const onClickDelete = (todo: ITodoItem) => {
    deleteItem(todo.id);
  };

  return (
    <div className="flex m-3 items-center">
      <input
        type="checkbox"
        className="mr-3"
        checked={todo.complete}
        onChange={() => onChangeCheck(todo)}
      />
      <div className="mr-3 " onDoubleClick={() => onDoubleClickUpdate()}>
        {edit ? (
          <input
            className="text-gray-800"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={() => onBlurUpdate(todo)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onBlurUpdate(todo);
              }
            }}
          />
        ) : checkState ? (
          <s> {todo.text}</s>
        ) : (
          <p>{todo.text}</p>
        )}
      </div>
      <SecondaryButton onClick={() => onClickDelete(todo)}>
        <MdOutlineDeleteOutline />
      </SecondaryButton>
    </div>
  );
};
