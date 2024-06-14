import Image from "next/image";
import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        fullWidth && "w-full"
      } ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-[#B0E0E6] text-[#0a1929] border-[#B0E0E6]"
      } `}
    >
      {label}
      {iconURL && (
        <Image
          width={24}
          height={24}
          src={iconURL}
          alt="arrow-right-icon"
          className="ml-2 rounded-full w-5 h-5 text-[#1c1f2a]"
        />
      )}
    </button>
  );
};

export default Button;
