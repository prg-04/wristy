"use client"
import React from "react";
import Button from "./Button";
import Image from "next/image";
import {motion} from 'framer-motion'

const leftVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const rightVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <motion.div variants={leftVariants} initial='initial' whileInView="animate" className="flex-1">
        <Image
          src="/assets/images/specialoffer.jpg"
          alt="offer"
          width={673}
          height={787}
          className="object-contain w-full"
        />
      </motion.div>

      <motion.div variants={rightVariants} initial='initial' whileInView="animate" className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg text-[#B0E0E6]">
          <span className="text-[#d4af37]">Special</span> Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfil your unique
          desires, surpassing the longest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL="/assets/icons/arrow-right.svg" />
          <Button
            label="Learn more"
            backgroundColor="bg-[#0A1929]"
            borderColor="border-slate-gray"
            textColor="text-[#d9d9d9]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffers;
