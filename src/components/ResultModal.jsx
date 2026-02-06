import React, { useImperativeHandle, useRef } from "react";

const ResultModal = ({
  ref,
  result,
  targetTime,
  remainingTime,
  resetTimer,
}) => {
  const resultModalRef = useRef();
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        resultModalRef.current.showModal();
      },
    };
  });

  return (
    <dialog ref={resultModalRef} className="result-modal">
      {remainingTime <= 0 && <h2>You Lost!</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>{" "}
      </p>
      <form method="dialog">
        <button onSubmit={resetTimer}>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
