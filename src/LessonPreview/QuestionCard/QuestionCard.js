import React from 'react'
import './QuestionCard.scss'

const QuestionCard = ({ id, question, allAnswers, reading, deleteQuestion})=> {
  let correctAnswer = allAnswers.find(answer => answer.correct === true).desc
  let incorrectAnswers = allAnswers
    .filter(answer => answer.correct === false)
    .map(answer => <p>{answer.desc}</p>)

  return (
    <section id={id} key={id}className='question-card-wrapper'>
      <p>{reading}</p>
      <p>{question}</p>
      <p>Correct Answer: {correctAnswer}</p>
      <p>Incorrect Answers:</p>
      {incorrectAnswers}
      <button onClick={(e) => deleteQuestion(e)}>Delete</button>
    </section>
  )
}

export default QuestionCard