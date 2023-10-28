"use client";

import React from "react";
import Image from "next/image";

import { ExpertsCountGroupByProvince } from "@/types/expert.interface";
import { screenPosition } from "./constants";

type MapProps = {
  expertByProvince: ExpertsCountGroupByProvince[];
};

const Map: React.FC<MapProps> = ({ expertByProvince }: MapProps) => {
  function SVGClick() {
    // code to modify svg here, e.g.:
    var svgElement = document.getElementById("expertsection");
    if (svgElement instanceof SVGElement) {
      svgElement.style.fill = "#000000";
    }
  }

  return (
    <div className="col-span-6 w-full">
      <div className="relative sm:w-full sm:h-full [&>img]:w-full">
        <Image
          className="w-full"
          src="/images/iran.svg"
          alt="iran map"
          width={500}
          height={500}
        />
        {screenPosition.map((pos, index) =>
          expertByProvince[index]?.count > 0 ? (
            <div
              onMouseEnter={SVGClick}
              key={index}
              id={index.toString()}
              className="group "
            >
              <p
                style={{
                  position: "absolute",
                  left: `${pos[0]}%`,
                  top: `${pos[1]}%`,
                  color: "white",
                  fontSize: "95%",
                }}
              >
                <span className="bg-blue-500 text-xs px-1 py-1 rounded-full absolute cursor-pointer">
                  {expertByProvince[index]?.count}
                </span>

                <span className="absolute m-1 w-40 z-40 bg-blue-500 hover:shadow-2xl rounded-md p-1 text-white text-base text-center left-0 invisible group-hover:visible">
                  {expertByProvince[index]?.province}{" "}
                  {expertByProvince[index]?.count} کارشناس
                </span>
              </p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Map;
