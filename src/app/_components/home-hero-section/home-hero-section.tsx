import React from "react";
import Image from "next/image";

import { Button } from "../button";
import { ExpertCountData } from "@/types/expert.interface";
import Map from "./map/map";
import ExpertCountUp from "./countUp/countUp";

async function getExpertCountInfo(): Promise<ExpertCountData> {
  const res = await fetch(
    "https://stgapi.agroiranexpert.com/statics/experts-count",
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  const response = await res.json();
  const resutl = await response?.result?.data;
  return resutl;
}

const HomeHeroSection: React.FC = async () => {
  const expertCount = await getExpertCountInfo();

  return (
    <section className="container h-[100vh]">
      <div className="flex items-center gap-x-2">
        <Image
          src="/images/taklogo.png"
          alt="tak logo"
          width={50}
          height={30}
        />
        <p className="text-secondary font-semibold">
          شبکه اجتماعی کشاورزی ایران (تاک)
        </p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-6 flex flex-col p-10">
          <div className="w-[500px]">
            <p className="text-primary font-bold text-[30px]">
              شبکه جامع کارشناسان کشاورزی ایران
            </p>
            <p className="text-gray font-bold text-[30px] my-6">
              کارشناسان تخصصی و حِرَف کشاورزی
            </p>

            <p className="text-gray text-[16px] leading-8 my-16">
              حِرَف، مهارت‌ها و تخصص‌های مختلف حوزه کشاورزی در این صفحه در دسترس
              شما هستند. به راحتی ارتباط بگیرید، مشاوره دریافت نمایید و از خدمات
              کارشناسان بهره‌مند شوید. برای ارتباط با کارشناس مورد نظر خود
              میتوانید از جستجو و یا فیلترهای موجود استفاده کنید
            </p>
            <div className="flex items-center justify-between  gap-x-4">
              <Button className="w-full" variant="primary">
                ثبت نام کارشناس
              </Button>
              <Button className="w-full" variant="nutral">
                ماموریت و اساسنامه
              </Button>
            </div>
            <ExpertCountUp expertCount={expertCount.confirmedExpertsCount} />
          </div>
        </div>
        <Map
          expertByProvince={expertCount.confirmedExpertsCountGroupByProvince}
        />
      </div>
    </section>
  );
};

export default HomeHeroSection;
