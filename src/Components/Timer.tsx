import { useEffect } from "react";

interface TimerProps {
  dispatch: (action: { type: "tick" }) => void;
  remainingSeconds: number;
}

export default function Timer({ dispatch, remainingSeconds }: TimerProps) {
  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);
    return ()=> {
      clearInterval(id)
    }
  }, [dispatch]);
  return <div className="timer">{remainingSeconds}</div>;
}
