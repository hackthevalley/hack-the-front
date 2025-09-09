import Image from "next/image";
import React from "react";

interface SponsorFieldProps {
  sponsorName: string;
  logoSrc: string;
  tier: "gold" | "silver" | "bronze";
  className?: string;
}

export default function SponsorField(props: SponsorFieldProps) {
  return (
    <div
      className={`border-gold flex flex-col items-center justify-center rounded-xl border-[2px] bg-white ${props.className} `}
    >
      <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
        <div className="relative max-h-full w-full max-w-full flex-1">
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
