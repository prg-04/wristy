"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCard({ imgURL, name, price }) {
  return (
    <CardContainer className="inter-var max-sm:w-full w-[280px] rounded-xl py-4 px-2">
      <CardBody className="flex flex-1 flex-col w-full max-sm:w-full ">
        <CardItem
          translateZ="100"
          className="w-full mt-4rounded-2xl rounded-2xl bg-white/20 "
        >
          <Image
            src={imgURL}
            height="500"
            width="500"
            className="w-[280px] h-[280px] object-contain group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="mt-8 flex justify-start gap-2.5">
          <Image
            src="/assets/icons/star.png"
            alt="rating"
            width={26}
            height={25}
          />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-indigo-300">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-blue-500 leading-normanl">
          {price}
        </p>
      </CardBody>
    </CardContainer>
  );
}
