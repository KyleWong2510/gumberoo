import React, { useState } from 'react'
import './CreateStudentForm.scss'

const CreateStudentForm = ({ completeForm }) => {
  const [studentFirstName, setStudentFirstName] = useState('')
  const [studentLastName, setStudentLastName] = useState('')

  const createStudent = (e) => {
    e.preventDefault()
    completeForm()
  }

  const isEnabled = 
    studentFirstName.trim() === '' || 
    studentLastName.trim() === ''

  return (
    <form className='create-student-form' onSubmit={(e) => createStudent(e)}>
      <h1>Add a Student to Your Roster</h1>
      <input 
        className='student-name-input'
        type='text'
        placeholder='Enter Student First Name...'
        value={studentFirstName}
        onChange={(e) => setStudentFirstName(e.target.value)}
      />
      <input 
        className='student-name-input'
        type='text'
        placeholder='Enter Student Last Name...'
        value={studentLastName}
        onChange={(e) => setStudentLastName(e.target.value)}
      />
      <input
        className='create-student-submit-btn'
        type='submit'
        value='Add Student'
        disabled={isEnabled}
      />
    </form>
  )
}

export default CreateStudentForm