"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
// import { LoginButton } from "../atoms/LoginButton";
// import { useRouter } from "next/navigation";

export const Navbar = () => {
  // const router = useRouter();
  // const onClickLogin = () => {
  //   router.push("/login");
  // };
  return (
    <>
      <div className="bg-blue-300 flex h-10 items-center justify-between text-gray-800">
        <div className="w-40 ml-10 ">
          <Link href="/">Todo App</Link>
        </div>
        <div className="flex mr-10 items-center">
          <div className="mr-3">
            {/* <LoginButton text="ログイン" onClick={onClickLogin} /> */}
          </div>
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
