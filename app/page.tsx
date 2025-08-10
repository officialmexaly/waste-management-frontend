"use client"

import React, { useRef } from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Features from '../component/Features';
import GlobalImpact from '../component/GlobalImpact';
import HowItWorks from '../component/HowItWorks';
import ProductShowcase from '../component/ProductShowcase';
import Pricing from '../component/Pricing';
import Testimonials from '../component/Testimonials';
import FAQ from '../component/FAQ';
import Newsletter from '../component/Newsletter';
import Footer from '../component/Footer';
import GlobalStyles from '../component/GlobalImpact';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

const WasteManagementLanding: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLElement>(null);

  const { scrollY, parallaxOffset, heroOpacity, heroScale } = useScrollAnimations();

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white overflow-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero 
        scrollY={scrollY}
        heroOpacity={heroOpacity}
        heroScale={heroScale}
        parallaxOffset={parallaxOffset}
      />

      {/* Features Section */}
      <Features />

      {/* Global Impact Section */}
      <GlobalImpact />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WasteManagementLanding;