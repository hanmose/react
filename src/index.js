import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reservation from "./chp11/ex3/Reservation";
import SignUp from "./chp11/SignUp";
import ConfirmBoilVerdict from "./chp12/ex1/ConfirmBoilVerdict";
import DistanceConverter from "./chp12/ex2/DistanceConverter";
import Calculator from "./chp12/Calculator";
import FancyBorder from "./chp13/FancyBorder";
import WelcomeDialog from "./chp13/Dialog";





const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
    root.render(
        <React.StrictMode>
            <WelcomeDialog/>
        </React.StrictMode>
    );
},1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
