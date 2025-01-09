import { FC } from "react";

type Props = {
  text?: string;
  children?: React.ReactNode;
  className?: string; // className を受け取るように修正
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const BaseButton: FC<Props> = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={` p-1 m-1 rounded-md ${props.className} `}
    >
      {props.children || props.text}
    </button>
  );
};
