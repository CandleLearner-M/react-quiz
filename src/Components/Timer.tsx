import { useEffect } from "react";
import { useQuiz } from "../common/Reducer";

export default function Timer() {
  const { remainingSeconds, dispatch } = useQuiz();

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
