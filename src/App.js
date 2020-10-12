import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';

import ThemeWrapper from './theme-wrapper';

import 'babel-polyfill';
import 'whatwg-fetch';

import store from './store';

export default () => {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeWrapper>
    </Provider>
  );
};
