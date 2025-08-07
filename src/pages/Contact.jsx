// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Alritz Consultancy</h1>
        <p className="text-lg text-gray-600 mb-8">
          Have questions or need help with taxes, GST, or financial planning? Reach out below.
        </p>
      </div>

      <form
        action="https://formspree.io/f/YOUR_ID" // Replace this with your Formspree ID
        method="POST"
        className="max-w-xl mx-auto bg-gray-50 shadow-lg p-6 rounded-lg space-y-4"
      >
        <input type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded" />
        <input type="email" name="email" required placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded" />
        <textarea name="message" required placeholder="Your Message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-4">
        Or email us directly: <a href="mailto:contact@alritz.in" className="underline">contact@alritz.in</a>
      </p>
    </div>
  );
}
