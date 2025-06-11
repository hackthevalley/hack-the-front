import React from "react";
import Image from "next/image";

interface SponsorFieldProps {
  className?: string;
  logo?: string;
  logoAlt?: string;
}

export default function SponsorField({
  className = "",
  logo,
  logoAlt = "Company logo",
}: SponsorFieldProps) {
  return (
    <div
      className={`
        flex flex-col justify-center items-center border-yellow border-[2px] bg-bgblue rounded-xl min-w-54
        ${className}
      `}
    >
      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        {logo && (
          <div className="relative w-36 h-36">
            <Image
              src={logo}
              alt={logoAlt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 200px, 200px"
            />
          </div>
        )}
      </div>
    </div>
  );
}
