import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind base + any global styles
import App from './App.jsx'; // Routing and page management

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
