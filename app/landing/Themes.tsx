import Image from "next/image";
import { useState } from "react";

interface themeData {
  name: string;
  description: string;
  src: string;
  alt: string;
}

export default function Themes() {
  const themes: themeData[] = [
    {
      name: "Smart Economies",
      description:
        "With sustainability at risk, the planet’s future is in our hands. Build software that combats climate change, reduces waste, and promotes sustainability. From apps encouraging green habits to smarter energy solutions, this is your chance to drive society toward a greener future.",
      src: "/themes-page/economies.png",
      alt: "",
    },
    {
      name: "Inclusive Innovation",
      description:
        "Technology has the power to bridge gaps and uplift communities only if it’s built for everyone. This theme focuses on making tech more inclusive, accessible and representative of diverse needs. Whether you are designing assistive tech for the disabled or building tools that empower marginalised communities, your ideas break down barriers that separate society and create a future where everyone is more connected.",
      src: "/themes-page/innovation.png",
      alt: "",
    },
    {
      name: "Revolutionizing Learning ",
      description:
        "Technology is at the forefront of education. This theme challenges you to develop software solutions that make learning more accessible, engaging and effective. Whether you're building AI powered tutoring systems, gamified learning platforms or tools that personalize education for diverse learners, your ideas will shape the future of knowledge and redefine how the next generation learns.",
      src: "/themes-page/learning.png",
      alt: "",
    },
    {
      name: "Future of Our Planet",
      description:
        "With sustainability and our planet’s well-being at risk, its future is in our hands. This theme challenges innovators like you to develop software driven solutions to combat climate change, reduce waste and promote a greener future. Whether you are designing apps that encourage sustainable habits or creating smarter ways to optimise energy and resource usage, this is your chance to innovate and drive society towards a greener future.",
      src: "/themes-page/planet.png",
      alt: "",
    },
  ];

  const [expanded, setExpanded] = useState<string | null>(null);

  const handleToggle = (name: string) => {
    setExpanded(expanded === name ? null : name);
  };

  const renderThemes = () => {
    return (
      <div className="z-10 grid grid-cols-1 gap-x-16 gap-y-11 sm:grid-cols-2">
        {themes.map((theme) => {
          const isOpen = expanded === theme.name;
          return (
            <div
              key={theme.name}
              className="bg-bgblue flex cursor-pointer flex-col items-center justify-center border-2 border-[#ffffff12] px-8 py-6"
              onClick={() => handleToggle(theme.name)}
              style={{ minHeight: 220 }}
            >
              <div
                className={`transition-opacity duration-500 ${
                  isOpen ? "pointer-events-none absolute opacity-0" : "relative opacity-100"
                } flex w-full flex-col items-center`}
              >
                <p className="text-md mb-6 w-fit text-center font-semibold whitespace-nowrap text-white sm:text-xl">
                  {theme.name}
                </p>
                <Image src={theme.src} alt={theme.alt} width={150} height={150} />
              </div>
              <div
                className={`transition-opacity duration-500 ${
                  isOpen ? "relative opacity-100" : "pointer-events-none absolute opacity-0"
                } flex w-full flex-col items-center`}
              >
                <p className="text-center text-base text-white sm:text-lg">{theme.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="themes"
      className="relative z-2 w-full max-w-full scroll-mt-25 px-4 pt-20 sm:px-8 md:px-16 lg:px-32"
      style={{ scrollMarginTop: "6rem" }}
    >
      {/* <div className="relative -z-1 hidden sm:block">
        <div className="pointer-events-none absolute top-[26%]">
          <img src="/sponsor-page/roadmap-1.png" alt="Roadmap1" />
        </div>
      </div> */}
      {/* <div className="relative sm:block">
        <div className="pointer-events-none absolute top-[26%]">
          <Image src="/themes-page/roadmap-1.png" alt="Roadmap1" width={1140} height={468} />
        </div>
      </div> */}

      {/* Stars */}
      <Image
        className="pointer-events-none absolute top-[3rem] right-[-6rem] hidden object-cover sm:right-[-12rem] sm:block"
        src="/backgrounds/star.svg"
        alt="star"
        width="530"
        height="530"
      />

      <Image
        className="pointer-events-none absolute bottom-[-5rem] left-[-6rem] hidden object-cover sm:left-[-12rem] sm:block"
        src="/backgrounds/star.svg"
        alt="star"
        width="530"
        height="530"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center rounded">
        <h1
          className="bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl"
          style={{
            backgroundImage: "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
          }}
        >
          {">"} THEMES
        </h1>
        <div className="my-[1.5rem] w-full sm:my-[2rem]">
          <div className="flex items-center justify-between">
            <hr className="bg-indigo mr-2 h-[2px] w-full border-none sm:mr-4" />
            <p className="w-fit px-2 text-lg font-medium whitespace-nowrap text-white sm:text-2xl">
              Spark your build with purpose
            </p>
            <hr className="bg-indigo ml-2 h-[2px] w-full border-none sm:ml-4" />
          </div>
        </div>
        {renderThemes()}
      </div>
    </section>
  );
}
