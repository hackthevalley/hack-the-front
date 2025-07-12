import Image from "next/image";

import GreenButton from "@/components/GreenButton";
import SponsorField from "@/components/SponsorField";

interface themeData {
  name: string;
  src: string;
  alt: string;
}

export default function Themes() {
  const themes: themeData[] = [
    {
      name: "theme1",
      src: "/themes-page/theme1.svg",
      alt: "",
    },
    {
      name: "theme2",
      src: "/themes-page/theme2.svg",
      alt: "",
    },
    {
      name: "theme3",
      src: "/themes-page/theme3.svg",
      alt: "",
    },
    {
      name: "theme4",
      src: "/themes-page/theme4.svg",
      alt: "",
    },
  ];

  const renderThemes = () => {
    return (
      <div className="z-10 grid grid-cols-1 gap-x-16 gap-y-11 sm:grid-cols-2">
        {themes.map((theme) => (
          <div
            key={theme.name}
            className="bg-bgblue flex flex-col items-center justify-center border-2 border-[#ffffff12] px-8 py-6"
          >
            <p className="text-md mb-6 w-fit text-center font-semibold whitespace-nowrap text-white sm:text-xl">
              {theme.name}
            </p>
            <Image src={theme.src} alt={theme.alt} width={150} height={150} />
          </div>
        ))}
      </div>
    );
  };

  const renderComingSoon = () => {
    return (
      <div className="z-10 my-20 flex w-full flex-col items-center justify-center">
        <div className="bg-bgblue flex flex-col items-center justify-center rounded-[20px] border-2 border-[#ffffff12] px-30 py-20">
          <p className="mb-16 text-7xl font-semibold text-white">Coming Soon</p>

          <p className="mx-auto mb-6 text-center text-xl text-white">Stay tuned for updates!</p>
        </div>
      </div>
    );
  };

  return (
    <section
      id="themes"
      className="relative z-2 w-full max-w-full scroll-mt-25 pt-20 sm:px-8 md:px-16 lg:px-32"
      style={{ scrollMarginTop: "6rem" }}
    >
      {/* <div className="relative -z-1 hidden sm:block">
        <div className="pointer-events-none absolute top-[26%]">
          <img src="/sponsor-page/roadmap-1.png" alt="Roadmap1" />
        </div>
      </div> */}
      <div className="relative sm:block">
        <div className="pointer-events-none absolute top-[26%]">
          <Image
            src="/themes-page/roadmap-1.png"
            alt="Roadmap1"
            className="relative"
            width={1140}
            height={468}
          />
        </div>
      </div>
      <Image
        className="pointer-events-none absolute top-[1rem] left-[-15rem] hidden object-cover sm:block"
        src="/backgrounds/star.svg"
        alt="star"
        width="530"
        height="530"
      />

      <Image
        className="pointer-events-none absolute right-[-12rem] bottom-[-2rem] hidden object-cover sm:block"
        src="/backgrounds/star.svg"
        alt="star"
        width="530"
        height="530"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center rounded">
        <h1
          className="bg-clip-text text-6xl font-bold text-transparent lg:text-7xl"
          style={{
            backgroundImage: "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
          }}
        >
          {">"} THEMES
        </h1>
        <div className="my-[2rem] w-full">
          <div className="flex items-center justify-between">
            <hr className="bg-indigo mr-4 h-[2px] w-full border-none" />
            <p className="w-fit text-xl font-medium whitespace-nowrap text-white sm:text-2xl">
              Spark your build with purpose
            </p>
            <hr className="bg-indigo ml-4 h-[2px] w-full border-none" />
          </div>
        </div>

        {/* {renderThemes()} */}
        {renderComingSoon()}
      </div>
    </section>
  );
}
