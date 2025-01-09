"use client";

import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { TodoListCard } from "@/components/organisms/TodoListCard";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const onClickCreate = () => {
    router.push("/create");
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
