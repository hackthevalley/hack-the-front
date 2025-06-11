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

const token = localStorage.getItem("auth-token");

interface ApplicationProps {
  application: Object | null;
  form_answers: Object[];
  form_answersfile: string;
}

const findUserAppAnswer = (questionBank: any, question_id: string) => {
  if (question_id === "") return "";
  const answer = questionBank.find(
    (item: any) => item.question_id === question_id
  );
  console.log("findUserAppAnswer for question_id:", answer.answer);
  return answer && answer.answer !== null ? answer.answer : "";
}

export default function Application() {
  // Get application questions
  const { questions, loading, error } = useQuestions();
  const [isFormActive, setIsFormActive] = useState(false);
  const [app, setApp] = useState<ApplicationProps>({
    application: null,
    form_answers: [],
    form_answersfile: "",
  });
  const appRef = useRef<HTMLDivElement>(null);
  
  // find question_id by label
  const getQuestionId = (label: string) => {
    const question = questions.find(
      (q) => q.label.toLowerCase() === label.toLowerCase()
    );
    // console.log("getQuestionId:", question);
    return question?.question_id || "";
  };

  // Profile Info State
  const section1Questions = questions.slice(0, 4);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  // School Info State
  const section2Questions = questions.slice(4, 9);
  const [country, setCountry] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [currentLevelOfStudy, setCurrentLevelOfStudy] = useState("");
  const [major, setMajor] = useState("");
  const [expectedGraduationYear, setExpectedGraduationYear] = useState("");
  
  // Demography Info State
  const section3Questions = questions.slice(9, 14);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [raceEthinicity, setRaceEthinicity] = useState("");
  const [LGBTQI, setLGBTGI] = useState("");
  const [disabilities, setDisabilities] = useState("");
  
  // Experience Info State
  const section4Questions = questions.slice(14, 19);
  const [hackathonCount, setHackathonCount] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  // Skill Confidence State
  const section5Questons = questions.slice(19, 27);
  const [uiux, setUiux] = useState("");
  const [frontend, setFrontend] = useState("");
  const [backend, setBackend] = useState("");
  const [fullstack, setFullstack] = useState("");
  const [pm, setPm] = useState("");
  const [crypto, setCrypto] = useState("");
  const [cyber, setCyber] = useState("");
  const [ml, setMl] = useState("");
  
  // General Info State
  const section6Questions = questions.slice(27, 29);
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [shirtSize, setShirtSize] = useState("");
  
  // MLH Info State
  const section7Questions = questions.slice(29, 32);
  const [mlhCodeOfConduct, setMlhCodeOfConduct] = useState(false);
  const [mlhPrivacyPolicy, setMlhPrivacyPolicy] = useState(false);
  const [mlhEmailConsent, setMlhEmailConsent] = useState(false);
  
  // Consent Info State
  const section8Questions = questions.slice(32, 33);
  const [consentAgreed, setConsentAgreed] = useState(false);

  // Fetch user application progress
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetchInstance("forms/getapplication", {
          method: "GET",
        });
        setApp(res);
        console.log("[RES] Application data fetched:", app);

        setFirstName(findUserAppAnswer(res.form_answers, getQuestionId("First Name")));
        setLastName(findUserAppAnswer(res.form_answers, getQuestionId("Last Name")));
        setEmail(findUserAppAnswer(res.form_answers, getQuestionId("Email")));
        setPhoneNumber(findUserAppAnswer(res.form_answers, getQuestionId("Phone Number")));

        setCountry(findUserAppAnswer(res.form_answers, getQuestionId("Country")));
        setSchoolName(findUserAppAnswer(res.form_answers, getQuestionId("School Name")));
        setMajor(findUserAppAnswer(res.form_answers, getQuestionId("Major")));
        setCurrentLevelOfStudy(findUserAppAnswer(res.form_answers, getQuestionId("Current Level of Study")));
        setExpectedGraduationYear(findUserAppAnswer(res.form_answers, getQuestionId("Expected Graduation Year")));

        setAge(findUserAppAnswer(res.form_answers, getQuestionId("Age")));
        setGender(findUserAppAnswer(res.form_answers, getQuestionId("Gender")));
        setRaceEthinicity(findUserAppAnswer(res.form_answers, getQuestionId("Race/Ethnicity")));
        setLGBTGI(findUserAppAnswer(res.form_answers, getQuestionId("Part of the LGBTQ+ Community")));
        setDisabilities(findUserAppAnswer(res.form_answers, getQuestionId("Person with Disabilities?")));

        setHackathonCount(findUserAppAnswer(res.form_answers, getQuestionId("Hackathon Count?")) );
        setGithub(findUserAppAnswer(res.form_answers, getQuestionId("GitHub")));
        setLinkedin(findUserAppAnswer(res.form_answers, getQuestionId("LinkedIn")));
        setPortfolio(findUserAppAnswer(res.form_answers, getQuestionId("Portfolio")));
        setResumeFile(res.form_answersfile || null);

        setUiux(findUserAppAnswer(res.form_answers, getQuestionId("UI/UX Design")));
        setFrontend(findUserAppAnswer(res.form_answers, getQuestionId("Frontend Development")));
        setBackend(findUserAppAnswer(res.form_answers, getQuestionId("Backend Development")));
        setFullstack(findUserAppAnswer(res.form_answers, getQuestionId("Fullstack Development")));
        setPm(findUserAppAnswer(res.form_answers, getQuestionId("Product Management")));
        setCrypto(findUserAppAnswer(res.form_answers, getQuestionId("Web, Crypto, Blockchain")));
        setCyber(findUserAppAnswer(res.form_answers, getQuestionId("Cybersecurity")));
        setMl(findUserAppAnswer(res.form_answers, getQuestionId("Machine Learning")));

        setDietaryRestrictions(findUserAppAnswer(res.form_answers, getQuestionId("Dietary Restrictions")));
        setShirtSize(findUserAppAnswer(res.form_answers, getQuestionId("T-Shirt Size")));

        setMlhCodeOfConduct(findUserAppAnswer(res.form_answers, getQuestionId("MLH Code of Conduct")) === "true");
        setMlhPrivacyPolicy(findUserAppAnswer(res.form_answers, getQuestionId("MLH Privacy Policy, MLH Contest Terms and Conditions")) === "true");
        setMlhEmailConsent(findUserAppAnswer(res.form_answers, getQuestionId("MLH Event Communication")) === "true");
        setConsentAgreed(findUserAppAnswer(res.form_answers, getQuestionId("Hack the Valley Consent Form Agreement")) === "true");

      } catch (err) {
        console.error("Error fetching applcation data:", err);
      } finally {
        setIsFormActive(true);
      }
    };
    fetchQuestions();
  }, [questions]);

  // useEffect(() => {
  //   console.log("mlh", mlhCodeOfConduct, mlhPrivacyPolicy, mlhEmailConsent);
  //   console.log("Questions:", section1Questions);
  //   console.log("Questions:", section2Questions);
  //   console.log("Questions:", section3Questions);
  //   console.log("Questions:", section4Questions);
  //   console.log("Questions:", section5Questons);
  //   console.log("Questions:", section6Questions);
  //   console.log("Questions:", section7Questions);
  //   console.log("Questions:", section8Questions);
  // }
  // , [questions, section1Questions, section2Questions, section3Questions, section4Questions, section5Questons, section6Questions, section7Questions, section8Questions]);

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
          questions={section1Questions}
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
        <FormSections.EducationInfo
          questions={section2Questions}
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
          questions={section3Questions}
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
          questions={section4Questions}
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
          questions={section5Questons}
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
          questions={section6Questions}
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
      content: (
        <FormSections.MLH
          mlhCodeOfConduct={mlhCodeOfConduct}
          setMlhCodeOfConduct={setMlhCodeOfConduct}
          mlhPrivacyPolicy={mlhPrivacyPolicy}
          setMlhPrivacyPolicy={setMlhPrivacyPolicy}
          mlhEmailConsent={mlhEmailConsent}
          setMlhEmailConsent={setMlhEmailConsent}
        />
      ),
    },
    {
      key: "section8",
      position: "justify-center",
      content: (
        <FormSections.ConsentInfo
          consentAgreed={consentAgreed}
          setConsentAgreed={setConsentAgreed}
        />
      ),
    },
  ];

  const handleStart = () => {
    setIsFormActive(true);
    appRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async () => {
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
        { question_id: getQuestionId("Major"), answer: major },
        { question_id: getQuestionId("Current Level of Study"), answer: currentLevelOfStudy },
        { question_id: getQuestionId("Expected Graduation Year"), answer: expectedGraduationYear},

        // Demography Info
        { question_id: getQuestionId("Age"), answer: age },
        { question_id: getQuestionId("Gender"), answer: gender },
        { question_id: getQuestionId("Race/Ethnicity"), answer: raceEthinicity },
        { question_id: getQuestionId("Part of the LGBTQ+ Community"), answer: LGBTQI },
        { question_id: getQuestionId("Person with Disabilities?"), answer: disabilities },

        // Experience Info
        { question_id: getQuestionId("Hackathon Count?"), answer: hackathonCount},
        { question_id: getQuestionId("GitHub"), answer: github },
        { question_id: getQuestionId("LinkedIn"), answer: linkedin },
        { question_id: getQuestionId("Portfolio"), answer: portfolio },
        // Note: Resume file handling may need special treatment - DONE

        // Skill Confidence (converting boolean to string)
        { question_id: getQuestionId("UI/UX"), answer: uiux.toString() },
        { question_id: getQuestionId("Frontend Development"), answer: frontend.toString() },
        { question_id: getQuestionId("Backend Development"), answer: backend.toString() },
        { question_id: getQuestionId("Fullstack Development"), answer: fullstack.toString() },
        { question_id: getQuestionId("Product Management"), answer: pm.toString() },
        { question_id: getQuestionId("Web, Crypto, Blockchain"), answer: crypto.toString() },
        { question_id: getQuestionId("Cybersecurity"), answer: cyber.toString() },
        { question_id: getQuestionId("Machine Learning"), answer: ml.toString() },

        // General Info
        { question_id: getQuestionId("Dietary Restrictions"), answer: dietaryRestrictions},
        { question_id: getQuestionId("T-Shirt Size"), answer: shirtSize },

        // MLH Info
        { question_id: getQuestionId("MLH Code of Conduct"), answer: mlhCodeOfConduct.toString() },
        { question_id: getQuestionId("MLH Privacy Policy, MLH Contest Terms and Conditions"), answer: mlhPrivacyPolicy.toString() },
        { question_id: getQuestionId("MLH Event Communication"), answer: mlhEmailConsent.toString() },
      ];

      const validPayloads = payloads.filter(
        (payload) => payload.question_id && payload.answer !== ""
      );

      for (const payload of validPayloads) {
        console.log("fetching:", JSON.stringify(payload));
        await fetchInstance("forms/submit", {
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
                  onClick={handleSubmit}
                />
              </motion.div>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
