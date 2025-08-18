"use client";

import Image from "next/image";

import ProfileCard from "./ProfileCard";

interface Exec {
  name: string;
  role: string;
  image: string;
  lead: boolean;
}

interface TrainHeadProps {
  execs: Exec[];
  className?: string;
}

export default function TrainHead({ execs, className = "" }: TrainHeadProps) {
  return (
    // 1) Responsive box that preserves the cart’s 755x257 aspect ratio.
    <div className={`relative ${className}`}>
      {/* Cart body fills the box responsively */}
      <Image
        src="/team-page/cart-body.svg"
        alt="train-body"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 755px"
        className="object-contain"
      />

      {/* 2) Place overlays using % so they scale with the parent */}
      {/* Front window: ~11% of width, ~49.8% of height, top 25% */}
      <div className="absolute top-1/4 left-0 h-[49.8%] w-[11%]">
        <Image
          src="/team-page/front-window.svg"
          alt="front window"
          fill
          className="object-contain"
        />
      </div>

      {/* Wheels: ~13.9% width, ~8.95% height, sit at the bottom (translate-y-full keeps them just below the edge) */}
      <div className="absolute bottom-0 left-[14%] h-[8.95%] w-[13.9%] translate-y-full">
        <Image src="/team-page/wheels.svg" alt="front wheels" fill className="object-contain" />
      </div>
      <div className="absolute right-[14%] bottom-0 h-[8.95%] w-[13.9%] translate-y-full">
        <Image src="/team-page/wheels.svg" alt="back wheels" fill className="object-contain" />
      </div>

      {/* Door: ~14.6% width, ~82.8% height, anchored to the right */}
      <div className="absolute right-1/8 bottom-0 h-[82.8%] w-[14.6%] translate-x-1/2">
        <Image src="/team-page/door.svg" alt="door" fill className="object-contain" />
      </div>

      {/* Exec avatars area: percentage-based so it scales; use responsive gaps */}
      <div className="absolute inset-y-0 left-[18%] flex w-[60%] items-center gap-x-6 md:gap-x-10">
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
