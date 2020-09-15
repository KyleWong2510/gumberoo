import React from 'react'
import './LessonCard.scss'
import PropTypes from 'prop-types'

const LessonCard = ({ id, lessonTitle, findLesson})=> {
  return (
    <section id={id} key={id} className='lesson-card'>
      <p className="lesson-name" onClick={(e) => findLesson(e)}> {lessonTitle}</p>
    </section>
  )
}

export default LessonCard

LessonCard.propTypes = {
  id: PropTypes.number,
  lessonTitle: PropTypes.string.isRequired,
  findLesson: PropTypes.func.isRequired,
}