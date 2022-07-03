import { CssBaseline } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { history } from './utils';
const container = document.getElementById('root')!;
const root = createRoot(container);
const { unstable_HistoryRouter: HistoryRouter } = require("react-router-dom");
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <CssBaseline />
      <App />

      {/* <HistoryRouter history={history}>
      
      </HistoryRouter> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
