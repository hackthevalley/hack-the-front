import React from "react";
import Image from "next/image";

interface SponsorFieldProps {
  className?: string;
  logo?: string;
  logoAlt?: string;
  companyName?: string;
}

export default function SponsorField({
  className = "",
  logo,
  logoAlt = "Company logo",
  companyName,
}: SponsorFieldProps) {
  return (
    <div
      className={`
        flex flex-col justify-center items-center border-yellow border-[2px] bg-bgblue rounded-[20px] h-56 w-full
        ${className}
      `}
    >
      <div className="h-full w-full flex flex-col items-center justify-center text-center">
        {logo && (
          <div className="mb-3">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src={logo}
                alt={logoAlt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 48px, 64px"
              />
            </div>
          </div>
        )}

        {companyName && (
          <h3 className="text-sm md:text-base font-medium text-white mb-2">
            {companyName}
          </h3>
        )}
      </div>
    </div>
  );
}
