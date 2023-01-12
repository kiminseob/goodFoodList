import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import App from './App';
import './scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
