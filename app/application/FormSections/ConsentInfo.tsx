import Card from "@/components/Card";
import Checkbox from "@/components/CheckBox";
import { useState } from "react";

interface ConsentInfoProps {
  consentAgreed: boolean;
  setConsentAgreed: (val: boolean) => void;
}

export default function ConsentInfo(props: ConsentInfoProps) {
  return (
    <Card className="w-full max-w-7xl">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-[#81C470] tracking-wide">
          &gt; Consent Form
        </h1>
      </div>
      <div>
        <p className="text-base mb-10 px-5">
          I, hereby grant permission to Hack the Valley to use screenshots and/or video of me taken during Hack the Valley 10 in publications, news releases, online, and in other communication related to the mission of Hack the Valley. I further give my consent and submit my compliance to the use of a third party video conference service for the virtual participation of Hack the Valley 10.
        </p>
        <Checkbox
          checked={props.consentAgreed}
          onChange={props.setConsentAgreed}
          label={
            <span>
              I have read and agree to the consent form.
            </span>
          }
          required={true}
        />
      </div>
    </Card>
  );
}