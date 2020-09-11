import React from 'react';
import { Switch, Route } from 'react-router-dom'
import StudentDashboard from '../StudentDashboard/StudentDashboard'
import { connect } from 'react-redux'
import TeacherHeader from '../TeacherHeader/TeacherHeader'
import TeacherDashBoard from '../TeacherDashboard/TeacherDashboard'
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
        <Route path="/teacherdashboard">
          <TeacherHeader />
          <TeacherDashBoard />
        </Route >
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
      </Switch>
      {/* <StudentDashboard /> */}
    </main>
  )
}

const mapStateToProps = ({ setStudent }) => ({
  student: setStudent
})

export default connect(mapStateToProps)(App);
