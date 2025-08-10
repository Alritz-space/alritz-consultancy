import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const services = [
  {
    title: "Income Tax Services",
    desc: "Personalized assistance in ITR filing, tax planning, compliance, and supporting both residents & NRIs.",
    back: "We handle ITR for salaried, self-employed, NRIs, and small businesses. Ensure compliance and maximize deductions.",
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
    back: "Our GST experts ensure accurate filing, timely returns, and avoid penalties — for traders, service providers, and SMEs.",
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
    back: "Plan your finances for wealth creation and retirement. Get advice on tax-saving instruments and investments.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="text-blue-600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="4" />
        <path d="M16 12v5a3 3 0 01-6 0v-5" />
      </svg>
    ),
  },
];

export default function Home() {
  const [flipped, setFlipped] = useState(Array(services.length).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prev) => {
      const newFlips = [...prev];
      newFlips[index] = !newFlips[index];
      return newFlips;
    });
  };

  return (
    <>
      <Helmet>
        <title>Alritz Consultancy | Trusted Tax Consultant India – Income Tax, GST, Financial Planning</title>
        <meta
          name="description"
          content="Alritz Consultancy provides Income Tax filing, GST compliance, and financial planning services for individuals, NRIs, sole proprietors, and small businesses in India."
        />
        <meta
          name="keywords"
          content="Income Tax India, Tax Consultant India, GST Filing, NRI Tax, Tax Consultancy, Financial Planning, Tax Returns, Small Business Tax, Sole Proprietor Tax"
        />
      </Helmet>

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
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="perspective"
                  onClick={() => toggleFlip(index)}
                >
                  <div
                    className={`relative w-full h-64 transition-transform duration-500 transform-style preserve-3d cursor-pointer ${
                      flipped[index] ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front */}
                    <div className="absolute w-full h-full bg-white p-8 rounded-xl shadow-md text-center backface-hidden flex flex-col items-center justify-center">
                      <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3">{service.title}</h3>
                      <p className="text-sm text-slate-600">{service.desc}</p>
                    </div>
                    {/* Back */}
                    <div className="absolute w-full h-full bg-blue-50 p-8 rounded-xl shadow-md text-center backface-hidden rotate-y-180 flex flex-col items-center justify-center">
                      <h3 className="text-lg font-bold text-blue-800 mb-3">More Info</h3>
                      <p className="text-sm text-slate-700">{service.back}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
