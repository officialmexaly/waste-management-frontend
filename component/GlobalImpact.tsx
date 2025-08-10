'use client'

import React from 'react';

const GlobalImpact: React.FC = () => {
  const stats = [
    { number: "2.5M", unit: "Tons", desc: "Waste Processed" },
    { number: "150+", unit: "Cities", desc: "Served Globally" },
    { number: "80%", unit: "Efficiency", desc: "Improvement" },
    { number: "1.2M", unit: "Tons CO₂", desc: "Emissions Saved" }
  ];

  return (
    <section id="impact" className="py-32 bg-gradient-to-b from-green-900/20 to-blue-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-thin mb-8 fade-in">
            Global <span className="gradient-text font-bold">Impact</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto fade-in">
            Together, we're creating measurable change across communities worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="zoom-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">{stat.number}</div>
              <div className="text-xl text-white/60 mb-2">{stat.unit}</div>
              <div className="text-white/80 text-lg">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;