import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';
import ErrorMessage from './components/error-message/error-message';
import {fetchQuestionAction, checkAuthStatus} from './store/api-action';

store.dispatch(fetchQuestionAction());
store.dispatch(checkAuthStatus());
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
