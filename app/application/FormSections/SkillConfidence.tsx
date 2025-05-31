import Card from "@/components/Card";
import TextField from "@/components/TextField";

export default function SkillConfidence() {
  return (
    <Card className="w-full max-w-3xl">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-[#81C470] tracking-wide">
          &gt; Step 5: Tell Us How Comfy You Feel With...
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
        <TextField
          title="UI/UX Design"
          required={false}
          placeholder="UI/UX Design"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["Beginner", "Intermediate", "Advanced", "Expert"]}
        />
        <TextField
          title="Frontend Development"
          required={false}
          placeholder="Frontend Development"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["Beginner", "Intermediate", "Advanced", "Expert"]}
        />
        <TextField
          title="Backend Development"
          required={false}
          placeholder="Backend Development"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["Beginner", "Intermediate", "Advanced", "Expert"]}
        />
        <TextField
          title="Fullstack Development"
          required={false}
          placeholder="Fullstack Development"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["Beginner", "Intermediate", "Advanced", "Expert"]}
        />
        <TextField
          title="Project Management"
          required={false}
          placeholder="Project Management"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["Beginner", "Intermediate", "Advanced", "Expert"]}
        />
        <TextField
          title="Web, Crypto, Blockchain"
          required={false}
          placeholder="Web, Crypto, Blockchain"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["Beginner", "Intermediate", "Advanced", "Expert"]}
        />
        <TextField
          title="Cybersecurity"
          required={false}
          placeholder="Cybersecurity"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["Beginner", "Intermediate", "Advanced", "Expert"]}
        />
        <TextField
          title="Machine Learning"
          required={false}
          placeholder="Machine Learning"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["Beginner", "Intermediate", "Advanced", "Expert"]}
        />
      </div>
    </Card>
  );
}