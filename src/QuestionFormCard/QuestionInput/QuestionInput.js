import React from "react";

const QuestionInput = ({ setQuestion, questionText }) => {
  <input
    className="question-input"
    type="text"
    value={questionText}
    aria-label="Question input"
    placeholder="Enter a Question..."
    onChange={(e) => setQuestion(e.target.value)}
  />;
};

export default QuestionInput;
