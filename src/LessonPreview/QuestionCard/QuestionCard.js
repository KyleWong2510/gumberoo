import React from 'react'
import './QuestionCard.scss'
import PropTypes from 'prop-types'

const QuestionCard = ({ id, question, allAnswers, reading, deleteQuestion })=> {
  let correctAnswer = allAnswers.find(answer => answer.correct === true || answer.correct === 'true').answer
  let incorrectAnswers = allAnswers
    .filter(answer => answer.correct === false || answer.correct === 'false')
    .map((answer, i )=> <p key={i++} className='incorrect-answers'>{answer.answer}</p>)

  return (
    <section id={id} key={id} className='question-card'>
      {reading && <p className='question-card-reading'><span className='question-card-category'>Reading:</span> {reading}</p>}
      <p><span className='question-card-category'>Question:</span> {question}</p>
      <p><span className='question-card-category'>Correct Answer:</span> {correctAnswer}</p>
      <p className='question-card-category'>Incorrect Answers:</p>
      {incorrectAnswers}
      {deleteQuestion &&  
        <button onClick={(e) => deleteQuestion(e)}>Delete</button>
      }
    </section>
  )
}

export default QuestionCard

QuestionCard.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  allAnswers: PropTypes.array.isRequired,
  reading: PropTypes.string.isRequired,
  deleteQuestion: PropTypes.func
}