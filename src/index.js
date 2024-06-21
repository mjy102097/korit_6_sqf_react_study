import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch11/App';

const root = ReactDOM.createRoot(document.getElementById('root')); // 건들면 안됨 중요!!
root.render(<App></App>);
