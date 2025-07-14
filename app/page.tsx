"use client";

import { motion } from "motion/react";
// import Sponsors from "./landing/Sponsors";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

import GreenButton from "@/components/GreenButton";
import Navbar from "@/components/Navbar";

const About = dynamic(() => import("./landing/About"));
const FAQ = dynamic(() => import("./landing/FAQ"));
const Themes = dynamic(() => import("./landing/Themes"));
const Footer = dynamic(() => import("./landing/Footer"));

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="home">
      <Navbar />
      {/* Inside calc(100vh-7rem), the 7rem must be the same as the h-[7rem] in Navbar.tsx */}
      <div className="relative grid min-h-[calc(100vh-7rem)] grid-rows-[auto_1fr_auto] items-center justify-items-center bg-black px-4 py-8 pb-10 font-[family-name:var(--font-euclid-circular-b)] sm:px-20 sm:pt-27">
        {/* star art */}
        <Image
          className="pointer-events-none absolute top-[26rem] left-[-10rem] hidden object-cover sm:block"
          src="/backgrounds/star.svg"
          alt="star"
          width="530"
          height="530"
          priority={false}
          loading="lazy"
          placeholder="empty"
        />
        <Image
          className="pointer-events-none absolute top-[-1rem] right-[-12rem] hidden object-cover sm:block"
          src="/backgrounds/star.svg"
          alt="star"
          width="530"
          height="530"
          priority={false}
          loading="lazy"
          placeholder="empty"
        />

        <main className="row-start-2 flex flex-col items-center gap-4 sm:items-start md:gap-6">
          <div className="mt-25 mb-40 flex w-full flex-col items-center gap-4 lg:flex-row">
            <div className="flex w-full flex-col items-center sm:w-1/2">
              <div className="z-10 flex w-fit flex-col items-center md:grid md:grid-cols-[auto_1fr] md:items-start md:gap-2">
                <div className="mt-[2.3rem] hidden items-start justify-start md:flex">
                  <h1 className="text-7xl leading-tight font-medium text-[#4C6581] [--tw-text-stroke:2px_white] [text-stroke:var(--tw-text-stroke)]">
                    {">"}
                  </h1>
                </div>
                <div className="flex w-fit flex-col gap-y-4">
                  <p className="text-grey font-[family-name:var(--font-source-code-pro)] text-xl">
                    Up for the challenge?
                  </p>
                  <h1
                    className="bg-clip-text text-6xl font-bold text-nowrap text-transparent sm:text-7xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
                    }}
                  >
                    HACK THE
                  </h1>
                  <h1
                    className="bg-clip-text text-6xl font-bold text-nowrap text-transparent sm:text-7xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(100deg, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
                    }}
                  >
                    VALLEY X
                  </h1>

                  {/* Date */}
                  <div className="flex-col">
                    <div className="text-green mb-[4rem] flex items-center justify-center gap-x-4">
                      <hr className="w-[20%]" />
                      <p className="font-[family-name:var(--font-source-code-pro)] text-base sm:text-lg">
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
            <div className="relative mt-35 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-start">
              <div className="relative aspect-square w-full max-w-[350px] sm:max-w-[350px] md:max-w-[400px] lg:aspect-auto lg:max-w-[540px]">
                {/* Terminal card */}
                <motion.div
                  className="terminal-card relative h-auto w-[100%] cursor-pointer lg:w-[110%] lg:max-w-[700px]"
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
                >
                  <Image
                    src="/landing-page/date-card.svg"
                    alt="Date Card"
                    width={700}
                    height={700}
                    priority={true}
                    fetchPriority="high"
                  />
                </motion.div>

                {/* Silver card */}
                <motion.div
                  className="event-card absolute top-[-6rem] left-[-1rem] h-auto w-[120%] max-w-none cursor-pointer sm:top-[-6rem] sm:left-[-1.5rem] sm:w-[120%] md:top-[-7rem] md:left-[-2rem] md:w-[120%] lg:top-[-11rem] lg:left-[-3rem] lg:w-[135%] lg:max-w-[750px]"
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
                >
                  <Image
                    src="/landing-page/event-card-2.svg"
                    alt="Event Card"
                    width={750}
                    height={750}
                    priority={true}
                    fetchPriority="high"
                  />
                </motion.div>

                {/* Metallic Clover */}
                <motion.div
                  className="absolute bottom-[20rem] left-[-1rem] z-20 h-28 w-28 sm:bottom-[20rem] sm:left-[-2rem] sm:h-32 sm:w-32 md:bottom-[23rem] md:left-[-2rem] lg:bottom-[23.2rem] lg:left-[-0.5rem]"
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
                >
                  <Image
                    src="/metallics/clover.svg"
                    alt="Metallic Clover"
                    width={151}
                    height={151}
                    priority={false}
                    loading="lazy"
                  />
                </motion.div>

                {/* Metallic Flower */}
                <motion.div
                  className="absolute top-[10rem] right-0 z-20 h-20 w-20 md:top-[10.5rem] md:left-[20rem] lg:top-[15.5rem] lg:left-[27rem] lg:h-28 lg:w-28"
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
                >
                  <Image
                    src="/metallics/flower.svg"
                    alt="Metallic Flower"
                    width={135}
                    height={135}
                    priority={false}
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <About />
          <FAQ />
          <Themes />
          {/* <Sponsors /> */}
          <div className="mt-20 w-full items-center justify-center">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
