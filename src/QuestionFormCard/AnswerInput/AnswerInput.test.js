import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import AnswerInput from './AnswerInput';

describe('AnswerInput', () => {
  it('should render an input with a message if the answer is the correct answer', () => {
    const { getByPlaceholderText } = render(<AnswerInput correct={true} />)
    const input = getByPlaceholderText('Enter Correct Answer...')
    expect(input).toBeInTheDocument()
  })

  it('should render an input with a message if the answer is the incorrect answer', () => {
    const { getByPlaceholderText } = render(<AnswerInput correct={false} />)
    const input = getByPlaceholderText('Enter Incorrect Answer...')
    expect(input).toBeInTheDocument()
  })

  it('should fire an event when typing in an input', () => {
    const mockSetAnswerText = jest.fn()
    const { getByPlaceholderText } = render(<AnswerInput correct={false} setAnswerText={mockSetAnswerText} />)
    const input = getByPlaceholderText('Enter Incorrect Answer...')
    fireEvent.change(input, {target: {value: 'X'}})
    expect(mockSetAnswerText).toHaveBeenCalled()
  })
})