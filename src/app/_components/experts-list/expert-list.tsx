import { Expert } from "@/types/expert.interface";
import React from "react";

type ExpertsListProps = {
  experts: Expert[];
};

const ExpertsList: React.FC<ExpertsListProps> = ({
  experts,
}: ExpertsListProps) => {
  return (
    <div>
      {experts?.map((expert) => (
        <div key={expert.uid}>{`${expert.firstName} ${expert.lastName}`}</div>
      ))}
    </div>
  );
};

export default ExpertsList;
