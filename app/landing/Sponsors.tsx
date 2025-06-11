import GreenButton from "@/components/GreenButton";
import SponsorField from "@/components/SponsorField";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="min-h-screen scroll-mt-20 sm:px-8 md:px-16 lg:px-32 w-full"
      style={{ scrollMarginTop: "10rem" }}
    >
      <div className="relative flex flex-col justify-center items-center h-full">
        <h1
          className="md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
          }}
        >
          {">"} SPONSORS
        </h1>
        <div className="absolute -right-1/8 top-[22%] -translate-y-1/2">
          <img src="/sponsor-page/roadmap-1.png" alt="Roadmap1" />
        </div>
        <div className="absolute -left-2 top-[14%] -translate-y-1/2">
          <Image
            src="/sponsor-page/dot.png"
            alt="dot-1"
            width={20}
            height={20}
          />
        </div>
        <div className="absolute -right-[14%] top-1/4 -translate-y-1/2">
          <Image
            src="/sponsor-page/dot.png"
            alt="dot-2"
            width={20}
            height={20}
          />
        </div>
        <div className="w-full my-[2rem]">
          <div className="flex justify-between items-center">
            <hr className="bg-indigo border-none mr-4 w-full h-[2px]" />
            <p className="text-white w-fit whitespace-nowrap font-semibold text-2xl">
              sponsor a hack-tastic weekend
            </p>
            <hr className="bg-indigo border-none ml-4 w-full h-[2px]" />
          </div>
        </div>
        <div className="relative w-full my-8 flex justify-center">
          <div className="relative flex flex-col w-full justify-center items-center border-2 border-indigo bg-bgblue rounded-[20px] h-24 pr-12 py-4 text-center">
            <div className="flex flex-row gap-x-1">
              <p className="text-white w-fit whitespace-nowrap font-semibold text-xl text-center">
                Interested in supporting
              </p>

              <p className="text-green w-fit whitespace-nowrap font-semibold text-xl text-center">
                Hack the Valley?
              </p>
            </div>
            <div className="flex flex-row gap-x-1">
              <p className="text-white w-fit whitespace-nowrap font-semibold text-xl text-center">
                Send us an inquiry
              </p>
              <p className="text-green w-fit whitespace-nowrap font-semibold text-xl text-center">
                @
              </p>
              <a
                href="mailto:sponsorships@hackthevalley.io"
                className="text-green underline text-xl"
              >
                sponsorships@hackthevalley.io
              </a>
            </div>
            <div className="absolute -right-20 top-1/2 -translate-y-1/2">
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
        <div className="absolute -left-1/8 top-1/2 -translate-y-1/2">
          <img src="/sponsor-page/roadmap-2.png" alt="Roadmap2" />
        </div>
        <div className="absolute -left-[14%] top-1/2 -translate-y-1/2">
          <Image
            src="/sponsor-page/dot.png"
            alt="dot-3"
            width={20}
            height={20}
          />
        </div>
        <div className="absolute -left-1/9 top-3/4 -translate-y-1/2">
          <img src="/sponsor-page/roadmap-3.png" alt="Roadmap" />
        </div>
        <div className="absolute -left-1/9 top-[80%] -translate-y-1/2">
          <Image
            src="/sponsor-page/dot.png"
            alt="dot-4"
            width={20}
            height={20}
          />
        </div>
        <div className="absolute left-[33%] top-[97%] -translate-y-1/2">
          <img src="/sponsor-page/roadmap-4.png" alt="Roadmap" />
        </div>
        <div className="relative w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-10 auto-rows-auto">
          {/* Gold */}
          <div className="absolute -left-14 top-[1%] -translate-y-1/2">
            <Image
              src="/sponsor-page/star.png"
              alt="star-1"
              width={140}
              height={160}
            />
          </div>
          <SponsorField className="col-span-full md:col-span-4 lg:col-span-6 row-span-2 h-56" />
          <SponsorField className="col-span-full md:col-span-4 lg:col-span-6 row-span-2 h-56" />
          <SponsorField className="col-span-full md:col-span-4 lg:col-span-6 row-span-2 h-56" />
          {/* Silver*/}
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 h-56" />
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 h-56" />
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 h-56" />
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 h-56" />
          <div className="absolute -right-18 top-[40%] -translate-y-1/2">
            <Image
              src="/sponsor-page/star.png"
              alt="star-2"
              width={140}
              height={160}
            />
          </div>
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 h-56" />
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 h-56" />
          {/* Bronze */}
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 h-36" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 h-36" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 h-36" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 h-36" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 h-36" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 h-36" />
          <div className="absolute -left-18 top-[90.5%] -translate-y-1/2">
            <Image
              src="/sponsor-page/star.png"
              alt="star-3"
              width={140}
              height={160}
            />
          </div>
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 h-36" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 h-36" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 h-36" />
        </div>
      </div>
    </section>
  );
}
