import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import TeacherLogin from './TeacherLogin';

describe('Teacher Login', () => {
  it('should render a title, input and button', () => {
    const { getByText, getByLabelText, getByDisplayValue } = render(<TeacherLogin />)

    const title = getByText('Gumberoo')
    const nameInput = getByLabelText('enter teachers first and last name')
    const submitBtn = getByDisplayValue('Submit')

    expect(title).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(submitBtn).toBeInTheDocument()
  })

  it('should reflect changes on input while typing', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<TeacherLogin />)
    const nameInput = getByPlaceholderText('Teacher Name...')
    fireEvent.change(nameInput, {target: {value:'Test Name'}})
    const newName = getByDisplayValue('Test Name')
    expect(newName).toBeInTheDocument()
  })

  // Integration on parent component to see new render
  // it('should run a function on submit', () => {
  //   const mockSubmit = jest.fn()
  //   const { getByPlaceholderText, getByDisplayValue } = render(<TeacherLogin />)
  //   const nameInput = getByPlaceholderText('Teacher Name...')
  //   const submitBtn = getByDisplayValue('Submit')

  //   fireEvent.change(nameInput, {target: {value: 'Test Name'}})
  //   fireEvent.click(submitBtn)

  //   expect(mockSubmit).toHaveBeenCalledTimes(1)
  // })

  // Sad path test for the button disable
})