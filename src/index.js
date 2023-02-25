import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter1 from './App';
import Counter2 from './Experiment';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className={'wrapper'}>
    <h2>Counter std</h2>
    <Counter1/>
    <h2>Counter Advanced</h2>
    <Counter2/>
    </div>
);

