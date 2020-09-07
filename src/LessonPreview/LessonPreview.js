import React from 'react'
import './LessonPreview.scss'
import QuestionCard from './QuestionCard/QuestionCard'

const LessonPreview = ({questions, setLessonTitleText, lessonTitleText}) => {

let questionCards
  if(questions.length !== 0) {
    questionCards = questions.map((question) => {
      return(
        <QuestionCard 
            id = {Date.now()}
            question = {question.desc}
            allAnswers= {question.answers}
            reading= {question.reading}
        />
      )
    })
  }

  console.log('questions in Lesson Preview:', questions);
  return (
    <section className='lesson-preview'>
      <h1>{lessonTitleText}</h1>
      {questionCards}
      <button>Create Lesson</button>
    </section>
  )
}

export default LessonPreview