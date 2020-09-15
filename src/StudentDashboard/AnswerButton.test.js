import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import AnswerButton from './AnswerButton';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from '../reducers';
import { lesson } from '../mockData/mockData'

const answer = {answer: 'this answer', correct: 'true'}
const store = createStore(rootReducer,{})
describe('AnswerButton', () => {
  it.only('Should render a button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <AnswerButton answer={answer}/>
        </Provider>
      </MemoryRouter>
    )

    const text = getByText('this answer')

    expect(text).toBeInTheDocument()
  })
})