import React from 'react'
import './QuestionCard.scss'

const QuestionCard = ({ id, question, allAnswers, reading, deleteQuestion})=> {
  let correctAnswer = allAnswers.find(answer => answer.correct === true).desc
  let incorrectAnswers = allAnswers
    .filter(answer => answer.correct === false)
    .map(answer => <p>{answer.desc}</p>)

  return (
    <section id={id} key={id} className='question-card'>
      {reading && <p className='question-card-reading'><span className='question-card-category'>Reading:</span> {reading}</p>}
      <p><span className='question-card-category'>Question:</span> {question}</p>
      <p><span className='question-card-category'>Correct Answer:</span> {correctAnswer}</p>
      <p className='question-card-category'>Incorrect Answers:</p>
      {incorrectAnswers}
      <button onClick={(e) => deleteQuestion(e)}>Delete</button>
    </section>
  )
}

export default QuestionCard