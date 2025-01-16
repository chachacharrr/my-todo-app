"use client";

import { TodoList } from "@/modules/class/TodoList";
import { onAuthStateChanged, User } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";

//contextの型定義
type TodoListContextType = {
  todoList: TodoList;
  setTodoList: React.Dispatch<React.SetStateAction<TodoList>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

//contextの箱を作る
export const TodoListContext = createContext<TodoListContextType | null>(null);

//contextProviderでコンポーネントにvalueを渡せるようにする
export const TodoListContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [todoList, setTodoList] = useState(new TodoList([]));
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList, user, setUser }}>
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
