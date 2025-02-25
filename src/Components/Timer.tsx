import { useEffect } from "react";

interface TimerProps {
  dispatch: (action: { type: "tick" }) => void;
  remainingSeconds: number;
}

export default function Timer({ dispatch, remainingSeconds }: TimerProps) {
  const mins = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
