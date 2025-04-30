"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    setSubmitted(true); // Set submitted to true to show the thank you message
    
    // Set a timer to reset the form after 10 seconds
    setTimeout(() => {
      setSubmitted(false); // Reset the submitted state
    }, 10000); // 10 seconds
  };

  // Clean up the timer if the component unmounts or the form is resubmitted quickly
  useEffect(() => {
    return () => clearTimeout();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <p>If you have any questions or need assistance, feel free to reach out to us through the form below.</p>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter your name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter your email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Type your message here" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send Message
                </button>
              </div>
            </form>
            {submitted && (
              <p className="mt-4 text-green-400">We will answer your questions as soon as possible. Thank you for reaching out!</p>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <p className="mb-4">Check out our Frequently Asked Questions section to quickly find answers to common inquiries.</p>
            <Link href="/faqs" className="text-indigo-500 hover:text-indigo-300">View FAQs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}




