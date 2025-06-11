import { QuestionsProvider } from "./context/QuestionContext";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QuestionsProvider>{children}</QuestionsProvider>;
}
