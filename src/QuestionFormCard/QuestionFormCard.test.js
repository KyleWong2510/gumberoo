import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, getByTestId, getByPlaceholderText, getByDisplayValue } from '@testing-library/react';
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

  it('should change inputs when entering information', () => {
    const mockSetLessonTitleText = jest.fn()
    const { getByPlaceholderText, getByTestId, getByDisplayValue } = render(<QuestionFormCard setLessonTitleText={mockSetLessonTitleText}/>)
    const lessonTitleInput = getByPlaceholderText('Enter Lesson Title...')
    const readingInput = getByPlaceholderText('Enter text...')
    const questionInput = getByPlaceholderText('Enter a Question...')
    const correctInput = getByPlaceholderText('Enter Correct Answer...')
    const incorrect1Input = getByTestId('incorrect1')
    const incorrect2Input = getByTestId('incorrect2')
    const incorrect3Input = getByTestId('incorrect3')

    fireEvent.change(lessonTitleInput, { target: { value: 'Lessons about life' }})
    fireEvent.change(readingInput, { target: { value: 'Read me or perish' }})
    fireEvent.change(questionInput, { target: { value: 'How old, in dog years, is Willie Nelson\'s beard?' }})
    fireEvent.change(correctInput, { target: { value: '45' }})
    fireEvent.change(incorrect1Input, { target: { value: 'Baseball' }})
    fireEvent.change(incorrect2Input, { target: { value: 'Thermal Inversion' }})
    fireEvent.change(incorrect3Input, { target: { value: 'Potato clock' }})

    const newLesson = getByDisplayValue('Read me or perish')
    const newReading = getByDisplayValue('Lessons about life')
    const newQuestion = getByDisplayValue('How old, in dog years, is Willie Nelson\'s beard?')
    const newCorrect = getByDisplayValue('45')
    const newIncorrect1 = getByDisplayValue('Baseball')
    const newIncorrect2 = getByDisplayValue('Thermal Inversion')
    const newIncorrect3 = getByDisplayValue('Potato clock')

    expect(newLesson).toBeInTheDocument()
    expect(newReading).toBeInTheDocument()
    expect(newQuestion).toBeInTheDocument()
    expect(newCorrect).toBeInTheDocument()
    expect(newIncorrect1).toBeInTheDocument()
    expect(newIncorrect2).toBeInTheDocument()
    expect(newIncorrect3).toBeInTheDocument()
  })

  it('should fire a function on click after filling out the form', () => {
    const mockSetQuestions = jest.fn()
    const { getByPlaceholderText, getByTestId, getByRole } = render(
      <QuestionFormCard 
        questions={[]} 
        setQuestions={mockSetQuestions}
      />
    )
    const questionInput = getByPlaceholderText('Enter a Question...')
    const correctInput = getByPlaceholderText('Enter Correct Answer...')
    const incorrect1Input = getByTestId('incorrect1')
    const addQuestionBtn = getByRole('button')

    fireEvent.change(questionInput, { target: { value: 'How old, in dog years, is Willie Nelson\'s beard?' }})
    fireEvent.change(correctInput, { target: { value: '45' }})
    fireEvent.change(incorrect1Input, { target: { value: 'Baseball' }})
    fireEvent.click(addQuestionBtn)

    expect(mockSetQuestions).toHaveBeenCalledTimes(1)
  })

  it('should not allow a user to click if the required fields are incomplete', () => {
    const mockSetQuestions = jest.fn()
    const { getByRole } = render(
      <QuestionFormCard 
        questions={[]} 
        setQuestions={mockSetQuestions}
      />
    )
    const addQuestionBtn = getByRole('button')
    fireEvent.click(addQuestionBtn)
    expect(mockSetQuestions).toHaveBeenCalledTimes(0)
  })
})