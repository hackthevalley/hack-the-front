"use client";

import Image from "next/image";
import { useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { FormSections } from "@/application/FormSections";
import { JSX, useState } from "react";
import { form } from "motion/react-client";

// TODO: Need to update to pull questions from backend DB
const formSections: { key: string; position: string; content: JSX.Element }[] =
  [
    {
      key: "section1",
      position: "justify-start",
      content: <FormSections.ProfileInfo />,
    },
    {
      key: "section2",
      position: "justify-end",
      content: <FormSections.SchoolInfo />,
    },
    {
      key: "section3",
      position: "justify-start",
      content: <FormSections.DemographyInfo />,
    },
    {
      key: "section4",
      position: "justify-end",
      content: <FormSections.ExperienceInfo />,
    },
    {
      key: "section5",
      position: "justify-start",
      content: <FormSections.SkillConfidence />,
    },
    {
      key: "section7",
      position: "justify-center",
      content: <FormSections.MLH />,
    },
    {
      key: "section8",
      position: "justify-center",
      content: <FormSections.ConsentInfo />,
    },
  ];
export default function Application() {
  const [isFormActive, setIsFormActive] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setIsFormActive(true);
    appRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar hide={true} />
      <div className="h-[calc(100vh-10rem)] overflow-y-scroll no-scrollbar snap-y snap-mandatory bg-black text-white">
        <section className="h-screen snap-start flex flex-col items-center justify-center relative px-4 md:px-10">
          <Card className="w-8/12 text-center relative">
            <div className="mb-10">
              <h1 className="text-6xl font-extrabold text-[#81C470] tracking-wide">
                APPLICATION
              </h1>
            </div>
            <p className="text-xl mb-10">
              Hey hacker, welcome aboard&#x1F44B;&#x1F3FC; <br />
              Your co-pilot <strong>(name)</strong> will track your journey
              through this application. Buckle up!
            </p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                text="Begin now"
                extraClass="py-3 cursor-pointer"
                onClick={handleStart}
              />
            </motion.div>
            <Image
              src="/application-page/spaceship.png"
              alt="spaceship"
              width={350}
              height={350}
              className="absolute -bottom-30 -left-40"
            />
          </Card>
        </section>

        {formSections.map((section, index) => (
          <section
            key={section.key}
            ref={index === 0 ? appRef : undefined}
            className={`h-screen snap-start items-center flex px-4 md:px-10 mx-20 ${
              section.position
            } ${index === formSections.length - 1 ? "flex-col" : ""} gap-10`}
          >
            {section.content}
            {index === formSections.length - 1 && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10"
              >
                <Button
                  text="Submit Application"
                  extraClass="py-3 cursor-pointer"
                  onClick={() => alert("Form submitted!")}
                />
              </motion.div>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
