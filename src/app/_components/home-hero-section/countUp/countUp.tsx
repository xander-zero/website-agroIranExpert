"use client";

import React from "react";
import CountUp from "react-countup";

type CountUpProps = {
  expertCount: number;
};

const ExpertCountUp: React.FC<CountUpProps> = ({
  expertCount,
}: CountUpProps) => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="flex items-center">
        <CountUp
          style={{ fontSize: "34px", color: "#005AC7" }}
          end={expertCount}
        />
        <p className="text-[20px] lg:text-[28px] text-primary">+</p>
      </div>
      <h3 className="text-primary text-[20px] font-semibold">
        کارشناس در خدمت شما
      </h3>
    </div>
  );
};

export default ExpertCountUp;
