"use client";

import { Select, SelectOption } from "@/app/_components/form/Select/select";
import { ExpertsSorts } from "@/types/expert.interface";
import React, { useState } from "react";

type SortListProps = {
  sorts: ExpertsSorts[];
};

const SortList: React.FC<SortListProps> = ({ sorts }: SortListProps) => {
  const [sortId, setSortId] = useState<SelectOption | undefined>();

  const options = sorts.map((sort) => ({ label: sort.name, value: sort.id }));

  return (
    <div className="w-full bg-white rounded-lg py-1 px-2">
      <div className="flex items-center">
        <p className="text-[14px] w-full">مرتب سازی براساس :</p>
        <Select
          value={sortId}
          options={options}
          onChange={(o) => setSortId(o)}
        />
      </div>
    </div>
  );
};

export default SortList;
