'use client'

import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How quickly can Mexwaste be implemented?",
      answer: "Most implementations take 2-4 weeks from assessment to full deployment. Our team handles everything from installation to training, ensuring minimal disruption to your operations."
    },
    {
      question: "What types of waste can the AI sorting system handle?",
      answer: "Our AI can identify and sort over 200 different waste categories including plastics, metals, paper, glass, organic waste, and hazardous materials. The system continuously learns and improves its accuracy."
    },
    {
      question: "Is Mexwaste suitable for small businesses?",
      answer: "Absolutely! Our Starter plan is designed specifically for small businesses and communities. We offer scalable solutions that grow with your needs."
    },
    {
      question: "How does the pricing work for Enterprise customers?",
      answer: "Enterprise pricing is customized based on your specific needs, waste volume, and required features. Contact our sales team for a detailed quote and consultation."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including 24/7 monitoring, regular maintenance, software updates, and dedicated customer success managers for Enterprise clients."
    },
    {
      question: "Can Mexwaste integrate with existing waste management systems?",
      answer: "Yes! Mexwaste is designed to integrate seamlessly with most existing systems. Our API allows for custom integrations and data synchronization."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-gradient-to-b from-transparent to-green-900/20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-thin mb-8 fade-in">
            Frequently Asked <span className="gradient-text font-bold">Questions</span>
          </h2>
          <p className="text-xl text-white/70 fade-in">
            Everything you need to know about Mexwaste solutions.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <details className="group">
                <summary className="p-6 cursor-pointer list-none flex items-center justify-between hover:bg-white/5 transition-colors">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="text-emerald-400 transform group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in">
          <p className="text-white/60 mb-6 text-lg">Still have questions?</p>
          <button className="glass-effect px-10 py-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;