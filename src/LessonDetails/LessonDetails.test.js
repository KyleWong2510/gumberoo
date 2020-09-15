import React from 'react'
import LessonDetails from './LessonDetails';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { lesson } from '../mockData/mockData';

const mockLesson = {
  id: 1,
  name: 'Mocked Lesson',
  questions: [
    {
      question: 'Which is NOT a planet?',
      reading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      answers: [{answer: 'Pluto', correct: true}, {answer: 'Venus', correct: false}, {answer: 'Jupiter', correct: false}, {answer: 'Mars', correct: false}]
    },
    {
      question: 'What is an adjective?',
      reading: null,
      answers: [{answer: 'like a Pronoun', correct: false}, {answer: 'Adverb', correct: false}, {answer: 'Verb', correct: false}, {answer: 'Words that describe a noun', correct: true}]
    }
  ],
  teacher : {
    id: 13
  }
}
 const mockAverage = '65'

describe('CreateLesson', () => {
  it('should be able to render a lesson title', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <BrowserRouter>
          <LessonDetails 
            lesson={mockLesson}
            lessonAverage={mockAverage}
          />
      </BrowserRouter>
    )

    const title = getByText('Mocked Lesson')
    expect(title).toBeInTheDocument()
  })
})