import { ExpertFields } from "@/types/expert.interface";
import React from "react";
import SymbolList from "./SymbolList/SymbolList";

async function getExpertFields(): Promise<ExpertFields> {
  const res = await fetch(`${process.env.API_BASE_URL}/statics/experts-fields`);
  const response = await res.json();
  const result = await response?.result?.data?.expertsFields;
  return result;
}

const ExpertSymbol: React.FC = async () => {
  const expertFields = await getExpertFields();

  return <SymbolList expertFields={expertFields} />;
};

export default ExpertSymbol;
