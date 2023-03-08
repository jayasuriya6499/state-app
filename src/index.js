import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainState from './MainState';
import ClassState from './ClassState';
import StateFunTask from './StateFunTask';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateFunTask />
  //<ClassState />
  //<MainState />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
