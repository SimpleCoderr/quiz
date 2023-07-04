import { MyButton } from "shared";

type ResultButtonProps = {
  onClick: () => void;
};

export const ResultButton = ({ onClick }: ResultButtonProps) => {
  return (
    <MyButton style={{ fontSize: "20px" }} onClick={onClick} type="link">
      Показать результаты
    </MyButton>
  );
};
