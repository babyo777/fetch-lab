"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/app/components/ui/Button";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

function ContactForm() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const containerCenterX = rect.width / 2;
    const containerCenterY = rect.height / 2;

    // Calculate mouse position relative to container center
    const mouseX = event.clientX - rect.left - containerCenterX;
    const mouseY = event.clientY - rect.top - containerCenterY;

    // Move the eye slightly based on the mouse position, limit movement range
    const maxOffset = 11; // Maximum offset for the eye movement
    const newX = (mouseX / containerCenterX) * maxOffset;
    const newY = (mouseY / containerCenterY) * maxOffset;

    setEyePosition({ x: newX, y: newY });
    setCursorPos({ x: event.pageX, y: event.pageY });
  };
  // const sendMail = ()=>{
  //   "hello@fetchlab.in"
  // }
  return (
    <div
      className="flex w-full mt-28 py-11 border-b border-zinc-800 items-start justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-9/12 max-md:w-full max-md:px-4 flex flex-wrap items-start justify-between relative group">
        <div className="text-9xl max-md:items-center max-md:-mt-7 max-md:justify-center max-md:w-full max-md:text-xl font-extrabold text-white leading-ms tracking-ms flex flex-col  transition-transform duration-300">
          <p className=" max-md:hidden">Let&apos;s</p>
          <p className="-mt-5 max-md:hidden">partner</p>
          <p className=" max-md:text-4xl hidden max-md:flex max-md:items-center max-md:justify-center text-center w-full pb-4">
            Let&apos;s partner up
          </p>
          <div className=" flex gap-4 max-md:mb-7 max-md:mt-0.5 -mt-4 items-center">
            <p className="max-md:hidden">up</p>

            <div className=" relative h-full mb-7">
              <Image
                src="/contact/eye-cover.png"
                alt="eye cover"
                height={120}
                width={120}
                className=" h-full max-md:hidden"
              />
              <Image
                src="/contact/eye.png"
                className=" absolute max-md:hidden inset-0 m-auto "
                alt="eye"
                height={100}
                style={{
                  transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                }}
                width={100}
              />
              <Image
                src="/contact/eye-cover.png"
                alt="eye cover"
                height={90}
                width={90}
                className=" h-full max-md:flex hidden"
              />
              <Image
                src="/contact/eye.png"
                className=" absolute max-md:flex hidden inset-0 m-auto "
                alt="eye"
                height={70}
                style={{
                  transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                }}
                width={70}
              />
            </div>
          </div>
        </div>

        <div className="flex font-normal max-md:w-full flex-col w-1/2 gap-4">
          <input
            type="text"
            className="bg-foreground  font-sofiaSans outline-none placeholder:text-base text-base font-normal text-white rounded-full p-3 w-full px-5"
            placeholder="Name"
          />
          <input
            type="text"
            className="bg-foreground font-sofiaSans  outline-none placeholder:text-base text-base font-normal text-white rounded-full p-3 w-full px-5"
            placeholder="Email"
          />
          <div className="relative w-full font-sofiaSans">
            <select className="bg-foreground outline-none placeholder:text-base text-base font-normal text-white relative appearance-none rounded-full p-3 w-full px-5 pr-10">
              <option value="How can we help you?">How can we help you?</option>
              <option value="Branding">Branding</option>
              <option value="Social media optimization">
                Social media optimization
              </option>
              <option value="Social media management">
                Social media management
              </option>
              <option value="Website Design/Development">
                Website Design/Development
              </option>
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
          </div>
          <textarea
            placeholder="How Can we help you?"
            className="bg-foreground font-light font-sofiaSans text-white outline-none placeholder:text-base text-base min-h-52 rounded-2xl p-3 w-full px-5"
          ></textarea>
          <Button variant="cuGreen" className="text-xl py-1.5">
            Get in touch
          </Button>
        </div>

        {/* Image that follows the cursor, animated with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.3 }}
          className="absolute max-md:hidden"
          style={{
            left: `${cursorPos.x - 80}px`,
            top: `${cursorPos.y - 170}px`,
            width: "50px", // Adjust size as needed
            height: "auto",
            pointerEvents: "none", // Ensures mouse events go through the image
            transform: "translate(-50%, -50%)", // Center the image on the cursor
          }}
        >
          <Image
            src="/cursor/pen.png"
            alt="Cursor Image"
            height={60}
            width={60}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ContactForm;
