import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-center p-10 text-gray-600">
              <div>
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <a href="#/" className="text-blue-600 underline hover:text-blue-800">Back to Home</a>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
