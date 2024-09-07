export const Input: React.FC<Props> = ({
  type,
  className,
  placeholder,
  name,
  onChange,
  style,
  defaultValue
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className={`focus:outline-none border-2 color-[#fff] border-[#fff] text-[20px] focus:ring-4 w-full h-[64px] bg-transparent p-[20px] focus:ring-[#5D6AD1] rounded-[15px] ${
        className ?? ''
      }`}
      style={style} 
      defaultValue = {defaultValue}
    />
  );
};

type Props = {
  type: 'text' | 'email' | 'password';
  name?: string;
  className?: string;
  placeholder?: string;
  onChange?: any;
  style?: React.CSSProperties; 
  defaultValue?: string;
};
