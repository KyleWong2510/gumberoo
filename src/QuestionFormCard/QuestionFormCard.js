import React from 'react'
import './QuestionFormCard.scss'

const QuestionFormCard = () => {
  return (
    <form className='question-form-card'>
      <h2>Create a Question</h2>
      <input 
        className='question-input'
        type='text'
        // value={}
        aria-label='Question input'
        placeholder='Enter a Question...'
        // onChange={(e) => }
      />
      <input 
        className='answer-input'
        type='text'
        // value={}
        aria-label='Question input'
        placeholder='Enter an Answer...'
        // onChange={(e) => }
      />
      <input 
        className='answer-input'
        type='text'
        // value={}
        aria-label='Question input'
        placeholder='Enter an Answer...'
        // onChange={(e) => }
      />
      <button>Add Question</button>
      <button>Delete Question</button>
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