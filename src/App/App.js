import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import StudentDashboard from '../StudentDashboard/StudentDashboard'
import { connect } from 'react-redux'
import TeacherHeader from '../TeacherHeader/TeacherHeader'
import TeacherLogin from '../TeacherLogin/TeacherLogin'
import TeacherRoster from '../TeacherRoster/TeacherRoster'
import TeacherLessons from '../TeacherLessons/TeacherLessons'
import './App.scss';
import CreateLesson from '../CreateLesson/CreateLesson'
import { getStudents } from '../thunks/getStudents'
import { getLesson } from '../thunks/getLesson'
// import { Link, withRouter } from 'react-router-dom'
import { setStudent, setLesson } from '../actions/index'
import { bindActionCreators } from 'redux'

function App(props) {

  // const [error, setError] = useState('')


  // const getTeachersStudents = async () => {
  //   await props.getStudents(props.teacherId)
  // }

  // useEffect(() => {
  //   try {
  //     getTeachersStudents()
  //   } catch (error) {
  //     setError(error)
  //   }
  // }, [])

  return (
    <main className="App">
      <Switch>
        <Route path='/login'>
          <TeacherHeader />
          <TeacherLogin />
        </Route>
        <Route path='/createlesson'>
          <TeacherHeader />
          <CreateLesson />
        </Route>
        <Route path='/students'>
          <TeacherHeader />
          <TeacherRoster />
        </Route>
        <Route path='/lessons'>
          <TeacherHeader />
          <TeacherLessons />
        </Route>
        <Route 
          exact path='/:teacherId/:lessonId' 
          render={({ match }) => {
          const { teacherId, lessonId } = match.params
          return <StudentDashboard 
            lessonId={lessonId} 
            teacherId={teacherId}
            // students={props.getStudents(teacherId)}
            />
          }}
        />
      </Switch> 
  
    </main>
  )
}

const mapStateToProps = ({ setStudent, setStudents }) => ({
  student: setStudent,
  students: setStudents
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setStudent, setLesson, getLesson, getStudents }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
