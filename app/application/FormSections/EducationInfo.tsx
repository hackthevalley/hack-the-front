import Card from "@/components/Card";
import TextField from "@/components/TextField";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "India",
  "Australia",
  "Germany",
  "France",
  "China",
  "Japan",
  "South Korea",
  "Brazil",
  "Mexico",
  "Italy",
  "Spain",
  "Russia",
  "South Africa",
  "New Zealand",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Switzerland",
  "Turkey",
  "Saudi Arabia",
  "United Arab Emirates",
  "Singapore",
  "Malaysia",
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Argentina",
  "Chile",
  "Colombia",
  "Egypt",
  "Nigeria",
  "Kenya",
  "Other",
];

const universities = [
  "University of Toronto",
  "University of British Columbia",
  "McGill University",
  "University of Alberta",
  "University of Waterloo",
  "Western University",
  "Queen's University",
  "Simon Fraser University",
  "University of Calgary",
  "Dalhousie University",
  "University of Ottawa",
  "York University",
  "University of Victoria",
  "Laval University",
  "University of Manitoba",
  "University of Saskatchewan",
  "Concordia University",
  "Carleton University",
  "Memorial University of Newfoundland",
  "Toronto Metropolitan University",
];

const majors = [
  "Computer Science",
  "Software Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Business Administration",
  "Accounting",
  "Finance",
  "Marketing",
  "Economics",
  "Biology",
  "Biotechnology",
  "Chemistry",
  "Physics",
  "Mathematics",
  "Statistics",
  "Psychology",
  "Sociology",
  "Political Science",
  "History",
  "Philosophy",
  "English Literature",
  "Education",
  "Environmental Science",
  "Nursing",
  "Medicine",
  "Law",
  "Architecture",
  "Fine Arts",
  "Music",
  "Theatre",
  "Other",
];

interface EducationInfoProps {
  country: string;
  setCountry: (val: string) => void;
  schoolName: string;
  setSchoolName: (val: string) => void;
  currentLevelOfStudy: string;
  setCurrentLevelOfStudy: (val: string) => void;
  major: string;
  setMajor: (val: string) => void;
  expectedGraduationYear: string;
  setExpectedGraduationYear: (val: string) => void;
}

export default function EducationInfo(props: EducationInfoProps) {
  return (
    <Card className="w-full max-w-3xl">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-[#81C470] tracking-wide">
          &gt; Step 2: School Info
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-7">
        <TextField
          title="Country"
          required={false}
          placeholder="Select your country"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={countries}
          fieldValue={props.country}
          setFieldValue={props.setCountry}
        />
        <TextField
          title="School Name"
          required={true}
          placeholder="Select your school"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={universities}
          fieldValue={props.schoolName}
          setFieldValue={props.setSchoolName}
        />
        <TextField
          title="Current Level of Education"
          required={true}
          placeholder="Select your level of education"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={["High School", "Undergraduate", "Graduate", "PhD", "Other"]}
          fieldValue={props.currentLevelOfStudy}
          setFieldValue={props.setCurrentLevelOfStudy}
        />
        <TextField
          title="Major"
          required={true}
          placeholder="Select your major"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          type="dropdown"
          options={majors}
          fieldValue={props.major}
          setFieldValue={props.setMajor}
        />
      </div>
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-1 gap-y-4 gap-x-7 w-2/3">
          <TextField
            title="Expected Year of Graduation"
            required={true}
            placeholder="Enter your expected year of graduation"
            widthClasses="mx-[auto] sm:w-full"
            textClasses="text-md placeholder:text-base"
            type="dropdown"
            fieldValue={props.expectedGraduationYear}
            setFieldValue={props.setExpectedGraduationYear}
            options={[
              "2025",
              "2026",
              "2027",
              "2028",
              "2029",
            ]}
          />
        </div>
      </div>
    </Card>
  );
}
