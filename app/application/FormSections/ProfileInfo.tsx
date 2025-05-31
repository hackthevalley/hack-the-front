import Card from '@/components/Card';
import TextField from '@/components/TextField';

export default function ProfileInfo() {
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
          />
        <TextField
          title="Last Name"
          required={true}
          placeholder="Enter your last name"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          />
        <TextField
          title="Email"
          required={true}
          placeholder="Enter your email address"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          />
        <TextField
          title="Phone Number"
          required={true}
          placeholder="Enter your phone number"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
        />
      </div>
    </Card>
  );
}
