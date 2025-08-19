"use client";

import Image from "next/image";

import ProfileCard from "./ProfileCard";

interface Exec {
  name: string;
  role: string;
  image: string;
  lead: boolean;
}

interface TrainBodyProps {
  execs: Exec[];
  className?: string;
  cart?: string;
}

export default function TrainBody({ execs, className = "", cart = "" }: TrainBodyProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={cart}
        alt="train-body"
        fill
        className={`pointer-events-none ${className} object-fill`}
      />

      <div className="absolute bottom-0 left-[14%] h-[23px] w-[105px] translate-y-full">
        <Image
          src="/team-page/wheels.svg"
          alt="front wheels"
          fill
          className="pointer-events-none object-contain"
        />
      </div>
      <div className="absolute right-[14%] bottom-0 h-[23px] w-[105px] translate-y-full">
        <Image
          src="/team-page/wheels.svg"
          alt="back wheels"
          fill
          className="pointer-events-none object-contain"
        />
      </div>

      <div className="absolute right-10 bottom-0 h-4/5 w-1/5">
        <Image
          src="/team-page/door.svg"
          alt="door"
          fill
          className="pointer-events-none object-contain"
        />
      </div>

      <div className="absolute inset-y-0 left-5 flex w-[70%] items-center gap-x-6 md:gap-x-10">
        {execs.map((exec) => (
          <ProfileCard key={exec.name} isDefault className="relative">
            <Image
              src={exec.image}
              alt={exec.name}
              width={100}
              height={100}
              className="h-auto w-24 md:w-28"
            />
            {exec.lead && (
              <Image
                src="/team-page/crown.svg"
                alt="crown"
                width={50}
                height={50}
                className="absolute -top-2 left-1/2 h-8 w-8 -translate-x-1/2 md:h-10 md:w-10"
              />
            )}
          </ProfileCard>
        ))}
      </div>
    </div>
  );
}
