import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RingProvider from './Contexts/RingContext';
import ImageProvider from './Contexts/ImagesContext';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './Contexts/ThemeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <ImageProvider>
      <RingProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RingProvider>
    </ImageProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
