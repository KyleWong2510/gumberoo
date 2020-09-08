import React from 'react'
import './LessonPreview.scss'
import QuestionCard from './QuestionCard/QuestionCard'

const LessonPreview = ({questions, setLessonTitleText, lessonTitleText, deleteQuestion}) => {

let questionCards
  if(questions.length !== 0) {
    questionCards = questions.map((question) => {
      return(
        <QuestionCard 
          key={question.id}
          id={question.id}
          question={question.desc}
          allAnswers={question.answers}
          reading={question.reading}
          deleteQuestion={deleteQuestion}
        />
      )
    })
  }

  return (
    <section className='lesson-preview'>
      <h1 className='lesson-preview-title'>{lessonTitleText}</h1>
      <section className='question-cards-container'>
        {questionCards}
      </section>
      <button className='generate-lesson-btn'>Generate Lesson</button>
    </section>
  )
}

export default LessonPreview