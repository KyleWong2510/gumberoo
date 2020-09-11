import React, { useState } from 'react'
import './StudentForm.scss'
import { getStudents } from '../thunks/getStudents'
import { getLesson } from '../thunks/getLesson'
// import { Link, withRouter } from 'react-router-dom'
import { setStudent, setLesson } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { lesson } from '../mockData/mockData'



function StudentForm(props) {
  const [studentNameInput, setStudentNameInput] = useState('')

  props.setLesson(lesson)
  const students = props.students.map((student, i)=> {
    return (
      <option value={student.id} key={i++}>{student.first_name}</option>
    )
  })
  return (
    <section className='student-form'>
    {props.isLoading && <p>loading</p>}
        <h2>gumberoo</h2>
        <select
          aria-label='select name'
          name='studentNameInput' 
          className='student-names-input' 
          onChange={e => setStudentNameInput(e.target.value)}
          data-testid='nameInput'
        >
          <option>Select Your Name</option> 
          {students}
        </select>
        <button className='submit-name-button' aria-label=
        'submit name' type='submit' onClick={() => props.setStudent(studentNameInput)}>Submit</button>
      </section>
  )
}

const mapStateToProps = ({ setLesson, setStudents, isLoading }) => ({
  lesson: setLesson,
  students: setStudents,
  isLoading: isLoading
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setStudent, setLesson, getLesson, getStudents }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)