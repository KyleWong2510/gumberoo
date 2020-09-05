import React, { useState, useEffect} from 'react'
import StudentForm from './StudentForm'
// import { setStudentName } from '../actions/index'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './StudentDashboard.scss'


function StudentDashboard(props) {

 return (
    <section className='student-body'>
      
      {!props.studentName && <StudentForm />}
      {props.studentName && 
      <section className='student-dash'>
        <header>
          <h1>Gumberoo</h1>
          <h4>{props.studentName}</h4>
        </header>
        <div className='reading'>
          Reading
        </div>
        <div className='animation'>
          Animation
        </div>
        <div className='question'>
          Question
        </div>
      </section>
}
    </section>
    )
}

const mapStateToProps = ({ setStudentName }) => ({
  studentName: setStudentName
})

export default connect(mapStateToProps)(StudentDashboard);