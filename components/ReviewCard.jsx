import Image from "next/image";
import React from "react";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        width={500}
        height={500}
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image
          src="/assets/icons/star.png"
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold text-[#B0C4DE]">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
