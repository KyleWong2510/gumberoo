import React from 'react'

const QuestionCard = ({ id, question, allAnswers, reading})=> {
  let correctAnswer = allAnswers.find(answer => answer.correct === true).desc
  let incorrectAnswers = allAnswers
    .filter(answer => answer.correct === false)
    .map(answer => <p>{answer.desc}</p>)
    
  return (
    <section>
      <p>{reading}</p>
      <p>{question}</p>
      <p>Correct Answer: {correctAnswer}</p>
      <p>Incorrect Answers:</p>
      {incorrectAnswers}
      <button>Delete</button>
    </section>
  )
}

export default QuestionCard