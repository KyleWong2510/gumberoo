import React from 'react'
import LessonCard from './LessonCard';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, getByLabelText } from '@testing-library/react';

const mockLesson = {
  id: 1,
  name: 'Mocked Lesson'
}

describe('LessonCard', ()=> {
  it('should be able to display lessons', () => {
    const { getByText } = render(
      <BrowserRouter>
          <LessonCard lessonTitle={mockLesson.name}/>
      </BrowserRouter>
    )

    const lessonTitle = getByText('Mocked Lesson')
    const lessonLink = getByText('Lesson Link:')

    expect(lessonTitle).toBeInTheDocument()
    expect(lessonLink).toBeInTheDocument()
  })
})