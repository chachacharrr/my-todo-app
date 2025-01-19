"use client";

import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { TodoListCard } from "@/components/organisms/TodoListCard";
import { useTodoListContext } from "@/context/TodoContext";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const { user } = useTodoListContext();

  const onClickCreate = () => {
    if (user) {
      router.push("/create");
    } else {
      router.push("/login");
      alert("ログインをして下さい");
    }
  };

  return (
    <>
      <div className="flex justify-end">
        <div className="m-5 ">
          <PrimaryButton text="新規作成" onClick={onClickCreate} />
        </div>
      </div>
      <TodoListCard />
    </>
  );
}
