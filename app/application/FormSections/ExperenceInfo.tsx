import Card from "@/components/Card";
import TextField from "@/components/TextField";

export default function ExperienceInfo() {
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
        />
        <TextField
          title="Github"
          required={false}
          placeholder="GitHub"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
        />
        <TextField
          title="LinkedIn"
          required={false}
          placeholder="LinkedIn"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
        />
        <TextField
          title="Portfolio"
          required={false}
          placeholder="Portfolio"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
        />
      </div>
      <div className="mt-5 px-8">
        <h1 className="text-lg text-[#81C470] tracking-wide">
          Attach Your Resume <span className="text-red">*</span>
        </h1>
      </div>
      <div className="flex justify-center mt-3">
        <div className="grid grid-cols-1 gap-y-4 gap-x-7 w-11/12">
          {/* TODO: Update TextField to support file upload */}
          <TextField
            title="Upload resume"
            required={true}
            placeholder="Enter your expected year of graduation"
            widthClasses="mx-[auto] sm:w-full"
            textClasses="text-md placeholder:text-base"
          />
        </div>
      </div>
    </Card>
  );
};