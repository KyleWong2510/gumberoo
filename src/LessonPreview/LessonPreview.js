import React from 'react'
import './LessonPreview.scss'
import LessonCard from './QuestionCard/QuestionCard'

const LessonPreview = ({questions, setLessonTitleText, lessonTitleText}) => {

// let qestionCards
  // if(questions.length !== 0) {
//  questionCards = questions.map(question) => {
//  return(
//    <lessonCard 
      // id = date.now()
      // lesson = {questions.lessonTitleText}
      // delete
      // />()
// )
// }
  // }
  console.log('questions in Lesson Preview:', questions);
  return (
    <section className='lesson-preview'>

      <button>Create Lesson</button>
    </section>
  )
}

export default LessonPreview