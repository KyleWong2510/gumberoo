import React, { useState, useEffect } from 'react'
import StudentForm from './StudentForm'
import MoodForm from './MoodForm'
import { incrementCurrentQuestion, setLessonOver } from '../actions/index'
// import { Link, withRouter } from 'react-router-dom'
import { getStudents } from '../thunks/getStudents'
import { getLesson } from '../thunks/getLesson'
import { bindActionCreators } from 'redux'
import QuestionArea from './QuestionArea';
import { connect } from 'react-redux'
import Spritesheet from 'react-responsive-spritesheet'
import panda from './assets/PandaJumpAndRandom.png'


import './StudentDashboard.scss'


function StudentDashboard(props) {
  const [error, setError] = useState('')


  const getTeachersStudents = async () => {
    await props.getStudents(props.teacherId)
  }
  const getTeachersLesson = async () => {
    await props.getLesson(props.lessonId)
  }
  
  const motivationalTalk = ['Good luck!', 'Great job!', 'You got this!', 'I want some bamboo', 'Nice pick!']

  const random = Math.floor(Math.random() * motivationalTalk.length);
  
  useEffect(() => {
    try {
      getTeachersStudents()
      getTeachersLesson()
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
            <h2>{props.lesson.name}</h2>
            <h4>{`${props.student.first_name} ${props.student.last_name}`}</h4>
          </header>
          <div className={props.lesson.questions[props.currentQuestion].reading ? 'reading' : 'hidden'}>
          {props.lesson.questions[props.currentQuestion].reading}
          </div>
          <div className='animation'>
            <div className='anim-container'>
              <Spritesheet
                className='pig'
                image={panda}
                widthFrame={108.615}
                heightFrame={109.69}
                steps={11}
                fps={5.6}
                loop={true}
                />
            </div>
            <div className='speech-bubble'>
            {motivationalTalk[random]}
            </div>
          </div>
          <div className='question'>
            <QuestionArea question={props.lesson.questions[props.currentQuestion]} />
          </div>
        </section>
      }
    </section>
  )
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
  bindActionCreators({ incrementCurrentQuestion, setLessonOver, getLesson, getStudents }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps )(StudentDashboard);