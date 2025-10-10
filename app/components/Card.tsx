"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  internalClassName?: string;
  isLeft?: boolean;
}

export default function Card({
  children,
  className = "",
  internalClassName = "",
  isLeft = false,
}: CardProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-3xl bg-gradient-to-br from-[#ffffff] to-[#27272d] p-[2px]">
        <div
          className="pointer-events-none absolute inset-[2px] z-10 rounded-3xl bg-gradient-to-br from-[#143a62] from-10% via-[#DBDDDF] to-[#396089] to-80% blur-xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-[2px] z-10 rounded-3xl bg-gradient-to-br from-[#05294fd2] from-25% via-[#6f7883] via-55% to-[#05294fd2] to-85% opacity-90"
          aria-hidden="true"
        />
        <div
          className={`relative z-20 text-white ${internalClassName === "" ? "p-6 md:p-16" : internalClassName}`}
        >
          {children}
        </div>
      </div>
      <motion.div
        className={`absolute -bottom-10 z-10 ${isLeft ? "-left-10" : "-right-10"}`}
        initial={{ rotate: 0, y: 0, filter: "drop-shadow(0 0 0px #fff)" }}
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -10, 0],
          filter: [
            "drop-shadow(0 0 1px #fff)",
            "drop-shadow(0 0 2px #81C470)",
            "drop-shadow(0 0 1px #fff)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/application-page/shining-star.png"
          alt="Shining star"
          width={140}
          height={160.7}
          className="pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
