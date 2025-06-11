"use client";

import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import { Question } from "../context/QuestionContext";

interface SkillConfidenceProps {
  questions: Question[];
  uiux: string;
  setUiux: (val: string) => void;
  frontend: string;
  setFrontend: (val: string) => void;
  backend: string;
  setBackend: (val: string) => void;
  fullstack: string;
  setFullstack: (val: string) => void;
  pm: string;
  setPm: (val: string) => void;
  crypto: string;
  setCrypto: (val: string) => void;
  cyber: string;
  setCyber: (val: string) => void;
  ml: string;
  setMl: (val: string) => void;
}

export default function SkillConfidence(props: SkillConfidenceProps) {
  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  return (
    <Card className="mx-10 w-full max-w-3xl">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-wide text-[#81C470]">
          &gt; Step 5: Tell Us How Comfy You Feel With...
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
        <Dropdown
          title={props.questions[0]?.label}
          required={false}
          placeholder="UI/UX Design"
          options={levels}
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.uiux}
          setFieldValue={props.setUiux}
        />
        <Dropdown
          title={props.questions[1]?.label}
          required={false}
          placeholder="Frontend Development"
          options={levels}
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.frontend}
          setFieldValue={props.setFrontend}
        />
        <Dropdown
          title={props.questions[2]?.label}
          required={false}
          placeholder="Backend Development"
          options={levels}
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.backend}
          setFieldValue={props.setBackend}
        />
        <Dropdown
          title={props.questions[3]?.label}
          required={false}
          placeholder="Fullstack Development"
          options={levels}
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.fullstack}
          setFieldValue={props.setFullstack}
        />
        <Dropdown
          title={props.questions[4]?.label}
          required={false}
          placeholder="Project Management"
          options={levels}
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.pm}
          setFieldValue={props.setPm}
        />
        <Dropdown
          title={props.questions[5]?.label}
          required={false}
          placeholder="Web, Crypto, Blockchain"
          options={levels}
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.crypto}
          setFieldValue={props.setCrypto}
        />
        <Dropdown
          title={props.questions[6]?.label}
          required={false}
          placeholder="Cybersecurity"
          options={levels}
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.cyber}
          setFieldValue={props.setCyber}
        />
        <Dropdown
          title={props.questions[7]?.label}
          required={false}
          placeholder="Machine Learning"
          options={levels}
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.ml}
          setFieldValue={props.setMl}
        />
      </div>
    </Card>
  );
}
