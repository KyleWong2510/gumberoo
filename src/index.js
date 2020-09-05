import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import thunk from 'redux-thunk'
// import { rootReducer } from './reducers'
import App from './App/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const store = createStore(
  // rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store