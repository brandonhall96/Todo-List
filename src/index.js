import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './components/MyList';
// import ListItems from './components/ListItems';
import reportWebVitals from './reportWebVitals';

const toDos = {
  allTask:
  ["Grocery Shopping", "Pay Speed Ticket", "Do Laundry", "Go To MVA"]
}


ReactDOM.render(
  <React.StrictMode>
    <MyList toDos = {toDos}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
