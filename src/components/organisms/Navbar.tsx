"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LoginButton } from "../atoms/LoginButton";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { useTodoListContext } from "@/context/TodoContext";

export const Navbar = () => {
  const router = useRouter();
  const { user } = useTodoListContext();

  const onClickLogin = () => {
    router.push("/login");
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("ログアウト成功");
      router.push("/");
    } catch (error) {
      console.error("ログアウト失敗", error);
    }
  };

  return (
    <>
      <div className="bg-blue-300 flex h-10 items-center justify-between text-gray-800">
        <div className="w-40 ml-10 ">
          <Link href="/">Todo App</Link>
        </div>
        <div className="flex mr-10 items-center">
          {user ? (
            <div className="flex">
              <div className="mr-3">
                {user.displayName ? `${user.displayName}さん` : "ゲストさん"}
              </div>
              <div className="mr-3">
                <button onClick={handleLogout}>ログアウト</button>
              </div>
            </div>
          ) : (
            <div className="mr-3">
              <LoginButton text="ログイン" onClick={onClickLogin} />
            </div>
          )}
          <div className="mr-auto">
            <Link href="https://github.com/chachacharrr/my-todo-app">
              <div>
                <FaGithub />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
