'use client'

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription logic here
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="py-32 bg-gradient-to-b from-blue-900/20 to-transparent">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="glass-card p-12 rounded-2xl scale-in">
          <h2 className="text-3xl md:text-4xl font-thin mb-6">
            Stay Updated with <span className="gradient-text font-bold">Mexwaste</span>
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Get the latest insights on sustainable waste management, industry trends, and product updates.
          </p>
          
          {isSubscribed ? (
            <div className="text-emerald-400 text-lg font-medium">
              ✓ Thank you for subscribing! Check your email for confirmation.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-lg font-medium transition-all"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-sm text-white/50 mt-4">
            No spam. Unsubscribe anytime. Privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;