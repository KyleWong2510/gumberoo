import React from 'react'
import PropTypes from 'prop-types'

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
      onChange={(e) => setAnswerText(e.target.value)}
    />
  )
}

export default AnswerInput

AnswerInput.propTypes = {
  correct: PropTypes.bool.isRequired,
  answerText: PropTypes.string.isRequired,
  setAnswerText: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired
}