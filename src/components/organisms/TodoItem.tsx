"use client";

import React, { FC, useState } from "react";
import { ITodoItem } from "@/types/interface/todo";
import { SecondaryButton } from "../atoms/SecondaryButton";

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
    todo.text = text;
    updateItem(todo);
    setEdit(false);
  };

  const onClickDelete = (todo: ITodoItem) => {
    console.log("deleteをクリック");
    deleteItem(todo.id);
  };

  return (
    <div className="flex m-3">
      <input
        type="checkbox"
        className="mr-3"
        onChange={() => onChangeCheck(todo)}
      />
      <div className="mr-3" onDoubleClick={() => onDoubleClickUpdate()}>
        {edit ? (
          <input
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
      <SecondaryButton text="削除" onClick={() => onClickDelete(todo)} />
    </div>
  );
};
