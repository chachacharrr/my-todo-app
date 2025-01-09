import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>

      <div className="bg-blue-300 flex  h-10 items-center justify-around text-gray-800">

        <div></div>
        <div className="grid-rows-12">Todo App</div>
        <Link href="https://github.com/chachacharrr/my-todo-app">
          <div className="flex justify-center items-center">
            <FaGithub />
          </div>
        </Link>
      </div>
    </>
  );
};
