import React from 'react'

const AnswerInput = ({ correct, answerText, setAnswerText, testId }) => {
  return (
    <input
      id='answer-input'
      data-testid={testId}
      className='answer-input'
      type='text'
      value={answerText}
      aria-label='Question input'
      placeholder={ correct ? 'Enter Correct Answer...' : 'Enter Incorrect Answer...'}
      // isCorrect={correct}
      onChange={(e) => setAnswerText(e.target.value)}
    />
  )
}
// answers need to pushed in to answers array
// answers are greater than 2, render an input
// that has a delete capacity.

export default AnswerInput