import React, { useState } from 'react'
import './MoodForm.scss'
// import { Link, withRouter } from 'react-router-dom'
import { setStudent, setLesson } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { lesson } from '../mockData/mockData'



function MoodForm(props) {
  //eslint-disable-next-line
  const [studentMoodInput, setStudentMoodInput] = useState('')

  
  return (
      <section className='student-form'>
          <h3 className='finished-message'>Great job {props.studentName}</h3>
          <br></br>
          <h4>How do you feel?</h4>
          <textarea
            maxLength='100'
            className='student-mood-input' 
            placeholder='Type here how you feel, or just hit submit'
            onChange={e => setStudentMoodInput(e.target.value)}>
          </textarea>
          <button 
            className='submit-mood-button' 
            aria-label='submit mood' 
            type='submit'
          >
            Submit
          </button>
      </section>
  )
}

const mapStateToProps = ({ setLesson, setStudents, setMood, setStudent }) => ({
  studentName: setStudent,
  lesson: setLesson,
  students: setStudents,
  mood: setMood
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setStudent, setLesson }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MoodForm)