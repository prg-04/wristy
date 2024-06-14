"use client";
import React from "react";
import { services } from "@/constants";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const staggered = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * index,
    },
  }),
};

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <motion.div
          variants={staggered}
          initial="initial"
          whileInView="animate"
          key={service.label}
          custom={index}
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </section>
  );
};

export default Services;
