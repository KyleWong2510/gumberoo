import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import CreateLesson from './CreateLesson';

describe('CreateLesson', () => {
  it('should render a title and two buttons', () => {
    const { getByText, getByRole } = render(<CreateLesson />)
    
    const title = getByText('Gumberoo')
    const studentsBtn = getByRole('button', { name: 'Students' })
    const lessonsBtn = getByRole('button', { name: 'Lessons' })
    const createLessonBtn = getByRole('button', { name: 'Create a Lesson'})
 
    expect(title).toBeInTheDocument()
    expect(studentsBtn).toBeInTheDocument()
    expect(lessonsBtn).toBeInTheDocument()
    expect(createLessonBtn).toBeInTheDocument()
  })
})