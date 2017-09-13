import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import BasePage from 'pages/BasePage';

// Adds Dev Middlewares
const initialState = {
  selector: {
    totalList: ['breed1', 'breed2', 'breed3', 'breed4'],
    curList: ['breed1', 'breed2', 'breed3', 'breed4'],
  },
};
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <BasePage />
  </Provider>, document.getElementById('app'));
