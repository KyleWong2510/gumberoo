import React from 'react'
import './QuestionArea.scss'
import { incrementCurrentQuestion } from '../actions/index';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
  
  const answerClick = (e) => {
    debugger
    e.preventDefault()
    props.incrementCurrentQuestion()
  }
  return (
    <section className='question-area'>
      <h3 className='display-question'>
        {props.question.question}
      </h3>
  
      {answers.map((answer, i) => {
        return (
          <button key={i++} className='question-button' onClick={e => answerClick(e)} type='submit'>{answer}</button>
        )
      })}
   
    </section>
  )
}



const mapDispatchToProps = dispatch => (
  bindActionCreators({ incrementCurrentQuestion }, dispatch)
)

export default connect(null, mapDispatchToProps)(QuestionArea)
