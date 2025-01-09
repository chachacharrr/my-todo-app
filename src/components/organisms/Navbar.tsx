import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <div className="bg-blue-300 flex h-10 items-center justify-between text-gray-800">
        <div className="flex w-40 ml-10 ">
          <Link href="/">Todo App</Link>
        </div>
        <div className="mr-10">
          <Link href="https://github.com/chachacharrr/my-todo-app">
            <div>
              <FaGithub />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
