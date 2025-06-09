import Card from "@/components/Card";
import Checkbox from "@/components/CheckBox";
import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";

export default function MLH() {
  const [mlhCodeOfConduct, setMlhCodeOfConduct] = useState(false);
  const [mlhPrivacyPolicy, setMlhPrivacyPolicy] = useState(false);
  const [mlhEmailConsent, setMlhEmailConsent] = useState(false);
  const spaceshipRef6 = useRef<HTMLImageElement>(null);
  const inView6 = useInView(spaceshipRef6, { once: false, margin: "-20% 0px" });

  return (
    <Card className="w-full max-w-7xl" isLeft={true}>
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-[#81C470] tracking-wide">
          &gt; MLH Code of Conduct, Data Sharing, and Terms & Conditions
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <Checkbox
          checked={mlhCodeOfConduct}
          onChange={setMlhCodeOfConduct}
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
          checked={mlhPrivacyPolicy}
          onChange={setMlhPrivacyPolicy}
          label={
            <span>
              I authorize you to share my application/registration information
              with Major League Hacking for event administration, ranking, MLH
              administration in-line with the{" "}
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
          checked={mlhEmailConsent}
          onChange={setMlhEmailConsent}
          label={
            <span>
              I authorize to send me occasional emails about relevant events,
              career opportunities, and community announcements.
            </span>
          }
          required={false}
        />
      </div>
      <motion.img
        ref={spaceshipRef6}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={
          inView6
            ? { opacity: 1, x: 300, y: 0, rotate: 5 }
            : { opacity: 0, x: 0, y: 0 }
        }
        transition={
          inView6 ? { duration: 2, ease: "easeInOut" } : { duration: 0 }
        }
        src="/application-page/spaceship.png"
        alt="spaceship"
        width={336}
        height={336}
        className="absolute z-50 -right-[20%] -bottom-[8%] translate-x-1/2 translate-y-1/2 rotate-[5deg] -scale-x-100"
      />
    </Card>
  );
}
