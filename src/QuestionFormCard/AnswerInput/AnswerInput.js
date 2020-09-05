import React from 'react'

const AnswerInput = ({ correct, required }) => {
  return (
    <div>
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
      <button>+</button>
      <button>-</button>
    </div>
  )
}
// answers need to pushed in to answers array
// answers are greater than 2, render an input
// that has a delete capacity.

export default AnswerInput