import { EnvelopeIcon, PhoneIcon, ClockIcon, LockClosedIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Income Tax Services',
    desc: 'Personalized assistance in ITR filing, tax planning, compliance, and supporting both residents & NRIs.',
    icon: <ClockIcon className="h-9 w-9 text-blue-600" />,
  },
  {
    title: 'GST Filing & Compliance',
    desc: 'End-to-end GST registration, return filing, and compliance services for sole proprietors & businesses.',
    icon: <LockClosedIcon className="h-9 w-9 text-blue-600" />,
  },
  {
    title: 'Financial Planning Support',
    desc: 'Guidance in budgeting, investments, retirement & tax-saving strategies for long-term security.',
    icon: <ChartBarIcon className="h-9 w-9 text-blue-600" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-800">Alritz Consultancy</h1>
          <div className="space-x-4">
            <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-medium">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-50 to-white shadow-inner">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
            Trusted Tax Consultancy for Individuals & Small Businesses
          </h2>
          <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto">
            Alritz Consultancy helps you navigate Income Tax, GST Filing, and Financial Planning — so you can focus on growth, not paperwork.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* Services Section */}
      <section className="mt-16 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Core Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02] text-center"
              >
                <div className="w-16 h-16 mb-6 mx-auto flex items-center justify-center rounded-full bg-blue-100">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-blue-700 mb-3">{service.title}</h4>
                <p className="text-sm text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-slate-100 text-sm text-center py-10 border-t border-blue-700 mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
          <a href="mailto:alritz.consultancy@gmail.com" className="inline-flex items-center gap-1 hover:underline focus:underline">
            <EnvelopeIcon className="h-4 w-4" /> alritz.consultancy@gmail.com
          </a>
          <span className="hidden md:inline">|</span>
          <a href="tel:+919999999999" className="inline-flex items-center gap-1 hover:underline focus:underline">
            <PhoneIcon className="h-4 w-4" /> +91-99999-99999
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="https://github.com/Alritz-space/alritz-consultancy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
        <div>© {new Date().getFullYear()} Alritz Consultancy. All rights reserved.</div>
      </footer>
    </div>
  );
}
