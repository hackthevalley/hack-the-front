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
        src="/team-page/spaceship.png"
        width={350}
        height={350}
        alt="spaceship"
        className="shrink-0 scale-x-[-1]"
      />
      <TrainHead execs={cochairs} className="h-[257px] w-[755px] shrink-0" />
      <TrainBody
        execs={developers}
        className="h-[257px] w-[1219px] shrink-0"
        cart="/team-page/developer-cart.svg"
      />
      <TrainBody
        execs={logistics}
        className="h-[257px] w-[1883px] shrink-0"
        cart="/team-page/logistics-cart.svg"
      />
      <TrainBody
        execs={sponsorships}
        className="h-[257px] w-[1920px] shrink-0"
        cart="/team-page/sponsorship-cart.svg"
      />
      <TrainBody
        execs={finance}
        className="h-[257px] w-[514px] shrink-0"
        cart="/team-page/finance-cart.svg"
      />
      <TrainBody
        execs={designAndMarketing}
        className="h-[257px] w-[1378px] shrink-0"
        cart="/team-page/designMarketing-cart.svg"
      />
    </div>
  );
}
