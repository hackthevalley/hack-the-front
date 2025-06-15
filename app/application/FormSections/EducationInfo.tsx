import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";

import { Question } from "../context/QuestionContext";

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
  questions: Question[];
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
    <Card className="mx-10 w-full max-w-3xl">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-wide text-[#81C470]">
          &gt; Step 2: School Info
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-x-7 gap-y-4 md:grid-cols-2">
        <Dropdown
          title={props.questions[0]?.label}
          required={false}
          placeholder="Select country"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={countries}
          fieldValue={props.country}
          setFieldValue={props.setCountry}
        />
        <Dropdown
          title={props.questions[1]?.label}
          required={true}
          placeholder="Select school"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={universities}
          fieldValue={props.schoolName}
          setFieldValue={props.setSchoolName}
        />
        <Dropdown
          title={props.questions[2]?.label}
          required={true}
          placeholder="Select level of education"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          // options={["High School", "Undergraduate", "Graduate", "PhD", "Other"]}
          options={[
            "High School",
            "Sophomore - Undergraduate",
            "Junior - Undergraduate",
            "Senior - Undergraduate",
            "Graduate",
            "PhD",
          ]}
          fieldValue={props.currentLevelOfStudy}
          setFieldValue={props.setCurrentLevelOfStudy}
        />
        <Dropdown
          title={props.questions[3]?.label}
          required={true}
          placeholder="Select major"
          widthClasses="mx-[auto] sm:w-full"
          textClasses="text-md placeholder:text-base"
          options={majors}
          fieldValue={props.major}
          setFieldValue={props.setMajor}
        />
      </div>
      <div className="mt-6 flex justify-center">
        <div className="grid w-2/3 grid-cols-1 gap-x-7 gap-y-4">
          <Dropdown
            title={props.questions[4]?.label}
            required={true}
            placeholder="Select expected year of graduation"
            widthClasses="mx-[auto] sm:w-full"
            textClasses="text-md placeholder:text-base"
            fieldValue={props.expectedGraduationYear}
            setFieldValue={props.setExpectedGraduationYear}
            options={["2025", "2026", "2027", "2028", "2029", "2030", "Other"]}
          />
        </div>
      </div>
    </Card>
  );
}
