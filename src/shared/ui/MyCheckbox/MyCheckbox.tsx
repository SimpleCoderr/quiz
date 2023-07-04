import { Checkbox,  } from "antd"

type MyCheckboxProps = {
    children: string;
    value: number;
    style: React.CSSProperties;
}

export const MyCheckbox = ({children, value, style}: MyCheckboxProps) => {
  return (
    <Checkbox style={style} value={value}>{children}</Checkbox>
  )
}