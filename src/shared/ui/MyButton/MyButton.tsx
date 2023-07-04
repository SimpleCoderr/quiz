import { Button } from 'antd';

type MyButtonProps = {
    children: string;
    disabled: boolean;
    onClick: () => void;
    type: 'primary' | 'link'
}

export const MyButton = ({children, ...rest}: MyButtonProps) => {
  return (
    <Button {...rest}>
        {children}
    </Button>
  )
}
