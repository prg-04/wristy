"use client"
import React from "react";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import {motion} from "framer-motion"

const scaleInVariants = {
  initial: {
    y: 100,
    scale: 0.5,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

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

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <motion.div
          variants={leftVariants}
          initial="initial"
          whileInView="animate"
          className="flex flex-col items-start"
        >
          <a href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">
            Explore our exquisite collection of watches online. Whether you seek
            precision or style, find the perfect piece to elevate your wrist.
            Shop now and embrace luxury from the comfort of your home.
          </p>
          <div className="flex itc gap-5 mt-8">
            {socialMedia.map((item) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={item.alt}
              >
                <Image src={item.src} alt={item.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={scaleInVariants}
          initial="initial"
          whileInView="animate"
          className="flex flex-1 justify-betweenlg:gap-10 gap-20 flex-wrap"
        >
          {footerLinks.map((link) => (
            <div key={link.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {link.title}
              </h4>
              <ul>
                {link.links.map((item) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={item.name}
                  >
                    <a>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src="/assets/icons/copyright-sign.svg"
            alt="copyRight"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms and Conditions </p>
      </div>
    </footer>
  );
};

export default Footer;
