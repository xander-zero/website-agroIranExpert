"use client";

import { ExpertFields } from "@/types/expert.interface";
import React from "react";
import Accordion from "../../accordion/accordion";
import AreaForm from "../AreaForm/area-form";
import Input from "../../form/Input/input";
import GroupCheckbox from "../../form/GroupCheckbox/GroupCheckbox";

type FilterItemsProps = {
  expertFields: ExpertFields;
};

const FilterItems: React.FC<FilterItemsProps> = ({
  expertFields,
}: FilterItemsProps) => {
  console.log("expertFields", expertFields);
  const executiveSkills = expertFields.EXECUTIVE_SKILLS;

  return (
    <div>
      <div>
        <Input name="search" placeholder="جستجوی کارشناس..." />
        <div className="my-6">
          <Accordion title="منطقه">
            <AreaForm />
          </Accordion>
          <Accordion title="حوزه فعالیت">
            <GroupCheckbox data={expertFields.EXECUTIVE_SKILLS} />
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FilterItems;
