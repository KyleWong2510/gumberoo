import React from 'react'
import './StudentDetails.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const StudentDetails = ({ student, lessons }) => {

  const studentScores = [
    {
     'lesson': 2,
     'student': student.id,
     'score': 6,
     'mood': "Mad"
   }, {
     'lesson': 5,
     'student': student.id,
     'score': 2,
     'mood': "Happy"
   }, {
     'lesson': 3,
     'student': 155,
     'score': 8,
     'mood': "Sad"
   }
  ]

  const studentResults = studentScores.filter(score => score.student === student.id)
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

  const studentScoresMood = studentResults.reduce((results, result) => {
    lessons.forEach(lesson => {
      if(lesson.id === result.lesson) {
        results.push({
          lesson: lesson.name,
          score: result.score,
          mood: result.mood
        })
      }
    })
    return results
  }, [])

  const renderStudentResults = () => {
    return studentScoresMood.map(result => {
      return (
        <section>
          <h4>Lesson: {result.lesson}</h4>
          <p>Score: {result.score}%</p>
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

const mapStateToProps = ({ setLessons }) => ({
  lessons: setLessons
})

export default connect(mapStateToProps)(StudentDetails)

StudentDetails.propTypes = {
  student: PropTypes.object.isRequired,
  lessons: PropTypes.array.isRequired
}
