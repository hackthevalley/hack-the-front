"use client";

import Image from "next/image";

import TrainBody from "@/components/trainBody";
import TrainHead from "@/components/trainHead";

interface exec {
  name: string;
  role: string;
  image: string;
  lead: boolean;
}

interface TrainProps {
  data: {
    cochairs: exec[];
    developers: exec[];
    logistics: exec[];
    sponsorships: exec[];
    finance: exec[];
    designAndMarketing: exec[];
  };
  setOrganizerName: (name: string) => void;
  setRole: (role: string) => void;
}

export default function TrainOnce({
  data: { cochairs, developers, logistics, sponsorships, finance, designAndMarketing },
  setOrganizerName,
  setRole,
}: TrainProps) {
  return (
    <div className="relative flex w-max items-center">
      <div className="flex shrink-0 items-center">
        <Image
          src="/team-page/spaceship.webp"
          width={300}
          height={280}
          alt="spaceship"
          className="pointer-events-none !h-[280px] w-auto translate-x-20 scale-x-[-1] transform-gpu"
        />
        <Image
          src="/team-page/dotted-line.svg"
          width={150}
          height={100}
          alt="dotted line"
          className="pointer-events-none relative mt-4 translate-x-2 transform-gpu"
        />
      </div>
      <TrainHead
        execs={cochairs}
        className="w-[655px]"
        setOrganizerName={setOrganizerName}
        setRole={setRole}
      />
      <Image
        src="/team-page/connector.svg"
        width={80}
        height={80}
        alt="connector"
        className="pointer-events-none relative mb-3"
      />
      <TrainBody
        execs={developers}
        className="w-[1150px]"
        cart="/team-page/developer-cart.webp"
        setOrganizerName={setOrganizerName}
        setRole={setRole}
      />
      <Image
        src="/team-page/connector.svg"
        width={80}
        height={80}
        alt="connector"
        className="pointer-events-none relative mb-3"
      />
      <TrainBody
        execs={logistics}
        className="w-[1480px]"
        cart="/team-page/logistics-cart.webp"
        setOrganizerName={setOrganizerName}
        setRole={setRole}
      />
      <Image
        src="/team-page/connector.svg"
        width={80}
        height={80}
        alt="connector"
        className="pointer-events-none relative mb-3"
      />
      <TrainBody
        execs={sponsorships}
        className="w-[1620px]"
        cart="/team-page/sponsorship-cart.webp"
        setOrganizerName={setOrganizerName}
        setRole={setRole}
      />
      <Image
        src="/team-page/connector.svg"
        width={80}
        height={80}
        alt="connector"
        className="pointer-events-none relative mb-3"
      />
      <TrainBody
        execs={finance}
        className="w-[560px]"
        cart="/team-page/finance-cart.webp"
        setOrganizerName={setOrganizerName}
        setRole={setRole}
      />
      <Image
        src="/team-page/connector.svg"
        width={80}
        height={80}
        alt="connector"
        className="pointer-events-none relative mb-3"
      />
      <TrainBody
        execs={designAndMarketing}
        className="w-[1178px]"
        cart="/team-page/designMarketing-cart.webp"
        setOrganizerName={setOrganizerName}
        setRole={setRole}
      />
    </div>
  );
}
