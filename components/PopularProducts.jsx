"use client";
import React from "react";
import { products } from "@/constants";
import PopularProductCard from "./PopularProductCard";
import { ThreeDCard } from "./ThreeDCard";
import { animate, motion } from "framer-motion";

const fadeUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};
const staggered = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        className="flex flex-col justify-start gap-5"
      >
        <h2 className="text-indigo-100 text-4xl font-palanquin font-bold">
          Our <span className="text-[#d4af37]">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-[#d9d9d9]">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design and value
        </p>
      </motion.div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 w-full">
        {products.map((product, index) => (
          <motion.div initial="initial" whileInView="animate" custom={index} variants={staggered} key={product.imgURL}>
            <ThreeDCard {...product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
