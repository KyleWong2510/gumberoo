import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import StudentForm from './StudentForm';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from '../reducers';
import { lesson } from '../mockData/mockData'


const store = createStore(rootReducer, {
    setStudentName:'Bill',
    setLesson: lesson
})
describe('StudentForm', () => {
  it('should render without crashing', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <StudentForm />
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
         <StudentForm/>
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
        <StudentForm/>
      </Provider>
    </MemoryRouter>
   ) 

  const nameDropdown = getByTestId('nameInput')

  fireEvent.change(nameDropdown, {target: { value: 'Bill'}})
  
  const nameChange = getByDisplayValue('Bill')

  expect(nameChange).toBeInTheDocument()

  
 })
})