import React from 'react'
import './LessonPreview.scss'

const LessonPreview = ({questions, lessonTitleText}) => {


  console.log('questions in Lesson Preview:', questions);
  return (
    <section className='lesson-preview'>
      <button>Create Lesson</button>
    </section>
  )
}

export default LessonPreview