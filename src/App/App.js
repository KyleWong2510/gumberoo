import React from 'react';
import StudentDashboard from '../StudentDashboard/StudentDashboard'
import { connect } from 'react-redux'
import './App.scss';

function App() {
  return (
    <StudentDashboard />
  )
}

const mapStateToProps = ({ setStudentName }) => ({
  studentName: setStudentName
})

export default connect(mapStateToProps)(App);
