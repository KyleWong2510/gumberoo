import React from 'react'
import './LessonPreview.scss'
import QuestionCard from './QuestionCard/QuestionCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLesson } from '../actions'

const LessonPreview = ({ questions, lessonTitleText, deleteQuestion, setLesson }) => {

const createLesson = (e) => {
  e.preventDefault()
  const lesson = {
    name: lessonTitleText,
    questions: questions
  }
  setLesson(lesson)
}

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
        {questions.length ? questionCards : <p className='no-questions-message'>No questions yet</p>}
      </section>
      <button onClick={createLesson} className='generate-lesson-btn'>Generate Lesson</button>
    </section>
  )
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      setLesson
    }, dispatch
  )
)

export default connect(null, mapDispatchToProps)(LessonPreview)