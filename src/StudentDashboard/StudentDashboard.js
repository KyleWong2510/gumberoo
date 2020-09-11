import React from 'react'
import StudentForm from './StudentForm'
import MoodForm from './MoodForm'
import { incrementCurrentQuestion, setLessonOver } from '../actions/index'
// import { Link, withRouter } from 'react-router-dom'
import { getStudents } from '../thunks/getStudents'
import { getLesson } from '../thunks/getLesson'
import { bindActionCreators } from 'redux'
import QuestionArea from './QuestionArea';
import { connect } from 'react-redux'


import './StudentDashboard.scss'


function StudentDashboard(props) {
  // props.getStudents(parseInt(props.teacherId))
  return (
    <section className='student-body'>
      {props.lessonOver && <MoodForm />}
      {!props.student && <StudentForm lessonId={props.lessonId} teacherId={props.teacherId}/>}
      {(props.student && !props.lessonOver) && 
        <section className='student-dash'>
          <header className='student-header'>
            <h1 className='app-name'>gumberoo</h1>
            <h4>{props.student}</h4>
          </header>
          <div className={props.lesson.questions[props.currentQuestion].reading ? 'reading' : 'hidden'}>
          {props.lesson.questions[props.currentQuestion].reading}
          </div>
          <div className='animation'>
            Animation
          </div>
          <div className='question'>
            <QuestionArea question={props.lesson.questions[props.currentQuestion]} />
          </div>
        </section>
      }
    </section>
  )
}

const mapStateToProps = ({ setStudent, setLesson, setCurrentQuestion, setLessonOver, setScore, isLoading, hasErrored }) => ({
  student: setStudent,
  lesson: setLesson,
  currentQuestion: setCurrentQuestion,
  lessonOver: setLessonOver,
  score: setScore,
  isLoading: isLoading,
  hasErrored: hasErrored
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ incrementCurrentQuestion, setLessonOver, getStudents, getLesson }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps )(StudentDashboard);