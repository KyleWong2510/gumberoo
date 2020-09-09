import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import TeacherHeader from './TeacherHeader';

describe('TeacherHeader', () => {
  it('should render a title and three buttons', () => {
    const { getByText, getByRole } = render(<TeacherHeader />)
    
    const title = getByText('gumberoo')
    const studentsBtn = getByRole('button', { name: 'Students' })
    const lessonsBtn = getByRole('button', { name: 'Lessons' })
    const createLessonBtn = getByRole('button', { name: 'Create a Lesson'})
 
    expect(title).toBeInTheDocument()
    expect(studentsBtn).toBeInTheDocument()
    expect(lessonsBtn).toBeInTheDocument()
    expect(createLessonBtn).toBeInTheDocument()
  })
})