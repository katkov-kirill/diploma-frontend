import React from 'react'

export const Input: React.FC<Props> = ({ type, className, placeholder, onChange }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={`focus:outline-none border-2 color-[#fff] border-[#fff] text-[20px] focus:ring-4 w-full h-[64px] bg-transparent p-[20px] focus:ring-[#5D6AD1] rounded-[15px] ${
        className ?? ''
      }`}
    />
  )
}

type Props = {
  type: 'text' | 'email' | 'password',
  className?: string,
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
};
