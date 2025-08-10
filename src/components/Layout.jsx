// src/components/Layout.jsx
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      href: 'https://facebook.com/AlritzConsultancy',
      icon: <FaFacebookF size={18} />,
      bg: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      href: 'https://x.com/AlritzConsultan',
      icon: <FaTwitter size={18} />,
      bg: 'bg-gray-900 hover:bg-gray-800',
    },
    {
      href: 'https://www.linkedin.com/company/alritzconsultancy',
      icon: <FaLinkedinIn size={18} />,
      bg: 'bg-blue-700 hover:bg-blue-800',
    },
    {
      href: 'https://wa.me/918237808439',
      icon: <FaWhatsapp size={18} />,
      bg: 'bg-green-500 hover:bg-green-600',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-800">
            Alritz Consultancy
          </Link>
          <div className="space-x-6 text-sm font-medium">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`hover:text-blue-600 ${
                  location.pathname === path
                    ? 'text-blue-700'
                    : 'text-slate-700'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Page Content */}
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

        {/* Footer Social Icons */}
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.slice(0, 3).map(({ href, icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              {icon}
            </a>
          ))}
        </div>

        <p>
          © {new Date().getFullYear()} Alritz Consultancy. All rights reserved.
        </p>
      </footer>

      {/* Floating Social Strip */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col gap-3 z-50">
        {socialLinks.map(({ href, icon, bg }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bg} p-3 rounded-full text-white shadow-lg transition-transform hover:scale-105`}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
