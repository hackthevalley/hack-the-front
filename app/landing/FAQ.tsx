"use client";

import FAQItem from "@/components/FAQItem";

const questions = [
  {
    question: "What do I need to bring?",
    answer: "You'll need: A laptop and charger. We'd also recommend a sleeping bag if plan to stay the night at the venue. Everything else is optional. You don't need: An idea and a team. You can create your own team (teams of 4 recommended) during the hackathon, and generate some amazing creations along the way. You also don't need to worry about food, we've got you covered.",
  },
  {
    question: "How much will it cost me?",
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

export default function FAQSection() {
  return (
    <div className="w-full px-4 py-16 bg-[#020c1b]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-2">
        {">"} FAQ's
        </h2>
        <p className="text-center text-white text-opacity-80 mb-10">
          Spark you build with purpose
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}