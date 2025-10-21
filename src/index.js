import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './hello';
import Classcomp from './classComp';
import Counter from './counter';
import MyComponent from './classLife';
import Users from './users';
import TodoApp from './TodoApp';
import Ref from './ref';
import Parent from './Parent';
import Counters from './callback';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Hello /> */}
  {/* <Classcomp /> */}
  {/* <Counter /> */}
   {/* <MyComponent /> */}
  {/* <Users /> */}
  {/* <TodoApp /> */}
  {/* <Ref /> */}
  {/* <Parent /> */}
  <Counters />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
