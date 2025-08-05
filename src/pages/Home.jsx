import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Income Tax Services",
    desc: "Personalized assistance in ITR filing, tax planning, compliance, and supporting both residents & NRIs.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="text-blue-600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "GST Filing & Compliance",
    desc: "End-to-end GST registration, return filing, and compliance services for sole proprietors & businesses.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="text-blue-600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="11" width="6" height="6" rx="2" ry="2" />
        <path d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
      </svg>
    ),
  },
  {
    title: "Financial Planning Support",
    desc: "Guidance in budgeting, investments, retirement & tax-saving strategies for long-term security.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="text-blue-600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="4" />
        <path d="M16 12v5a3 3 0 01-6 0v-5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Hero */}
      <header className="bg-gradient-to-r from-blue-50 to-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-relaxed max-w-3xl animate-fadeIn">
            Trusted Tax Consultancy for Individuals & Small Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-12 max-w-xl leading-relaxed animate-fadeIn delay-150">
            Alritz Consultancy helps you navigate Income Tax, GST Filing, and Financial Planning - so you can focus on growth, not paperwork.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold shadow-md hover:scale-105 transform transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Services */}
      <section className="mt-16 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.03] text-center cursor-pointer"
              >
                <div className="inline-flex justify-center items-center w-16 h-16 mb-6 rounded-full bg-blue-100 text-blue-600 mx-auto">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-xl text-blue-700 mb-3">{service.title}</h3>
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
          <a href="https://github.com/alritz-consultancy" target="_blank" rel="noopener noreferrer" className="inline-block hover:underline">
            GitHub
          </a>
        </div>
        <div>© {new Date().getFullYear()} Alritz Consultancy. All rights reserved.</div>
      </footer>
    </div>
  );
}
