"use client";

import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import TextField from "@/components/TextField";
import { Question } from "../context/QuestionContext";

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
  return (
    <Card className="mx-10 w-full max-w-3xl">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-wide text-[#81C470]">
          &gt; Step 4: Experience Info
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
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
          fieldValue={props.github}
          setFieldValue={props.setGithub}
        />
        <TextField
          title={props.questions[2]?.label}
          required={false}
          placeholder="LinkedIn"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.linkedin}
          setFieldValue={props.setLinkedin}
        />
        <TextField
          title={props.questions[3]?.label}
          required={false}
          placeholder="Portfolio"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.portfolio}
          setFieldValue={props.setPortfolio}
        />
      </div>
      <div className="mt-5 px-8">
        <h1 className="text-lg text-[#81C470] tracking-wide">
          {props.questions[4]?.label} <span className="text-red">*</span>
        </h1>
      </div>
      <div className="mt-3 flex justify-center">
        <div className="grid w-11/12 grid-cols-1 gap-x-7 gap-y-4">
          {/* TODO: Replace with an actual file input component */}
          <TextField
            title="Upload or Drag & Drop Your Resume"
            required={true}
            type="file"
            placeholder="Upload your resume"
            widthClasses="mx-[auto] sm:w-full"
            textClasses="text-md placeholder:text-base"
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
