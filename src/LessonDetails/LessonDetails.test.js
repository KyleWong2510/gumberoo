import React from 'react'
import LessonDetails from './LessonDetails';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { lesson } from '../mockData/mockData';

const mockLesson = {
  id: 1,
  name: 'Mocked Lesson'
}

describe('CreateLesson', () => {
  it('should be able to render a lesson title', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <BrowserRouter>
          <LessonDetails lesson={mockLesson}/>
      </BrowserRouter>
    )

    const title = getByText('Mocked Lesson')
    expect(title).toBeInTheDocument()
  })
})