import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-800">Alritz Consultancy</h1>
          <div className="space-x-4">
            <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-medium">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-slate-100 text-sm text-center py-10 border-t border-blue-700">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
          <a href="mailto:alritz.consultancy@gmail.com" className="inline-flex items-center gap-1 hover:underline">
            <EnvelopeIcon className="h-4 w-4" /> alritz.consultancy@gmail.com
          </a>
          <span className="hidden md:inline">|</span>
          <a href="tel:+919999999999" className="inline-flex items-center gap-1 hover:underline">
            <PhoneIcon className="h-4 w-4" /> +91-99999-99999
          </a>
          <span className="hidden md:inline">|</span>
          <a href="https://github.com/Alritz-space/alritz-consultancy" target="_blank" className="hover:underline">
            GitHub
          </a>
        </div>
        <div>© {new Date().getFullYear()} Alritz Consultancy. All rights reserved.</div>
      </footer>
    </div>
  );
}
