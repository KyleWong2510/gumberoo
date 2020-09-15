import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import CreateStudentForm from '../CreateStudentForm/CreateStudentForm'
import StudentDetails from '../StudentDetails/StudentDetails'
import { getStudentsResults } from '../thunks/getStudentsResults'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import './TeacherRoster.scss'
import PropTypes from 'prop-types'

const TeacherRoster = ({ students, lessons, getStudentsResults }) => {
  const [ isAddingStudent, toggleAddStudent ] = useState(false)
  const [ isViewingStudentDetails, toggleStudentDetails] = useState(false)
  const [ foundStudent, setFoundStudent ] = useState({})

  const findStudentResults = async () => {
      await lessons.forEach(lesson => getStudentsResults(lesson.id))
  }

  useEffect (() => {
    try {
        findStudentResults()
      }
    catch (error) {
      console.error(error)
    }
  }, [])

  const renderStudentNames = () => {
    return students.map(student => {
      return (
        <p 
          id={student.id} 
          key={student.id} 
          onClick={(e) => findStudent(e)}
        >
          {student.first_name} {student.last_name}
        </p>
      )
    })
  }

  const findStudent = (e) => {
    e.preventDefault()
    const found = students.find(student => +e.target.id === student.id)
    setFoundStudent(found)
    // findStudentResults()
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

const mapStateToProps = ({ setStudents, setLessons }) => ({
  students: setStudents,
  lessons: setLessons
})

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(
    {
      getStudentsResults
    }, dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(TeacherRoster)

TeacherRoster.propTypes = {
  students: PropTypes.array.isRequired,
  lessons: PropTypes.array.isRequired,
  getStudentsResults: PropTypes.func.isRequired
}