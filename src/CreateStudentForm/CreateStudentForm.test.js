import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import CreateStudentForm from './CreateStudentForm';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from '../reducers';

const store = createStore(rootReducer, {

})
let createStudentForm
let mockCompleteForm

describe('CreateStudent', () => {
  beforeEach(() => {

    mockCompleteForm = jest.fn()
    createStudentForm = (
      <Provider store={store}>
        <CreateStudentForm completeForm={mockCompleteForm}/>
      </Provider>
    )
  })

  it('should render a header, two inputs, and a submit btn', () => {
    const { getByText, getByPlaceholderText, getByDisplayValue } = render(createStudentForm)

    const header = getByText('Add a Student to Your Roster')
    const firstNameInput = getByPlaceholderText('Enter Student First Name...')
    const lastNameInput = getByPlaceholderText('Enter Student Last Name...')
    const submitBtn = getByDisplayValue('Add Student')

    expect(header).toBeInTheDocument()
    expect(firstNameInput).toBeInTheDocument()
    expect(lastNameInput).toBeInTheDocument()
    expect(submitBtn).toBeInTheDocument()
  })

  it('should change inputs when typing', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(createStudentForm)

    const firstNameInput = getByPlaceholderText('Enter Student First Name...')
    const lastNameInput = getByPlaceholderText('Enter Student Last Name...')

    fireEvent.change(firstNameInput, { target: { value: 'William' }})
    fireEvent.change(lastNameInput, { target: { value: 'Shatner' }})
    
    const newFirstName = getByDisplayValue('William')
    const newLastName = getByDisplayValue('Shatner')

    expect(newFirstName).toBeInTheDocument()
    expect(newLastName).toBeInTheDocument()
  })

  it('should fire a function onSubmit', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(createStudentForm)

    const firstNameInput = getByPlaceholderText('Enter Student First Name...')
    const lastNameInput = getByPlaceholderText('Enter Student Last Name...')
    const submitBtn = getByDisplayValue('Add Student')
    
    fireEvent.change(firstNameInput, { target: { value: 'William' }})
    fireEvent.change(lastNameInput, { target: { value: 'Shatner' }})
    fireEvent.click(submitBtn)

    expect(mockCompleteForm).toHaveBeenCalledTimes(1)
  })

  it('should not fire a function onSubmit when one or both inputs are empty', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(createStudentForm)

    const firstNameInput = getByPlaceholderText('Enter Student First Name...')
    const submitBtn = getByDisplayValue('Add Student')
    
    fireEvent.change(firstNameInput, { target: { value: 'William' }})
    fireEvent.click(submitBtn)

    expect(mockCompleteForm).toHaveBeenCalledTimes(0)
  })
})