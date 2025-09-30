import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentList from "./chp05/CommentList";
import Notification from "./chp06/Notification";
import NotificationList from "./chp06/NotificationList";
import Counter from "./chp07/exam01/Counter";
import Accomodate from "./chp07/Accomodate";
import Toggle from "./chp08/Toggle";
import MyButton_Argument from "./chp08/MyButton_Argument";
import InputTest from "./chp08/InputTest";
import ConfrimButtonFunction from "./chp08/ConfrimButtonFunction";


const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
    root.render(
        <React.StrictMode>
            <ConfrimButtonFunction/>
        </React.StrictMode>
    );
},1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
