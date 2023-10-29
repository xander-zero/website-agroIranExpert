import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isDisabled?: boolean;
  name: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({
  isDisabled = false,
  name,
  placeholder,
  ...rest
}: InputProps) => {
  return (
    <input
      {...rest}
      name={name}
      placeholder={placeholder}
      disabled={isDisabled}
      className="px-2 py-3 w-full text-base-25 border border-base-content rounded-lg text-[12px] outline-none"
    />
  );
};

export default Input;
