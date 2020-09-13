import React from 'react'
import './LessonCard.scss'

const LessonCard = ({ id, lessonTitle, lessonLink, findLesson, deleteLesson})=> {

  return (
    <section id={id} key={id} className='lesson-card'>
      <p onClick={(e) => findLesson(e)}> {lessonTitle}</p>
      <p><span className='question-card-category'>Lesson Link:</span> {lessonLink}</p>
      {/* <button onClick={(e) => deleteLesson(e)}>Delete</button> */}
    </section>
  )
}

export default LessonCard