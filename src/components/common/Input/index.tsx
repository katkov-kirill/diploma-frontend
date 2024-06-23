export const Input: React.FC<Props> = ({ type, className, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`focus:outline-none border-2 color-[#fff] border-[#fff] text-[20px] focus:ring-4 w-full h-[64px] bg-transparent p-[20px] focus:ring-[#5D6AD1] rounded-[15px] ${
        className ?? ''
      }`}
    />
  );
};

type Props = {
  type: 'text' | 'email' | 'password';
  className?: string;
  placeholder?: string;
};
