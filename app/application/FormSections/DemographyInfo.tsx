import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import TextField from "@/components/TextField";

interface DemographyInfoProps {
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
      <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
        <Dropdown
          title="Age"
          required={true}
          placeholder="Age"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={Array.from({ length: 8 }, (_, i) => (18 + i).toString())} // TODO: May need to change this to a increatment field
          fieldValue={props.age}
          setFieldValue={props.setAge}
        />
        <Dropdown
          title="Gender"
          required={true}
          placeholder="Gender"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={["Male", "Female", "Non-binary", "Other", "Prefer not to say"]}
          fieldValue={props.gender}
          setFieldValue={props.setGender}
        />
        <Dropdown
          title="Race/Ethinicity"
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
          title="Part of the 2SLGBTQI+ Community?"
          required={true}
          placeholder=""
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={["Yes", "No", "Prefer not to say"]}
          fieldValue={props.LGBTQI}
          setFieldValue={props.setLGBTGI}
        />
      </div>
      <div className="mt-6 flex justify-center">
        <div className="grid w-2/3 grid-cols-1 gap-x-7 gap-y-4">
          <Dropdown
            title="Person with Disabilities?"
            required={true}
            placeholder=""
            widthClasses="mx-[auto] sm:w-full"
            textClasses="text-md placeholder:text-base"
            options={["Yes", "No", "Prefer not to say"]}
            fieldValue={props.disabilities}
            setFieldValue={props.setDisabilities}
          />
        </div>
      </div>
    </Card>
  );
}
