"use client";

import Card from "@/components/Card";
import TextField from "@/components/TextField";
import { Question } from "../context/QuestionContext";

interface ProfileInfoProps {
  questions: Question[];
  firstName: string;
  setFirstName: (val: string) => void;
  lastName: string;
  setLastName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  phoneNumber: string;
  setPhoneNumber: (val: string) => void;
}

export default function ProfileInfo(props: ProfileInfoProps) {
  return (
    <Card className="mx-10 w-full max-w-3xl" internalClassName="p-12">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-wide text-[#81C470]">
          &gt; Step 1: Profile Info
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-x-7 gap-y-4 md:grid-cols-2">
        <TextField
          title={props.questions[0]?.label}
          required={false}
          placeholder="Enter your first name"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.firstName}
          setFieldValue={props.setFirstName}
          disabled={true}
        />
        <TextField
          title={props.questions[1]?.label}
          required={true}
          placeholder="Enter your last name"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.lastName}
          setFieldValue={props.setLastName}
          disabled={true}
          />
        <TextField
          title={props.questions[2]?.label}
          required={true}
          placeholder="Enter your email address"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="email"
          fieldValue={props.email}
          setFieldValue={props.setEmail}
          disabled={true}
          />
        <TextField
          title={props.questions[3]?.label}
          required={true}
          placeholder="Enter your phone number"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.phoneNumber}
          setFieldValue={props.setPhoneNumber}
        />
      </div>
    </Card>
  );
}
