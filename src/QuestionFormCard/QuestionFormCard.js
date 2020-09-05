import React, { useState } from 'react'
import './QuestionFormCard.scss'
import AnswerInput from './AnswerInput/AnswerInput'

const QuestionFormCard = () => {
  const [ questionText, setQuestion ] = useState('')
  const [ questions, setQuestions ] = useState([])
  const [ answerText, setAnswer ] = useState('')
  const [ answers, setAnswers ] = useState([])

  const addQuestion = (e) => {
    e.preventDefault()
    setQuestions([
      ...questions,
      questionText
    ])
    setQuestion('')
  }

  // questions: [
  //   {question: {
  //     reading: '',
  //     questionText: 'ssfda',
  //     answers: [
  //       {answerText: 'asdfsdfaf'},
  //       {answerText: 'sadfafds'},
  //       ...
  //     ]
  //   }
  // }]

  return (
    <form className='question-form-card'>
      <h2>Create a Question</h2>
      <input 
        className='question-input'
        type='text'
        value={questionText}
        aria-label='Question input'
        placeholder='Enter a Question...'
        onChange={(e) => setQuestion(e.target.value)}
      />
      <AnswerInput correct={true} required={true}/>
      <AnswerInput correct={false} required={true}/>
      
      <button onClick={addQuestion}>Add Question</button>
      {/* <button>Delete Question</button> */}
      <button>Add Reading</button>
    </form>
  )
}

//  Have a Question Input
//  Have a correct Answer Input
//  A Wrong Answer Input with plus and minus buttons next to it, follow the logic
//  A new Question button
//  A delete question button, follow the logic
//  An add Reading button that renders a text area.

export default QuestionFormCard