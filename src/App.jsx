import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Router basename="/alritz-consultancy">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* Optional: fallback for 404s */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center text-center p-10 text-gray-600">
            <div>
              <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
              <p className="mb-6">The page you’re looking for doesn't exist.</p>
              <a href="/" className="text-blue-600 underline hover:text-blue-800">Back to Home</a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}
