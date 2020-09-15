import React from 'react'
import './StudentDetails.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const StudentDetails = ({ student, lessons, results }) => {
  console.log(lessons, 'LESSONS')
  console.log(results, 'ALL RESULTS')

  const studentResults = results.filter(score => score.student === student.id)
// NOT PASSING CONDITIONAL TO MATCH LESSON ID AND STUDENT SCORE LESSON
  // const studentScoresMood = studentLessons.map(score => {
  //   return lessons.find(lesson => {
  //     console.log(lesson, 'LESSON')
  //     console.log(lesson.id, score.lesson)
  //     if(lesson.id === score.lesson) {
  //       console.log('RETURN', {
  //         lesson: lesson.name,
  //         score: score.score,
  //         mood: score.mood
  //       })
  //       return ({
  //         lesson: lesson.name,
  //         score: score.score,
  //         mood: score.mood
  //       })
  //     }
  //   })
  // })

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
        <section>
          <h4>Lesson: {result.lesson}</h4>
          <p>Score: {result.score}%</p>
          <p>Response: {result.response}</p>
          <p>Mood: {result.mood}</p>
        </section>
      )
    })
  }

  return (
    <section>
      <h1>{`${student.first_name} ${student.last_name}`}</h1>
      <p>Student's Avg Score</p>
      {renderStudentResults()}
    </section>
  )
}

const mapStateToProps = ({ setLessons, setStudentsResults }) => ({
  lessons: setLessons,
  results: setStudentsResults
})

export default connect(mapStateToProps)(StudentDetails)

StudentDetails.propTypes = {
  student: PropTypes.object.isRequired,
  lessons: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired
}
