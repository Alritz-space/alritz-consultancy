import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind base + custom global styles
import Home from './pages/Home.jsx'; // Your Home component

// Optional: Import Inter font if not loaded in index.html (redundant if using <link> there)
// import '@fontsource/inter/variable.css'; // for npm-based font loading

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Replace with <App /> if you’ll add routing/multiple pages */}
    <Home />
  </React.StrictMode>
);
