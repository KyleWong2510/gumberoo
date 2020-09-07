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
      <h1>{lessonTitleText}</h1>
      {questionCards}
      <button>Create Lesson</button>
    </section>
  )
}

export default LessonPreview