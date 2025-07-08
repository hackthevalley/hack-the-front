import GreenButton from "@/components/GreenButton";
import SponsorField from "@/components/SponsorField";
import Image from "next/image";

interface themeData {
  name: string;
  src: string;
  alt: string;
}

export default function Themes() {
  const themes: themeData[] = [
    {
      name: "Sustainability",
      src: "/themes-page/sustainability.svg",
      alt: "sustainability icon",
    },
    {
      name: "Cybersecurity",
      src: "/themes-page/cybersecurity.svg",
      alt: "cybersecurity icon",
    },
    {
      name: "Diversity",
      src: "/themes-page/diversity.svg",
      alt: "diversity icon",
    },
    {
      name: "Artificial Intelligence",
      src: "/themes-page/ai.svg",
      alt: "AI icon",
    },
  ];

  const renderThemes = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-11 z-10">
        {themes.map((theme) => (
          <div
            key={theme.name}
            className="bg-bgblue border-2 border-[#ffffff12] px-8 py-6 flex flex-col items-center justify-center"
          >
            <p className="text-white w-fit whitespace-nowrap font-semibold text-md sm:text-xl text-center mb-6">
              {theme.name}
            </p>
            <Image src={theme.src} alt={theme.alt} width={150} height={150} />
          </div>
        ))}
      </div>
    );
  };
  return (
    <section
      id="themes"
      className="scroll-mt-25 sm:px-8 md:px-16 lg:px-32 w-full max-w-full pt-20 pb-36"
      style={{ scrollMarginTop: "10rem" }}
    >
      <div className="relative flex flex-col justify-center items-center h-full rounded z-10">
        <h1
          className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
          }}
        >
          {">"} THEMES
        </h1>
        <div className="w-full my-[2rem]">
          <div className="flex justify-between items-center">
            <hr className="bg-indigo border-none mr-4 w-full h-[2px]" />
            <p className="text-white w-fit whitespace-nowrap font-medium text-xl sm:text-2xl">
              Spark your build with purpose
            </p>
            <hr className="bg-indigo border-none ml-4 w-full h-[2px]" />
          </div>
        </div>

        {renderThemes()}

        {/* Decorative Elements */}
        <div className="hidden sm:block">
          <div className="absolute -right-1/8 top-[50%] -translate-y-1/2">
            <Image
              src="/themes-page/roadmap-1.png"
              alt="Roadmap1"
              className="relative"
              width={1140}
              height={468}
            />
          </div>
          <div className="absolute left-[9%] bottom-[14%] -translate-y-1/2">
            <Image
              src="/sponsor-page/dot.png"
              alt="dot-1"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute -right-[5%] top-[8%] -translate-y-1/2">
            <Image
              src="/sponsor-page/dot.png"
              alt="dot-2"
              width={20}
              height={20}
            />
          </div>
          {/* <div className="absolute -left-1/8 top-[55%] -translate-y-1/2">
            <img src="/sponsor-page/roadmap-2.png" alt="Roadmap2" />
          </div>
          <div className="absolute -left-22 top-[58%] -translate-y-1/2">
            <Image
              src="/sponsor-page/dot.png"
              alt="dot-3"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute  -right-1/9 top-[84%] -translate-y-1/2">
            <img src="/sponsor-page/roadmap-3.png" alt="Roadmap" />
          </div>
          <div className="absolute -right-1/9 top-[74%] -translate-y-1/2">
            <Image
              src="/sponsor-page/dot.png"
              alt="dot-4"
              width={20}
              height={20}
            />
          </div> */}
          {/* <div className="absolute left-3 top-[102%] -translate-y-1/2">
            <img src="/sponsor-page/roadmap-4.png" alt="Roadmap" />
          </div>
          <div className="absolute -left-14 top-[22%] -translate-y-1/2 z-10">
            <Image
              src="/sponsor-page/star.png"
              alt="star-1"
              width={140}
              height={160}
            />
          </div>
          <div className="absolute -right-18 top-[57%] -translate-y-1/2 z-10">
            <Image
              src="/sponsor-page/star.png"
              alt="star-2"
              width={140}
              height={160}
            />
          </div>
          <div className="absolute -left-18 top-[87%] -translate-y-1/2 z-10">
            <Image
              src="/sponsor-page/star.png"
              alt="star-3"
              width={140}
              height={160}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
