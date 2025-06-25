import React from "react";
import Image from "next/image";
interface SponsorFieldProps {
  sponsorName: string;
  logoSrc: string;
  tier: "gold" | "silver" | "bronze";
  className?: string;
}

export default function SponsorField(props: SponsorFieldProps) {
  return (
    <div
      className={`
        flex flex-col justify-center items-center border-[2px] bg-bgblue rounded-xl border-gold
        ${props.className}
      `}
    >
      <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
        <div className="relative flex-1 w-full max-w-full max-h-full">
          <Image
            src={props.logoSrc}
            alt={`${props.sponsorName} logo`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
          />
        </div>
        {/* <h3 className="text-white font-semibold mt-2 text-sm sm:text-base md:text-lg">
          {props.sponsorName}
        </h3> */}
      </div>
    </div>
  );
}
