import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import CreateStudentForm from '../CreateStudentForm/CreateStudentForm'
import StudentDetails from '../StudentDetails/StudentDetails'
import { connect } from "react-redux";
import './TeacherRoster.scss'

const TeacherRoster = ({ students }) => {
  const [ isAddingStudent, toggleAddStudent ] = useState(false)
  const [ isViewingStudentDetails, toggleStudentDetails] = useState(false)
  const [ foundStudent, setFoundStudent ] = useState({})

  const renderStudentNames = () => {
    return students.map(student => {
      return (
        <p id={student.id} onClick={(e) => findStudent(e)}>{student.first_name} {student.last_name}</p>
      )
    })
  }

  const findStudent = (e) => {
    const found = students.find(student => +e.target.id === student.id)
    setFoundStudent(found)
    toggleStudentDetails(true)
  }

  const renderStudentDetailsModal = () => {
    if (isViewingStudentDetails) {
      return (
        <Modal 
          content={<StudentDetails student={foundStudent}/>}
          toggleDisplay={() => toggleStudentDetails(false)}
        />
      )
    } 
  }

  const renderAddStudentModal = () => {
    if (isAddingStudent) {
      return (
        <Modal 
          content={<CreateStudentForm completeForm={() => toggleAddStudent(false)}/>} 
          toggleDisplay={() => toggleAddStudent(false)}
        />
      )
    } 
  }

  return (
    <main className='teacher-roster'>
      <h1>Students</h1>
      {renderStudentNames()}
      {renderAddStudentModal()}
      {renderStudentDetailsModal()}
      <button className='add-student-btn' onClick={() => toggleAddStudent(true)}>Add a Student</button>
    </main>
  )
}

const mapStateToProps = ({ setStudents }) => ({
  students: setStudents
})

export default connect(mapStateToProps)(TeacherRoster)
