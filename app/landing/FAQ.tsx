"use client";

// import Image from "next/image";
import FAQItem from "@/components/FAQItem";

const questions = [
  {
    question: "What is Hack the Valley?",
    answer:
      "Hack the Valley is a 36-hour student-run hackathon hosted at the University of Toronto Scarborough. Open to all skill levels, it brings together hundreds of students to build innovative tech projects, attend workshops, network with mentors, and compete for prizes — all in a fun, beginner-friendly environment.",
  },
  {
    question: "What do I need to bring?",
    answer:
      "You'll need: A laptop and charger. We'd also recommend a sleeping bag if you plan to stay the night at the venue. Everything else is optional. You don't need: An idea and a team. You can create your own team (teams of 4 recommended) during the hackathon, and generate some amazing ideas along the way. You also don't need to worry about food, we've got you covered.",
  },
  {
    question: "How much will it cost to attend Hack the Valley?",
    answer:
      "It’s completely free, so don’t worry! We'll provide you with a weekend's worth of meals, drinks, and snacks and a place to crash when you need a break from coding. In fact, you’ll probably walk away loaded with all the swag that you’ll get at Hack the Valley.",
  },
  {
    question: "How is Hack the Valley run?",
    answer:
      "Hack The Valley is ran almost entirely by (sleep-deprived) University of Toronto students along with our friends from other universities across Ontario, with some advice and assistance from our friends at Department of Student Life (DSL) and Association of Mathematical and Computer Science Students (AMACSS). One hundred percent of the funding for Hack the Valley comes from corporate sponsor donations.",
  },
  {
    question: "Where is it?",
    answer:
      "Hack the Valley X will be held at the University of Toronto Scarborough campus in the IA building. All event activities will be hosted in the building, and participants will be able to stay in the building for the entire duration of the weekend (including overnight).",
  },
  {
    question: "When is it?",
    answer: "Hack the Valley will be taking place on October 3rd - 5th, 2025.",
  },
  {
    question: "More Questions?",
    answer: "Have any questions or uncertainties? Voice it at hello@hackthevalley.io",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="z-2 mb-44 w-full max-w-full scroll-mt-25 pt-20 sm:px-8 md:px-16 lg:px-32"
      style={{ scrollMarginTop: "6rem" }}
    >
      <div className="relative -z-1 hidden sm:block">
        {/* <div className="pointer-events-none absolute top-[26%]">
          <img src="/sponsor-page/roadmap-1.png" alt="Roadmap1" />
        </div> */}
        {/* <div className="pointer-events-none absolute -top-2 left-50">
          <Image src="/sponsor-page/dot.png" alt="dot-1" width={20} height={20} />
        </div>
        <div className="pointer-events-none absolute top-140 right-10">
          <Image src="/sponsor-page/dot.png" alt="dot-1" width={20} height={20} />
        </div> */}
      </div>
      <div className="mx-auto max-w-6xl">
        <h1
          className="bg-clip-text text-center text-6xl font-bold text-transparent sm:text-5xl lg:text-7xl"
          style={{
            backgroundImage: "linear-gradient(160deg, #4C6581, #8E9CAA, #BDBEBF, #8E9CAA, #4C6581)",
          }}
        >
          {">"} FAQs
        </h1>
        <div className="my-[2rem] mb-16 w-full">
          <div className="flex items-center justify-between">
            <hr className="bg-indigo mr-4 h-[2px] w-full border-none" />
            <p className="w-fit text-xl font-semibold whitespace-nowrap text-white sm:text-2xl">
              spark your build with purpose
            </p>
            <hr className="bg-indigo ml-4 h-[2px] w-full border-none" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 items-start gap-x-12 gap-y-12 md:grid-cols-2">
        {questions.map((item, index) =>
          index % 4 === 0 || index % 4 === 3 ? (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              bgColor="bg-bgblue"
            />
          ) : (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              bgColor="bg-gradient-to-b from-[#183766] to-[#0B1C34]"
            />
          ),
        )}
      </div>
    </section>
  );
}
