import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import TeacherHeader from './TeacherHeader';

describe('TeacherHeader', () => {
  it('should render a title and two buttons', () => {
    const { getByText, getByRole } = render(<TeacherHeader />)
    
    const title = getByText('Gumberoo')
    const studentsBtn = getByRole('button', { name: 'Students' })
    const lessonsBtn = getByRole('button', { name: 'Lessons' })

    expect(title).toBeInTheDocument()
    expect(studentsBtn).toBeInTheDocument()
    expect(lessonsBtn).toBeInTheDocument()
  })
})