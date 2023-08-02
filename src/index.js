import React from 'react';
import ReactDOM from 'react-dom';

const name = "Parth";
const date = new Date();

ReactDOM.render(
    <>
        <h1>My name is {name}</h1>
        <p>Today Date is {date.toLocaleDateString()}</p>
        <p>Current Time is {date.toLocaleTimeString()}</p>
    </>,
    document.querySelector('#root')
);