import { useReducer, useState } from "react";

function reducer(
  { count, step }: { count: number; step: number },
  { type, payload }: { type: "dec" | "inc" | "setCount"; payload?: number }
) {
  if (type === "inc") return count + step;
  if (type === "dec") return count - step;
  if (type === "setCount") return payload;
}
function DateCounter() {
  const initialState = { count: 0, step: 1 };
  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec", payload: -1 });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc", payload: 1 });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e: React.ChangeEvent<HTMLInputElement>) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    dispatch({ type: "setCount", payload: 0 });
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
