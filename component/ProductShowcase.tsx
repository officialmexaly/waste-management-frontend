'use client'

import React from 'react';

const ProductShowcase: React.FC = () => {
  const productStats = [
    { stat: "95%", desc: "Reduction in sorting errors" },
    { stat: "60%", desc: "Decrease in operational costs" },
    { stat: "40%", desc: "Lower carbon emissions" },
    { stat: "24/7", desc: "Real-time monitoring" }
  ];

  return (
    <section id="technology" className="py-32 bg-gradient-to-b from-blue-900/20 to-green-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="slide-left">
            <h2 className="text-4xl md:text-5xl font-thin mb-8">
              Intelligence that <span className="gradient-text font-bold">Transforms</span>
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Our Mexwaste platform delivers unprecedented efficiency and environmental impact 
              through advanced automation and data-driven insights.
            </p>
            <div className="space-y-8">
              {productStats.map((item, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <div className="text-4xl font-bold text-green-400">{item.stat}</div>
                  <div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mb-2"></div>
                    <span className="text-white/80 text-lg">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="product-showcase slide-right">
            <div className="product-3d relative">
              <div className="w-full h-[400px] glass-card rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20"></div>
                <div className="text-center text-white z-10">
                  <div className="text-6xl mb-4" role="img" aria-label="Factory">🏭</div>
                  <p className="text-xl font-semibold mb-2">Mexwaste Dashboard</p>
                  <p className="text-white/70">Real-time Waste Analytics</p>
                </div>
                <div className="absolute top-4 left-4 w-3 h-3 bg-emerald-400 rounded-full pulse-animation"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full pulse-animation" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full pulse-animation" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400 rounded-full pulse-animation" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;