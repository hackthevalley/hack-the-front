"use client";

import { motion } from "motion/react";

import Button from "@/components/Button";

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.7 }, // ✅ Only affects animate
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 }, // ✅ No delay here
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }, // ✅ No delay here
  },
};

export default function NotFound() {
  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="bg-clip-text text-8xl font-bold text-transparent sm:text-9xl"
        style={{
          backgroundImage: "linear-gradient(160deg, #2A3A4F, #4C5B6A, #6B7885, #4C5B6A, #2A3A4F)",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-center text-3xl font-medium text-white sm:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Oops, this page is not found!
      </motion.h2>
      <motion.p
        className="text-grey text-center text-base sm:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        The link might be corrupted or the page <br /> may have been removed.
      </motion.p>
      <motion.div
        className="mx-auto mt-6 w-fit"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      >
        <Button extraClass="py-3" text="Go back home" route="/" />
      </motion.div>
    </motion.div>
  );
}
