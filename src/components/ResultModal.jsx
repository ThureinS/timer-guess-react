import React, { useImperativeHandle, useRef } from "react";

const ResultModal = ({
  ref,
  result,
  targetTime,
  remainingTime,
  resetTimer,
}) => {
  const playerLost = remainingTime <= 0;
  const resultModalRef = useRef();
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        resultModalRef.current.showModal();
      },
    };
  });

  return (
    <dialog ref={resultModalRef} className="result-modal" onClose={resetTimer}>
      {playerLost && <h2>You Lost!</h2>}
      {!playerLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>{" "}
      </p>
      <form method="dialog" onSubmit={resetTimer}>
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
