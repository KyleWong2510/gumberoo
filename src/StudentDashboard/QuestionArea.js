import React from 'react'
import './QuestionArea.scss'
import AnswerButton from './AnswerButton'
import { incrementScore, incrementCurrentQuestion, setLessonOver } from '../actions/index';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function QuestionArea(props) {
  const answers = []
  function shuffle(theAnswers) {
    var j, x, i;
    for (i = theAnswers.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = theAnswers[i];
        theAnswers[i] = theAnswers[j];
        theAnswers[j] = x;
    }
    return theAnswers.forEach(ans => answers.push(ans))
  }
  const answersCopy = props.question.answers.map(answer => answer)
  shuffle(answersCopy)
  
  return (
    <section className='question-area'>
      <h3 className='display-question'>
        {props.question.question}
      </h3>
  
      {answers.map((answer, i) => {
        return (
          <AnswerButton key={i++} answer={answer} />
        )
      })}
   
    </section>
  )
}

const mapStateToProps = ({ setCurrentQuestion, setLesson, setLessonOver, setScore }) => ({
  currentQuestion: setCurrentQuestion,
  lesson: setLesson,
  lessonOver: setLessonOver,
  score: setScore
})


const mapDispatchToProps = dispatch => (
  bindActionCreators({ incrementCurrentQuestion, setLessonOver, incrementScore }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(QuestionArea)
