import React from 'react'
import PropTypes from 'prop-types'

const LessonDetails = ({ lesson, lessonLink, lessonAverage }) => {
  return(
    <section>
      <h3>{lesson.name}</h3>
      <p>Link for lesson {lesson.id}</p>
      {!lessonAverage.average_score ? (
        <p>No responses collected</p>
      ) : (
        <p>Average Assessment: {lessonAverage.average_score}</p>
      )
    }
    </section>
  )
}

export default LessonDetails

LessonDetails.propTypes = {
  lesson: PropTypes.object.isRequired
}