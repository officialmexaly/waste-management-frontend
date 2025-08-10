'use client'

import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Smarter Sorting",
      description: "We're developing machine learning tools to help identify and separate recyclable materials faster and more accurately, reducing contamination and increasing recovery rates.",
      icon: "🤖"
    },
    {
      title: "Real-time Insights",
      description: "Using IoT sensors and simple tracking tools, we plan to monitor bin levels, contamination risks, and collection schedules to keep operations smooth and efficient.",
      icon: "📊"
    },
    {
      title: "Lower Carbon Impact",
      description: "By optimizing collection routes and improving resource use, we aim to cut emissions and reduce the environmental footprint of waste transport.",
      icon: "🌍"
    },
    {
      title: "Smart Analytics",
      description: "Our early dashboards will give clear, easy-to-read reports to help communities and businesses see their recycling progress and find ways to improve.",
      icon: "📈"
    },
    {
      title: "Mobile Access",
      description: "A mobile-friendly platform for drivers, managers, and customers to request pickups, check schedules, and track recycling efforts from anywhere.",
      icon: "📱"
    },
    {
      title: "Transparent Tracking",
      description: "Exploring blockchain technology to create a tamper-proof record of materials from collection to processing, building trust in the recycling chain.",
      icon: "⛓️"
    }
  ];

  return (
    <section id="solutions" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-thin mb-8 slide-up">
            Built for a <span className="gradient-text font-bold">Greener</span> Future
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto slide-up">
            Our innovative solutions combine cutting-edge technology with environmental responsibility 
            to create smarter, more efficient waste management systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card glass-card p-6 rounded-xl scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-4" role="img" aria-hidden="true">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;