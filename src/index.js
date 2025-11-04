import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainPageWarning from "./chp09/chp09/ex3/MainPageWarning";
import Gtoggle from "./chp08/gong/Gtoggle";
import Gtogglef from "./chp08/gong/Gtogglef";
import InputTest from "./chp08/gong/InputTest";
import GComment from "./chp05/exam01/gong/GComment";
import NotificationList from "./chp06/NotificationList";
import Accomodate from "./chp07/Accomodate";
import AppNumberList from "./chp10/ex1/AppNumberList";
import StudentAttendance from "./chp10/ex2/StudentAttendance";
import AttendanceCard from "./chp10/ex3/AttendanceCard";
import MY from "./chp10/ex4/MY";
import FruitSelect from "./chp11/ex2/FruitSelect";




const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
    root.render(
        <React.StrictMode>
            <FruitSelect/>
        </React.StrictMode>
    );
},1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
