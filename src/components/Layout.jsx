// src/components/Layout.jsx
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

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

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.facebook.com/AlritzConsultancy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://x.com/AlritzConsultan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/alritzconsultancy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>

        <div>
          © {new Date().getFullYear()} Alritz Consultancy. All rights reserved.
        </div>
      </footer>

      {/* Floating Social Media Strip */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col gap-3 z-50">
        <a
          href="https://facebook.com/AlritzConsultancy"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 shadow-lg transition-transform hover:scale-105"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="https://x.com/AlritzConsultan"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 p-3 rounded-full text-white hover:bg-gray-800 shadow-lg transition-transform hover:scale-105"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="https://www.linkedin.com/company/alritzconsultancy"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 p-3 rounded-full text-white hover:bg-blue-800 shadow-lg transition-transform hover:scale-105"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="https://wa.me/918237808439"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 shadow-lg transition-transform hover:scale-105"
        >
          <FaWhatsapp size={18} />
        </a>
      </div>
    </div>
  );
}
