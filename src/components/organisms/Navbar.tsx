import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <div className="bg-blue-300 flex h-10 items-center justify-between text-gray-800">
        <div className="ml-4">
          <Link href="/">Todo App</Link>
        </div>
        <Link href="https://github.com/chachacharrr/my-todo-app">
          <div className="mr-4">
            <FaGithub />
          </div>
        </Link>
      </div>
    </>
  );
};
