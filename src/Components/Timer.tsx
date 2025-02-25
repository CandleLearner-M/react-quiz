import { useEffect } from "react";

export default function Timer() {
  useEffect(() => {
    setInterval(() => dispatch({ type: "tick" }), 1000);
  }, []);
  return <div className="timer"></div>;
}
