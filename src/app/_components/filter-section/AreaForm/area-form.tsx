"use client";

import React, { useState } from "react";
import { Select, SelectOption } from "../../form/Select/select";

const options = [
  {
    label: "خراسان",
    value: 2,
  },
  {
    label: "شمال",
    value: 2,
  },
];

const AreaForm = () => {
  const [province, setProvince] = useState<SelectOption | undefined>(
    options[0]
  );
  const [city, setCity] = useState<SelectOption | undefined>(options[0]);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-2 w-full">
        <label className="text-[12px]">استان</label>
        <Select
          value={province}
          options={options}
          onChange={(o) => setProvince(o)}
        />
      </div>
      <div>
        <label className="text-[12px]">شهر</label>
        <Select value={city} options={options} onChange={(o) => setCity(o)} />
      </div>
    </div>
  );
};

export default AreaForm;
