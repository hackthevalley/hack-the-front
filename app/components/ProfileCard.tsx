"use client";

import { motion } from "framer-motion";
import React from "react";

interface ProfileCardProps {
  children?: React.ReactNode;
  className?: string;
  isDefault: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ProfileCard({
  children,
  className = "",
  isDefault = true,
  onMouseEnter,
  onMouseLeave,
}: ProfileCardProps) {
  const defaultClass =
    "w-fit h-fit p-4 rounded-[2rem] bg-linear-140 from-[#A1CAF1]/75 via-sky-300/50 to-white/10 backdrop-blur-md";
  const defaultClassAlt =
    "w-fit h-fit p-4 rounded-[2rem] bg-[linear-gradient(to_bottom,rgba(186,230,253,0.6),rgba(255,255,255,0.8),rgba(186,230,253,0.6))] backdrop-blur-md border border-white/10";
  return (
    <motion.div
      className={`${className} ${isDefault ? defaultClass : defaultClassAlt}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{
        y: -12,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      initial={{ y: 0 }}
    >
      {children}
    </motion.div>
  );
}
