import React from 'react';
import StudentDashboard from '../StudentDashboard/StudentDashboard'
import { connect } from 'react-redux'
import TeacherHeader from '../TeacherHeader/TeacherHeader'
import TeacherLogin from '../TeacherLogin/TeacherLogin'
import './App.scss';
import CreateLesson from '../CreateLesson/CreateLesson'
function App() {
  return (
    <main className="App">
      {/* <TeacherHeader />
      {/* <TeacherLogin /> */}
      <CreateLesson />
      {/* <StudentDashboard /> */}

    </main>
  )
}

const mapStateToProps = ({ setStudentName }) => ({
  studentName: setStudentName
})

export default connect(mapStateToProps)(App);
