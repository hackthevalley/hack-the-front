"use client";

import Image from "next/image";

export default function ABOUT() {
  return (
    <section
      id="about"
      className="relative mb-44 w-full max-w-full scroll-mt-25 sm:px-8 md:px-16 lg:px-32"
      style={{ scrollMarginTop: "10rem" }}
    >
      {/* Background gradient */}
      <Image
        width={0}
        height={0}
        alt="Background Gradient"
        className="pointer-events-none absolute top-6/10 left-1/2 z-0 w-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-15"
        src="/backgrounds/smaller-gradient.svg"
      />
      <div className="relative z-10 mx-auto max-w-6xl">
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
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center">
        <div className="hidden sm:block">
          <div className="absolute top-[30%] -translate-y-1/2">
            <Image
              src="/about-page/trail.png"
              width={1300}
              height={800}
              className="pointer-events-none"
              alt="Trail"
            />
          </div>
          <div className="absolute top-[-22%] right-[8%] -translate-y-1/2">
            <Image
              src="/about-page/dot.png"
              className="pointer-events-none"
              alt="dot-1"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="border-indigo bg-bgblue relative z-10 mx-auto mb-8 flex w-full flex-col items-center justify-center rounded-[20px] border-2 px-6 py-10">
            <div className="absolute top-1/2 -left-12 z-20 hidden -translate-y-1/2 sm:block">
              <Image
                src="/about-page/htv-logo.svg"
                className="pointer-events-none rounded-full shadow-lg"
                alt="HTV Logo"
                width={100}
                height={100}
              />
            </div>

            <div className="flex w-full items-center pl-16">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold sm:text-lg">
                  <span className="text-white">Join </span>
                  <span className="text-green">750 innovative </span>
                  <span className="text-white">
                    and creative developers, designers, and creators for{" "}
                  </span>
                </p>
                <p className="mb-6 text-sm font-semibold sm:text-lg">
                  <span className="text-green">36 hours of hacking.</span>
                </p>
                <p className="text-sm font-semibold sm:text-lg">
                  <span className="text-white">You'll get access to some of the </span>
                  <span className="text-green">best hardware and APIs </span>
                  <span className="text-white">
                    on the market. Plus get to meet some experienced and awesome mentors!{" "}
                  </span>
                  <span className="text-green">All this in just one weekend? </span>
                  <span className="text-white">I know, it's hard to believe.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-indigo bg-bgblue relative mb-8 flex w-full flex-col items-center justify-center rounded-[20px] border-2 px-8 py-6">
            <div className="w-full">
              <p className="text-sm font-semibold sm:text-lg">
                <span className="text-white">Remember, </span>
                <span className="text-green">you don't need to be a pro to attend. </span>
                <span className="text-white">
                  So if this is your first hackathon, we can't wait to expose you to the
                  incomparable world of creation.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex flex-row gap-x-1">
            <p className="text-left text-lg font-semibold text-white sm:text-xl">{">"} starting</p>
            <p className="text-green text-left text-lg font-semibold sm:text-xl">oct 3-5, 2025</p>
            <p className="text-left text-lg font-semibold text-white sm:text-xl">
              @ uoft scarborough
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
