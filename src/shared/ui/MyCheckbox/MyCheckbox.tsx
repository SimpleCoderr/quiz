import { Checkbox,  } from "antd"

type MyCheckboxProps = {
    children: string;
    value: number;
}

export const MyCheckbox = ({children, value}: MyCheckboxProps) => {
  return (
    <Checkbox value={value}>{children}</Checkbox>
  )
}