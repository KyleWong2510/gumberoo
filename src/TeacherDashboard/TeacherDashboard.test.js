import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import TeacherDashboard from './TeacherDashboard';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from '../reducers';
import { addLesson } from '../mockData/mockData'

const store = createStore(rootReducer, {
  addLesson: addLesson
})

describe('TeacherDashboard', () =>{
  it('should display an about me and a joke', () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <TeacherDashboard />
        </Provider>
      </BrowserRouter>
    )

    const welcomeMessage = getByText('Welcome', {exact: false})
    const gumberooBio = getByText('is an app', {exact: false})

    expect(welcomeMessage).toBeInTheDocument()
    expect(gumberooBio).toBeInTheDocument()
  })
})