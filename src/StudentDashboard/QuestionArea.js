import React from 'react'
import './QuestionArea.scss'
import { incrementCurrentQuestion, setLessonOver } from '../actions/index';
import MoodForm from './MoodForm'
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
  
  const answerClick = (e) => {
    if(props.lesson.questions.length === (props.currentQuestion + 1)) {
      debugger
      props.setLessonOver(true)
    }
    e.preventDefault()
    props.incrementCurrentQuestion()
  }
  return (
    <section className='question-area'>
      <h3 className='display-question'>
        {props.question.desc}
      </h3>
  
      {answers.map((answer, i) => {
        return (
          <button key={i++} className='question-button' onClick={e => answerClick(e)} type='submit'>{answer.desc}</button>
        )
      })}
   
    </section>
  )
}

const mapStateToProps = ({ setCurrentQuestion, setLesson, setLessonOver }) => ({
  currentQuestion: setCurrentQuestion,
  lesson: setLesson,
  lessonOver: setLessonOver
})


const mapDispatchToProps = dispatch => (
  bindActionCreators({ incrementCurrentQuestion, setLessonOver }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(QuestionArea)
