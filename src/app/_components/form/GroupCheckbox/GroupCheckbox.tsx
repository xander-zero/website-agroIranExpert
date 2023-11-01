import React from "react";

import { useMultiselect } from "@/hooks/useMultiSelect";
import { ExecutiveSkills } from "@/types/expert.interface";

type GroupCheckboxProps = {
  data: ExecutiveSkills[];
};

const GroupCheckbox: React.FC<GroupCheckboxProps> = ({
  data,
}: GroupCheckboxProps) => {
  const { selected, isSelected, onChange } = useMultiselect([]);

  return (
    <ul className="list-none flex flex-col gap-y-1">
      {data.map((value) => (
        <li
          key={value.id}
          className="flex items-center gap-x-2 cursor-pointer"
          id={value.id.toString()}
        >
          <input
            id={value.id.toString()}
            type="checkbox"
            name={value.name}
            value={value.id}
            checked={isSelected(value.id.toString())}
            onChange={onChange}
          />
          <label
            htmlFor={value.id.toString()}
            className="text-[14px] text-base-25 cursor-pointer"
          >
            {value.name}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default GroupCheckbox;
