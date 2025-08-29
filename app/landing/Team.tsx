"use client";

import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Train from "@/components/train";

interface exec {
  name: string;
  role: string;
  image: string;
  lead: boolean;
}

export default function Team() {
  const [organizerName, setOrganizerName] = useState("");
  const [role, setRole] = useState("");

  // Add debugging for state changes
  const handleSetOrganizerName = (name: string) => {
    setOrganizerName(name);
  };

  const handleSetRole = (role: string) => {
    setRole(role);
  };

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

  const SPEED = 100; // 100
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const [half, setHalf] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    setHalf(el.scrollWidth / 2);
  }, []);

  useAnimationFrame((_t, delta) => {
    if (paused || reduce || !half) return;
    const dx = (SPEED * delta) / 1000;
    let next = x.get() - dx;

    if (next <= -half * 1.016) {
      // reset exactly snap position for clean loop. Must be these values
      next = -80;
    }

    x.set(next);
  });

  return (
    <section
      id="team"
      className="relative mb-44 w-full max-w-full scroll-mt-25 pt-20 pb-60"
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
      <div className="relative z-10 mx-auto max-w-6xl sm:px-8 md:px-16 lg:px-32">
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
            <motion.hr
              className="bg-indigo my-4 h-[2px] border-none"
              initial={{ width: "100%" }}
              animate={{
                width: organizerSelected ? "calc(100% - 200px)" : "100%",
                marginRight: organizerSelected ? "1rem" : "0rem",
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <motion.p
              className="w-fit text-xl font-semibold whitespace-nowrap text-white sm:text-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: organizerSelected ? 1 : 0,
                scale: organizerSelected ? 1 : 0.8,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {organizerName}
              {organizerSelected ? ", " : ""}
              {role}
            </motion.p>
            <motion.hr
              className="bg-indigo my-4 h-[2px] border-none"
              initial={{ width: "100%" }}
              animate={{
                width: organizerSelected ? "calc(100% - 200px)" : "100%",
                marginLeft: organizerSelected ? "1rem" : "0rem",
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
      <div className="absolute -left-4 z-10 mt-16 w-screen overflow-hidden sm:-left-20">
        <motion.div
          ref={trackRef}
          className="flex w-max will-change-transform select-none"
          style={{ x, transform: "translateZ(0)" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="marquee"
          aria-label="Scrolling team train"
        >
          <Train
            data={{ cochairs, developers, logistics, sponsorships, finance, designAndMarketing }}
            setOrganizerName={handleSetOrganizerName}
            setRole={handleSetRole}
          />
          {/* duplicate for seamless wrap */}
          <Train
            data={{ cochairs, developers, logistics, sponsorships, finance, designAndMarketing }}
            setOrganizerName={handleSetOrganizerName}
            setRole={handleSetRole}
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
