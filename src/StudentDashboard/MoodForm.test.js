import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import MoodForm from './MoodForm';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from '../reducers';
import { lesson } from '../mockData/mockData'


const store = createStore(rootReducer, {
    setStudent:{first_name: 'Bill', last_name: 'Wilke', id: '1'},
    setLesson: lesson
})

describe('StudentForm', () => {
  it('should render without crashing', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MoodForm />
        </Provider>
      </BrowserRouter>
    );

    const question = getByText('How do you feel?');
    expect(question).toBeInTheDocument();
  });

  it('should render an input field for the student to type into', () => {
    const { getByTestId, getByDisplayValue } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MoodForm />
        </Provider>
      </BrowserRouter>
    );

    const moodInput = getByTestId('mood-input')

    fireEvent.change(moodInput, {target: {value: 'I am happy'}})

    const text = getByDisplayValue('I am happy')
    
    expect(text).toBeInTheDocument()
  });
})