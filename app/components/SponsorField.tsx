import Image from "next/image";
import React from "react";

interface SponsorFieldProps {
  sponsorName: string;
  logoSrc: string;
  tier: "gold" | "silver" | "bronze";
  className?: string;
  link?: string;
}

export default function SponsorField(props: SponsorFieldProps) {
  const tierBorderColors = {
    gold: "border-yellow-500 hover:border-yellow-400",
    silver: "border-gray-300 hover:border-gray-500",
    bronze: "border-[#b08d57] hover:border-[#c9a66b]",
  };

  const borderColor = tierBorderColors[props.tier];

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border-[2px] bg-white transition-all duration-200 ease-in-out hover:border-[5px] ${borderColor} ${props.className}`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
        <div className="relative max-h-full w-full max-w-full flex-1">
          {props.link ? (
            <a href={props.link} target="_blank" rel="noopener noreferrer nofollow sponsored">
              <Image
                src={props.logoSrc}
                alt={`${props.sponsorName} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
              />
            </a>
          ) : (
            <Image
              src={props.logoSrc}
              alt={`${props.sponsorName} logo`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
            />
          )}
        </div>
        {/* <h3 className="text-white font-semibold mt-2 text-sm sm:text-base md:text-lg">
          {props.sponsorName}
        </h3> */}
      </div>
    </div>
  );
}
