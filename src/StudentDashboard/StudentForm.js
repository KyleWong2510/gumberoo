import React, { useState } from 'react'
import './StudentForm.scss'
import { getStudents } from '../thunks/getStudents'
import { getLesson } from '../thunks/getLesson'
import { setStudent, setLesson, setStudentId } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { lesson } from '../mockData/mockData'



function StudentForm(props) {
  const [studentNameInput, setStudentNameInput] = useState('')


  const students = props.students.map((student, i)=> {
    return (
      <option value={student.id} key={i++}>{student.first_name}</option>
    )
  })
  
  const setStudentValues = (e) => {
    let student = props.students.find(student => student.id === parseInt(studentNameInput))
    props.setStudentId(studentNameInput)
    props.setStudent(student)
  }
  return (
    <section className='parent-section'>
    {props.isLoading && <p>loading</p>}
    {!props.isLoading &&
      <section className='student-form'>
        <h2>gumberoo</h2>
        <select
          aria-label='select name'
          id='student-name-input'
          name='studentNameInput' 
          className='student-names-input' 
          onChange={e => setStudentNameInput(e.target.value)}
          data-testid='nameInput'
        >
          <option>Select Your Name</option>
          {students}
        </select>
        <button className='submit-name-button' aria-label=
        'submit name' type='submit' onClick={e => setStudentValues(e)}>Submit</button>
        </section>
        }
      </section>
  )
}

const mapStateToProps = ({ setLesson, setStudents, isLoading }) => ({
  lesson: setLesson,
  students: setStudents,
  isLoading: isLoading
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setStudent, setLesson, getLesson, getStudents, setStudentId }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)