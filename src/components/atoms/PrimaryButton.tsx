import { BaseButton } from "./BaseButton";

type Props = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const PrimaryButton = (props: Props) => {
  return <BaseButton {...props} className="bg-green-400" />;
};
