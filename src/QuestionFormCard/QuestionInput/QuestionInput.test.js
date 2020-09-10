import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import QuestionInput from './QuestionInput';

describe('QuestionInput', () => {
  it('should render an input', () => {
    const { getByPlaceholderText } = render(<QuestionInput />)
    const input = getByPlaceholderText('Enter a Question...')
    expect(input).toBeInTheDocument()
  })

  it('should fire an event when typing in the input', () => {
    const mockSetQuestionText = jest.fn()
    const { getByPlaceholderText } = render(<QuestionInput setQuestionText={mockSetQuestionText}/>)
    const input = getByPlaceholderText('Enter a Question...')
    fireEvent.change(input, { target: { value: 'X' }})
    expect(mockSetQuestionText).toHaveBeenCalled()
  })
})