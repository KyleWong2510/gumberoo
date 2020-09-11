import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import TeacherDashboard from './TeacherDashboard';
import { BrowserRouter } from 'react-router-dom';

describe('TeacherDashboard', () =>{
  it.only('should display an about me and a joke', () => {
    const { getByText, getByRole } = render(<BrowserRouter><TeacherDashboard /></BrowserRouter>)

    const welcomeMessage = getByText('Welcome', {exact: false})
    const gumberooBio = getByText('gumberoo is an app', {exact: false})
    const joke = getByText('What did the', {exact: false})

    expect(welcomeMessage).toBeInTheDocument()
    expect(gumberooBio).toBeInTheDocument()
    expect(joke).toBeInTheDocument()
  })
})