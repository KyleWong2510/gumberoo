import React from 'react'
import './CreateLesson.scss'
import QuestionFormCard from '../QuestionFormCard/QuestionFormCard'
import LessonPreview from '../LessonPreview/LessonPreview'

const CreateLesson = () => {
  return (
    <section className='create-lesson'>
      <QuestionFormCard />
      <LessonPreview />
    </section>
  )
}

export default CreateLesson