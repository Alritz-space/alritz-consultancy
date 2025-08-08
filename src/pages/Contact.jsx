import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const [status, setStatus] = useState('');
  const FORM_ENDPOINT = "https://formspree.io/f/mnnzodva"; // Replace with your Formspree endpoint

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('SUCCESS');
        e.target.reset();
      } else {
        setStatus('ERROR');
      }
    } catch {
      setStatus('ERROR');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Alritz Consultancy – Tax, GST & Financial Planning</title>
        <meta
          name="description"
          content="Contact Alritz Consultancy for professional Income Tax filing, GST compliance, and financial planning services. Serving individuals, NRIs, and small businesses in India."
        />
        <meta
          name="keywords"
          content="Contact Alritz Consultancy, Tax Help India, GST Support, Financial Planning Contact"
        />
        <meta property="og:title" content="Contact Alritz Consultancy" />
        <meta
          property="og:description"
          content="Get in touch with Alritz Consultancy for trusted tax and financial services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alritz-space.github.io/alritz-consultancy/contact" />
        <meta property="og:image" content="https://alritz-space.github.io/alritz-consultancy/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Alritz Consultancy" />
        <meta
          name="twitter:description"
          content="Reach out to us for tax consultancy, GST services, and financial planning support."
        />
        <meta name="twitter:image" content="https://alritz-space.github.io/alritz-consultancy/og-image.png" />
      </Helmet>

      <div className="min-h-screen bg-white text-gray-800 px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Alritz Consultancy</h1>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about Income Tax, GST, or Financial Planning?  
            Fill out the form below and we’ll get back to you soon.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-50 shadow-lg p-6 rounded-lg space-y-4"
        >
          {/* Hidden field for spam bots */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} aria-hidden="true" />

          <label className="block">
            <span className="sr-only">Your Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </label>

          <label className="block">
            <span className="sr-only">Your Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </label>

          <label className="block">
            <span className="sr-only">Your Message</span>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
          >
            Send Message
          </button>

          {status === 'SUCCESS' && (
            <p className="text-green-600 mt-2 text-sm">
              ✅ Your message has been sent! We’ll reply soon.
            </p>
          )}
          {status === 'ERROR' && (
            <p className="text-red-600 mt-2 text-sm">
              ❌ Oops! Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </>
  );
}
