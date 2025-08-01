import { motion, useInView } from "motion/react";
import { useRef } from "react";

import Card from "@/components/Card";
import Checkbox from "@/components/CheckBox";

interface ConsentInfoProps {
  consentAgreed: boolean;
  setConsentAgreed: (val: boolean) => void;
}

export default function ConsentInfo(props: ConsentInfoProps) {
  const spaceshipRef7 = useRef<HTMLImageElement>(null);
  const inView7 = useInView(spaceshipRef7, { once: false, margin: "-20% 0px" });

  return (
    <Card className="mx-10 w-full max-w-7xl">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-wide text-[#81C470]">&gt; Consent Form</h1>
      </div>
      <div>
        <p className="mb-10 px-5 text-base">
          I, hereby grant permission to Hack the Valley to use screenshots and/or video of me taken
          during Hack the Valley 10 in publications, news releases, online, and in other
          communication related to the mission of Hack the Valley. I further give my consent and
          submit my compliance to the use of a third party video conference service for the virtual
          participation of Hack the Valley 10.
        </p>
        <Checkbox
          checked={props.consentAgreed}
          onChange={props.setConsentAgreed}
          label={<span>I have read and agree to the consent form.</span>}
          required={true}
        />
      </div>
      <motion.img
        ref={spaceshipRef7}
        initial={{ opacity: 0, x: 0, y: -100 }}
        animate={inView7 ? { opacity: 1, x: 300, y: 0, rotate: 10 } : { opacity: 0, x: 0, y: -100 }}
        transition={inView7 ? { duration: 1, ease: "easeInOut" } : { duration: 0 }}
        src="/application-page/spaceship.png"
        alt="spaceship"
        width={336}
        height={336}
        className="pointer-events-none absolute -bottom-20 -left-170 z-50 translate-x-1/2 translate-y-1/2 rotate-[-10deg]"
      />
    </Card>
  );
}
