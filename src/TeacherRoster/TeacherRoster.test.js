import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TeacherRoster from './TeacherRoster';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers';

const mockStudents = [ 
  {id: 1, teacher: 1, first_name: 'Stacy', last_name: 'Peralta'},
  {id: 2, teacher: 1, first_name: 'Stevie', last_name: 'Nicks'}
]

const store = createStore(rootReducer, {
  setStudents: mockStudents,
}, applyMiddleware(thunk))

describe('TeacherRoster', () => {
  it.skip('should render a header, student names and a button', async () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <TeacherRoster students={mockStudents}/>
      </Provider>
    )
    
    const header = getByText('Students')
    const student1 = getByText('Stacy Peralta')
    const student2 = getByText('Stevie Nicks')
    const button = getByRole('button')

    expect(header).toBeInTheDocument()
    expect(student1).toBeInTheDocument()
    expect(student2).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should display the CreateStudentForm modal when clicking the btn', () => {
    const { getByRole, getByText } = render(
      <Provider store={store}>
        <TeacherRoster students={mockStudents} />
      </Provider>
    )

    const button = getByRole('button')
    fireEvent.click(button)

    const modalHeader = getByText('Add a Student To Your Roster', { exact: false })
    expect(modalHeader).toBeInTheDocument()
  })
  
  it.skip('should display the StudentDetails modal on click of a student name', () => {
    const { getByRole, getByText } = render(
      <Provider store={store}>
        <TeacherRoster students={mockStudents} />
      </Provider>
    )
    const student = getByText('Stacy Peralta')
    fireEvent.click(student)
    const modalHeader = getByRole('heading', { name: 'Stacy Peralta'})
    expect(modalHeader).toBeInTheDocument()
  })
  
  it.skip('should close the modal when clicking the X button', () => {
    const { getByRole, getByText } = render(
      <Provider store={store}>
        <TeacherRoster students={mockStudents} getStudentAverage={jest.fn()}/>
      </Provider>
    )
    const student = getByText('Stacy Peralta')
    fireEvent.click(student)
    const closeBtn = getByRole('button', { name: 'X'})
    fireEvent.click(closeBtn)
    expect(closeBtn).not.toBeInTheDocument()
  })
})