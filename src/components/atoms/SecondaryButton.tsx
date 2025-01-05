import { BaseButton } from "./BaseButton";

type Props = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SecondaryButton = (props: Props) => {
  return <BaseButton {...props} className="bg-gray-400" />;
};
