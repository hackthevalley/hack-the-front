"use client";

import Card from "@/components/Card";
import TextField from "@/components/TextField";

interface GeneralInfoProps {
  dietaryRestrictions: string;
  setDietaryRestrictions: (val: string) => void;
  shirtSize: string;
  setShirtSize: (val: string) => void;
}

export default function GeneralInfo(props: GeneralInfoProps) {
  return (
    <Card className="w-full max-w-3xl">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-[#81C470] tracking-wide">
          &gt; Step 6: General Info
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
        <TextField
          title="Dietary Restrictions"
          required={true}
          placeholder="Enter your dietary restrictions"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={[
            "N/A",
            "Vegetarian",
            "Vegan",
            "Halal",
            "Kosher",
            "Gluten-Free",
            "Other",
          ]}
          fieldValue={props.dietaryRestrictions}
          setFieldValue={props.setDietaryRestrictions}
        />
        <TextField
          title="T-Shirt Size"
          required={true}
          placeholder="Enter your t-shirt size"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["S", "M", "L", "XL"]}
          fieldValue={props.shirtSize}
          setFieldValue={props.setShirtSize}
        />
      </div>
    </Card>
  );
}
