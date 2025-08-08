// src/pages/Contact.jsx
import React, { useState } from 'react';

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
    } catch (err) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Alritz Consultancy</h1>
        <p className="text-lg text-gray-600 mb-8">
          Have questions about Income Tax, GST, or Financial Planning?  
          Fill out the form and we’ll get back to you soon.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-50 shadow-lg p-6 rounded-lg space-y-4"
      >
        {/* Hidden field for spam protection */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />

        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        ></textarea>
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
  );
}
