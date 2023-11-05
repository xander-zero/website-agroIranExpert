import { ExpertFields } from "@/types/expert.interface";
import React from "react";
import SortList from "./SortList/SortList";

async function getExpertFields(): Promise<ExpertFields> {
  const res = await fetch(`${process.env.API_BASE_URL}/statics/experts-fields`);
  const response = await res.json();
  const result = await response?.result?.data?.expertsFields;
  return result;
}

const SortExperts = async () => {
  const expertFields = await getExpertFields();

  return <SortList sorts={expertFields.EXPERTS_SORTS} />;
};

export default SortExperts;
