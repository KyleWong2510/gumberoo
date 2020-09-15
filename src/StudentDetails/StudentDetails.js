import React from 'react'
import './StudentDetails.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const StudentDetails = ({ student, lessons, results, studentAverage }) => {
  console.log(lessons, 'LESSONS')
  console.log(results, 'ALL RESULTS')

  const studentResults = results.filter(score => score.student === student.id)

  const studentScoresMood = studentResults.reduce((acc, result) => {
    lessons.forEach(lesson => {
      if(lesson.id === result.lesson) {
        acc.push({
          lesson: lesson.name,
          score: result.score,
          response: result.mood,
          mood: result.mood_analyzer
        })
      }
    })
    return acc
  }, [])

  const renderStudentResults = () => {
    return studentScoresMood.map(result => {
      return (
        <section className='student-lesson-results'>
          <h4>Lesson: {result.lesson}</h4>
          <p>Score: {result.score}%</p>
          <p>Response: {result.response}</p>
          <p>Mood: {result.mood}</p>
        </section>
      )
    })
  }

  return (
    <section className='student-results'>
      <h1>{`${student.first_name} ${student.last_name}`}</h1>
      <p>Student's Avg Score: {studentAverage.average_score}%</p>
      {renderStudentResults()}
    </section>
  )
}

const mapStateToProps = ({ setLessons, setStudentsResults, setStudentAverage }) => ({
  lessons: setLessons,
  results: setStudentsResults,
  studentAverage: setStudentAverage
})

export default connect(mapStateToProps)(StudentDetails)

StudentDetails.propTypes = {
  student: PropTypes.object.isRequired,
  lessons: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired,
  studentAverage: PropTypes.number.isRequired
}
