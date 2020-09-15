import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, getByLabelText, waitFor } from '@testing-library/react';
import CreateLesson from './CreateLesson';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from '../reducers';
import { addLesson } from '../mockData/mockData'

const store = createStore(rootReducer, {
  addLesson: addLesson
})

describe('CreateLesson', () => {
  it('should be able to render a question', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateLesson />
        </Provider>
      </BrowserRouter>
    )
    const lessonTitle = getByPlaceholderText('Enter Assessment Title...')
    const reading = getByPlaceholderText('Enter text...')
    const question = getByPlaceholderText('Enter a Question...')
    const correctAnswer = getByPlaceholderText('Enter Correct Answer...')
    const incorrectAnswer1 = getByTestId('incorrect1')
    const incorrectAnswer2 = getByTestId('incorrect2')
    const incorrectAnswer3 = getByTestId('incorrect3')
    const button = getByText('Add Question')

    fireEvent.change(lessonTitle, {target: {value: 'Recycling'}})
    fireEvent.change(reading, {target: {value: 'Today we learning about recycling'}})
    fireEvent.change(question, {target: {value: 'What material can be recycled?'}})
    fireEvent.change(correctAnswer, {target: {value: 'paper'}})
    fireEvent.change(incorrectAnswer1, {target: {value: 'batteries'}})
    fireEvent.change(incorrectAnswer2, {target: {value: 'candy wrappers'}})
    fireEvent.change(incorrectAnswer3, {target: {value: 'toothpaste container'}})
 
    expect(lessonTitle).toHaveValue('Recycling')
    expect(reading).toHaveValue('Today we learning about recycling')
    expect(question).toHaveValue('What material can be recycled?')
    expect(incorrectAnswer1).toHaveValue('batteries')
    expect(incorrectAnswer2).toHaveValue('candy wrappers')
    expect(incorrectAnswer3).toHaveValue('toothpaste container')
    
    fireEvent.click(button)

    const displayedReading = getByText('Today we learning about recycling')
    const displayedQuestion = getByText('What material can be recycled?')
    const displayedCorrectAnswer = getByText('paper')
    const displayedIncorrectAnswer1 = getByText('batteries')
    const displayedIncorrectAnswer2 = getByText('candy wrappers')
    const displayedIncorrectAnswer3 = getByText('toothpaste container')
    const deleteBtn = getByText('Delete')

    expect(displayedReading).toBeInTheDocument()
    expect(displayedQuestion).toBeInTheDocument()
    expect(displayedCorrectAnswer).toBeInTheDocument()
    expect(displayedIncorrectAnswer1).toBeInTheDocument()
    expect(displayedIncorrectAnswer2).toBeInTheDocument()
    expect(displayedIncorrectAnswer3).toBeInTheDocument()
    expect(deleteBtn).toBeInTheDocument()
  })

  it('should be able to delete a question', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateLesson />
        </Provider>
      </BrowserRouter>
    )
    const lessonTitle = getByPlaceholderText('Enter Assessment Title...')
    const reading = getByPlaceholderText('Enter text...')
    const question = getByPlaceholderText('Enter a Question...')
    const correctAnswer = getByPlaceholderText('Enter Correct Answer...')
    const incorrectAnswer1 = getByTestId('incorrect1')
    const incorrectAnswer2 = getByTestId('incorrect2')
    const incorrectAnswer3 = getByTestId('incorrect3')
    const button = getByText('Add Question')

    fireEvent.change(lessonTitle, {target: {value: 'Recycling'}})
    fireEvent.change(reading, {target: {value: 'Today we learning about recycling'}})
    fireEvent.change(question, {target: {value: 'What material can be recycled?'}})
    fireEvent.change(correctAnswer, {target: {value: 'paper'}})
    fireEvent.change(incorrectAnswer1, {target: {value: 'batteries'}})
    fireEvent.change(incorrectAnswer2, {target: {value: 'candy wrappers'}})
    fireEvent.change(incorrectAnswer3, {target: {value: 'toothpaste container'}})
 
    expect(lessonTitle).toHaveValue('Recycling')
    expect(reading).toHaveValue('Today we learning about recycling')
    expect(question).toHaveValue('What material can be recycled?')
    expect(incorrectAnswer1).toHaveValue('batteries')
    expect(incorrectAnswer2).toHaveValue('candy wrappers')
    expect(incorrectAnswer3).toHaveValue('toothpaste container')
    
    fireEvent.click(button)

    const displayedReading = getByText('Today we learning about recycling')
    const displayedQuestion = getByText('What material can be recycled?')
    const displayedCorrectAnswer = getByText('paper')
    const displayedIncorrectAnswer1 = getByText('batteries')
    const displayedIncorrectAnswer2 = getByText('candy wrappers')
    const displayedIncorrectAnswer3 = getByText('toothpaste container')
    const deleteBtn = getByText('Delete')

    expect(displayedReading).toBeInTheDocument()
    expect(displayedQuestion).toBeInTheDocument()
    expect(displayedCorrectAnswer).toBeInTheDocument()
    expect(displayedIncorrectAnswer1).toBeInTheDocument()
    expect(displayedIncorrectAnswer2).toBeInTheDocument()
    expect(displayedIncorrectAnswer3).toBeInTheDocument()
    expect(deleteBtn).toBeInTheDocument()

    fireEvent.click(deleteBtn)
    const noQuestions = getByText('No questions yet')
    expect(noQuestions).toBeInTheDocument()
  })

  it('should be able to save a lesson', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateLesson />
        </Provider>
      </BrowserRouter>
    )
    const lessonTitle = getByPlaceholderText('Enter Assessment Title...')
    const reading = getByPlaceholderText('Enter text...')
    const question = getByPlaceholderText('Enter a Question...')
    const correctAnswer = getByPlaceholderText('Enter Correct Answer...')
    const incorrectAnswer1 = getByTestId('incorrect1')
    const incorrectAnswer2 = getByTestId('incorrect2')
    const incorrectAnswer3 = getByTestId('incorrect3')
    const button = getByText('Add Question')
    const generateLessonBtn = getByText('Generate Assessment')

    fireEvent.change(lessonTitle, {target: {value: 'Recycling'}})
    fireEvent.change(reading, {target: {value: 'Today we learning about recycling'}})
    fireEvent.change(question, {target: {value: 'What material can be recycled?'}})
    fireEvent.change(correctAnswer, {target: {value: 'paper'}})
    fireEvent.change(incorrectAnswer1, {target: {value: 'batteries'}})
    fireEvent.change(incorrectAnswer2, {target: {value: 'candy wrappers'}})
    fireEvent.change(incorrectAnswer3, {target: {value: 'toothpaste container'}})
 
    expect(lessonTitle).toHaveValue('Recycling')
    expect(reading).toHaveValue('Today we learning about recycling')
    expect(question).toHaveValue('What material can be recycled?')
    expect(incorrectAnswer1).toHaveValue('batteries')
    expect(incorrectAnswer2).toHaveValue('candy wrappers')
    expect(incorrectAnswer3).toHaveValue('toothpaste container')
    
    fireEvent.click(button)

    const displayedReading = getByText('Today we learning about recycling', {exact: false})
    const displayedQuestion = getByText('What material can be recycled?')
    const displayedCorrectAnswer = getByText('paper')
    const displayedIncorrectAnswer1 = getByText('batteries')
    const displayedIncorrectAnswer2 = getByText('candy wrappers')
    const displayedIncorrectAnswer3 = getByText('toothpaste container')
    const deleteBtn = getByText('Delete')

    expect(displayedReading).toBeInTheDocument()
    expect(displayedQuestion).toBeInTheDocument()
    expect(displayedCorrectAnswer).toBeInTheDocument()
    expect(displayedIncorrectAnswer1).toBeInTheDocument()
    expect(displayedIncorrectAnswer2).toBeInTheDocument()
    expect(displayedIncorrectAnswer3).toBeInTheDocument()
    expect(deleteBtn).toBeInTheDocument()

    fireEvent.click(generateLessonBtn)

    const noQuestions = getByText('No questions yet')
    expect(noQuestions).toBeInTheDocument()
    expect(lessonTitle).toHaveValue('')
  })

})