import React from 'react';

export const Input: React.FC<Props> = ({
  type,
  className,
  placeholder,
  name,
  onChange,
  id,
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className={`focus:outline-none border-2 color-[#fff] border-[#fff] text-[20px] focus:ring-4 w-full h-[64px] bg-transparent p-[20px] focus:ring-[#5D6AD1] rounded-[15px] ${
        className ?? ''
      }`}
    />
  );
};

type Props = {
  id?: string;
  type: 'text' | 'email' | 'password' | 'file';
  name?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
