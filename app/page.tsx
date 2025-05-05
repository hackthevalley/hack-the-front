"use client"

import Image from "next/image";
import Button from "@/components/Button";
import {useState} from "react";

import { motion } from "motion/react"
import Navbar from "@/components/Navbar";


export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Navbar />
    {/* Inside calc(100vh-10rem), the 10rem must be the same as the h-[10rem] in Navbar.tsx */}
    {/* font-[family-name:var(--font-euclid-circular-b)] */}
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[calc(100vh-10rem)] bg-black relative overflow-hidden p-8 pb-20 gap-16 sm:p-20">
      
      {/* Dotted flower art */}
      <img className="absolute object-cover bottom-[-6rem] left-[-7rem]" src="/pointillism/dot-grey-flower.svg" alt="pointilism flower" width="448"/>
      <img className="absolute object-cover top-[16rem] right-[-8rem]" src="/pointillism/dot-green-flower.svg" alt="pointilism flower" width="448"/>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <div className="flex justify-between w-full">
          <div className="w-1/2 grid grid-cols-[10%_90%] gap-2">
            {/* Positioning the ">" */}
            <div className="flex justify-center mt-[2.3rem]">
              <h1 className="text-white text-7xl font-medium">{">"}</h1>
            </div>
            <div className="flex flex-col gap-y-4 w-max">
              <p className="text-grey text-xl font-[family-name:var(--font-source-code-pro)]">Up for the challenge?</p>
              <h1 className="text-white text-7xl font-medium">HACK THE</h1>
              <h1 className="text-white text-7xl font-medium">VALLEY X</h1>
              {/* Date */}
              <div className="flex-col">

              <div className="flex items-center justify-center gap-x-4 mb-[4rem] text-green">
                <hr className="w-[20%]" />
                <p className="text-lg font-[family-name:var(--font-source-code-pro)]">Oct. 3-5, 2025</p>
                <hr className="w-[20%]" />
              </div>

              {/* Apply Button */}
              <div className="flex justify-center">
                <Button text="Apply Now" onClick={() => {console.log("Button hit");}}/>
                
              </div>

              </div>
            </div>
          </div>

          {/* Event cards and metallic flowers with animation */}
          <div className="relative w-1/2">
            <motion.img
              className="terminal-card relative max-w-none cursor-pointer"
              src="/landing-page/date-card-2.svg"
              alt="Event Card"
              width="573"
              // whileHover={clicked ? { scale: 1.05 } : {}}
              onClick={() => setClicked(!clicked)}
              animate={{
                rotate: clicked ? 13.97 : 0,
                zIndex: clicked ? 10 : 5,
                y: clicked ? [0, -60] : [-60, 0],
              }}
              transition={{ type: "spring", stiffness: 100, duration: 0.8, ease: "easeInOut" }}
            />
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
              transition={{ type: "spring", stiffness: 100, duration: 0.8, ease: "easeInOut" }}
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
              transition={{ type: "spring", stiffness: 50, duration: 0.3, ease: "easeInOut" }}
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
              transition={{ type: "spring", stiffness: 50, duration: 0.3, ease: "easeInOut" }}
            />
          
          </div>

        </div>




      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
    </div>
  );
}
