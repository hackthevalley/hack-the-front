"use client";

import Card from "@/components/Card";
import TextField from "@/components/TextField";
interface ProfileInfoProps {
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
    <Card className="w-full max-w-3xl" internalClassName="p-12">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-[#81C470] tracking-wide">
          &gt; Step 1: Profile Info
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-7">
        <TextField
          title="First Name"
          required={false}
          placeholder="Enter your first name"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.firstName}
          setFieldValue={props.setFirstName}
        />
        <TextField
          title="Last Name"
          required={true}
          placeholder="Enter your last name"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.lastName}
          setFieldValue={props.setLastName}
        />
        {/* TODO: Can be autofilled using the users login email */}
        <TextField
          title="Email"
          required={true}
          placeholder="Enter your email address"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="email"
          fieldValue={props.email}
          setFieldValue={props.setEmail}
        />
        <TextField
          title="Phone Number"
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
