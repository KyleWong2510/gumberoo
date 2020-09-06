import React from 'react'


function QuestionArea(props) {
  const answers = []
  function shuffle(wrongAnswers, correctAnswer) {
    wrongAnswers.push(correctAnswer)
    var j, x, i;
    for (i = wrongAnswers.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = wrongAnswers[i];
        wrongAnswers[i] = wrongAnswers[j];
        wrongAnswers[j] = x;
    }
    return wrongAnswers.forEach(ans => answers.push(ans))
  }
  const wrongAnswersCopy = props.question.wrong_answers.map(answer => answer)
  shuffle(wrongAnswersCopy, props.question.correctAnswer)
  
  return (
    <section className='question-area'>
      <h3 className='display-question'>
        {props.question.question}
      </h3>
  
      {answers.map((answer, i) => {
        return (
          <button key={i++} type='submit'>{answer}</button>
        )
      })}
   
    </section>
  )
}

export default QuestionArea