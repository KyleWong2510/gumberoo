import React, { useState } from 'react'
import './QuestionFormCard.scss'
import AnswerInput from './AnswerInput/AnswerInput'
import QuestionInput from './QuestionInput/QuestionInput'

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

  // lesson = {
    // id: 4,
  //   questions: [{
    //   id: 46,
  //     reading: '',
  //     questionText: 'What is the King of the Jungle?',
  //     correctAnswer: 'Lion'
  //     wrongAnswer: ['4', 'yellow']
  //   }]
  // }
// create a method that "renderAnswers" that maps over the answers
// array, & returns JSX element for each answer input, And can validate that
// one answer is correct & one is incorrect, if not error you need one correct & one 
// incorrect to save this question".

  return (
    // save input of renderAnswers to variable here 
    // {}
    <form className='question-form-card'>
      <h2>Create a Question</h2>
      <QuestionInput setQuestion={setQuestion} questionText={questionText}/>
      
      {/* render answers variable */}
      
      {/* add dropdown to chose incorrect/correct, then add button
      hit add button, pushes into answers array, answers then render 
      on the card, text, but have a delete button */}
      <AnswerInput correct={false} required={true}/>
      <button>Add Answer</button>
      {/* Will push into answers array, trigger rerender and boom, magic */}
      
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