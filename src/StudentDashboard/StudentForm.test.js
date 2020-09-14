import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import StudentForm from './StudentForm';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from '../reducers';
import { lesson } from '../mockData/mockData'
import { setStudentId } from '../actions';
const mockRootReducer = jest.mock('../reducers/index.js')

const lessonId = '1'
const teacherId = '1'
let store = createStore(
  rootReducer, {
    setStudent: {
      id: 4,
      first_name: 'Bill',
      last_name: 'Wilke'
    },
    setLesson: lesson,
    setStudents: [{id: 4, first_name: 'Bill', last_name: 'Wilke'}],
    setStudentId: "",
    // setLessonId: "1"
})
describe('StudentForm', () => {
  it('should render without crashing', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <StudentForm lessonId= {lessonId} teacherId={teacherId}/>
        </Provider>
      </BrowserRouter>
    );

    const header = getByText('gumberoo');
    expect(header).toBeInTheDocument();
  });

  it('Should render the app name with an input', () => {
   const { getByText, getByTestId } = render(
     <MemoryRouter>
       <Provider store={store}>
         <StudentForm lessonId= {lessonId} teacherId={teacherId}/>
       </Provider>
     </MemoryRouter>
   )
   const appName = getByText('gumberoo')
   const nameInput = getByTestId('nameInput')

   expect(appName).toBeInTheDocument()
   expect(nameInput).toBeInTheDocument()
 })

 it('should allow to students to pick their name from the dropdown', () => {
  const { getByDisplayValue, getByTestId } = render(
    <MemoryRouter>
      <Provider store={store}>
        <StudentForm lessonId= {lessonId} teacherId={teacherId}/>
      </Provider>
    </MemoryRouter>
   ) 

  const nameDropdown = getByTestId('nameInput')

  fireEvent.change(nameDropdown, {target: { value: 4}})
  
  const nameChange = getByDisplayValue('Bill Wilke')

  expect(nameChange).toBeInTheDocument() 
 })

 it('should set the student Id and student on click', async () => {
  store = createStore(
    rootReducer, {
      setStudent: {
        id: 4,
        first_name: 'Bill',
        last_name: 'Wilke'
      },
      setLesson: lesson,
      setStudents: [{id: 4, first_name: 'Bill', last_name: 'Wilke'}],
      setStudentId: "4",
      setLessonId: "1",
      isLoading: false,
      hasErrored: ""
  })
  const mockSetStudent = jest.fn()
  
  const { getByTestId, getByRole, getByText } = render(
    <MemoryRouter>
      <Provider store={store}>
        <StudentForm setStudent={mockSetStudent} lessonId= {lessonId} teacherId={teacherId}/>
      </Provider>
    </MemoryRouter>
   ) 

  const nameDropdown = getByTestId('nameInput')
  const submitBtn = getByRole('button', {name: 'submit name'})

  fireEvent.change(nameDropdown, {target: { value: 4}})
  fireEvent.click(submitBtn)

  // const lessonName = await waitFor(() => getByText('Test Title'))
  expect(mockSetStudent).toHaveBeenCalledTimes(1)
 })
})