"use client"
import Button from "./Button"; 
import {motion} from "framer-motion"

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
  }
}

const leftVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  }
}

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <motion.h3
        variants={leftVariant}
        initial="initial"
        whileInView="animate"
        className="text-4xl leading-[68px] lg:max-w-[30rem] font-palanquin font-bold text-[#B0C4DE]"
      >
        Sign up for
        <span className="text-[#d4af37]"> Newsletters</span> & Updates
      </motion.h3>
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        className="lg:max-w-[40%] w-full items-center flex max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
      >
        <input
          type="text"
          placeholder="subscribe@wristy.com"
          className="input"
        />
        <div className="flex max-sm: justify-end items-center max-sm:w-full">
          <Button label="Sign up" />
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
