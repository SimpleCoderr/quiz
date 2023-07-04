import { MyCheckbox } from "shared"

type AnswerOptionProps = {
    children: string;
    index: number
}

export const AnswerOption = ({index, children}: AnswerOptionProps) => {
  return (
    <MyCheckbox value={index}>{children}</MyCheckbox>
  )
}
