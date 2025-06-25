"use client";

import { useState } from "react";
import Image from "next/image";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      // className={`rounded-md p-4 cursor-pointer transition-all duration-300 bg-bgblue ${
      //   open ? "bg-blue-900/60" : "bg-gradient-to-r from-blue-900/40 to-blue-800/40"
      // }`}
      className={`rounded-md p-4 cursor-pointer transition-all duration-300 bg-bgblue`}
    >
      <div className="flex justify-between items-center">
        <p className="text-white font-semibold text-lg">{question}</p>
        <Image
            src="/faq-page/ufo.png"
            alt="UFO Icon"
            width={37}
            height={37}
            className="text-white opacity-70"
        />
      </div>
      {open && <p className="text-white mt-2 text-sm opacity-90">{answer}</p>}
    </div>
  );
}
