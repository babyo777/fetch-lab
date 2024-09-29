"use client";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";
function HeroSection() {
  return (
    <div className="section-home-hero text-white w-full">
      <div className="home-hero-component">
        <div className="container-home-hero">
          <div className="home-hero-content">
            <h1 className="hero-header w-11/12 max-md:w-full ">
              We develop innovative solutions to your most difficult problems
              using precise planning and extreme imagination
            </h1>
            <motion.div
              animate={{ y: [0, -7, 0] }} // Moves up by 20px and then down
              transition={{
                duration: 1, // Duration for one full cycle (up and down)
                repeat: Infinity, // Infinite loop
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="scroll-down-button w-full relative  flex justify-center items-center"
            >
              <Image
                src="/home/up.png"
                height={55}
                width={55}
                alt=""
                className="hand-emoji transform -translate-y-1/2  down max-md:hidden rotate-180"
              />
              <Image
                src="/home/up.png"
                height={40}
                width={40}
                alt=""
                className="hand-emoji transform -translate-y-1/2  max-md:flex hidden down rotate-180"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="home-hero-button-wrapper">
        <div className="rotate-button">
          <motion.div
            whileHover={{
              transition: { duration: 0.25 },
              rotate: [0, 4, -4, 4, -4, 0],
              transformOrigin: "100% 100% 100% 100%",
            }}
          >
            <Button
              className=" text-4xl max-md:text-2xl -rotate-6 leading-ms tracking-ms  hover:bg-cuRed border-none p-3 px-7"
              variant="cuRed"
            >
              GET IN TOUCH
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
