import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Reset } from 'styled-reset';
import App from './App';
import * as store from 'store';
import './scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider {...store}>
    <React.StrictMode>
      <Reset />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
