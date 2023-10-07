import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
      <GlobalStyle />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
