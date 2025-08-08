// src/components/Layout.jsx
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-800">
            Alritz Consultancy
          </Link>
          <div className="space-x-6 text-sm font-medium">
            <Link
              to="/"
              className={`hover:text-blue-600 ${
                location.pathname === '/' ? 'text-blue-700' : 'text-slate-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={`hover:text-blue-600 ${
                location.pathname === '/contact'
                  ? 'text-blue-700'
                  : 'text-slate-700'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-slate-100 text-sm text-center py-10 border-t border-blue-700">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
          <Link to="/contact" className="hover:underline">
            Contact Form
          </Link>
          <span className="hidden md:inline">|</span>
          <a
            href="https://alritz-space.github.io/alritz-consultancy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Alritz Consultancy
          </a>
        </div>
        <div>
          © {new Date().getFullYear()} Alritz Consultancy. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918237808439"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16.71 13.2c-.29-.14-1.71-.84-1.97-.93-.26-.1-.45-.14-.64.15s-.74.93-.91 1.12c-.17.2-.34.22-.63.07-1.73-.86-2.86-1.53-4.01-3.46-.3-.51.3-.47.86-1.56.1-.2.05-.37-.03-.52-.08-.14-.64-1.54-.88-2.12-.23-.56-.46-.49-.63-.5h-.54c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.5 1.06 2.9 1.21 3.1c.15.2 2.09 3.2 5.08 4.48.71.31 1.27.49 1.7.62.72.23 1.38.2 1.9.13.58-.09 1.71-.7 1.95-1.38.24-.67.24-1.24.17-1.36-.07-.11-.26-.18-.55-.32z" />
          <path d="M20.52 3.48C18.2 1.16 15.22 0 12 0 5.38 0 0 5.38 0 12c0 2.11.55 4.14 1.6 5.94L0 24l6.25-1.64A11.89 11.89 0 0012 24c6.62 0 12-5.38 12-12 0-3.22-1.16-6.2-3.48-8.52zM12 22c-1.75 0-3.49-.46-5.01-1.33l-.36-.2-3.71.97.99-3.63-.24-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
        </svg>
        WhatsApp Us
      </a>
    </div>
  );
}
