'use client'

import React from 'react';

interface HeroProps {
  scrollY: number;
  heroOpacity: number;
  heroScale: number;
  parallaxOffset: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY, heroOpacity, heroScale, parallaxOffset }) => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient eco-pattern"
      style={{
        transform: `translateY(${parallaxOffset}px)`,
        opacity: heroOpacity,
      }}
    >
      <div className="pt-40 relative z-10 text-center max-w-5xl mx-auto px-6">
        <div 
          className="fade-in"
          style={{ transform: `scale(${heroScale})` }}
        >
          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-thin mb-6 tracking-tight">
            Smart <span className="gradient-text font-bold">Waste</span>
          </h1>
          <h2 className="hero-subtext text-4xl md:text-5xl lg:text-6xl font-thin mb-8 tracking-tight">
            Management
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-8 font-light">
            Revolutionizing. Sustaining. Optimizing.
          </p>
          <p className="text-lg text-white/60 mb-12 max-w-3xl mx-auto">
            Transform your waste management with AI-powered solutions that reduce costs, 
            minimize environmental impact, and create sustainable communities for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-transparent">
              Start Your Journey
            </button>
            <button className="glass-effect px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;