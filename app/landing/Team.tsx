"use client";

import Image from "next/image";
import { useState } from "react";

import ProfileCard from "@/components/ProfileCard";
import TrainBody from "@/components/trainBody";
import TrainHead from "@/components/trainHead";

interface exec {
  name: string;
  role: string;
  image: string;
  lead: boolean;
}

export default function Team() {
  const [organizerName, setOrganizerName] = useState("");
  const [role, setRole] = useState("");

  const cochairs: exec[] = [
    {
      name: "Josephine Tjhia",
      role: "Co-President",
      image: "/team-page/co-chairs/josephine.png",
      lead: true,
    },
    {
      name: "Adem Ozdemir",
      role: "Co-President",
      image: "/team-page/co-chairs/adem.png",
      lead: true,
    },
  ];

  const developers: exec[] = [
    {
      name: "Conrad Mo",
      role: "Director of Development",
      image: "/team-page/developers/conrad.png",
      lead: true,
    },
    { name: "Kate Huang", role: "Developer", image: "/team-page/developers/kate.png", lead: false },
    {
      name: "Shreyas Rao",
      role: "Developer",
      image: "/team-page/developers/shreyas.png",
      lead: false,
    },
    {
      name: "Preston Tom-Ying",
      role: "Developer",
      image: "/team-page/developers/preston.png",
      lead: false,
    },
    {
      name: "Aran Saseelan",
      role: "Developer",
      image: "/team-page/developers/aran.png",
      lead: false,
    },
  ];

  const logistics: exec[] = [
    {
      name: "Johnson Jiang",
      role: "Director of Logistics",
      image: "/team-page/logistics/johnson.png",
      lead: true,
    },
    {
      name: "Isabelle Xu",
      role: "Logistics Coordinator",
      image: "/team-page/logistics/isabelle.png",
      lead: false,
    },
    {
      name: "Luna Bertha",
      role: "Logistics Coordinator",
      image: "/team-page/logistics/luna.png",
      lead: false,
    },
    {
      name: "John Xu",
      role: "Logistics Coordinator",
      image: "/team-page/logistics/john.png",
      lead: false,
    },
    {
      name: "Justin Yukun Wang",
      role: "Logistics Coordinator",
      image: "/team-page/logistics/justin.png",
      lead: false,
    },
    {
      name: "Ethan Kwon",
      role: "Logistics Coordinator",
      image: "/team-page/logistics/ethan.png",
      lead: false,
    },
    {
      name: "Sufyan Ghani",
      role: "Logistics Coordinator",
      image: "/team-page/logistics/sufyan.png",
      lead: false,
    },
  ];

  const sponsorships: exec[] = [
    {
      name: "Salimata Leye",
      role: "Co-Director of Sponsorships",
      image: "/team-page/sponsorship/salimata.png",
      lead: true,
    },
    {
      name: "James Liang",
      role: "Co-Director of Sponsorships",
      image: "/team-page/sponsorship/james.png",
      lead: true,
    },
    {
      name: "Cheryl Zhang",
      role: "Sponsorship Coordinator",
      image: "/team-page/sponsorship/cheryl.png",
      lead: false,
    },
    {
      name: "Danni Santos",
      role: "Sponsorship Coordinator",
      image: "/team-page/sponsorship/danni.png",
      lead: false,
    },
    {
      name: "Andrew Li",
      role: "Sponsorship Coordinator",
      image: "/team-page/sponsorship/andrew.png",
      lead: false,
    },
    {
      name: "Sahzad Jalil",
      role: "Sponsorship Coordinator",
      image: "/team-page/sponsorship/shahzad.png",
      lead: false,
    },
    {
      name: "Ilia Ghorbanipou",
      role: "Sponsorship Coordinator",
      image: "/team-page/sponsorship/ilia.png",
      lead: false,
    },
    {
      name: "Jerry Zhu",
      role: "Sponsorship Coordinator",
      image: "/team-page/sponsorship/jerry.png",
      lead: false,
    },
  ];

  const finance: exec[] = [
    {
      name: "Hillary Tse",
      role: "Finance Coordinator",
      image: "/team-page/finance/hillary.png",
      lead: true,
    },
    {
      name: "Sibel Jahangirli",
      role: "Finance Coordinator",
      image: "/team-page/finance/sibel.png",
      lead: true,
    },
  ];

  const designAndMarketing: exec[] = [
    {
      name: "Jinie Choi",
      role: "Directory of Design and Marketing",
      image: "/team-page/design-marketing/jinie.png",
      lead: true,
    },
    {
      name: "Chavi Sharma",
      role: "UI/UX Designer",
      image: "/team-page/design-marketing/chavi.png",
      lead: false,
    },
    {
      name: "Jessica Ocampo",
      role: "UI/UX Designer",
      image: "/team-page/design-marketing/jessica.png",
      lead: false,
    },
    {
      name: "Tony Park",
      role: "Marketing Coordinator",
      image: "/team-page/design-marketing/tony.png",
      lead: false,
    },
    {
      name: "Yihoi Jung",
      role: "Marketing Coordinator",
      image: "/team-page/design-marketing/yihoi.png",
      lead: false,
    },
  ];

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

        <TrainHead
          execs={cochairs}
          className="aspect-[755/257] max-h-[257px] w-full max-w-[755px]"
        />
        <TrainBody
          execs={developers}
          className="aspect-[1219/257] max-h-[257px] w-full max-w-[1219px]"
          cart="/team-page/developer-cart.svg"
        />
        <TrainBody
          execs={logistics}
          className="aspect-[1773/257] max-h-[257px] w-full max-w-[1773px]"
          cart="/team-page/logistics-cart.svg"
        />
        <TrainBody
          execs={sponsorships}
          className="aspect-[1920/257] max-h-[257px] w-full max-w-[1920px]"
          cart="/team-page/sponsorship-cart.svg"
        />
        <TrainBody
          execs={finance}
          className="aspect-[514/257] max-h-[257px] w-full max-w-[514px]"
          cart="/team-page/finance-cart.svg"
        />
        <TrainBody
          execs={designAndMarketing}
          className="aspect-[1378/257] max-h-[257px] w-full max-w-[1378px]"
          cart="/team-page/designMarketing-cart.svg"
        />
        {/* <ProfileCard isDefault={true} /> */}
      </div>
    </section>
  );
}
