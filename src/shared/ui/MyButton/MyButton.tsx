import { Button } from 'antd';

type MyButtonProps = {
    children: string;
    onClick: () => void;
    type: 'primary' | 'link';
    disabled?: boolean;
    style?: React.CSSProperties;
}

export const MyButton = ({children, ...rest}: MyButtonProps) => {
  return (
    <Button {...rest}>
        {children}
    </Button>
  )
}
