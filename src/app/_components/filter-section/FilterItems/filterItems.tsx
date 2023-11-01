"use client";

import { ExpertFields } from "@/types/expert.interface";
import React, { useState } from "react";
import Accordion from "../../accordion/accordion";
import AreaForm from "../AreaForm/area-form";
import Input from "../../form/Input/input";
import GroupCheckbox from "../../form/GroupCheckbox/GroupCheckbox";
import { Select, SelectOption } from "../../form/Select/select";
import { transformArray } from "@/utils";

type FilterItemsProps = {
  expertFields: ExpertFields;
};

const FilterItems: React.FC<FilterItemsProps> = ({
  expertFields,
}: FilterItemsProps) => {
  const academicDegrees = transformArray(
    expertFields.ACADEMIC_DEGREE,
    "name",
    "id"
  );
  const academicFields = transformArray(
    expertFields.ACADEMIC_FIELDS,
    "name",
    "id"
  );

  const res = expertFields.ACADEMIC_FIELDS.map(
    (itm) => itm.categoryEN === "PROFESSIONS_COMPREHENSIVE_PROFESSIONS"
  );
  const professionsComprehensives = transformArray(
    expertFields.PROFESSIONS.filter(
      (item) => item.categoryEN === "PROFESSIONS_COMPREHENSIVE_PROFESSIONS"
    ),
    "name",
    "id"
  );

  const professionsFarmsAndGardens = transformArray(
    expertFields.PROFESSIONS.filter(
      (item) => item.categoryEN === "PROFESSIONS_FARMS_AND_GARDENS"
    ),
    "name",
    "id"
  );

  const professionsGreenhouses = transformArray(
    expertFields.PROFESSIONS.filter(
      (item) => item.categoryEN === "PROFESSIONS_GREENHOUSE"
    ),
    "name",
    "id"
  );

  const professionsLiveStockPoultrys = transformArray(
    expertFields.PROFESSIONS.filter(
      (item) => item.categoryEN === "PROFESSIONS_LIVESTOCK_POULTRY"
    ),
    "name",
    "id"
  );

  const professionsVeterinaryMedicines = transformArray(
    expertFields.PROFESSIONS.filter(
      (item) => item.categoryEN === "PROFESSIONS_VETERINARY_MEDICINE"
    ),
    "name",
    "id"
  );

  const expertisesGardens = transformArray(
    expertFields.EXPERTISES.filter(
      (item) => item.categoryEN === "EXPERTISES_GARDENS"
    ),
    "name",
    "id"
  );

  const expertisesFarms = transformArray(
    expertFields.EXPERTISES.filter(
      (item) => item.categoryEN === "EXPERTISES_FARMS"
    ),
    "name",
    "id"
  );

  const expertisesEarthenGreenhouses = transformArray(
    expertFields.EXPERTISES.filter(
      (item) => item.categoryEN === "EXPERTISES_HYDROPONIC_GREENHOUSE"
    ),
    "name",
    "id"
  );

  const expertisesLivestockPoultrys = transformArray(
    expertFields.EXPERTISES.filter(
      (item) => item.categoryEN === "EXPERTISES_LIVESTOCK_POULTRY"
    ),
    "name",
    "id"
  );

  const expertisesVeterinaryMedicines = transformArray(
    expertFields.EXPERTISES.filter(
      (item) => item.categoryEN === "EXPERTISES_VETERINARY_MEDICINE"
    ),
    "name",
    "id"
  );

  const [academicDegree, setAcademicDegree] = useState<SelectOption[]>([]);

  const [academicField, setAcademicField] = useState<SelectOption[]>([]);

  const [professionsComprehensive, setProfessionsComprehensive] = useState<
    SelectOption[]
  >([]);

  const [professionsFarmsGardens, setProfessionsFarmsGardens] = useState<
    SelectOption[]
  >([]);

  const [professionsGreenhouse, setProfessionsGreenhouses] = useState<
    SelectOption[]
  >([]);

  const [professionsLiveStockPoultry, setProfessionsLiveStockPoultrys] =
    useState<SelectOption[]>([]);

  const [professionsVeterinaryMedicine, setProfessionsVeterinaryMedicines] =
    useState<SelectOption[]>([]);

  const [expertisesGarden, setExpertisesGarden] = useState<SelectOption[]>([]);

  const [expertisesFarm, setExpertisesFarms] = useState<SelectOption[]>([]);

  const [expertisesEarthenGreenhouse, setExpertisesEarthenGreenhouse] =
    useState<SelectOption[]>([]);

  const [expertisesLivestockPoultry, setExpertisesLivestockPoultry] = useState<
    SelectOption[]
  >([]);

  const [expertisesVeterinaryMedicine, setExpertisesVeterinaryMedicine] =
    useState<SelectOption[]>([]);

  return (
    <div>
      <div>
        <Input name="search" placeholder="جستجوی کارشناس..." />
        <div className="my-6">
          <Accordion title="منطقه">
            <AreaForm />
          </Accordion>
          <Accordion title="حوزه فعالیت">
            <GroupCheckbox
              data={expertFields.EXECUTIVE_SKILLS.filter(
                (itm) => itm.categoryEN === "EXECUTIVE_SKILLS_ACTIVITY"
              )}
            />
          </Accordion>
          <Accordion title="زمینه مشاوره">
            <GroupCheckbox
              data={expertFields.EXECUTIVE_SKILLS.filter(
                (itm) => itm.categoryEN === "EXECUTIVE_SKILLS_CONSULTING"
              )}
            />
          </Accordion>
          <Accordion title="تحصیلات">
            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-[12px]">مدرک تحصیلی</label>
              <Select
                multiple
                value={academicDegree}
                options={academicDegrees}
                onChange={(o) => setAcademicDegree(o)}
              />
            </div>
            <div>
              <label className="text-[12px]">رشته تحصیلی</label>
              <Select
                multiple
                value={academicField}
                options={academicFields}
                onChange={(o) => setAcademicField(o)}
              />
            </div>
          </Accordion>
          <Accordion title="حرفه ها">
            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-[12px]">حرف جامع</label>
              <Select
                multiple
                value={professionsComprehensive}
                options={professionsComprehensives}
                onChange={(o) => setProfessionsComprehensive(o)}
              />
            </div>
            <div>
              <label className="text-[12px]">حرف زراعت و باغ</label>
              <Select
                multiple
                value={professionsFarmsGardens}
                options={professionsFarmsAndGardens}
                onChange={(o) => setProfessionsFarmsGardens(o)}
              />
            </div>
            <div>
              <label className="text-[12px]">حرف گلخانه</label>
              <Select
                multiple
                value={professionsGreenhouse}
                options={professionsGreenhouses}
                onChange={(o) => setProfessionsGreenhouses(o)}
              />
            </div>
            <div>
              <label className="text-[12px]">حرفه دام و طیور</label>
              <Select
                multiple
                value={professionsLiveStockPoultry}
                options={professionsLiveStockPoultrys}
                onChange={(o) => setProfessionsLiveStockPoultrys(o)}
              />
            </div>
            <div>
              <label className="text-[12px]">دامپزشکی</label>
              <Select
                multiple
                value={professionsVeterinaryMedicine}
                options={professionsVeterinaryMedicines}
                onChange={(o) => setProfessionsVeterinaryMedicines(o)}
              />
            </div>
          </Accordion>
          <Accordion title="تخصص ویژه">
            <div>
              <label className="text-[12px]">تخصص باغات</label>
              <Select
                multiple
                value={expertisesGarden}
                options={expertisesGardens}
                onChange={(o) => setExpertisesGarden(o)}
              />
            </div>
            <div>
              <label className="text-[12px]">تخصص زراعت</label>
              <Select
                multiple
                value={expertisesFarm}
                options={expertisesFarms}
                onChange={(o) => setExpertisesFarms(o)}
              />
            </div>
            <div>
              <label className="text-[12px]">تخصص گلخانه</label>
              <Select
                multiple
                value={expertisesEarthenGreenhouse}
                options={expertisesEarthenGreenhouses}
                onChange={(o) => setExpertisesEarthenGreenhouse(o)}
              />
            </div>
            <div>
              <label className="text-[12px]">تخصص دام و طیور</label>
              <Select
                multiple
                value={expertisesLivestockPoultry}
                options={expertisesLivestockPoultrys}
                onChange={(o) => setExpertisesLivestockPoultry(o)}
              />
            </div>
            <div>
              <label className="text-[12px]">دامپزشکی</label>
              <Select
                multiple
                value={expertisesVeterinaryMedicine}
                options={expertisesVeterinaryMedicines}
                onChange={(o) => setExpertisesVeterinaryMedicine(o)}
              />
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FilterItems;
