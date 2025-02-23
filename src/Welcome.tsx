import { ReactNode } from "react";

interface WelcomeProps {
  children: ReactNode;
  questionNumber: number;
}

export default function Welcome({ children, questionNumber }: WelcomeProps) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h4>{questionNumber} Questions to test your React Mastery</h4>
      {children}
    </div>
  );
}
