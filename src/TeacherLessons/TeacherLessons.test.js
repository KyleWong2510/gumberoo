import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, getByTestId, getByPlaceholderText, getByDisplayValue } from '@testing-library/react';
import TeacherLessons from './TeacherLessons';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from '../reducers';
import { lesson } from '../mockData/mockData'
import { lesson2 } from '../mockData/mockData'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
// import '@testing-library/jest-dom/extend-expect';

const mockLessons =[lesson, lesson2]
const mockLessonAverage = '62'
const store = createStore(rootReducer, {
  setLessons: mockLessons
}, applyMiddleware(thunk))

let teacherLessons, lessons, mockResetResults

describe('TeacherLesson', () => {
  beforeEach(() => {
    lessons = mockLessons
    mockResetResults = jest.fn()
    teacherLessons = (
      <BrowserRouter>
      <Provider store={store}>
        <TeacherLessons 
          lessons={mockLessons}
          resetStudentsResults={mockResetResults}
          getLessonAverage={mockLessonAverage}
        />
      </Provider>
    </BrowserRouter>
    )
  })

  it('should render a Assessments header', () => {
    const { getByText } = render(teacherLessons) 
    const lessonsHeader = getByText('Assessments')
    expect(lessonsHeader).toBeInTheDocument()
  })

  it('should display all the teachers Assessments', () => {
    const { getByText } = render(teacherLessons) 
    const lessonsHeader = getByText('Assessments')
    const lesson1 = getByText('Test Title')
    const lesson2 = getByText('North American Mammals')

    expect(lessonsHeader).toBeInTheDocument()
    expect(lesson1).toBeInTheDocument()
    expect(lesson2).toBeInTheDocument()
  })

  it('should display a lesson modal upon click of a lesson title', () => {
    const { getByText, getByRole } = render(teacherLessons) 

    const lesson1 = getByText('Test Title')
    fireEvent.click(lesson1)
    const modalHeader = getByRole('heading', { name: 'Test Title' })
    expect(modalHeader).toBeInTheDocument()
  })

  it('should display a lesson modal upon click of a lesson title', () => {
    const { getByText, getByRole } = render(teacherLessons) 
    const lesson1 = getByText('Test Title')
    fireEvent.click(lesson1)
    const modalHeader = getByRole('heading', { name: 'Test Title' })
    expect(modalHeader).toBeInTheDocument()
  })

  it('should be able to close the modal upon click of the X button', () => {
    const { getByText, getByRole } = render(teacherLessons) 
    const lesson1 = getByText('Test Title')
    fireEvent.click(lesson1)
    const modalHeader = getByRole('heading', { name: 'Test Title' })
    expect(modalHeader).toBeInTheDocument()
    const closeBtn = getByRole('button', { name: 'X'})
    fireEvent.click(closeBtn)
    expect(closeBtn).not.toBeInTheDocument()
  })
})