import { Link } from 'react-router-dom';

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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white shadow-md py-20 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
            Trusted Tax Consultancy for Individuals & Small Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto">
            Alritz Consultancy helps you navigate Income Tax, GST Filing, and Financial Planning — so you can focus on growth, not paperwork.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-16 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-[1.03] text-center"
              >
                <div className="w-16 h-16 mb-6 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
