import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import CreateStudentForm from '../CreateStudentForm/CreateStudentForm'
import StudentDetails from '../StudentDetails/StudentDetails'
import StudentCard from '../StudentCard/StudentCard'
import { getStudentsResults } from '../thunks/getStudentsResults'
import { getStudentAverage } from '../thunks/getStudentAverage'
import { resetStudentsResults } from '../actions'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import './TeacherRoster.scss'
import PropTypes from 'prop-types'
import { getStudents } from '../thunks/getStudents'

const TeacherRoster = ({ students, lessons, getStudentsResults, getStudentAverage, resetStudentsResults, getStudents, studentAverage, results }) => {
  const [ isAddingStudent, toggleAddStudent ] = useState(false)
  const [ isViewingStudentDetails, toggleStudentDetails] = useState(false)
  const [ foundStudent, setFoundStudent ] = useState({})

  useEffect (() => {
    getStudents()
    findStudentResults()
    findStudentAverages()
    //eslint-disable-next-line
  }, [])

  const findStudentResults = async () => {
      await lessons.forEach(lesson => getStudentsResults(lesson.id))
  }

  const findStudentAverages = async () => {
    await students.forEach(student => getStudentAverage(student.id))
  }

  const closeModal = () => {
    toggleStudentDetails(false)
    // resetStudentsResults()
  }
  
  const filterResults = (id) => {
    return results.filter(result => result.student === id)
  }
  
  const findAverage = (id) => {
    return studentAverage.find(avg => {
      return avg.student_id === id
    })
  }
  

  const renderStudentNames = () => {
    return students.map(student => {
      let studentAvg = findAverage(student.id)
      let studentResults = filterResults(student.id)

      return (
        <StudentCard 
          student={student}
          average={studentAvg}
          results={studentResults}
          findStudent={findStudent}
        />
      )
    })
  }

  const findStudent = (e) => {
    e.preventDefault()
    const found = students.find(student => +e.target.id === student.id)
    // getStudentAverage(e.target.id)
    // findStudentResults()
    setFoundStudent(found)
    toggleStudentDetails(true)
  }

  const renderStudentDetailsModal = () => {
    if (isViewingStudentDetails) {
      return (
        <Modal 
          content={<StudentDetails student={foundStudent}/>}
          toggleDisplay={closeModal}
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
      {renderStudentNames()}
      {renderAddStudentModal()}
      {renderStudentDetailsModal()}
      <button className='add-student-btn' onClick={() => toggleAddStudent(true)}>Add a Student</button>
    </main>
  )
}

const mapStateToProps = ({ setStudents, setLessons, setStudentAverage, setStudentsResults }) => ({
  students: setStudents,
  lessons: setLessons,
  studentAverage: setStudentAverage,
  results: setStudentsResults
})

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(
    {
      getStudentsResults,
      getStudentAverage,
      resetStudentsResults,
      getStudents
    }, dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(TeacherRoster)

TeacherRoster.propTypes = {
  students: PropTypes.array.isRequired,
  lessons: PropTypes.array.isRequired,
  getStudentsResults: PropTypes.func.isRequired,
  getStudentAverage: PropTypes.func.isRequired,
  resetStudentsResults: PropTypes.func.isRequired
}