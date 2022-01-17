import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MoneyProvider from './context/MoneyProvider';

ReactDOM.render(
    <React.StrictMode>
        <MoneyProvider>
            <App />
        </MoneyProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
