import React from 'react'
import './LessonCard.scss'
import PropTypes from 'prop-types'

const LessonCard = ({ id, lessonTitle, findLesson})=> {
  return (
    <section id={id} key={id} className='lesson-card'>
      <h4 className="lesson-list" onClick={(e) => findLesson(e)}> {lessonTitle}</h4>
      <p id="lesson-link">https://gumberoo.netlify.app/1/{id} </p>
    </section>
  )
}

export default LessonCard

LessonCard.propTypes = {
  id: PropTypes.number,
  lessonTitle: PropTypes.string.isRequired,
  findLesson: PropTypes.func.isRequired,
}