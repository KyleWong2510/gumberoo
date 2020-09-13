import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import StudentDashboard from './StudentDashboard';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from '../reducers';
import { lesson } from '../mockData/mockData'


const store = createStore(rootReducer, {
  setStudent: {
    id: 4,
    first_name: 'Bill',
    last_name: 'Wilke'
  },
  setLesson: lesson,
  setStudents: [{id: 4, first_name: 'Bill', lastName: 'Wilke'}],
  setStudentId: 4
})
describe('StudentDashboards', () => {
  it('Should render the app name and student name', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <StudentDashboard/>
        </Provider>
      </MemoryRouter>
    )
    const appName = getByText('gumberoo')
    const studentName = getByText('Bill Wilke')

    expect(appName).toBeInTheDocument()
    expect(studentName).toBeInTheDocument()
  })

  it('Should render a reading', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <StudentDashboard/>
        </Provider>
      </MemoryRouter>
    )
    const reading = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.')

    expect(reading).toBeInTheDocument()

  })

  it('Should render the lessons first question and answers', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <StudentDashboard/>
        </Provider>
      </MemoryRouter>
    )
    const question = getByText('Which is NOT a planet?')
    const answer = getByText('Pluto')

    expect(question).toBeInTheDocument()
    expect(answer).toBeInTheDocument()
  })

  it('Should render the lessons second question and answers on click', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <StudentDashboard/>
        </Provider>
      </MemoryRouter>
    )

    const answer = getByText('Pluto')

    fireEvent.click(answer)

    const question = getByText('What is an adjective?')
    const answer2 = getByText('Adverb')
    
    expect(question).toBeInTheDocument()
    expect(answer2).toBeInTheDocument()    
  })
})