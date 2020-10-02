import React, { useState, useEffect } from 'react'
import StudentForm from './StudentForm'
import MoodForm from './MoodForm'
import Animation from './Animation.js'
import { incrementCurrentQuestion, setLessonOver, setLesson, setStudents } from '../actions/index'
// import { Link, withRouter } from 'react-router-dom'
import Moped from './Moped'
import { getStudents } from '../thunks/getStudents'
import { getLesson } from '../thunks/getLesson'
import { bindActionCreators } from 'redux'
import QuestionArea from './QuestionArea';
import { connect } from 'react-redux'
// import Spritesheet from 'react-responsive-spritesheet'
// import panda from './assets/PandaJumpAndRandom.png'
import PropTypes from 'prop-types';

import './StudentDashboard.scss'


function StudentDashboard(props) {
  const [error, setError] = useState('')


  const getTeachersStudents = async () => {
    await props.getStudents(props.teacherId)
  }
  const getTeachersLesson = async () => {
    await props.getLesson(props.lessonId)
  }
  
  const motivationalTalk = ['Good luck!', 'Great job!', 'You got this!', 'I want some fish', 'Nice pick!', 'You\'re so smart!', 'Great work!', 'I believe in you!', 'Fantastic!', 'Wonderful!' ]

  const random = Math.floor(Math.random() * motivationalTalk.length);
  
  useEffect(() => {
      try {
      getTeachersStudents()
      getTeachersLesson()
      setTimeout(<Moped />, 10000)
    } catch (error) {
      setError(error)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <section className='student-body'>
      {error && <p>Error</p>}
      {props.lessonOver && <MoodForm />}
      {!props.studentId && <StudentForm lessonId={props.lessonId} teacherId={props.teacherId}/>}
      {(props.studentId && !props.lessonOver) && 
        <section className='student-dash'>
          <header className='student-header'>
            <h1 className='app-name'>gumberoo</h1>
            <h2 className='lesson-name'>{props.lesson.name}</h2>
            <h4 className='student-name'>{`${props.student.first_name} ${props.student.last_name}`}</h4>
          </header>
          <div className={props.lesson.questions[props.currentQuestion].reading ? 'reading' : 'hidden'}>
          {props.lesson.questions[props.currentQuestion].reading}
          </div>
          <section className='bear-thingy'>
            <div className='anim-container'>
              <Animation/>
            </div>
            <div className='bubble-container'>
              <div className='speech-bubble'>
              {motivationalTalk[random]}
              </div>
              <div className='tiny-bubble2'></div>
              <div className='tiny-bubble1'></div>
            </div>
          </section>
          <div className='question'>
            <QuestionArea question={props.lesson.questions[props.currentQuestion]} />
          </div>
        </section>
      }
    </section>
  )
}

StudentDashboard.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  getLesson: PropTypes.func.isRequired,
  getStudent: PropTypes.func,
  hasErrored: PropTypes.string.isRequired,
  incrementCurrentQuestion: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  lesson: PropTypes.object.isRequired,
  lessonId: PropTypes.string.isRequired,
  lessonOver: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  setLessonOver: PropTypes.func.isRequired,
  student: PropTypes.object,
  studentId: PropTypes.string,
  students: PropTypes.array.isRequired,
  teacherId: PropTypes.string.isRequired
}

const mapStateToProps = ({ setStudent, setLesson, setCurrentQuestion, setLessonOver, setScore, isLoading, hasErrored, setStudents, setStudentId}) => ({
  student: setStudent,
  students: setStudents,
  lesson: setLesson,
  currentQuestion: setCurrentQuestion,
  lessonOver: setLessonOver,
  score: setScore,
  isLoading: isLoading,
  hasErrored: hasErrored,
  studentId: setStudentId
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ incrementCurrentQuestion, setLessonOver, getLesson, getStudents, setLesson, setStudents }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps )(StudentDashboard);