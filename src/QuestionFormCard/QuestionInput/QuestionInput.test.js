import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import QuestionInput from './QuestionInput';

let questionInput, mockSetQuestionText

describe('QuestionInput', () => {

  beforeEach(() => {
    mockSetQuestionText=jest.fn()
    questionInput = (
      <QuestionInput 
        setQuestionText={mockSetQuestionText}
        questionText='Test Question'
      />
    )
  })

  it('should render an input', () => {
    const { getByPlaceholderText } = render(questionInput)
    const input = getByPlaceholderText('Enter a Question...')
    expect(input).toBeInTheDocument()
  })

  it('should fire an event when typing in the input', () => {
    const { getByPlaceholderText } = render(questionInput)
    const input = getByPlaceholderText('Enter a Question...')
    fireEvent.change(input, { target: { value: 'X' }})
    expect(mockSetQuestionText).toHaveBeenCalled()
  })
})