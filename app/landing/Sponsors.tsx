import GreenButton from "@/components/GreenButton";
import SponsorField from "@/components/SponsorField";
import Image from "next/image";
import badge from "@/assets/images/badge.png";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="min-h-screen scroll-mt-20 sm:px-8 md:px-16 lg:px-32 w-full"
      style={{ scrollMarginTop: "10rem" }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h1
          className="md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text"
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
              <Image src={badge} alt="badge" width={150} height={150} />
            </div>
          </div>
        </div>
        <GreenButton text="Become a sponsor" />
        <div className="self-end mt-10 mb-3">
          <div className="flex flex-row gap-x-1">
            <p className="text-white w-fit whitespace-nowrap font-semibold text-xl text-center">
              {">"} check out our
            </p>

            <p className="text-green w-fit whitespace-nowrap font-semibold text-xl text-center">
              amazing sponsors !
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-auto">
          {/* Gold */}
          <SponsorField className="col-span-full md:col-span-4 lg:col-span-6 row-span-2" />
          <SponsorField className="col-span-full md:col-span-4 lg:col-span-6 row-span-2" />
          <SponsorField className="col-span-full md:col-span-4 lg:col-span-6 row-span-2" />
          {/* Silver*/}
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2" />
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2" />
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2" />
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2" />
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2" />
          <SponsorField className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2" />
          {/* Bronze */}
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2" />
          <SponsorField className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2" />
        </div>
      </div>
    </section>
  );
}
