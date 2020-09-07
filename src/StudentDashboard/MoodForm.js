import React, { useState } from 'react'
import './StudentForm.scss'
import { Link, withRouter } from 'react-router-dom'
import { setStudentName, setLesson } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { lesson } from '../mockData/lesson'



function MoodForm(props) {
  const [studentNameInput, setStudentNameInput] = useState('')

  props.setLesson(lesson)
  return (
      <section className='student-form'>
        <h2>gumberoo</h2>
        <select
          aria-label='select name'
          name='studentNameInput' 
          className='student-names-input' 
          onChange={e => setStudentNameInput(e.target.value)}
          data-testid='nameInput'
        >
          <option>Select Your Name</option> 
          <option value='Bill'>Bill</option>
        </select>
        <button className='submit-name-button' aria-label=
        'submit name' type='submit' onClick={() => props.setStudentName(studentNameInput)}>Submit</button>
      </section>
  )
}

const mapStateToProps = ({ setLesson, setStudents, setMood }) => ({
  lesson: setLesson,
  students: setStudents,
  mood: setMood
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setStudentName, setLesson }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MoodForm)