"use client";

import { createContext, useContext, useEffect, useState } from "react";

import fetchInstance from "@/utils/api";

export interface Question {
  question_id: string;
  label: string;
  required: boolean;
  order: number;
}

interface QuestionsContextType {
  questions: Question[];
  loading: boolean;
  error: Error | null;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

export const QuestionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetchInstance("forms/questions", {
          method: "GET",
        });
        setQuestions(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <QuestionsContext.Provider value={{ questions, loading, error }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestions = (): QuestionsContextType => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error("useQuestions must be used within a QuestionsProvider");
  }
  return context;
};
