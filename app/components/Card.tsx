'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-[#ffffff] to-[#27272d]">
          <div
            className="absolute inset-[2px] rounded-3xl z-10 bg-gradient-to-br from-[#143a62] from-10% via-[#DBDDDF] to-[#396089] to-80% pointer-events-none blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute inset-[2px] rounded-3xl z-10 bg-gradient-to-br from-[#11355b] from-20% via-[#6f7883] via-55% to-[#11355b] to-87% pointer-events-none opacity-90"
            aria-hidden="true"
          />
          <div className={`relative z-10 text-white p-16`}>
            {children}
          </div>
      </div>
      <div className="absolute z-20 -bottom-10 -right-10">
        <Image
          src="/application-page/shining-star.png"
          alt="Shining star"
          width={140}
          height={160.7}
          className="pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
