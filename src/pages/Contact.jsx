import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Contact Alritz Consultancy</h1>
        <p className="text-lg text-gray-600 mb-10">
          Questions about Income Tax, GST, or Financial Planning? We're here to help.
        </p>
      </div>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/mnnzodva" // Replace with your actual Formspree ID
        method="POST"
        className="max-w-xl mx-auto bg-slate-50 border border-gray-200 shadow-md rounded-xl p-8 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-800 transition duration-200"
        >
          Send Message
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Or email us directly at <a href="mailto:alritz.consultancy@gmail.com" className="text-blue-600 underline">alritz.consultancy@gmail.com</a>
      </p>
    </div>
  );
}
