import React, { useImperativeHandle, useRef } from "react";

const ResultModal = ({ ref, result, targetTime }) => {
  const resultModalRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        resultModalRef.current.showModal();
      },
    };
  });

  return (
    <dialog ref={resultModalRef} className="result-modal">
      <h2>{result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>{" "}
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
