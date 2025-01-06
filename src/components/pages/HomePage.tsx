"use client";

import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { TodoListCard } from "@/components/organisms/TodoListCard";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const onClickCreate = () => {
    router.push("/create");
  };
  const onClickTrash = () => {
    router.push("/trash");
  };

  return (
    <>
      <div className="flex justify-end">
        <div className="m-5 ">
          <PrimaryButton text="新規作成" onClick={onClickCreate} />
        </div>
      </div>
      <TodoListCard />
      <div className="flex justify-end ">
        <div className="m-5 ">
          <SecondaryButton text="ゴミ箱" onClick={onClickTrash} />
        </div>
      </div>
    </>
  );
}
