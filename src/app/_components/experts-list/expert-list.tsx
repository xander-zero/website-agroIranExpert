import { Expert } from "@/types/expert.interface";
import React from "react";
import ExpertCard from "../expert-card/expert-card";

type ExpertsListProps = {
  experts: Expert[];
};

const ExpertsList: React.FC<ExpertsListProps> = ({
  experts,
}: ExpertsListProps) => {
  return (
    <div className="grid grid-cols-12 gap-3 place-content-center justify-items-center">
      {experts?.map((expert) => (
        <ExpertCard key={expert.uid} expert={expert} />
      ))}
    </div>
  );
};

export default ExpertsList;
