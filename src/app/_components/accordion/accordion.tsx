"use client";

import React, { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-base-content rounded-lg mb-2">
      <div
        className="px-2 py-3  cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <h2 className="text-[12px] text-base-25 font-semibold">{title}</h2>
        <span
          className={`text-[12px] text-base-25 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="p-2 border-t border-base-content">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
