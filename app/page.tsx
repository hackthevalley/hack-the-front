"use client"

import Image from "next/image";
import Button from "@/components/Button";


export default function Home() {
  return (
    // Started div & main tags provided by Next.js, we can modify it
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-[#06101E] relative overflow-hidden p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-euclid-circular-b)]">
      
      {/* Dotted flower art */}
      <img className="absolute object-cover bottom-[-9rem] left-[-7rem]" src="/pointillism/dot-grey-flower.svg" alt="pointilism flower" width="448"/>
      <img className="absolute object-cover top-[19rem] right-[-8rem]" src="/pointillism/dot-green-flower.svg" alt="pointilism flower" width="448"/>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
      {/* grid grid-cols-[55%_45%] gap-4 */}
        <div className="flex justify-between w-full">
          <div className="w-1/2 grid grid-cols-[10%_90%] gap-2">
            {/* Positioning the ">" */}
            <div className="flex justify-center mt-[2.3rem]">
              <h1 className="text-[#FFFFFF] text-7xl font-medium">{">"}</h1>
            </div>
            <div className="flex flex-col gap-y-4 w-max">
              <p className="text-[#9B9EA1] text-xl font-[family-name:var(--font-source-code-pro)]">Up for the challenge?</p>
              <h1 className="text-[#FFFFFF] text-7xl font-medium">HACK THE</h1>
              <h1 className="text-[#FFFFFF] text-7xl font-medium">VALLEY X</h1>
              {/* Date */}
              <div className="flex-col">

              <div className="flex items-center justify-center gap-x-4 mb-[4rem]">
                <hr className="text-[#A5D6A7] w-[20%]" />
                <p className="text-[#A5D6A7] text-lg font-[family-name:var(--font-source-code-pro)]">Oct. 3-5, 2025</p>
                <hr className="text-[#A5D6A7] w-[20%]" />
              </div>

              {/* Apply Button */}
              <div className="flex justify-center">
                <Button text="Apply Now" onClick={() => {console.log("Button hit");}}/>
                
              </div>

              </div>
            </div>
          </div>

          <div className="relative w-1/2">
          {/* max-w-[100%] h-auto */}
          {/* add absolute to the card */}
            <img className="max-w-none" src="/landing-page/date-card-2.svg" alt="Event Card" width="573"/>
            <img className="max-w-none absolute top-[-11rem] left-[-3rem]" src="/landing-page/event-card-2.svg" alt="Event Card" width="662"/>
            <img className="absolute bottom-[22rem] left-[-2.5rem]" src="/metallics/clover.svg" alt="Metallic Clover" width="151"/>
            <img className="absolute top-[12.5rem] left-[24rem]" src="/metallics/flower.svg" alt="Metallic Flower" width="135"/>
          </div>

        </div>




      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
