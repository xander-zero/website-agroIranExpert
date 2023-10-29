import { EXPERT_ACTIVE_FIELDS } from "@/enum/expert-active-fields";
import { Expert, TExperyKey } from "@/types/expert.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ExpertCardProps = {
  expert: Expert;
};

const ExpertCard: React.FC<ExpertCardProps> = ({ expert }: ExpertCardProps) => {
  return (
    <Link
      href={expert.username}
      className="relative col-span-12  xl:col-span-2 md:col-span-4 w-full "
    >
      {expert.symbolUrl && (
        <div className="absolute top-2 left-2 z-50 max-lg:top-1 max-lg:right-2">
          <Image
            src={expert.symbolUrl}
            alt="icon"
            className="object-contain"
            width={32}
            height={32}
          />
        </div>
      )}
      <div className="p-3 bg-white !rounded-xl flex flex-col items-center justify-center hover:shadow-md transition-all delay-150">
        <Image
          src={`${process.env.NEXT_PUBLIC_APP_ARVAN_S3_BASE_URL}${expert.avatar}`}
          alt={expert.username}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-center mt-4 mb-1">
          <h2 className="text-[14px] font-semibold text-base-25 mb-3">{`${
            EXPERT_ACTIVE_FIELDS[expert.academicDegreeId as TExperyKey]
          } ${expert.firstName} ${expert.lastName}`}</h2>
          <div>
            {expert?.activityFields?.map((herf, i) => (
              <span className="text-xs text-secondary font-semibold" key={i}>
                {herf.name}
                {i === expert?.activityFields.length - 1 ? null : "/"}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white mb-[-40px] z-10">
          <p className="text-[12px] text-base-25 font-semibold">
            {expert?.academicDegreeId === "7" || expert?.academicFieldId === 1
              ? "کاردان"
              : expert?.academicField?.name}
          </p>
        </div>
        <div className="h-[2px] w-full bg-base-content mt-8" />
        <div className="w-full flex items-center justify-between mt-6">
          <p className="text-[10px] text-gray font-semibold">
            کد کارشناس: {expert?.expertCode}
          </p>
          <p className="text-[10px] text-gray font-semibold">
            {expert?.province}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ExpertCard;
