import React from "react";

type WrapperTextProps = {
  title?: string;
  extra?: React.ReactElement;
  children: React.ReactNode;
};

const WrapperText: React.FC<WrapperTextProps> = ({
  title,
  extra,
  children,
}: WrapperTextProps) => {
  return (
    <div className="bg-white py-6 px-4 rounded-xl my-4">
      <div className="flex items-center justify-between">
        {title && (
          <h2 className="text-primary text-[16px] font-semibold">{title}</h2>
        )}
        {extra && extra}
      </div>
      {children}
    </div>
  );
};

export default WrapperText;
