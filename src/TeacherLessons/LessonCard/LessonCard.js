import React from 'react'
import './LessonCard.scss'
import PropTypes from 'prop-types'

const LessonCard = ({ id, lessonTitle, lessonLink, findLesson, deleteLesson})=> {

  return (
    <section id={id} key={id} className='lesson-card'>
      <h3 onClick={(e) => findLesson(e)}> {lessonTitle}</h3>
      <p><span className='question-card-category'>Lesson Link:</span> {lessonLink}</p>
      {/* <button onClick={(e) => deleteLesson(e)}>Delete</button> */}
    </section>
  )
}

export default LessonCard

LessonCard.propTypes = {
  id: PropTypes.number.isRequired,
  lessonTitle: PropTypes.string.isRequired,
  lessonLink: PropTypes.string.isRequired,
  findLesson: PropTypes.func.isRequired,
  deleteLesson: PropTypes.func.isRequired
}