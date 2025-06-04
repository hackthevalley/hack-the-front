"use client";

import Card from "@/components/Card";
import TextField from "@/components/TextField";

interface ExperienceInfoProps {
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
    <Card className="w-full max-w-3xl">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-[#81C470] tracking-wide">
          &gt; Step 4: Experience Info
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
        <TextField
          title="Hackathon Count?"
          required={true}
          placeholder=""
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["0", "1", "2–3", "4–5", "6+", "Prefer not to say"]}
          fieldValue={props.hackathonCount}
          setFieldValue={props.setHackathonCount}
        />
        <TextField
          title="Github"
          required={false}
          placeholder="GitHub"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.github}
          setFieldValue={props.setGithub}
        />
        <TextField
          title="LinkedIn"
          required={false}
          placeholder="LinkedIn"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.linkedin}
          setFieldValue={props.setLinkedin}
        />
        <TextField
          title="Portfolio"
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
          Attach Your Resume <span className="text-red">*</span>
        </h1>
      </div>
      <div className="flex justify-center mt-3">
        <div className="grid grid-cols-1 gap-y-4 gap-x-7 w-11/12">
          {/* TODO: Replace with an actual file input component */}
          <TextField
            title="Upload resume"
            required={true}
            placeholder="Upload your resume"
            widthClasses="mx-[auto] sm:w-full"
            textClasses="text-md placeholder:text-base"
            fieldValue={props.resumeFile ? props.resumeFile.name : ""}
            setFieldValue={() => {}}
          />
        </div>
      </div>
    </Card>
  );
}
