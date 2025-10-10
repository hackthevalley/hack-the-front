"use client";

import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import TextField from "@/components/TextField";

import { Question } from "../context/QuestionContext";

interface GeneralInfoProps {
  questions: Question[];
  dietaryRestrictions: string;
  setDietaryRestrictions: (val: string) => void;
  shirtSize: string;
  setShirtSize: (val: string) => void;
}

export default function GeneralInfo(props: GeneralInfoProps) {
  return (
    <Card className="mx-4 w-full max-w-3xl md:mx-10">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-wide text-[#81C470]">
          &gt; Step 6: General Info
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
        <TextField
          title={props.questions[0]?.label}
          required={true}
          placeholder="Enter dietary restrictions"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          backgroundClasses="bg-gradient-to-b from-dropdownblue to-dropdownblack"
          fieldValue={props.dietaryRestrictions}
          setFieldValue={props.setDietaryRestrictions}
        />
        <Dropdown
          title={props.questions[1]?.label}
          required={true}
          placeholder="Enter T-shirt size"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={["S", "M", "L", "XL"]}
          fieldValue={props.shirtSize}
          setFieldValue={props.setShirtSize}
        />
      </div>
    </Card>
  );
}
