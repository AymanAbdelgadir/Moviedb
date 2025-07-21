// src/index.js (or main.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Render your App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);