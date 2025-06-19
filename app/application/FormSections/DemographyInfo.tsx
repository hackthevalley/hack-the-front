import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import { Question } from "../context/QuestionContext";

interface DemographyInfoProps {
  questions: Question[];
  age: string;
  setAge: (val: string) => void;
  gender: string;
  setGender: (val: string) => void;
  raceEthinicity: string;
  setRaceEthinicity: (val: string) => void;
  LGBTQI: string;
  setLGBTGI: (val: string) => void;
  disabilities: string;
  setDisabilities: (val: string) => void;
}

export default function DemographyInfo(props: DemographyInfoProps) {
  return (
    <Card className="mx-10 w-full max-w-[52rem]">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-wide text-[#81C470]">
          &gt; Step 3: Demography Info
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
        <Dropdown
          title={props.questions[0]?.label}
          required={true}
          placeholder="Age"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={Array.from({ length: 8 }, (_, i) => (16 + i).toString())} // TODO: May need to change this to a increment field
          fieldValue={props.age}
          setFieldValue={props.setAge}
        />
        <Dropdown
          title={props.questions[1]?.label}
          required={true}
          placeholder="Gender"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={[
            "Male",
            "Female",
            "Non-binary",
            "Other",
            "Prefer not to say"
          ]}
          fieldValue={props.gender}
          setFieldValue={props.setGender}
        />
        <Dropdown
          title={props.questions[2]?.label}
          required={true}
          placeholder="Race/Ethinicity"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={[
            "Black/People of African Descent",
            "Arab/Middle Eastern",
            "East Asian (e.g. China, Japan, Korea)",
            "South/Southeast Asian (e.g. India, Pakistan, Sri Lanka, Philippines, Thailand)",
            "Indigeneous Person of Canada",
            "Latinx",
            "West Asian (e.g. Iran, Afghanistan)",
            "White/People of European Descent",
            "Other",
            "Prefer not to say",
          ]}
          fieldValue={props.raceEthinicity}
          setFieldValue={props.setRaceEthinicity}
        />
        <Dropdown
          title={props.questions[3]?.label}
          required={true}
          placeholder="Part of the LGBTQI+ community?"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={[
            "Yes", 
            "No", 
            "Prefer not to say"
          ]}
          fieldValue={props.LGBTQI}
          setFieldValue={props.setLGBTGI}
        />
      </div>
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-1 gap-y-4 gap-x-7 w-2/3">
          <Dropdown
            title={props.questions[4]?.label}
            required={true}
            placeholder="Person with Disabilities?"
            widthClasses="mx-[auto] sm:w-full"
            textClasses="text-md placeholder:text-base"
            options={[
              "Yes",
              "No",
              "Prefer not to say"
            ]}
            fieldValue={props.disabilities}
            setFieldValue={props.setDisabilities}
          />
        </div>
      </div>
    </Card>
  );
}
