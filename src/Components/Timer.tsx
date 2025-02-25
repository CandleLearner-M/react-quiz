import { useEffect } from "react";

interface TimerProps {
  dispatch: (action: { type: "tick" }) => void;
  remainingSeconds: number;
}

export default function Timer({ dispatch, remainingSeconds }: TimerProps) {
  useEffect(() => {
    setInterval(() => dispatch({ type: "tick" }), 1000);
  }, [dispatch]);
  return <div className="timer">{remainingSeconds}</div>;
}
