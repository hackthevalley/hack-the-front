"use client";

import Image from "next/image";


export default function ABOUT() {
  return (
    <section
      id="about"
      className="mb-44 w-full max-w-full scroll-mt-25 sm:px-8 md:px-16 lg:px-32 relative"
      style={{ scrollMarginTop: "10rem" }}
    >
      {/* Background gradient */}
      <Image
        width={0}
        height={0}
        alt="Background Gradient"
        className="absolute top-6/10 left-1/2 z-0 w-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-15"
        src="/backgrounds/smaller-gradient.svg"
      />
      <div className="mx-auto max-w-6xl relative z-10">
        <h1
          className="bg-clip-text text-center text-6xl font-bold text-transparent sm:text-5xl lg:text-7xl"
          style={{
            backgroundImage: "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
          }}
        >
          {">"} ABOUT
        </h1>
        <div className="my-[2rem] mb-16 w-full">
          <div className="flex items-center justify-between">
            <hr className="bg-indigo mr-4 h-[2px] w-full border-none" />
            <p className="w-fit text-xl font-semibold whitespace-nowrap text-white sm:text-2xl">
              where ideas come to life
            </p>
            <hr className="bg-indigo ml-4 h-[2px] w-full border-none" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="hidden sm:block">
          <div className="absolute -right-1/8 top-[30%] -translate-y-1/2">
            <img src="/about-page/trail.png" alt="Trail" />
          </div>
          <div className="absolute -right-[2.7%] top-[-49%] -translate-y-1/2">
            <Image
              src="/about-page/dot.png"
              alt="dot-1"
              width={20}
              height={20}
            />
          </div>
        </div>
        
        <div className="relative flex flex-col w-4/5 mx-auto justify-center items-center border-2 border-indigo bg-bgblue rounded-[20px] py-10 px-6 mb-8 z-10">
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
            <Image
              src="/about-page/htv-logo.png"
              alt="HTV Logo"
              width={90}
              height={90}
            />
          </div>
          
          <div className="flex w-full items-center pl-16">
            <div className="max-w-3xl">
              <p className="font-semibold text-sm sm:text-lg">
                <span className="text-white">Join </span>
                <span className="text-green">750 innovative </span>
                <span className="text-white">and creative developers, designers, and creators for </span>
              </p>
              <p className="font-semibold text-sm sm:text-lg mb-6">
                <span className="text-green">36 hours of hacking.</span>
              </p>
              <p className="font-semibold text-sm sm:text-lg">
                <span className="text-white">You'll get access to some of the </span>
                <span className="text-green">best hardware and APIs </span>
                <span className="text-white">on the market. Plus get to meet some experienced and awesome mentors! </span>
                <span className="text-green">All this in just one weekend? </span>
                <span className="text-white">I know, it's hard to believe.</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative flex flex-col w-full justify-center items-center border-2 border-indigo bg-bgblue rounded-[20px] py-6 px-8 mb-8">
          <div className="w-full">
            <p className="font-semibold text-sm sm:text-lg">
              <span className="text-white">Remember, </span>
              <span className="text-green">you don't need to be a pro to attend. </span>
              <span className="text-white">So if this is your first hackathon, we can't wait to expose you to the incomparable world of creation.</span>
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex flex-row gap-x-1">
            <p className="text-white font-semibold text-lg sm:text-xl text-left">
              {">"} starting
            </p>
            <p className="text-green font-semibold text-lg sm:text-xl text-left">
              oct 3-5, 2025 
            </p>
            <p className="text-white font-semibold text-lg sm:text-xl text-left">
               @ uoft scarborough
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}
