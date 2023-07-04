import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useEffect, useState } from "react";
import { AnswerOption } from "entities";
import s from "./QuestionBlock.module.scss";

type QuestionBlockProps = {
  index: number;
  question: string;
  variants: string[];
  changeVariant: (value: number) => void;
};
export const QuestionBlock = ({
  question,
  variants,
  index,
  changeVariant,
}: QuestionBlockProps) => {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    changeVariant(value);
  }, [value]);

  const numberQuestion = index + 1;

  const handleChange = (checkedValue: CheckboxValueType[]) => {
    // checkedValue - массив выбранных значений
    const clickedValue = checkedValue[checkedValue.length - 1];
    // берем последний элемент массива, т.к. нам нужно поставить галочку только на нем
    setValue(clickedValue as number);
  };
  return (
    <div>
      <h5 className={s.question}>
        {numberQuestion}) {question}
      </h5>
      <Checkbox.Group
        className={s.checkboxGroup}
        onChange={handleChange}
        value={[value]}
      >
        {variants.map((variant, index) => (
          <AnswerOption index={index} key={variant}>
            {variant}
          </AnswerOption>
        ))}
      </Checkbox.Group>
    </div>
  );
};
