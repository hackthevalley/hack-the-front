"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { FormSections } from "@/application/FormSections";
import { JSX, useState } from "react";
import { useQuestions } from "./context/QuestionContext";
import fetchInstance from "@/utils/api";

// TODO: Need to update to pull questions from backend DB
const token = localStorage.getItem("auth-token");

export default function Application() {
  const [isFormActive, setIsFormActive] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);

  // get questions ids
  const { questions, loading, error } = useQuestions();
  // useEffect(() => {
  //   console.log("Questions:", questions);
  //   console.log("Loading:", loading);
  //   console.log("Error:", error);
  // }
  // , [questions, loading, error]);
    


  // Profile Info State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // School Info State
  const [country, setCountry] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [currentLevelOfStudy, setCurrentLevelOfStudy] = useState("");
  const [major, setMajor] = useState("");
  const [expectedGraduationYear, setExpectedGraduationYear] = useState("");

  // Demography Info State
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [raceEthinicity, setRaceEthinicity] = useState("");
  const [LGBTQI, setLGBTGI] = useState("");
  const [disabilities, setDisabilities] = useState("");

  // Experience Info State
  const [hackathonCount, setHackathonCount] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  // Skill Confidence State
  const [uiux, setUiux] = useState("");
  const [frontend, setFrontend] = useState("");
  const [backend, setBackend] = useState("");
  const [fullstack, setFullstack] = useState("");
  const [pm, setPm] = useState("");
  const [crypto, setCrypto] = useState("");
  const [cyber, setCyber] = useState("");
  const [ml, setMl] = useState("");

  // General Info State
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [shirtSize, setShirtSize] = useState("");

  const formSections: {
    key: string;
    position: string;
    content: JSX.Element;
  }[] = [
    {
      key: "section1",
      position: "justify-start",
      content: (
        <FormSections.ProfileInfo
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      ),
    },
    {
      key: "section2",
      position: "justify-end",
      content: (
        <FormSections.SchoolInfo
          country={country}
          setCountry={setCountry}
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          currentLevelOfStudy={currentLevelOfStudy}
          setCurrentLevelOfStudy={setCurrentLevelOfStudy}
          major={major}
          setMajor={setMajor}
          expectedGraduationYear={expectedGraduationYear}
          setExpectedGraduationYear={setExpectedGraduationYear}
        />
      ),
    },
    {
      key: "section3",
      position: "justify-start",
      content: (
        <FormSections.DemographyInfo
          age={age}
          setAge={setAge}
          gender={gender}
          setGender={setGender}
          raceEthinicity={raceEthinicity}
          setRaceEthinicity={setRaceEthinicity}
          LGBTQI={LGBTQI}
          setLGBTGI={setLGBTGI}
          disabilities={disabilities}
          setDisabilities={setDisabilities}
        />
      ),
    },
    {
      key: "section4",
      position: "justify-end",
      content: (
        <FormSections.ExperienceInfo
          hackathonCount={hackathonCount}
          setHackathonCount={setHackathonCount}
          github={github}
          setGithub={setGithub}
          linkedin={linkedin}
          setLinkedin={setLinkedin}
          portfolio={portfolio}
          setPortfolio={setPortfolio}
          resumeFile={resumeFile}
          setResumeFile={setResumeFile}
        />
      ),
    },
    {
      key: "section5",
      position: "justify-start",
      content: (
        <FormSections.SkillConfidence
          uiux={uiux}
          setUiux={setUiux}
          frontend={frontend}
          setFrontend={setFrontend}
          backend={backend}
          setBackend={setBackend}
          fullstack={fullstack}
          setFullstack={setFullstack}
          pm={pm}
          setPm={setPm}
          crypto={crypto}
          setCrypto={setCrypto}
          cyber={cyber}
          setCyber={setCyber}
          ml={ml}
          setMl={setMl}
        />
      ),
    },
    {
      key: "section6",
      position: "justify-end",
      content: (
        <FormSections.GeneralInfo 
          dietaryRestrictions={dietaryRestrictions}
          setDietaryRestrictions={setDietaryRestrictions}
          shirtSize={shirtSize}
          setShirtSize={setShirtSize}
        />
      ),
    },
    {
      key: "section7",
      position: "justify-center",
      content: <FormSections.MLH />,
    },
    {
      key: "section8",
      position: "justify-center",
      content: <FormSections.ConsentInfo />,
    },
  ];

  const handleStart = () => {
    setIsFormActive(true);
    appRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // find question_id by label
  const getQuestionId = (label: string) => {
    const question = questions.find(
      (q) => q.label.toLowerCase() === label.toLowerCase()
    );
    return question?.question_id;
  };

  const handleSave = async () => {
    if (loading) {
      console.log("Questions are still loading. Please wait.");
      return;
    }

    if (error) {
      console.log("Error loading questions. Please refresh the page.");
      return;
    }
    try {
      const payloads = [
        // Profile Info
        { question_id: getQuestionId("First Name"), answer: firstName },
        { question_id: getQuestionId("Last Name"), answer: lastName },
        { question_id: getQuestionId("Email"), answer: email },
        { question_id: getQuestionId("Phone Number"), answer: phoneNumber },

        // School Info
        { question_id: getQuestionId("Country"), answer: country },
        { question_id: getQuestionId("School Name"), answer: schoolName },
        {
          question_id: getQuestionId("Current Level of Study"),
          answer: currentLevelOfStudy,
        },
        { question_id: getQuestionId("Major"), answer: major },
        {
          question_id: getQuestionId("Expected Graduation Year"),
          answer: expectedGraduationYear,
        },

        // Experience Info
        {
          question_id: getQuestionId("Number of Hackathons Attended"),
          answer: hackathonCount,
        },
        { question_id: getQuestionId("GitHub"), answer: github },
        { question_id: getQuestionId("LinkedIn"), answer: linkedin },
        { question_id: getQuestionId("Portfolio"), answer: portfolio },
        // Note: Resume file handling may need special treatment

        // Demography Info
        { question_id: getQuestionId("Age"), answer: age },
        { question_id: getQuestionId("Gender"), answer: gender },
        {
          question_id: getQuestionId("Race/Ethnicity"),
          answer: raceEthinicity,
        },
        //{ question_id: getQuestionId("LGBTQI+"), answer: LGBTQI },
        //{ question_id: getQuestionId("Disabilities"), answer: disabilities },

        // Skill Confidence (converting boolean to string)
        // { question_id: getQuestionId("UI/UX"), answer: uiux.toString() },
        // { question_id: getQuestionId("Frontend"), answer: frontend.toString() },
        // { question_id: getQuestionId("Backend"), answer: backend.toString() },
        // { question_id: getQuestionId("Full Stack"), answer: fullstack.toString() },
        // { question_id: getQuestionId("Product Management"), answer: pm.toString() },
        // { question_id: getQuestionId("Crypto"), answer: crypto.toString() },
        // { question_id: getQuestionId("Cybersecurity"), answer: cyber.toString() },
        // { question_id: getQuestionId("Machine Learning"), answer: ml.toString() },

        // General Info
        {
          question_id: getQuestionId("Dietary Restrictions"),
          answer: dietaryRestrictions,
        },
        { question_id: getQuestionId("Shirt Size"), answer: shirtSize },
      ];

      const validPayloads = payloads.filter(
        (payload) => payload.question_id && payload.answer !== ""
      );

      for (const payload of validPayloads) {
        console.log("fetching:", JSON.stringify(payload));
        await fetchInstance("forms/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });
      }

      alert("Application submitted successfully!");
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <>
      <Navbar hide={true} />
      <div className="h-[calc(100vh-10rem)] overflow-y-scroll no-scrollbar snap-y snap-mandatory bg-black text-white">
        <section className="h-screen snap-start flex flex-col items-center justify-center relative px-4 md:px-10">
          <Card className="w-8/12 text-center relative">
            <div className="mb-10">
              <h1 className="text-6xl font-extrabold text-[#81C470] tracking-wide">
                APPLICATION
              </h1>
            </div>
            <p className="text-xl mb-10">
              Hey hacker, welcome aboard&#x1F44B;&#x1F3FC; <br />
              Your co-pilot <strong>(name)</strong> will track your journey
              through this application. Buckle up!
            </p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                text="Begin now"
                extraClass="py-3 cursor-pointer"
                onClick={handleStart}
              />
            </motion.div>
            <Image
              src="/application-page/spaceship.png"
              alt="spaceship"
              width={350}
              height={350}
              className="absolute -bottom-30 -left-40"
            />
          </Card>
        </section>

        {formSections.map((section, index) => (
          <section
            key={section.key}
            ref={index === 0 ? appRef : undefined}
            className={`h-screen snap-start items-center flex px-4 md:px-10 mx-20 ${
              section.position
            } ${index === formSections.length - 1 ? "flex-col" : ""} gap-10`}
          >
            {section.content}
            {index === formSections.length - 1 && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10"
              >
                <Button
                  text="Submit Application"
                  extraClass="py-3 cursor-pointer"
                  onClick={handleSave}
                />
              </motion.div>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
