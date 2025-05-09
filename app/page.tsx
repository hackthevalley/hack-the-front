"use client";

import Image from "next/image";
import GreenButton from "@/components/GreenButton";
import { useState } from "react";

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Navbar />
      {/* Inside calc(100vh-10rem), the 10rem must be the same as the h-[10rem] in Navbar.tsx */}
      {/* font-[family-name:var(--font-euclid-circular-b)] */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[calc(100vh-10rem)] bg-black relative overflow-hidden p-8 pb-20 gap-16 font-[family-name:var(--font-euclid-circular-b)] sm:p-20">
        {/* star art */}
        <img
          className="absolute object-cover bottom-[-1rem] left-[-2rem]"
          src="/backgrounds/star-left.svg"
          alt="star"
          width="400"
        />
        <img
          className="absolute object-cover top-[-1rem] right-[0rem]"
          src="/backgrounds/star-right.svg"
          alt="star"
          width="340"
        />

        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex justify-between w-full">
            <div className="w-1/2 flex col relative">

            {/* Old HTV Title components */}
            {/* <div className="w-1/2 grid grid-cols-[10%_90%] gap-2"> */}
              {/* Positioning the ">" */}
              {/* <div className="flex justify-center mt-[2.3rem]">
                <h1 className="text-grey text-7xl font-medium [--tw-text-stroke:2px_white] [text-stroke:var(--tw-text-stroke)]">{">"}</h1>
              </div> */}

                <img src="/icons/htv-title.png" className="w-[31rem] absolute top-[3rem] right-[3.8rem] max-w-none" />

              <div className="flex flex-col gap-y-4 w-max">
                <p className="text-grey text-xl font-[family-name:var(--font-source-code-pro)]">
                  Up for the challenge?
                </p>

                <div className="w-[25rem] h-[10rem]">
                  {/* The parking spot for the htv-title img cause absolute gives up its space */}
                </div>
                
                {/* Old HTV title */}
                {/* <h1 className="text-grey text-7xl font-medium text-stroke">HACK THE</h1>
                <h1 className="text-grey text-7xl font-medium text-stroke">VALLEY X</h1> */}

                {/* Date */}
                <div className="flex-col">
                  <div className="flex items-center justify-center gap-x-4 mb-[4rem] text-green">
                    <hr className="w-full" />
                    <p className="text-lg text-nowrap font-[family-name:var(--font-source-code-pro)]">
                      Oct. 3-5, 2025
                    </p>
                    <hr className="w-full" />
                  </div>

                  {/* Apply Button */}
                  <div className="flex justify-center">
                    <GreenButton text="Apply Now" route="/login" />
                  </div>
                </div>
              </div>

              
            </div>

            {/* Event cards and metallic flowers with animation */}
            <div className="relative w-1/2">
            {/* Terminal card */}
              <motion.img
                className="terminal-card relative max-w-none cursor-pointer"
                src="/landing-page/date-card.svg"
                alt="Date Card"
                width="573"
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
                className="event-card max-w-none absolute top-[-10rem] left-[-3rem] cursor-pointer"
                src="/landing-page/event-card-2.svg"
                alt="Event Card"
                width="662"
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
                className="absolute bottom-[21.2rem] left-[-2.5rem] z-20"
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
                className="absolute top-[12.5rem] left-[24rem] z-20"
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
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </div>
  );
}
