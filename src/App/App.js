import React from 'react';
import { Switch, Route } from 'react-router-dom'
import StudentDashboard from '../StudentDashboard/StudentDashboard'
import { connect } from 'react-redux'
import TeacherHeader from '../TeacherHeader/TeacherHeader'
import TeacherLogin from '../TeacherLogin/TeacherLogin'
import TeacherRoster from '../TeacherRoster/TeacherRoster'
import TeacherLessons from '../TeacherLessons/TeacherLessons'
import './App.scss';
import CreateLesson from '../CreateLesson/CreateLesson'

function App() {
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
            teacherId={teacherId} />
          }}
        />
      </Switch> 
  
    </main>
  )
}

const mapStateToProps = ({ setStudent }) => ({
  student: setStudent
})

export default connect(mapStateToProps)(App);
