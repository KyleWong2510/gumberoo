import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, getByTestId, getByPlaceholderText } from '@testing-library/react';
import QuestionFormCard from './QuestionFormCard';
import QuestionInput from './QuestionInput/QuestionInput';

describe('QuestionFormCard', () => {
  it('should render input labels', () => {
    const { getByText } = render(<QuestionFormCard />)
    const lessonTitleLabel = getByText('Lesson Title:')
    const readingLabel = getByText('Reading:')
    const questionLabel = getByText('Question:')
    const correctLabel = getByText('Correct Answer:')
    const incorrect1Label = getByText('Incorrect Answer 1:')
    const incorrect2Label = getByText('Incorrect Answer 2:')
    const incorrect3Label = getByText('Incorrect Answer 3:')

    expect(lessonTitleLabel).toBeInTheDocument()
    expect(readingLabel).toBeInTheDocument()
    expect(questionLabel).toBeInTheDocument()
    expect(correctLabel).toBeInTheDocument()
    expect(incorrect1Label).toBeInTheDocument()
    expect(incorrect2Label).toBeInTheDocument()
    expect(incorrect3Label).toBeInTheDocument()
  })

  it('should render inputs and a textarea', () => {
    const { getByPlaceholderText, getByTestId } = render(<QuestionFormCard />)
    const lessonTitleInput = getByPlaceholderText('Enter Lesson Title...')
    const readingInput = getByPlaceholderText('Enter text...')
    const questionInput = getByPlaceholderText('Enter a Question...')
    const correctInput = getByPlaceholderText('Enter Correct Answer...')
    const incorrect1Input = getByTestId('incorrect1')
    const incorrect2Input = getByTestId('incorrect2')
    const incorrect3Input = getByTestId('incorrect3')

    expect(lessonTitleInput).toBeInTheDocument()
    expect(readingInput).toBeInTheDocument()
    expect(questionInput).toBeInTheDocument()
    expect(correctInput).toBeInTheDocument()
    expect(incorrect1Input).toBeInTheDocument()
    expect(incorrect2Input).toBeInTheDocument()
    expect(incorrect3Input).toBeInTheDocument()
  })

  it('should render a button to submit a question', () => {
    const { getByRole } = render(<QuestionFormCard />)
    const addQuestionBtn = getByRole('button')
    expect(addQuestionBtn).toBeInTheDocument()
  })
})