import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Hero Section */}
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
            Trusted Tax Consultancy for Individuals &amp; Small Businesses
          </h1>
          <p className="text-base md:text-lg text-slate-700 mb-8 max-w-3xl">
            Alritz Consultancy helps you navigate Income Tax, GST Filing, and Financial Planning - so you can focus on growth, not paperwork.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="mt-8 mb-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Our Core Services</h2>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-8 md:space-y-0">
            {[
              {
                title: "Income Tax Services",
                desc: "Personalized assistance in ITR filing, tax planning, compliance, and supporting both residents & NRIs.",
                icon: (
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="mx-auto mb-2 text-blue-600" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>
                ),
              },
              {
                title: "GST Filing & Compliance",
                desc: "End-to-end GST registration, return filing, and compliance services for sole proprietors & businesses.",
                icon: (
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="mx-auto mb-2 text-blue-600" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-5 0h6a2 2 0 002-2v-5a2 2 0 00-2-2h-6a2 2 0 00-2 2v5a2 2 0 002 2z"/></svg>
                ),
              },
              {
                title: "Financial Planning Support",
                desc: "Guidance in budgeting, investments, retirement & tax-saving strategies for long-term security.",
                icon: (
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="mx-auto mb-2 text-blue-600" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 12c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z"/></svg>
                ),
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="flex-1 bg-white rounded-xl shadow hover:shadow-md transition p-6 flex flex-col items-center text-center"
              >
                {service.icon}
                <h3 className="font-semibold text-lg text-blue-700 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-slate-100 text-sm text-center py-6 mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
          <a href="mailto:alritz.consultancy@gmail.com" className="inline-flex items-center gap-1 hover:underline focus:underline">
            <MailIcon className="h-4 w-4" /> alritz.consultancy@gmail.com
          </a>
          <span className="hidden md:inline">|</span>
          <a href="tel:+919999999999" className="inline-flex items-center gap-1 hover:underline focus:underline">
            <PhoneIcon className="h-4 w-4" /> +91-99999-99999
          </a>
          <span className="hidden md:inline">|</span>
          <a href="https://github.com/Alritz-space/alritz-consultancy" target="_blank" rel="noopener noreferrer" className="inline-block hover:underline">
            GitHub
          </a>
        </div>
        <div>© {new Date().getFullYear()} Alritz Consultancy. All rights reserved.</div>
      </footer>
    </div>
  );
}
