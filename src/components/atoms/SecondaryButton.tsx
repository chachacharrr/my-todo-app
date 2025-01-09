import { BaseButton } from "./BaseButton";

type Props = {
  text?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SecondaryButton = (props: Props) => {
  return <BaseButton {...props} className="bg-gray-400" />;
};
