'use client'

import React from 'react';

const HowItWorks: React.FC = () => {
  const processes = [
    {
      step: "01",
      title: "Assessment",
      description: "We analyze your current waste management processes and identify optimization opportunities.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Installation",
      description: "Our team installs smart sensors and AI sorting systems with minimal disruption to operations.",
      icon: "⚙️"
    },
    {
      step: "03",
      title: "Training",
      description: "Comprehensive training ensures your team can maximize the benefits of our technology.",
      icon: "🎓"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and AI-driven insights help optimize performance over time.",
      icon: "🚀"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-b from-transparent to-blue-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-thin mb-8 fade-in">
            How <span className="gradient-text font-bold">Mexwaste</span> Works
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto fade-in">
            Our streamlined process makes waste management transformation simple and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {processes.map((process, index) => (
            <div key={index} className="process-step text-center rotate-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto glass-card rounded-full flex items-center justify-center text-2xl">
                  {process.icon}
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-emerald-400 bg-slate-900/50 px-2 py-1 rounded-full">
                  {process.step}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{process.description}</p>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="relative mt-16">
          <div className="timeline-indicator h-2 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-full mb-8 zoom-in"></div>
          <div className="text-center">
            <p className="text-white/60 mb-6 text-lg">Average implementation time: 2-4 weeks</p>
            <button className="glass-effect px-10 py-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-105">
              Schedule Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;