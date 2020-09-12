import React from 'react'
import { incrementScore, incrementCurrentQuestion, setLessonOver } from '../actions/index';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


function AnswerButton (props) {
  // const [isDisabled, setIsDisabled] = useState(true)
  // const toggle = false;
  const answerClick = (e) => {
    // if(e.target.value === "false") {
    //   setIsDisabled(true)
    // }
    if(e.target.value === "true") {
      props.incrementScore(1)
      // setIsDisabled(false)
    }
    if(props.lesson.questions.length === (props.currentQuestion + 1)) {
      props.setLessonOver(true)
    }
    props.incrementCurrentQuestion()
  }

  return (
    <button className='question-button' value={props.answer.correct} onClick={e => answerClick(e)} type='submit'>{props.answer.answer}</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AnswerButton)


