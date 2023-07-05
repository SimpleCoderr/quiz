import { CheckboxValueType } from "antd/es/checkbox/Group";
import { MyCheckbox, useAppDispatch } from "shared";
import { changeVariantAC } from "../model";
import s from "./QuestionBlock.module.scss";
import { Checkbox } from "antd";

type QuestionBlockProps = {
  index: number;
  question: string;
  variants: string[];
  markedVariant: number | undefined;
};
export const QuestionBlock = ({
  question,
  variants,
  index,
  markedVariant,
}: QuestionBlockProps) => {
  const numberQuestion = index + 1;

  const dispatch = useAppDispatch();

  const handleChange = (checkedValue: CheckboxValueType[]) => {
    // checkedValue - массив выбранных значений
    const clickedValue = checkedValue[checkedValue.length - 1];
    // берем последний элемент массива, т.к. нам нужно отметить только его(только один вариант ответа должен быть отмеченным)
    dispatch(changeVariantAC(index, clickedValue as number));
  };
  return (
    <div className={s.questionBlock}>
      <h5 className={s.question}>
        {numberQuestion}) {question}
      </h5>
      <Checkbox.Group
        className={s.checkboxGroup}
        onChange={handleChange}
        value={[markedVariant]}
      >
        {variants.map((variant, index) => (
          <MyCheckbox value={index} key={variant} style={{fontSize: '16px'}}>
            {variant}
          </MyCheckbox>
        ))}
      </Checkbox.Group>
    </div>
  );
};