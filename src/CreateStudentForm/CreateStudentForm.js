import React, { useState } from 'react'
import './CreateStudentForm.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addStudent } from "../actions";
import PropTypes from 'prop-types'
import { getStudents } from '../thunks/getStudents';

const CreateStudentForm = ({ completeForm, addStudent, getStudents }) => {
  const [studentFirstName, setStudentFirstName] = useState('')
  const [studentLastName, setStudentLastName] = useState('')
  
  const isEnabled = 
    studentFirstName.trim() === '' || 
    studentLastName.trim() === ''
  
  const teacherId = 1

  const postStudent = () => {
    const url = `https://gumberoo-backend.herokuapp.com/api/v1/teachers/${teacherId}/students/`  
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: teacherId,
        students: [
          {
            first_name: studentFirstName,
            last_name: studentLastName,
            age: null
          }
        ]
      })
    })
    .catch(err => console.error(err))
  }
  
  const createStudent = (e) => {
    e.preventDefault()
    postStudent()
    addStudent({
      first_name: studentFirstName,
      last_name: studentLastName,
      age: null
    })
    getStudents()
    completeForm()
  }

  return (
    <form className='create-student-form' onSubmit={(e) => createStudent(e)}>
      <h1>Add a Student to Your Roster</h1>
      <section>
        <label className='student-name-label' htmlFor='student-firstname-input'>First Name:</label>
        <input
          id='student-firstname-input' 
          className='student-name-input'
          type='text'
          placeholder='Enter Student First Name...'
          value={studentFirstName}
          onChange={(e) => setStudentFirstName(e.target.value)}
        />
      </section>
      <section>
        <label className='student-name-label' htmlFor='student-lastname-input'>Last Name:</label>
        <input 
          id='student-lastname-input'
          className='student-name-input'
          type='text'
          placeholder='Enter Student Last Name...'
          value={studentLastName}
          onChange={(e) => setStudentLastName(e.target.value)}
        />
      </section>
      <input
        className='create-student-submit-btn'
        type='submit'
        value='Add Student'
        disabled={isEnabled}
      />
    </form>
  )
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(
    {
      addStudent,
      getStudents
    }, dispatch
  )

export default connect(null, mapDispatchToProps)(CreateStudentForm)

CreateStudentForm.propTypes = {
  completeForm: PropTypes.func.isRequired,
  addStudent: PropTypes.func.isRequired
}