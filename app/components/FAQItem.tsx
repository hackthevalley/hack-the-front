"use client";

import Image from "next/image";
import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
  bgColor?: string;
};

export default function FAQItem({ question, answer, bgColor }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`border-indigo cursor-pointer rounded-2xl border-2 p-4 transition-all duration-400 ${bgColor}`}
    >
      <div className="group flex items-center justify-between">
        <p className="text-lg font-semibold text-white">{question}</p>
        <Image
          src="/faq-page/ufo.png"
          alt="UFO Icon"
          width={37}
          height={37}
          className="opacity-70 transition-all duration-400 group-hover:opacity-100"
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          open ? "mt-2 max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="text-md text-white opacity-75">{answer}</p>
      </div>
    </div>
  );
}
