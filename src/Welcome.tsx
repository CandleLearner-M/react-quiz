import { ReactNode } from "react";

interface WelcomeProps {
  children: ReactNode; 
}

export default function Welcome({children}: WelcomeProps) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h4>15 Questions to test your React Mastery</h4>
      {children}
    </div>
  );
}
