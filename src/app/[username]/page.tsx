import { Expert } from "@/types/expert.interface";
import Image from "next/image";
import SocialIcons from "./components/social-icons/SocialIcons";
import WrapperText from "./components/wrapper-text/wrapper-text";
import { Button } from "../_components/button";
import ProgressBar from "./components/progressBar/progressbar";
import { EXPERTIES_LIST, PROFESSIONS_LIST } from "@/constants/expert";
import ListItem from "./components/list-item/list-item";

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

  console.log("expert.professions", expert.professions);

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
          className="w-full h-[400px] rounded-lg"
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
      <WrapperText>
        <div className="flex items-center justify-between">
          <p>استان و شهر: {`${expert.province} ${expert.city}`}</p>
          <p>کد کارشناس: {expert.expertCode}</p>
        </div>
      </WrapperText>
      <WrapperText title="سخن کارشناس">
        <p>{expert.aboutMe}</p>
      </WrapperText>
      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-6">
          <div>
            <WrapperText title="سوگند نامه">
              <p className="text-[14px]">
                {`${expert?.firstName} ${expert?.lastName} هستم. رسالت من به عنوان کارشناس بخش
                  کشاورزی، ارائه آموزش صحیح، درست و به روز است. برای اعتلای
                  کشاورزی ایران تلاش می‌کنم و اولویت من حفاظت از آب، خاک و محیط
                  زیست میهن عزیزم است.`}
              </p>
            </WrapperText>
            <WrapperText title="خدمات کارشناس">
              <div className="flex items-center justify-between gap-x-4 mt-8">
                <Button
                  type="button"
                  variant="primary"
                  className="bg-secondary w-full"
                >
                  درخواست برنامه غذایی
                </Button>
                <Button type="button" variant="secondary" className="w-full">
                  درخواست بازدید
                </Button>
              </div>
            </WrapperText>
          </div>
        </div>
        <div className="col-span-6">
          <WrapperText
            extra={<Button size="small">تکمیل نظرسنجی</Button>}
            title="کارشناس از نگاه کشاورزان"
          >
            <ProgressBar
              title="نحوه پاسخگویی"
              percent={expert.survey.responsivenessAvg}
            />
            <ProgressBar
              title="اطلاعات علمی"
              percent={expert.survey.scientificInformationAvg}
            />
            <ProgressBar
              title="مهارت اجرایی"
              percent={expert.survey.executiveSkillsAvg}
            />
            <ProgressBar
              title="پیگیری و پشتیبانی"
              percent={expert.survey.supportAvg}
            />
            <ProgressBar
              title="محتوای آموزشی"
              percent={expert.survey.educationalContentAvg}
            />
          </WrapperText>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <ListItem
            keys={PROFESSIONS_LIST}
            items={expert.professions}
            title="حرفه ها"
          />
        </div>
        <div className="col-span-6">
          <ListItem
            keys={EXPERTIES_LIST}
            items={expert.expertises}
            title="تخصص ویژه"
          />
        </div>
      </div>
    </div>
  );
}
