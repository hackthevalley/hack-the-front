"use client";

import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import TextField from "@/components/TextField";

interface GeneralInfoProps {
  dietaryRestrictions: string;
  setDietaryRestrictions: (val: string) => void;
  shirtSize: string;
  setShirtSize: (val: string) => void;
}

export default function GeneralInfo(props: GeneralInfoProps) {
  return (
    <Card className="mx-10 w-full max-w-3xl">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-wide text-[#81C470]">
          &gt; Step 6: General Info
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
        <TextField
          title="Dietary Restrictions"
          required={true}
          placeholder="Enter your dietary restrictions"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          fieldValue={props.dietaryRestrictions}
          setFieldValue={props.setDietaryRestrictions}
        />
        <Dropdown
          title="T-Shirt Size"
          required={true}
          placeholder="Enter your t-shirt size"
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
