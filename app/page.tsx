"use client";

import Image from "next/image";
import GreenButton from "@/components/GreenButton";
import { useState } from "react";

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";

import Sponsors from "./landing/Sponsors";
import Footer from "./landing/Footer";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="home">
      <Navbar />
      {/* Inside calc(100vh-10rem), the 10rem must be the same as the h-[10rem] in Navbar.tsx */}
      {/* font-[family-name:var(--font-euclid-circular-b)] */}
      {/* min-h-screen sm:min-h-[calc(100vh-10rem)] */}
      <div className="grid grid-rows-[auto_1fr_auto]  h-[calc(100vh-10rem)] items-center justify-items-center bg-black relative px-4 py-8 pb-10 font-[family-name:var(--font-euclid-circular-b)] overflow-x-hidden sm:px-20 sm:pt-27">
        {/* star art */}
        {/* Note we need to change z-index as it overlaps on phones */}
        <Image
          className="absolute object-cover bottom-[-1rem] left-[-2rem]"
          src="/backgrounds/star-left.svg"
          alt="star"
          width="400"
          height="390"
        />
        <Image
          className="absolute object-cover top-[-1rem] right-[0rem]"
          src="/backgrounds/star-right.svg"
          alt="star"
          width="340"
          height="509"
        />

        <main className="flex flex-col gap-4 md:gap-6 row-start-2 items-center sm:items-start">
          <div className="flex flex-col lg:flex-row items-center w-full gap-4 mt-25 mb-40 ">
            <div className="w-full sm:w-1/2 flex flex-col items-center">
              <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-[auto_1fr] md:gap-2 w-full z-10">
                {/* Positioning the ">" */}
                <div className="hidden md:flex justify-start items-start mt-[2.3rem] ">
                  <h1 className="text-[#4C6581] text-7xl font-medium [--tw-text-stroke:2px_white] [text-stroke:var(--tw-text-stroke)] leading-tight">
                    {">"}
                  </h1>
                </div>
                <div className="flex flex-col gap-y-4">
                  <p className="text-grey text-xl font-[family-name:var(--font-source-code-pro)] ">
                    Up for the challenge?
                  </p>
                  <h1
                    className="text-6xl text-nowrap sm:text-7xl font-bold text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
                    }}
                  >
                    HACK THE
                  </h1>
                  <h1
                    className="text-6xl text-nowrap sm:text-7xl  font-bold text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(100deg, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
                    }}
                  >
                    VALLEY X
                  </h1>

                  {/* Date */}
                  <div className="flex-col">
                    <div className="flex items-center justify-center gap-x-4 mb-[4rem] text-green ">
                      <hr className="w-[20%]" />
                      <p className="text-base sm:text-lg font-[family-name:var(--font-source-code-pro)]">
                        Oct. 3-5, 2025
                      </p>
                      <hr className="w-[20%]" />
                    </div>

                    {/* Apply Button */}
                    <div className="flex justify-center">
                      <GreenButton text="Apply Now" route="/login" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event cards and metallic flowers with animation */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mt-35 lg:mt-0">
              <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none aspect-square lg:aspect-auto">
                {/* Terminal card */}
                <motion.img
                  className="terminal-card relative cursor-pointer  w-[100%] h-auto
                 lg:w-[110%] lg:max-w-[700px]"
                  src="/landing-page/date-card.svg"
                  alt="Date Card"
                  // whileHover={clicked ? { scale: 1.05 } : {}}
                  onClick={() => setClicked(!clicked)}
                  animate={{
                    rotate: clicked ? 13.97 : 0,
                    zIndex: clicked ? 10 : 5,
                    y: clicked ? [0, -60] : [-60, 0],
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />
                {/* Silver card */}
                <motion.img
                  className="event-card max-w-none absolute top-[-3rem] left-[-1rem] cursor-pointer w-[120%] h-auto
                 sm:top-[-4rem] sm:left-[-1.5rem] sm:w-[100%]
                 md:top-[-5rem] md:left-[-2rem] md:w-[120%]
                 lg:top-[-10rem] lg:left-[-3rem] lg:w-[135%] lg:max-w-[750px]"
                  src="/landing-page/event-card-2.svg"
                  alt="Event Card"
                  // whileHover={!clicked ? { scale: 1.05 } : {}}
                  onClick={() => setClicked(!clicked)}
                  animate={{
                    rotate: clicked ? -13.97 : 0,
                    zIndex: clicked ? 5 : 10,
                    y: clicked ? [0, 60] : [60, 0],
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />

                {/* Metallic Flowers */}
                <motion.img
                  className="absolute bottom-[16rem] md:bottom-[18rem] md:left-[-2rem] 
                 lg:bottom-[21.2rem] lg:left-[-2.5rem] 
                 z-20 w-28 h-28 sm:w-32 sm:h-32"
                  src="/metallics/clover.svg"
                  alt="Metallic Clover"
                  width="151"
                  onClick={() => setClicked(!clicked)}
                  animate={{
                    rotate: clicked ? -25 : 0,
                    x: clicked ? [0, -50] : [-50, 0],
                    y: clicked ? [0, -20] : [-20, 0],
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  className="absolute top-[10rem] right-[-1rem] 
                 lg:top-[12.5rem] lg:left-[24rem] 
                 z-20 w-20 h-20 lg:w-28 lg:h-28"
                  src="/metallics/flower.svg"
                  alt="Metallic Flower"
                  width="135"
                  onClick={() => setClicked(!clicked)}
                  animate={{
                    rotate: clicked ? 20 : 0,
                    x: clicked ? [0, 50] : [50, 0],
                    y: clicked ? [0, 70] : [70, 0],
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>
          <Sponsors />
          <div className="justify-center items-center w-full mt-20">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
