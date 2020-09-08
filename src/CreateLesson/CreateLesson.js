import React, {useState} from 'react'
import './CreateLesson.scss'
import QuestionFormCard from '../QuestionFormCard/QuestionFormCard'
import LessonPreview from '../LessonPreview/LessonPreview'

const CreateLesson = () => {
  const [questions, setQuestions] = useState([])
  const [lessonTitleText, setLessonTitleText] = useState("");
  
  const deleteQuestion = (e) => {
    setQuestions(questions.filter(ques => ques.id != e.target.parentNode.id))
  }

  return (
    <section className='create-lesson'>
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
  )
}

export default CreateLesson