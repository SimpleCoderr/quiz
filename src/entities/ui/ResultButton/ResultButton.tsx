import { MyButton } from "shared";

type ResultButtonProps = {
  onClick: () => void;
};

export const ResultButton = ({ onClick }: ResultButtonProps) => {
  return (
    <MyButton style={{ fontSize: "28px" }} onClick={onClick} type="link">
      Показать результаты
    </MyButton>
  );
};
