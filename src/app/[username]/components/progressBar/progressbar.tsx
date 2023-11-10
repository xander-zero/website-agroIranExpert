import React from "react";

type ProgressBarProps = {
  title: string;
  percent: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  title,
  percent,
}: ProgressBarProps) => {
  return (
    <div className="flex items-center justify-between w-full my-4">
      <p className="text-[14px] ml-8 ">نحوه پاسخگویی</p>
      <div className="bg-gray w-[70%] h-2 rounded-xl">
        <div
          className="bg-primary h-2 rounded-xl"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-[14px] mr-7">100 /99</p>
    </div>
  );
};

export default ProgressBar;
