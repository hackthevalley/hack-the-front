"use client";

import Image from "next/image";

import TrainBody from "@/components/trainBody";
import TrainHead from "@/components/trainHead";

export default function TrainOnce({
  data: { cochairs, developers, logistics, sponsorships, finance, designAndMarketing },
}: any) {
  return (
    <div className="flex w-max items-center gap-4">
      <Image
        src="/team-page/spaceship.webp"
        width={350}
        height={350}
        alt="spaceship"
        className="pointer-events-none scale-x-[-1]"
      />
      <TrainHead execs={cochairs} className="w-[655px]" />
      <TrainBody execs={developers} className="w-[1150px]" cart="/team-page/developer-cart.webp" />
      <TrainBody execs={logistics} className="w-[1480px]" cart="/team-page/logistics-cart.webp" />
      <TrainBody
        execs={sponsorships}
        className="w-[1620px]"
        cart="/team-page/sponsorship-cart.webp"
      />
      <TrainBody execs={finance} className="w-[514px]" cart="/team-page/finance-cart.webp" />
      <TrainBody
        execs={designAndMarketing}
        className="w-[1178px]"
        cart="/team-page/designMarketing-cart.webp"
      />
    </div>
  );
}
