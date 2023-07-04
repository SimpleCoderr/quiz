import { MyCheckbox } from "shared"

type AnswerOptionProps = {
    children: string;
    index: number
}

export const AnswerOption = ({index, children}: AnswerOptionProps) => {
  return (
    <MyCheckbox style={{fontSize: '16px'}} value={index}>{children}</MyCheckbox>
  )
}
