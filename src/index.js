import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch18/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // 건들면 안됨 중요!!
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
