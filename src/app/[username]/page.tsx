import { Expert } from "@/types/expert.interface";
import Image from "next/image";
import { NextRequest } from "next/server";
import SocialIcons from "./components/social-icons/SocialIcons";

// experts
async function getExpert(username: string): Promise<Expert> {
  const res = await fetch(
    `https://stgapi.agroiranexpert.com/experts/${username}`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  const response = await res.json();
  const result = await response?.result?.data?.expert;
  return result;
}

export default async function Expert({
  params: { username },
}: {
  params: { username: string };
}) {
  const expert = await getExpert(username);

  return (
    <div className="container mt-6">
      <div className="flex flex-col items-center">
        <p className="text-gray">
          متقاضی عزیز، مشاوره‌ کارشناسی دریافتی از کارشناس، با توجه به مهارت و
          دانش شخصی ایشان بوده و تعهدی برای مجموعه اگرو ایران اکسپرت ایجاد
          نخواهد کرد
        </p>
      </div>
      <div className="relative mt-4">
        <Image
          src={`${process.env.NEXT_PUBLIC_APP_ARVAN_S3_BASE_URL}${expert.cover}`}
          alt={expert.username}
          width={1300}
          height={368}
          className="w-full h-[400px]"
        />
        <div className="absolute right-0 bottom-0 !z-20 flex items-end gap-x-4">
          <div className="bg-primary  p-2 px-4 rounded-lg w-fit flex items-center gap-x-2">
            <Image
              className="rounded-full border border-primary"
              src={`${process.env.NEXT_PUBLIC_APP_ARVAN_S3_BASE_URL}${expert.avatar}`}
              alt="avatar"
              width={60}
              height={60}
            />
            <div className="flex flex-col gap-y-1">
              <p className="text-white text-[14px] font-semibold">
                {`${expert.firstName} ${expert.lastName}`}
              </p>
              <p className="text-white text-[12px]">
                {expert?.academicField?.name}
              </p>
            </div>
          </div>
          <div className="mb-[10px]">
            <SocialIcons expert={expert} />
          </div>
        </div>
        <div className="absolute left-6 bottom-4">
          <p className="text-[14px] text-primary font-semibold">
            زمینه مشاوره: {"  "}
            {expert?.consultingFields?.map((itm) => itm.name).join("/ ")}
          </p>
        </div>
      </div>
    </div>
  );
}
