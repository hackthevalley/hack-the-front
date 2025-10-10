import { motion, useInView } from "motion/react";
import { useRef } from "react";

import Card from "@/components/Card";
import Checkbox from "@/components/CheckBox";

interface MLHProps {
  mlhCodeOfConduct: boolean;
  setMlhCodeOfConduct: (val: boolean) => void;
  mlhPrivacyPolicy: boolean;
  setMlhPrivacyPolicy: (val: boolean) => void;
  mlhEmailConsent: boolean;
  setMlhEmailConsent: (val: boolean) => void;
}

export default function MLH(props: MLHProps) {
  const spaceshipRef6 = useRef<HTMLImageElement>(null);
  const inView6 = useInView(spaceshipRef6, { once: false, margin: "-20% 0px" });

  return (
    <Card className="mx-4 w-full max-w-7xl md:mx-10" isLeft={true}>
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-wide text-[#81C470]">
          &gt; MLH Code of Conduct, Data Sharing, and Terms & Conditions
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <Checkbox
          checked={props.mlhCodeOfConduct}
          onChange={props.setMlhCodeOfConduct}
          label={
            <>
              I have read and agree to the{" "}
              <a
                className="text-[#81C470]"
                href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                MLH Code of Conduct
              </a>
              .
            </>
          }
          required={true}
        />
        <Checkbox
          checked={props.mlhPrivacyPolicy}
          onChange={props.setMlhPrivacyPolicy}
          label={
            <span>
              I authorize you to share my application/registration information with Major League
              Hacking for event administration, ranking, MLH administration in-line with the{" "}
              <a
                className="text-[#81C470]"
                href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                MLH Privacy Policy
              </a>
              . I further agree to the terms of both the{" "}
              <a
                className="text-[#81C470]"
                href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                MLH Contest Terms and Conditions
              </a>{" "}
              and the{" "}
              <a
                className="text-[#81C470]"
                href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                MLH Privacy Policy
              </a>
              .
            </span>
          }
          required={true}
        />
        <Checkbox
          checked={props.mlhEmailConsent}
          onChange={props.setMlhEmailConsent}
          label={
            <span>
              I authorize to send me occasional emails about relevant events, career opportunities,
              and community announcements.
            </span>
          }
          required={false}
        />
      </div>
      <motion.img
        ref={spaceshipRef6}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={inView6 ? { opacity: 1, x: 300, y: 0, rotate: 5 } : { opacity: 0, x: 0, y: 0 }}
        transition={inView6 ? { duration: 0.8, ease: "easeInOut" } : { duration: 0 }}
        src="/application-page/spaceship.png"
        alt="spaceship"
        width={336}
        height={336}
        className="pointer-events-none absolute -right-[20%] -bottom-[8%] z-50 translate-x-1/2 translate-y-1/2 -scale-x-100 rotate-[5deg]"
      />
    </Card>
  );
}
