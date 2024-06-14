"use client";
import React, { useEffect, useState } from "react";
import ShoeCard from "./ShoeCard";
import Image from "next/image";
import Button from "./Button";
import { shoes, statistics } from "@/constants";
import CountUp from "react-countup";
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
    },
  },
};

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(shoes[0].bigShoe);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Update the image index every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shoes.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [shoes.length]);

  // Update the bigShoeImg whenever the currentIndex changes
  useEffect(() => {
    setBigShoeImg(shoes[currentIndex].bigShoe);
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-[90vh] gap-10 max-container pt-20"
    >
      <motion.div
        variants={leftVariants}
        initial="initial"
        whileInView="animate"
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 z-20"
      >
        <p className="text-xl font-montserrat text-[#B0C4DE]">
          Time crafted perfection
        </p>
        <h1 className="mt-10 font-palanquin text-[86px] leading-[106px] max-sm:text-[72px]  max-sm:leading-[132px] font-bold text-[#B0C4DE]">
          <span className=" xl:whitespace-nowrap relative z-10 pr-14 xl:bg-[#0A1929]">
            Discover the art <br />
            of{" "}
            <span
              className="text-[#d4af37]

] inline-block mt-3  "
            >
              precision
            </span>
          </span>
        </h1>
        <p className="font-montserrat text-[#D9D9D9] text-xl leading-8 mt-6 mb-14 sm:max-w-xl">
          Experience the elegance and precision of handcrafted timepieces. Our
          collection marries classic craftsmanship with modern innovation,
          ensuring every second is a testament to timeless style. Elevate you
          wristear and celebrate each moment with our exquisite watches.
        </p>
        <Button
          label="Explore Our Collection"
          iconURL="/assets/icons/arrow-right.svg"
        />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stat, idx) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold text-[#B0E0E6]">
                <CountUp start={1} end={stat.value} />
                {idx === 0 || idx === 2 ? "k+" : "+"}
              </p>
              <p className="leading-7 font-montserrat text-[#d4af37]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={rightVariants}
        initial="initial"
        whileInView="animate" className="relative flex flex-1 justify-center items-center xl:min-h-[80vh] max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <div className="overlay absolute w-full h-full  z-10" />
        <div className="overflow-hidden h-full grid place-items-center">
          <Image
            src={bigShoeImg}
            alt="shoe collection"
            width={810}
            height={600}
            className="object-contain relative z-10 bottom-16 rotate-1 "
          />
        </div>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 z-10 ">
          {shoes.map((shoe) => (
            <div key={shoe.name}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={() => setBigShoeImg(shoe.bigShoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
