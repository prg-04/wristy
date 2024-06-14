import Image from "next/image";
import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 bg-[#0A1929]">
      <div className="w-11 h-11 justify-center items-center bg-[#cd9d00] flex rounded-full">
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-[#B0C4DE]">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-[#d9d9d9]">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
