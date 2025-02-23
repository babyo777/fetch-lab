import React, { useRef, useState } from "react";
import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";
import { motion } from "framer-motion";
import useNavigation from "@/app/hooks/useNavigation";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/Carousel";
function WorkCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = React.useState<CarouselApi>();
  const handleScrollRight = () => {
    api?.scrollNext();
  };
  const handleScrollLeft = () => {
    api?.scrollPrev();
  };
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    setCursorPos({ x: event.pageX, y: event.pageY });
  };
  const { isAnimating, handleAnimationComplete, handleNavigate } =
    useNavigation();
  return (
    <>
      {isAnimating && (
        <motion.div
          className="fixed top-0  left-0 z-50 w-screen h-screen bg-cuPurple"
          initial={{ scaleX: 0 }} // Start off-screen
          animate={{ scaleX: 1 }} // Slide in from the right
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }} // Ensure it scales from the right
          onAnimationComplete={handleAnimationComplete} // Trigger navigation after animation
        />
      )}
      <Carousel
        setApi={setApi}
        onMouseMove={handleMouseMove}
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" relative   flex w-full cursor-none transition-all duration-200 scroll-smooth overflow-scroll snap-mandatory snap-x gap-5 p-4 px-20 pl-[12%]  mb-11 max-md:px-4"
      >
        <CarouselContent>
          {[
            {
              slug: "/work/brew_mingle",
              link: "/home/1.jpeg",
            },
            {
              slug: "/work/moodrobe",
              link: "/home/2.jpeg",
            },
            {
              slug: "/work/iccs",
              link: "/home/3.jpeg",
            },
            {
              slug: "/work/airlis",
              link: "/home/4.jpeg",
            },
          ].map((work) => (
            <CarouselItem
              key={work.link}
              className=" h-[90dvh] object-cover  max-md:h-[65dvh] rounded-2xl "
            >
              <Image
                onClick={() => handleNavigate(work.slug)}
                src={work.link}
                width={800}
                height={800}
                className=" h-full w-full object-cover  rounded-2xl"
                alt="image"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className=" flex justify-between w-full text-3xl text-white px-20 max-md:hidden pl-[12%] -mt-11">
        <div
          onClick={handleScrollLeft}
          className=" rounded-full border-zinc-500 hover:border-zinc-100 transition-all duration-500 cursor-pointer border p-3"
        >
          <IoChevronBack />
        </div>
        <div
          onClick={handleScrollRight}
          className=" rounded-full border-zinc-500 hover:border-zinc-100 transition-all duration-500 cursor-pointer border p-3"
        >
          <IoChevronBack className=" rotate-180" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.3 }}
          className="absolute"
          style={{
            left: `${cursorPos.x - 0}px`,
            top: `${cursorPos.y - 0}px`,

            pointerEvents: "none", // Ensures mouse events go through the image
            transform: "translate(-50%, -50%)", // Center the image on the cursor
          }}
        >
          <Image
            src="/Button.svg"
            alt="Cursor Image"
            height={800}
            width={800}
            className=" size-16 rotate-3 w-full"
          />
        </motion.div>
      </div>
    </>
  );
}

export default WorkCarousel;
