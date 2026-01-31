import React from "react";

const TimerChallenge = ({ title, targetTime }) => {
  return (
    <div className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p className="">Running../stopped</p>
    </div>
  );
};

export default TimerChallenge;
