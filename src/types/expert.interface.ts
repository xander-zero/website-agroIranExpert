
export interface ExpertsCountGroupByProvince {
  count: number;
  province: string;
  provinceId: number;
}

export interface ExpertCountData {
  confirmedExpertsCount: number;
  confirmedExpertsCountGroupByProvince: ExpertsCountGroupByProvince[];
}

export interface AcademicDegree {
  id: number;
  categoryEN: string;
  categoryFA: string;
  name: string;
}

export interface AcademicFields {
  id: number;
  categoryEN: string;
  categoryFA: string;
  name: string;
}

export interface AcademicRanks {
  id: number;
  categoryEN: string;
  categoryFA: string;
  name: string;
}

export type ExecutiveSkillsStatus =
  | "EXECUTIVE_SKILLS_ACTIVITY"
  | "EXECUTIVE_SKILLS_CONSULTING";

export interface ExecutiveSkills {
  id: number;
  categoryEN: ExecutiveSkillsStatus;
  categoryFA: string;
  name: string;
}

export type ExpertiesesStatus =
  | "EXPERTISES_FARMS"
  | "EXPERTISES_LIVESTOCK_POULTRY"
  | "EXPERTISES_EARTHEN_GREENHOUSE"
  | "EXPERTISES_VETERINARY_MEDICINE"
  | "EXPERTISES_HYDROPONIC_GREENHOUSE"
  | "EXPERTISES_GARDENS";

export interface Expertieses {
  id: number;
  categoryEN: ExpertiesesStatus;
  categoryFA: string;
  name: string;
}

export interface ExpertsBadges {
  id: number;
  categoryEN: "EXPERTS_BADGES";
  categoryFA: string;
  name: string;
  iconURL: string;
}

export interface ExpertsSorts {
  id: number;
  categoryEN: "EXPERTS_SORTS";
  categoryFA: string;
  name: string;
}

export interface ExpertsSurveyOptions {
  id: number;
  categoryEN: "EXPERTS_SURVEY_OPTIONS";
  categoryFA: string;
  name: string;
}

export interface ExpertsSymbols {
  id: number;
  categoryEN: "EXPERTS_SYMBOLS";
  categoryFA: string;
  name: string;
  iconURL: string;
  iconLargeURL: string;
}

type ProfessionsStatus =
  | "PROFESSIONS_COMPREHENSIVE_PROFESSIONS"
  | "PROFESSIONS_LIVESTOCK_POULTRY"
  | "PROFESSIONS_GREENHOUSE"
  | "PROFESSIONS_FARMS_AND_GARDENS"
  | "PROFESSIONS_VETERINARY_MEDICINE";

export interface Professions {
  id: number;
  categoryEN: ProfessionsStatus;
  categoryFA: string;
  name: string;
}

export interface WorkplaceOrganization {
  id: number;
  categoryEN: "WORKPLACE_ORGANIZATIONS";
  categoryFA: string;
  name: string;
  positionsIds: number[];
}

export interface WorkplaceOrganizationPosition {
  id: number;
  categoryEN: "WORKPLACE_ORGANIZATIONS_POSITIONS";
  categoryFA: string;
  name: string;
  academicRanksIds: null;
  workplaceOrganizationTypeIds: [];
}

export interface ExpertFields {
  ACADEMIC_DEGREE: AcademicDegree[];
  ACADEMIC_FIELDS: AcademicFields[];
  ACADEMIC_RANKS: AcademicRanks[];
  EXECUTIVE_SKILLS: ExecutiveSkills[];
  EXPERTISES: Expertieses[];
  EXPERTS_BADGES: ExpertsBadges;
  EXPERTS_SORTS: ExpertsSorts;
  EXPERTS_SURVEY_OPTIONS: ExpertsSurveyOptions;
  EXPERTS_SYMBOLS: ExpertsSymbols[];
  PROFESSIONS: Professions[];
  WORKPLACE_ORGANIZATIONS: WorkplaceOrganization;
  WORKPLACE_ORGANIZATIONS_POSITIONS: WorkplaceOrganizationPosition;
}

type Survey = {
  participantCount: number;
  scientificInformationAvg: number;
  educationalContentAvg: number;
  executiveSkillsAvg: number;
  supportAvg: number;
  responsivenessAvg: number;
};

type SymbolType = {
  id: number;
  categoryEN: string;
  categoryFA: string;
  name: string;
  iconURL: string;
  iconLargeURL: string;
};

type Expertise = {
  id: number;
  categoryEN: string;
  categoryFA: string;
  name: string;
};

type Profession = {
  id: number;
  categoryEN: string;
  categoryFA: string;
  name: string;
};

type AcademicField = {
  id: number;
  categoryEN: string;
  categoryFA: string;
  name: string;
};

type ConsultingField = {
  id: number;
  categoryEN: string;
  categoryFA: string;
  name: string;
};

type WorkplaceOrganizationType = {
  id: number;
  categoryEN: string;
  categoryFA: string;
  name: string;
  positionsIds: number[];
};

export type TExperyKey = '1' | '2' | '3' | '4' | '5' | '6' | '7' 

export interface Expert {
  uid: string;
  zone: string;
  role: string;
  city: string;
  email: string;
  score: number;
  cover: string;
  avatar: string;
  resume: string;
  cityId: number;
  status: string;
  survey: Survey;
  symbol: SymbolType;
  aboutMe: null | string;
  symbolId: number;
  symbolUrl:string,
  username: string;
  lastName: string;
  province: string;
  phoneNumber:string,
  instagramId:string,
  takId:string,
  telegramId:string,
  whatsappPhoneNumber:string,
  badgesIds: number[];
  firstName: string;
  university: string;
  provinceId: number;
  expertises: Expertise[];
  expertCode: string;
  linkedInURL: null | string;
  professions: Profession[];
  academicRank: null | string;
  academicField: AcademicField;
  latinLastName: string;
  expertisesIds: number[];
  academicRankId: null | string;
  academicDegree: AcademicDegree;
  professionsIds: number[];
  activityFields: AcademicFields[];
  researchGateURL: null | string;
  academicFieldId: number;
  otherExpertises: null | string;
  consultingFields: ConsultingField[];
  academicDegreeId: TExperyKey;
  otherProfessions: null | string;
  googleScholarURL: null | string;
  activityFieldsIds: number[];
  consultingFieldsIds: number[];
  academicOrientation: string;
  phoneNumberIsPublic: boolean;
  agriculturalActivity: boolean;
  otherSocialNetworkURL: null | string;
  workplaceOrganizationType: WorkplaceOrganizationType;
  workplaceOrganizationTypeId: number;
}

export type Experts = Expert[]