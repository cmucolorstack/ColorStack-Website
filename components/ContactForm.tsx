'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      const data = await res.json();
      setErrorMsg(data.error || 'Something went wrong.');
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 text-left max-w-xl mx-auto mt-8">
      <div className="mb-5">
        <label className="block text-sm font-semibold text-cmu-dark-gray mb-1" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cmu-red/40"
          placeholder="Your name"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-cmu-dark-gray mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cmu-red/40"
          placeholder="you@example.com"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-cmu-dark-gray mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cmu-red/40 resize-none"
          placeholder="How can we help?"
        />
      </div>

      {status === 'success' && (
        <p className="text-green-600 text-sm font-medium mb-4">
          Message sent! We&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm font-medium mb-4">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-cmu-red text-white py-3 rounded-full font-semibold shadow-lg hover:bg-cmu-dark-red hover:shadow-xl transition-all duration-300 disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
