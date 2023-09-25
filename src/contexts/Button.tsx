import { ButtonHTMLAttributes, FC } from 'react';

interface ReusableButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customStyles?: React.CSSProperties;
  styleType?: 'default' | 'primary' | 'secondary';
}

const Button: FC<ReusableButtonProps> = ({
  children,
  customStyles,
  styleType = 'default',
  ...rest
}) => {
  const presets = {
    default: {
      backgroundColor: '#2662f0',
      color: '#fff',
    },
    primary: {
      color: '#000',
    },
    secondary: {
      color: '#000',
    },
  };

  const buttonStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    border: 'none',
    width: '100%',
    height: '50px',
    ...presets[styleType],
    ...customStyles,
  };

  return (
    <button style={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
