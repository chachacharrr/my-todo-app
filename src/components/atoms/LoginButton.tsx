import { BaseButton } from "./BaseButton";

type Props = {
  text?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const LoginButton = (props: Props) => {
  return (
    <BaseButton
      {...props}
      className="bg-blue-300  hover:bg-blue-500  hover:text-white"
    />
  );
};
