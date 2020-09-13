import React from 'react'
import PropTypes from 'prop-types'

const LessonDetails = ({ lesson }) => {
return(
  <section>
    <h3>{`${lesson.name}`}</h3>
    <p>Scores will be shown here</p>
  </section>
)
}

export default LessonDetails

LessonDetails.propTypes = {
  lesson: PropTypes.object.isRequired
}