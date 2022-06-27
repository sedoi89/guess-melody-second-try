import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';
import {fetchQuestionAction, checkAuthStatus} from './store/api-action';
import {ToastContainer} from 'react-toastify';

store.dispatch(fetchQuestionAction());
store.dispatch(checkAuthStatus());
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
