import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import CreateStudentForm from '../CreateStudentForm/CreateStudentForm'
import './TeacherRoster.scss'

const TeacherRoster = () => {
  const [ isAddingStudent, toggleAddStudent ] = useState(false)

  return (
    <main className='teacher-roster'>
      <h1>Students</h1>
      {isAddingStudent && 
        <Modal 
          content={<CreateStudentForm completeForm={() => toggleAddStudent(false)}/>} 
          toggleDisplay={() => toggleAddStudent(false)}
        />
      }
      <button onClick={() => toggleAddStudent(true)}>Add a Student</button>
    </main>
  )
}

export default TeacherRoster