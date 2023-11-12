import { ExpertSkill } from "@/types/expert.interface";
import React from "react";
import WrapperText from "../wrapper-text/wrapper-text";
import CardSlider from "../card-slider/card-slider";

type SkillSliderProps = {
  expertId: string;
};

async function getExpertSkills(expertId: string): Promise<ExpertSkill[]> {
  const res = await fetch(
    `https://stgapi.agroiranexpert.com/experts/${expertId}/skills`
  );
  const response = await res.json();
  const result = await response?.result?.data?.skills;
  return result;
}

const SkillSlider: React.FC<SkillSliderProps> = async ({
  expertId,
}: SkillSliderProps) => {
  const expertSkills = await getExpertSkills(expertId);

  return (
    <div>
      <WrapperText title="مهارت و حرفه کارشناس">
        <CardSlider<ExpertSkill[]> items={expertSkills} />
        Hello World
      </WrapperText>
    </div>
  );
};

export default SkillSlider;
