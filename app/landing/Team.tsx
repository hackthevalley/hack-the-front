"use client";

import Image from "next/image";
import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";

export default function Team() {
  const [organizerName, setOrganizerName] = useState("");
  const [role, setRole] = useState("");

  const organizerSelected = organizerName !== "" && role !== "";

  return (
    <section
      id="team"
      className="relative mb-44 w-full max-w-full scroll-mt-25 pt-20 sm:px-8 md:px-16 lg:px-32"
      style={{ scrollMarginTop: "6rem" }}
    >
      {/* Stars */}
      <Image
        className="pointer-events-none absolute bottom-[-18rem] left-[-20rem] hidden object-cover sm:block"
        src="/backgrounds/star.svg"
        alt="star"
        width="530"
        height="530"
      />

      <Image
        className="pointer-events-none absolute top-[2rem] right-[-16rem] hidden object-cover sm:block"
        src="/backgrounds/star.svg"
        alt="star"
        width="530"
        height="530"
      />
      {/* Background gradient */}
      <Image
        width={0}
        height={0}
        alt="Background Gradient"
        className="pointer-events-none absolute top-6/10 left-1/2 z-0 w-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-15"
        src="/backgrounds/smaller-gradient.svg"
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h1
          className="bg-clip-text text-center text-6xl font-bold text-transparent sm:text-5xl lg:text-7xl"
          style={{
            backgroundImage: "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
          }}
        >
          {">"} Meet the Team
        </h1>
        <div className="my-[2rem] mb-16 w-full">
          <div className="flex items-center justify-between">
            <hr
              className={`bg-indigo ${organizerSelected ? "mr-4" : ""} h-[2px] w-full border-none`}
            />
            {organizerSelected && (
              <p className="w-fit text-xl font-semibold whitespace-nowrap text-white sm:text-2xl">
                {organizerName}, {role}
              </p>
            )}
            <hr
              className={`bg-indigo ${organizerSelected ? "ml-4" : ""} h-[2px] w-full border-none`}
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center">
        <Image
          src="/team-page/spaceship.png"
          width={350}
          height={350}
          alt="spaceship"
          className="scale-x-[-1]"
        />
        {/* <ProfileCard isDefault={true} /> */}
      </div>
    </section>
  );
}
