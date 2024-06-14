"use client"
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";


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


const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <motion.div
        variants={leftVariants}
        initial="initial"
        whileInView="animate"
        className="flex flex-1 flex-col"
      >
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-xl text-[#B0C4DE]">
          Fashionable Watches for
          <br />
          <span className="text-[#d4af37]">every</span>{" "}
          <span className="text-[#d4af37]">occassion</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Ensuring premium comfort and style, our meticulously crafted watches
          are designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </motion.div>
      <motion.div
        variants={rightVariants}
        initial="initial"
        whileInView="animate"
        className="flex flex-1 justify-center items-center overflow-hidden"
      >
        <Image
          src="/assets/images/quality-2.jpg"
          alt="shoe8"
          width={500}
          height={500}
          className="object-cover hover:scale-110 rounded-2xl"
        />
      </motion.div>
    </section>
  );
};

export default SuperQuality;
