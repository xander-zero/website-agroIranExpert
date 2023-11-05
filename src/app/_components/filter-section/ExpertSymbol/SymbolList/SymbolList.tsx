"use client";

import React, { useState } from "react";
import { ExpertFields, ExpertsSymbols } from "@/types/expert.interface";

type SymbolListProps = {
  expertFields: ExpertFields;
};

const SymbolList: React.FC<SymbolListProps> = ({
  expertFields,
}: SymbolListProps) => {
  const [symbolId, setSymbolId] = useState(null);
  const symbols: ExpertsSymbols[] = expertFields.EXPERTS_SYMBOLS;

  const reformatSymbols = [{ name: "همه", id: "all" }, ...symbols];

  return (
    <div className="flex items-center gap-x-3">
      {reformatSymbols.map((symbol) => (
        <div
          key={symbol.id}
          className="bg-white w-[200px] px-3 py-4 rounded-lg flex items-center justify-center"
        >
          <p className="text-base-25 text-[14px]">{symbol.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SymbolList;
