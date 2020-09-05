import React from 'react'

const AnswerInput = ({ correct, required }) => {
  return (
    <input
      className='answer-input'
      type='text'
      // value={answerText}
      aria-label='Question input'
      placeholder={ correct ? 'Enter Correct Answer...' : 'Enter an Answer...'}
      isCorrect={correct}
      isRequired={required}
      // onChange={(e) => setAnswer(e.target.value)}
    />
  )
}

export default AnswerInput