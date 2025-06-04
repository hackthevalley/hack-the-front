import Card from "@/components/Card";
import TextField from "@/components/TextField";

export default function DemographyInfo() {
  return (
    <Card className="w-full max-w-[52rem]">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-[#81C470] tracking-wide">
          &gt; Step 3: Demography Info
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
        <TextField
          title="Age"
          required={true}
          placeholder=""
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={Array.from({ length: 8 }, (_, i) => (18 + i).toString())} fieldValue={""} setFieldValue={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
          />
        <TextField
          title="Gender"
          required={true}
          placeholder=""
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={[]} 
          fieldValue={""} 
          setFieldValue={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <TextField
          title="Race/Ethinicity"
          required={true}
          placeholder=""
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={[]}
          fieldValue={""}
          setFieldValue={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <TextField
          title="Part of the 2SLGBTQI+ Community?"
          required={true}
          placeholder=""
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["Yes", "No", "Prefer not to say"]}
          fieldValue={""}
          setFieldValue={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-1 gap-y-4 gap-x-7 w-2/3">
          <TextField
            title="Person with Disabilities?"
            required={true}
            placeholder="Enter your expected year of graduation"
            widthClasses="mx-[auto] sm:w-full"
            textClasses="text-md placeholder:text-base"
            type="dropdown"
            options={["Yes", "No", "Prefer not to say"]}
            fieldValue={""}
            setFieldValue={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </Card>
  );  
}