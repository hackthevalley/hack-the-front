"use client";

import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import TextField from "@/components/TextField";

import { Question } from "../context/QuestionContext";
// import { useEffect } from "react";

interface ExperienceInfoProps {
  questions: Question[];
  hackathonCount: string;
  setHackathonCount: (val: string) => void;
  github: string;
  setGithub: (val: string) => void;
  linkedin: string;
  setLinkedin: (val: string) => void;
  portfolio: string;
  setPortfolio: (val: string) => void;
  resumeFile: File | null;
  setResumeFile: (file: File | null) => void;
}

export default function ExperienceInfo(props: ExperienceInfoProps) {
  // useEffect(() => {
  //   console.log("EXPEIRINCE INFO PROPS CHANGED:");
  //   console.log(props.hackathonCount);
  //   console.log(props.github);
  //   console.log(props.linkedin);
  //   console.log(props.portfolio);
  //   console.log(props.resumeFile);
  // }
  // , [props.hackathonCount, props.github, props.linkedin, props.portfolio, props.resumeFile]);
  return (
    <Card className="mx-10 w-full max-w-3xl">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-wide text-[#81C470]">
          &gt; Step 4: Experience Info
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
        <Dropdown
          title={props.questions[0]?.label}
          required={true}
          placeholder="Hackathon Count"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={["0", "1", "2–3", "4–5", "6+", "Prefer not to say"]}
          fieldValue={props.hackathonCount}
          setFieldValue={props.setHackathonCount}
        />
        <TextField
          title={props.questions[1]?.label}
          required={false}
          placeholder="GitHub"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          backgroundClasses="bg-gradient-to-b from-dropdownblue to-dropdownblack"
          fieldValue={props.github}
          setFieldValue={props.setGithub}
        />
        <TextField
          title={props.questions[2]?.label}
          required={false}
          placeholder="LinkedIn"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          backgroundClasses="bg-gradient-to-b from-dropdownblue to-dropdownblack"
          fieldValue={props.linkedin}
          setFieldValue={props.setLinkedin}
        />
        <TextField
          title={props.questions[3]?.label}
          required={false}
          placeholder="Portfolio"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          backgroundClasses="bg-gradient-to-b from-dropdownblue to-dropdownblack"
          fieldValue={props.portfolio}
          setFieldValue={props.setPortfolio}
        />
      </div>
      <div className="mt-5 px-8">
        <h1 className="text-lg tracking-wide text-[#81C470]">
          {props.questions[4]?.label} <span className="text-red">*</span>
        </h1>
      </div>
      <div className="mt-3 flex justify-center">
        <div className="grid w-11/12 grid-cols-1 gap-x-7 gap-y-4">
          <TextField
            title="Upload or Drag & Drop Your Resume (Max 5MB)"
            required={true}
            type="file"
            placeholder="Upload your resume"
            widthClasses="mx-[auto] sm:w-full"
            textClasses="text-md placeholder:text-base"
            backgroundClasses="bg-gradient-to-b from-dropdownblue to-dropdownblack"
            fileValue={props.resumeFile}
            setFile={(value) => props.setResumeFile(value instanceof File ? value : null)}
            fieldValue=""
            setFieldValue={() => {}}
            hasError={false}
            errorMessage=""
          />
        </div>
      </div>
    </Card>
  );
}
