import { AuthProvider } from "@/utils/auth";

import { QuestionsProvider } from "./context/QuestionContext";

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <QuestionsProvider>{children}</QuestionsProvider>
    </AuthProvider>
  );
}
