import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerEnd, setTimerEnd] = useState(false);

  let timer = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerEnd(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {timerEnd && <ResultModal result="You Lost" targetTime={targetTime} />}
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Running" : "Stopped"}
        </p>
      </div>
    </>
  );
};

export default TimerChallenge;
