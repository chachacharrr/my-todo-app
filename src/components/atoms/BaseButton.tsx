import { FC } from "react";

type Props = {
  text: string;
  className?: string; // className を受け取るように修正
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const BaseButton: FC<Props> = (props: Props) => {
  return (
    <button onClick={props.onClick} className={` p-1 m-1 ${props.className} `}>
      {props.text}
    </button>
  );
};
