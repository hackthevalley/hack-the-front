"use client";

import FAQItem from "@/components/FAQItem";

const questions = [
  {
    question: "What is Hack the Valley?",
    answer: "Hack the Valley is a 36-hour student-run hackathon hosted at the University of Toronto Scarborough. Open to all skill levels, it brings together hundreds of students to build innovative tech projects, attend workshops, network with mentors, and compete for prizes — all in a fun, beginner-friendly environment.",
  },
  {
    question: "What do I need to bring?",
    answer: "You'll need: A laptop and charger. We'd also recommend a sleeping bag if plan to stay the night at the venue. Everything else is optional. You don't need: An idea and a team. You can create your own team (teams of 4 recommended) during the hackathon, and generate some amazing creations along the way. You also don't need to worry about food, we've got you covered.",
  },
  {
    question: "How much will it cost to attend to Hack the Valley?",
    answer: "It’s completely free, so don’t worry! We'll provide you with a weekend's worth of meals, drinks, and snacks and a place to crash when you need a break from coding. In fact, you’ll probably walk away loaded with all the swag that you’ll get at Hack the Valley.",
  },
  {
    question: "How is Hack the Valley run?",
    answer: "Hack The Valley almost entirely by (sleep-deprived) University of Toronto students, with some advice and assistance from our friends at Department of Student Life (DSL) and Association of Mathematical and Computer Science Students (AMACSS). One hundred percent of the funding for Hack the Valley comes from corporate sponsor donations.",
  },
  {
    question: "Where is it?",
    answer: "Hack the Valley 9 will be held at the University of Toronto Scarborough campus in the IC building. All event activities will be hosted in the building, and participants will be able to stay in the building for the entire duration of the weekend (including overnight).",
  },
  {
    question: "When is it?",
    answer: "Hack the Valley will be taking place on October 3rd - 5th, 2025.",
  },
  {
    question: "More Questions?",
    answer: "Have an uncertainties? Voice it at hello@hackthevalley.io",
  }
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-25 sm:px-8 md:px-16 lg:px-32 w-full max-w-full mb-44"
      style={{ scrollMarginTop: "10rem" }}
    >
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-6xl text-center lg:text-7xl sm:text-5xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
          }}
        >
          {">"} FAQs
        </h1>
        <div className="w-full my-[2rem] mb-16">
          <div className="flex justify-between items-center">
            <hr className="bg-indigo border-none mr-4 w-full h-[2px]" />
            <p className="text-white w-fit whitespace-nowrap font-semibold text-xl sm:text-2xl">
              spark your build with purpose
            </p>
            <hr className="bg-indigo border-none ml-4 w-full h-[2px]" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 items-start">
        {questions.map((item, index) => (index % 4 === 0 || index % 4 === 3 ? (
            <FAQItem key={index} question={item.question} answer={item.answer} bgColor="bg-bgblue" />
            ) : (
            <FAQItem key={index} question={item.question} answer={item.answer} bgColor="bg-gradient-to-b from-[#183766] to-[#0B1C34]" />
            )
        ))}
      </div>
    </section>
  );
}