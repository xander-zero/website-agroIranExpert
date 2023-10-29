import React from "react";

import { ExpertFields } from "@/types/expert.interface";
import FilterItems from "./FilterItems/filterItems";

async function getExpertFields(): Promise<ExpertFields> {
  const res = await fetch(`${process.env.API_BASE_URL}/statics/experts-fields`);
  const response = await res.json();
  const result = await response?.result?.data;
  return result;
}

const FilterSection = async () => {
  const expertFields = await getExpertFields();

  return (
    <div className="bg-white p-4 m-4 rounded-xl">
      <FilterItems expertFields={expertFields} />
    </div>
  );
};

export default FilterSection;
