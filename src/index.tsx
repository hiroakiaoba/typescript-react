import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme } from 'src/const';
import rootReducer from './modules/reducer';
import rootSaga from './modules/saga';
import App from './App';

import './reset.css';

/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const sagaMiddleWare = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare));
export const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={Theme}>
        <StyledThemeProvider theme={Theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

sagaMiddleWare.run(rootSaga);
