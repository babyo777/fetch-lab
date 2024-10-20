"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

function WorkInfo({
  heading,
  tags,
  title,
  desc,
}: {
  heading: string;
  tags: string[];
  title: string;
  desc: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex max-md:flex-col max-md:gap-y-4 items-start max-md:w-full max-md:px-4 w-9/12 justify-between">
      <div className=" font-extrabold gap-4 flex flex-col text-5xl text-white ">
        <p>{heading}</p>
        <div className=" flex flex-wrap font-sofiaSans items-center gap-2.5">
          {tags.map((tag) => (
            <p
              key={tag}
              className=" border w-fit font-extrabold border-white rounded-full px-3 py-1 text-sm"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="text-white md:w-7/12 w-full flex flex-col gap-7 text-2xl leading-ms">
        <div className="flex justify-between font-sofiaSans font-semibold items-center gap-4">
          <p className=" w-11/12">{title}</p>
          <CiCirclePlus
            className="size-8 max-md:size-11 self-start max-md:mb-2.5 cursor-pointer"
            onClick={toggleAccordion}
          />
        </div>

        <motion.div
          initial={{ height: "110px" }}
          animate={{ height: isOpen ? "auto" : "110px" }}
          exit={{ height: 0, opacity: 1 }}
          transition={{
            height: { duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.3, ease: "easeInOut" },
          }}
          className="overflow-hidden"
        >
          <p
            dangerouslySetInnerHTML={{ __html: desc }}
            className="w-full max-md:max-w-screen-md font-sofiaSans text-start text-lg font-light"
          ></p>
        </motion.div>
      </div>
    </div>
  );
}

export default WorkInfo;
