import React from 'react'
import LessonCard from './LessonCard';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, getByLabelText } from '@testing-library/react';

const mockLesson = {
  id: 1,
  name: 'Mocked Lesson'
}

let lessonCard, mockToggle

describe('LessonCard', ()=> {
  beforeEach(() => {
    mockToggle = jest.fn()

    lessonCard = (
      <LessonCard 
        id = {mockLesson.id}
        lessonTitle = {mockLesson.name}
        lessonLink = ''
        findLesson = {mockToggle}     
      />
    )

  })
  it('should be able to display lessons', () => {
    const { getByText } = render(lessonCard )

    const lessonTitle = getByText('Mocked Lesson')
    const lessonLink = getByText('Lesson Link:')

    expect(lessonTitle).toBeInTheDocument()
    expect(lessonLink).toBeInTheDocument()
  })

  it('a function should be fired upon a click of a lesson title', () => {
    const { getByText } = render(lessonCard)
    const titleToClick = getByText('Mocked Lesson')
    fireEvent.click(titleToClick)
    expect(mockToggle).toHaveBeenCalled()
  })
})