"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { JSX, useState } from "react";

import { FormSections } from "@/application/FormSections";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import fetchInstance from "@/utils/api";

import { useQuestions } from "./context/QuestionContext";

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
        (payload) => payload.question_id && payload.answer !== "",
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

  const spaceshipRef0 = useRef<HTMLImageElement>(null);
  const spaceshipRef1 = useRef<HTMLImageElement>(null);
  const spaceshipRef2 = useRef<HTMLImageElement>(null);
  const spaceshipRef3 = useRef<HTMLImageElement>(null);
  const spaceshipRef4 = useRef<HTMLImageElement>(null);
  const spaceshipRef5 = useRef<HTMLImageElement>(null);

  const inView0 = useInView(spaceshipRef0, { once: false, margin: "-20% 0px" });
  const inView1 = useInView(spaceshipRef1, { once: false, margin: "-20% 0px" });
  const inView2 = useInView(spaceshipRef2, { once: false, margin: "-20% 0px" });
  const inView3 = useInView(spaceshipRef3, { once: false, margin: "-20% 0px" });
  const inView4 = useInView(spaceshipRef4, { once: false, margin: "-20% 0px" });
  const inView5 = useInView(spaceshipRef5, { once: false, margin: "-20% 0px" });

  // const sectionClassName = "flex items-center mx-20 relative";
  const sectionClassName = `h-[calc(100vh-10rem)] min-height-fit snap-end scroll-smooth overflow-hidden relative items-center flex md:px-10`;
  const formSections: {
    key: string;
    content: JSX.Element;
  }[] = [
    {
      key: "section1",
      content: (
        <section className={`${sectionClassName} justify-start`}>
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
          <motion.img
            ref={spaceshipRef0}
            initial={{ opacity: 0, x: 0 }}
            animate={inView0 ? { opacity: 1, x: 600 } : { opacity: 0, x: 0 }}
            transition={inView0 ? { duration: 2, ease: "easeInOut" } : { duration: 0 }}
            src="/application-page/spaceship.png"
            alt="spaceship"
            width={336}
            height={336}
            className="absolute top-10 translate-x-1/2 translate-y-1/2 -scale-x-100 rotate-[-6.52deg] sm:right-20 md:right-10 lg:right-0 xl:-right-30"
          />
          <Image
            src="/application-page/star.svg"
            alt="star"
            width={485}
            height={447}
            className="absolute -bottom-10 -left-20 object-cover"
          />
        </section>
      ),
    },
    {
      key: "section2",
      content: (
        <section className={`${sectionClassName} justify-end`}>
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
          <motion.img
            ref={spaceshipRef1}
            initial={{ opacity: 0, x: 0, y: -200 }}
            animate={inView1 ? { opacity: 1, x: 600, y: 0 } : { opacity: 0, x: 0, y: -200 }}
            transition={inView1 ? { duration: 1.4, ease: "easeInOut" } : { duration: 0 }}
            src="/application-page/spaceship.png"
            alt="spaceship"
            width={336}
            height={336}
            className="absolute -top-10 -left-120 translate-x-1/2 translate-y-1/2 rotate-[9.75deg]"
          />
        </section>
      ),
    },
    {
      key: "section3",
      content: (
        <section className={`${sectionClassName} justify-start`}>
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
          <motion.img
            ref={spaceshipRef2}
            initial={{ opacity: 0, x: 0, y: 70, rotate: 0 }}
            animate={
              inView2
                ? { opacity: 1, x: 750, y: 0, rotate: 35 }
                : { opacity: 0, x: 0, y: 70, rotate: 0 }
            }
            transition={inView2 ? { duration: 2.2, ease: "easeInOut" } : { duration: 0 }}
            src="/application-page/spaceship.png"
            alt="spaceship"
            width={336}
            height={336}
            className="absolute top-80 -right-40 translate-x-1/2 translate-y-1/2 -scale-x-100 rotate-[38deg]"
          />
        </section>
      ),
    },
    {
      key: "section4",
      content: (
        <section className={`${sectionClassName} justify-end`}>
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
          <motion.img
            ref={spaceshipRef3}
            initial={{ opacity: 0, x: 0, y: -200 }}
            animate={inView3 ? { opacity: 1, x: 500, y: 50 } : { opacity: 0, x: 0, y: -200 }}
            transition={inView3 ? { duration: 1.5, ease: "easeInOut" } : { duration: 0 }}
            src="/application-page/spaceship.png"
            alt="spaceship"
            width={336}
            height={336}
            className="absolute -top-10 -left-120 translate-x-1/2 translate-y-1/2 rotate-[-3.75deg]"
          />
          <Image
            src="/application-page/star.svg"
            alt="star"
            width={485}
            height={447}
            className="absolute bottom-0 left-50 object-cover"
          />
        </section>
      ),
    },
    {
      key: "section5",
      content: (
        <section className={`${sectionClassName} justify-start`}>
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
          <motion.img
            ref={spaceshipRef4}
            initial={{ opacity: 0, x: 0, y: -100, rotate: 0 }}
            animate={
              inView4
                ? { opacity: 1, x: 550, y: 300, rotate: 18 }
                : { opacity: 0, x: 0, y: -100, rotate: 0 }
            }
            transition={inView4 ? { duration: 1.2, ease: "easeInOut" } : { duration: 0 }}
            src="/application-page/spaceship.png"
            alt="spaceship"
            width={336}
            height={336}
            className="absolute top-10 -right-40 translate-x-1/2 translate-y-1/2 -scale-x-100 rotate-[18deg]"
          />
        </section>
      ),
    },
    {
      key: "section6",
      content: (
        <section className={`${sectionClassName} justify-end`}>
          <FormSections.GeneralInfo
            dietaryRestrictions={dietaryRestrictions}
            setDietaryRestrictions={setDietaryRestrictions}
            shirtSize={shirtSize}
            setShirtSize={setShirtSize}
          />
          <motion.img
            ref={spaceshipRef5}
            initial={{ opacity: 0, x: 0, y: -300 }}
            animate={
              inView5 ? { opacity: 1, x: 600, y: 0, rotate: -40 } : { opacity: 0, x: 0, y: -300 }
            }
            transition={inView5 ? { duration: 2, ease: "easeInOut" } : { duration: 0 }}
            src="/application-page/spaceship.png"
            alt="spaceship"
            width={336}
            height={336}
            className="absolute -top-60 -left-120 translate-x-1/2 translate-y-1/2 rotate-[30deg]"
          />
          <Image
            src="/application-page/star.svg"
            alt="star"
            width={485}
            height={447}
            className="absolute -top-60 -left-310 object-cover"
          />
        </section>
      ),
    },
    {
      key: "section7",
      content: (
        <section className={`${sectionClassName} justify-center`}>
          <FormSections.MLH />
        </section>
      ),
    },
    {
      key: "section8",
      content: (
        <section className={`${sectionClassName} flex-col justify-center`}>
          <FormSections.ConsentInfo />
          <Image
            src="/application-page/star.svg"
            alt="star"
            width={485}
            height={447}
            className="absolute -top-10 -right-45 object-cover"
          />
          <Image
            src="/application-page/star.svg"
            alt="star"
            width={485}
            height={447}
            className="absolute -top-60 -left-310 object-cover"
          />
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="mt-10">
            <Button
              text="Submit Application"
              extraClass="py-3 cursor-pointer"
              onClick={handleSave}
            />
          </motion.div>
        </section>
      ),
    },
  ];

  const handleStart = () => {
    setIsFormActive(true);
    appRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // find question_id by label
  const getQuestionId = (label: string) => {
    const question = questions.find((q) => q.label.toLowerCase() === label.toLowerCase());
    return question?.question_id;
  };

  return (
    <div className="h-screen">
      <Navbar hide={true} />
      <div className="no-scrollbar relative h-[calc(100vh-10rem)] snap-y snap-mandatory overflow-y-scroll bg-black text-white">
        {/* <Parallax speed={30}> */}
        <section className="relative mx-10 flex h-[calc(100vh-10rem)] snap-end flex-col items-center justify-center overflow-x-hidden overflow-y-visible scroll-smooth px-4 md:px-10">
          <Card className="relative w-8/12 text-center">
            <div className="mb-10">
              <h1 className="text-6xl font-extrabold tracking-wide text-[#81C470]">APPLICATION</h1>
            </div>
            <p className="mb-10 text-xl">
              Hey hacker, welcome aboard&#x1F44B;&#x1F3FC; <br />
              Your co-pilot <strong>(name)</strong> will track your journey through this
              application. Buckle up!
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto w-fit"
            >
              <Button text="Begin now" extraClass="py-3 cursor-pointer" onClick={handleStart} />
            </motion.div>
            <Image
              src="/application-page/spaceship.png"
              alt="spaceship"
              width={350}
              height={350}
              className="absolute -bottom-30 -left-40"
            />
          </Card>
          <Image
            src="/application-page/star.svg"
            alt="star"
            width={485}
            height={447}
            className="absolute -top-5 -right-40 object-cover"
          />
        </section>

        {formSections.map((section, index) => (
          <div key={section.key} ref={index === 0 ? appRef : undefined}>
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
}
