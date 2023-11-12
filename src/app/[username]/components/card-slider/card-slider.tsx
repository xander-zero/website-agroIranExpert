"use client";

import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

type CardSliderProps<T> = {
  items: T;
};

const CardSlider = <T,>({ items }: CardSliderProps<T>) => {
  return (
    <div className="flex justify-center  items-center my-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="border border-[#e6dddd] shadow-xl rounded-xl !h-[450px]"
          >
            <div>
              <Swiper pagination={true} modules={[Pagination]}>
                {item.files.map((file) => (
                  <SwiperSlide key={file} className="!h-[300px]">
                    {file.toLowerCase().endsWith("mp4") ||
                    file.toLowerCase().endsWith("mov") ? (
                      <video
                        controls
                        src={
                          process.env.NEXT_PUBLIC_APP_ARVAN_S3_BASE_URL + file
                        }
                        className="object-contain rounded-[1rem] h-full w-full"
                      ></video>
                    ) : (
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_APP_ARVAN_S3_BASE_URL + file
                        }
                        alt={file}
                        className="rounded-[1rem] h-full w-full"
                        width={512}
                        height={400}
                        loading="lazy"
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="max-lg:w-full mt-3 p-4">
              <h1 className="text-black text-base font-semibold">
                {item.title}
              </h1>
              <h4 className="text-justify text-[#444444] text-xs font-normal my-4">
                {item.description}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
