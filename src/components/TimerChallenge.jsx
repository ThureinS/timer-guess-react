import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const isTimerActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  const timer = useRef();
  const timerChallengeModal = useRef();

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    timerChallengeModal.current.open();
  }

  function resetTimer() {
    setRemainingTime(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    timerChallengeModal.current.open();
  }

  return (
    <>
      <ResultModal
        ref={timerChallengeModal}
        result="You Lost"
        targetTime={targetTime}
        remainingTime={remainingTime}
        resetTimer={resetTimer}
      />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Timer Active" : "Timer Inactive"}
        </p>
      </div>
    </>
  );
};

export default TimerChallenge;
