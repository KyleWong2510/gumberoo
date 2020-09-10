import React, {useState} from 'react'
import './CreateLesson.scss'
import QuestionFormCard from '../QuestionFormCard/QuestionFormCard'
import LessonPreview from '../LessonPreview/LessonPreview'

const CreateLesson = () => {
  const [questions, setQuestions] = useState([])
  const [lessonTitleText, setLessonTitleText] = useState("");
  
  const deleteQuestion = (e) => {
    //eslint-disable-next-line
    setQuestions(questions.filter(ques => ques.id != e.target.parentNode.id))
  }

  return (
    <section className='create-lesson'>
      <h1 className='page-title'>Create a Lesson</h1>
      <section className='create-lesson-body'>
        <QuestionFormCard 
          lessonTitleText={lessonTitleText} 
          setLessonTitleText={setLessonTitleText} 
          questions={questions} 
          setQuestions={setQuestions}
        />
        <LessonPreview 
          lessonTitleText={lessonTitleText} 
          setLessonTitleText={setLessonTitleText}
          questions={questions}
          setQuestions={setQuestions}
          deleteQuestion={deleteQuestion}
        />
      </section>
    </section>
  )
}

export default CreateLesson