"use client";

import React, { FC, useState } from "react";
import { ITodoItem } from "@/types/interface/todo";
import { SecondaryButton } from "../atoms/SecondaryButton";
import { MdOutlineDeleteOutline } from "react-icons/md";

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
  const [checkState, setCheackState] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.text);

  const onChangeCheck = (todo: ITodoItem) => {
    todo.toggleState(todo);
    setCheackState(todo.complete);
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
    console.log("deleteをクリック");
    deleteItem(todo.id);
  };

  return (
    <div className="flex m-3 items-center">
      <input
        type="checkbox"
        className="mr-3"
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
