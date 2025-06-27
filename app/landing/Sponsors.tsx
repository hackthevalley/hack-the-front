import GreenButton from "@/components/GreenButton";
import SponsorField from "@/components/SponsorField";
import Image from "next/image";

interface SponsorData {
  [sponsorName: string]: string;
}

export default function Sponsors() {
  const sponsorData = {
    gold: {
      A: "/icons/htv-logo.svg",
      B: "/icons/htv-logo.svg",
      C: "/icons/htv-logo.svg",
    },
    silver: {
      A: "/icons/htv-logo.svg",
      B: "/icons/htv-logo.svg",
      C: "/icons/htv-logo.svg",
      D: "/icons/htv-logo.svg",
    },
    bronze: {
      A: "/icons/htv-logo.svg",
      B: "/icons/htv-logo.svg",
      C: "/icons/htv-logo.svg",
      D: "/icons/htv-logo.svg",
      E: "/icons/htv-logo.svg",
      F: "/icons/htv-logo.svg",
      G: "/icons/htv-logo.svg",
      H: "/icons/htv-logo.svg",
      I: "/icons/htv-logo.svg",
    },
  };

  const renderSponsorGrid = (
    sponsors: SponsorData,
    tier: "gold" | "silver" | "bronze"
  ) => {
    const entries = Object.entries(sponsors);
    if (entries.length === 0) return null;

    const gridConfig = {
      gold: {
        gridClass: "grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 ",
        itemClass: "h-40 sm:h-48 md:h-56",
      },
      silver: {
        gridClass: "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 ",
        itemClass: "h-36 sm:h-44 md:h-56",
      },
      bronze: {
        gridClass: "grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6",
        itemClass: "h-28 sm:h-32 md:h-36",
      },
    };

    const config = gridConfig[tier];
    return (
      <div className={config.gridClass}>
        {entries.map(([sponsorName, logoSrc]) => (
          <SponsorField
            key={sponsorName}
            sponsorName={sponsorName}
            logoSrc={logoSrc}
            tier={tier}
            className={config.itemClass}
          />
        ))}
      </div>
    );
  };
  return (
    <section
      id="sponsors"
      className="scroll-mt-25 sm:px-8 md:px-16 lg:px-32 w-full max-w-full"
      style={{ scrollMarginTop: "10rem" }}
    >
      <div className="relative flex flex-col justify-center items-center h-full">
        <h1
          className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
          }}
        >
          {">"} SPONSORS
        </h1>
        <div className="w-full my-[2rem]">
          <div className="flex justify-between items-center">
            <hr className="bg-indigo border-none mr-4 w-full h-[2px]" />
            <p className="text-white w-fit whitespace-nowrap font-semibold text-xl sm:text-2xl">
              sponsor a hack-tastic weekend
            </p>
            <hr className="bg-indigo border-none ml-4 w-full h-[2px]" />
          </div>
        </div>
        <div className="relative w-full my-8 flex justify-center">
          <div className="relative flex flex-col w-full  max-w-4xl justify-center items-center border-2 border-indigo bg-bgblue rounded-[20px] h-24 sm:pr-12 py-4 text-center">
            <div className="flex flex-row gap-x-1">
              <p className="text-white w-fit whitespace-nowrap font-semibold text-xs sm:text-xl text-center">
                Interested in supporting
              </p>

              <p className="text-green w-fit whitespace-nowrap font-semibold text-xs sm:text-xl text-center">
                Hack the Valley?
              </p>
            </div>
            <div className="flex flex-row gap-x-1">
              <p className="text-white w-fit whitespace-nowrap font-semibold text-xs sm:text-xl text-center ">
                Send us an inquiry
              </p>
              <p className="text-green w-fit whitespace-nowrap font-semibold text-xs sm:text-xl text-center">
                @
              </p>
              <a
                href="mailto:sponsorships@hackthevalley.io"
                className="text-green underline text-xs sm:text-xl "
              >
                sponsorships@hackthevalley.io
              </a>
            </div>
            <div className="hidden sm:block absolute -right-20 top-1/2 -translate-y-1/2">
              <Image
                src="/sponsor-page/badge.png"
                alt="badge"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
        <GreenButton text="Become a sponsor" />
        <div className="self-end mt-24 mb-3">
          <div className="flex flex-row gap-x-1">
            <p className="text-white w-fit whitespace-nowrap font-semibold text-xl text-center">
              {">"} check out our
            </p>

            <p className="text-green w-fit whitespace-nowrap font-semibold text-xl text-center">
              amazing sponsors !
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="hidden sm:block">
          <div className="absolute -right-1/8 top-[26%] -translate-y-1/2">
            <img src="/sponsor-page/roadmap-1.png" alt="Roadmap1" />
          </div>
          <div className="absolute -left-2 top-[17%] -translate-y-1/2">
            <Image
              src="/sponsor-page/dot.png"
              alt="dot-1"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute -right-[14%] top-[29%] -translate-y-1/2">
            <Image
              src="/sponsor-page/dot.png"
              alt="dot-2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute -left-1/8 top-[55%] -translate-y-1/2">
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
          </div>
          <div className="absolute left-3 top-[102%] -translate-y-1/2">
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
          </div>
        </div>
        <div className="relative w-full auto-rows-auto space-y-8 sm:space-y-12">
          {/* Gold Sponsors */}
          {Object.keys(sponsorData.gold).length > 0 && (
            <div className="relative">
              {renderSponsorGrid(sponsorData.gold, "gold")}
            </div>
          )}

          {/* Silver Sponsors */}
          {Object.keys(sponsorData.silver).length > 0 && (
            <div className="relative">
              {renderSponsorGrid(sponsorData.silver, "silver")}
            </div>
          )}

          {/* Bronze Sponsors */}
          {Object.keys(sponsorData.bronze).length > 0 && (
            <div className="relative">
              {renderSponsorGrid(sponsorData.bronze, "bronze")}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
