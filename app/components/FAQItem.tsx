"use client";

import { useState } from "react";
import Image from "next/image";

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
      className={`rounded-md p-4 cursor-pointer transition-all duration-300 border-2 border-indigo ${bgColor}`}
    >
      <div className="flex justify-between items-center group">
      <p className="text-white font-semibold text-lg">{question}</p>
      <Image
        src="/faq-page/ufo.png"
        alt="UFO Icon"
        width={37}
        height={37}
        className="opacity-70 group-hover:opacity-100"
      />
      </div>
      <div
      className={`overflow-hidden transition-all duration-300 ${
        open ? "max-h-[500px] mt-2" : "max-h-0"
      }`}
      >
      <p className="text-white text-md opacity-75">{answer}</p>
      </div>
    </div>
  );
}
