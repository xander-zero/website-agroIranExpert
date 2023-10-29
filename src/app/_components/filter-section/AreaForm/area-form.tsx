"use client";

import React, { useState } from "react";
import { Select } from "../../form/Select/select";

const options = [
  {
    label: "خراسان",
    value: 2,
  },
  {
    label: "خراسان",
    value: 2,
  },
];

const AreaForm = () => {
  const [province, setProvince] = useState("");
  return (
    <div>
      <div>
        <label>استان</label>
        {/* <Select options={options}  /> */}
      </div>
    </div>
  );
};

export default AreaForm;
