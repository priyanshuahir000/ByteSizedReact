import React from "react";

export default function ({ dispatch, answer, index, numOfQuestions }) {
  if (answer == null) return null;
  return (
    <div>
      {index < numOfQuestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next Question
        </button>
      )}
      {index === numOfQuestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finished" })}
        >
          Finish
        </button>
      )}
    </div>
  );
}
