import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

import GreenButton from "@/components/GreenButton";
import SponsorField from "@/components/SponsorField";

interface SponsorData {
  [sponsorName: string]: string;
}

export default function Sponsors() {
  const sponsorData = {
    gold: {
      Dell: "/sponsor-page/sponsors/Dell-Logo.svg",
      OVPRI: "/sponsor-page/sponsors/OVPRI.png",
    },
    silver: {
      EY: "/sponsor-page/sponsors/EY-Logo.svg",
      AWS: "/sponsor-page/sponsors/AWS-Logo.svg",
      SDG: "/sponsor-page/sponsors/SDGs-header-logo-white-300.png",
      CSE: "/sponsor-page/sponsors/CSE-Logo.jpg",
    },
    bronze: {
      FGF: "/sponsor-page/sponsors/FGF-Brands-Logo.svg",
      CMS: "/sponsor-page/sponsors/CMS-UTSC-Logo.png",
      VoiceFlow: "/sponsor-page/sponsors/Voiceflow-Logomark-Black.svg",
      Awake: "/sponsor-page/sponsors/Awake_Logo_Brown_V1.png",
      Accenture: "/sponsor-page/sponsors/Accenture-Logo.svg",
    },
  };

  const sponsorEmail = "sponsorships@hackthevalley.io";

  const copySponsorEmail = () => {
    navigator.clipboard
      .writeText(sponsorEmail)
      .then(() => {
        toast.success(`Copied to clipboard`);
      })
      .catch((err) => {
        if (err instanceof Error) {
          toast.error(err.message);
        } else {
          toast.error("Failed to copy");
        }
      });
  };

  const renderSponsorGrid = (sponsors: SponsorData, tier: "gold" | "silver" | "bronze") => {
    const entries = Object.entries(sponsors);
    if (entries.length === 0) return null;

    const gridConfig = {
      gold: {
        gridClass: "grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 ",
        itemClass: "h-40 sm:h-48 md:h-56",
      },
      silver: {
        gridClass: "flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10",
        itemClass: "w-[calc(50%-0.75rem)] sm:w-[calc(50%-1.25rem)] h-36 sm:h-44 md:h-56",
      },
      bronze: {
        gridClass: "flex flex-wrap justify-center gap-4 sm:gap-6",
        itemClass: "w-[calc(33.333%-0.5rem)] sm:w-[calc(33.333%-1rem)] h-28 sm:h-32 md:h-36",
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
      className="w-full max-w-full scroll-mt-25 pt-20 sm:px-8 md:px-16 lg:px-32"
      style={{ scrollMarginTop: "6rem" }}
    >
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 2000,
          removeDelay: 500,
          style: {
            background: "#0B1C34",
            color: "white",
          },
          success: {
            iconTheme: {
              primary: "green",
              secondary: "#0B1C34",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "#0B1C34",
            },
          },
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center">
        <h1
          className="bg-clip-text text-6xl font-bold text-transparent lg:text-7xl"
          style={{
            backgroundImage: "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
          }}
        >
          {">"} SPONSORS
        </h1>
        <div className="my-[2rem] w-full">
          <div className="flex items-center justify-between">
            <hr className="bg-indigo mr-4 h-[2px] w-full border-none" />
            <p className="w-fit text-xl font-semibold whitespace-nowrap text-white sm:text-2xl">
              sponsor a hack-tastic weekend
            </p>
            <hr className="bg-indigo ml-4 h-[2px] w-full border-none" />
          </div>
        </div>
        <div className="relative my-8 flex w-full justify-center">
          <div className="border-indigo bg-bgblue relative flex h-24 w-full max-w-4xl flex-col items-center justify-center rounded-[20px] border-2 py-4 text-center sm:pr-12">
            <div className="flex flex-row gap-x-1">
              <p className="w-fit text-center text-xs font-semibold whitespace-nowrap text-white sm:text-xl">
                Interested in supporting
              </p>

              <p className="text-green w-fit text-center text-xs font-semibold whitespace-nowrap sm:text-xl">
                Hack the Valley?
              </p>
            </div>
            <div className="flex flex-row gap-x-1">
              <p className="w-fit text-center text-xs font-semibold whitespace-nowrap text-white sm:text-xl">
                Send us an inquiry
              </p>
              <p className="text-green w-fit text-center text-xs font-semibold whitespace-nowrap sm:text-xl">
                @
              </p>
              <button
                onClick={copySponsorEmail}
                className="text-green text-xs underline sm:text-xl"
              >
                sponsorships@hackthevalley.io
              </button>
            </div>
            <div className="pointer-events-none absolute top-1/2 -right-20 hidden -translate-y-1/2 sm:block">
              <Image
                className="pointer-events-none"
                src="/sponsor-page/badge.png"
                alt="badge"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
        <GreenButton text="Become a sponsor" externalLink="mailto:sponsorships@hackthevalley.io" />
        <div className="mt-24 mb-3 self-end">
          <div className="flex flex-row gap-x-1">
            <p className="w-fit text-center text-xl font-semibold whitespace-nowrap text-white">
              {">"} check out our
            </p>

            <p className="text-green w-fit text-center text-xl font-semibold whitespace-nowrap">
              amazing sponsors !
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="hidden sm:block">
          {/* <div className="pointer-events-none absolute top-[26%] -right-1/8 -translate-y-1/2">
            <img src="/sponsor-page/roadmap-1.png" alt="Roadmap1" />
          </div> */}
          {/* <div className="pointer-events-none absolute top-[17%] -left-2 z-0 -translate-y-1/2">
            <Image src="/sponsor-page/dot.png" alt="dot-1" width={20} height={20} />
          </div>
          <div className="pointer-events-none absolute top-[29%] -right-[14%] z-0 -translate-y-1/2">
            <Image src="/sponsor-page/dot.png" alt="dot-2" width={20} height={20} />
          </div> */}
          {/* <div className="pointer-events-none absolute top-[55%] -left-1/8 z-0 -translate-y-1/2">
            <img src="/sponsor-page/roadmap-2.png" alt="Roadmap2" />
          </div> */}
          {/* <div className="pointer-events-none absolute top-[58%] -left-22 z-0 -translate-y-1/2">
            <Image src="/sponsor-page/dot.png" alt="dot-3" width={20} height={20} />
          </div> */}
          {/* <div className="pointer-events-none absolute top-[84%] -right-1/9 z-0 -translate-y-1/2">
            <img src="/sponsor-page/roadmap-3.png" alt="Roadmap" />
          </div> */}
          {/* <div className="pointer-events-none absolute top-[74%] -right-1/9 z-0 -translate-y-1/2">
            <Image src="/sponsor-page/dot.png" alt="dot-4" width={20} height={20} />
          </div> */}
          {/* <div className="pointer-events-none absolute top-[102%] left-3 z-0 -translate-y-1/2">
            <img src="/sponsor-page/roadmap-4.png" alt="Roadmap" />
          </div> */}
          <div className="pointer-events-none absolute top-[22%] -left-14 z-0 -translate-y-1/2">
            <Image src="/sponsor-page/star.png" alt="star-1" width={140} height={160} />
          </div>
          <div className="pointer-events-none absolute top-[57%] -right-18 z-0 -translate-y-1/2">
            <Image src="/sponsor-page/star.png" alt="star-2" width={140} height={160} />
          </div>
          <div className="pointer-events-none absolute top-[87%] -left-18 z-0 -translate-y-1/2">
            <Image src="/sponsor-page/star.png" alt="star-3" width={140} height={160} />
          </div>
        </div>
        <div className="relative w-full auto-rows-auto space-y-8 sm:space-y-12">
          {/* Gold Sponsors */}
          {Object.keys(sponsorData.gold).length > 0 && (
            <div className="relative">{renderSponsorGrid(sponsorData.gold, "gold")}</div>
          )}

          {/* Silver Sponsors */}
          {Object.keys(sponsorData.silver).length > 0 && (
            <div className="relative">{renderSponsorGrid(sponsorData.silver, "silver")}</div>
          )}

          {/* Bronze Sponsors */}
          {Object.keys(sponsorData.bronze).length > 0 && (
            <div className="relative">{renderSponsorGrid(sponsorData.bronze, "bronze")}</div>
          )}
        </div>
      </div>
    </section>
  );
}
