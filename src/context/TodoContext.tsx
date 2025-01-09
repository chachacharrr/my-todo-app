"use client";

import { TodoList } from "@/modules/class/TodoList";
import React, { createContext, useContext, useState } from "react";

//contextの型定義
type TodoListContextType = {
  todoList: TodoList;
  setTodoList: React.Dispatch<React.SetStateAction<TodoList>>;
};

//contextの箱を作る
export const TodoListContext = createContext<TodoListContextType | null>(null);

//contextProviderでコンポーネントにvalueを渡せるようにする
export const TodoListContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [todoList, setTodoList] = useState(new TodoList([]));
  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  );
};

//カスタムフックの作成
export const useTodoListContext = () => {
  const context = useContext(TodoListContext);
  if (!context) {
    throw new Error("contextListのエラー");
  }
  return context;
};
