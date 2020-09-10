import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import TeacherHeader from './TeacherHeader';
import { BrowserRouter } from 'react-router-dom';

describe('TeacherHeader', () => {
  it('should render a title and three buttons', () => {
    const { getByText, getByRole } = render(<BrowserRouter><TeacherHeader /></BrowserRouter>)
    
    const title = getByText('gumberoo')
    const studentsBtn = getByText('Students')
    const lessonsBtn = getByText('Lessons')
    const createLessonBtn = getByText('Create a Lesson')
 
    expect(title).toBeInTheDocument()
    expect(studentsBtn).toBeInTheDocument()
    expect(lessonsBtn).toBeInTheDocument()
    expect(createLessonBtn).toBeInTheDocument()
  })
})