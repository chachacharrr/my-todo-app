import { BaseButton } from "./BaseButton";

type Props = {
  text?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const PrimaryButton = (props: Props) => {
  return (
    <BaseButton
      {...props}
      className="bg-green-400 text-gray-800 hover:bg-green-300"
    />
  );
};
