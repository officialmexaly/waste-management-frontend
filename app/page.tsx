"use client"

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../component/Navbar';

const WasteManagementLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const productRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Operations Director",
      company: "Metro City Council",
      quote: "Mexwaste reduced our waste management costs by 45% while improving recycling rates to 85%. The AI sorting technology is revolutionary.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Rodriguez",
      role: "Sustainability Manager",
      company: "GreenCorp Industries",
      quote: "The real-time monitoring and predictive analytics have transformed how we handle industrial waste. ROI was evident within 3 months.",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Emma Watson",
      role: "Environmental Scientist",
      company: "EcoConsult Group",
      quote: "The environmental impact data is incredibly detailed. We&apos;ve seen measurable improvements in carbon footprint across all client sites.",
      avatar: "👩‍🔬"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and communities",
      features: [
        "Smart waste sorting for up to 1,000 kg/day",
        "Basic analytics dashboard",
        "Mobile app access",
        "Email support",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for medium-sized operations",
      features: [
        "Smart waste sorting for up to 10,000 kg/day",
        "Advanced analytics & AI insights",
        "Real-time monitoring",
        "Priority support",
        "Custom integrations",
        "Predictive maintenance"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale industrial operations",
      features: [
        "Unlimited waste processing capacity",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 phone support",
        "On-site installation",
        "Blockchain tracking",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Enhanced Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            (entry.target as HTMLElement).style.animationPlayState = 'running';
          } else {
            // Re-trigger animation when scrolling back up
            if (scrollDirection === 'up') {
              entry.target.classList.remove('animate-in');
              (entry.target as HTMLElement).style.animationPlayState = 'paused';
              setTimeout(() => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('animate-in');
                  (entry.target as HTMLElement).style.animationPlayState = 'running';
                }
              }, 100);
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    const elementsToObserve = document.querySelectorAll('.fade-in, .slide-up, .scale-in, .slide-left, .slide-right, .zoom-in, .rotate-in');
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [scrollDirection]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const parallaxOffset = scrollY * 0.5;
  const heroOpacity = Math.max(1 - scrollY / 600, 0);
  const heroScale = Math.max(1 - scrollY / 2000, 0.8);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-blue-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-emerald-600/5"></div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translate3d(-60px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translate3d(60px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-3deg) scale(0.95);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes rotate360 {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes slideIndicator {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes morphBackground {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }

        .fade-in, .slide-up, .scale-in, .slide-left, .slide-right, .zoom-in, .rotate-in {
          opacity: 0;
          animation-fill-mode: forwards;
          animation-play-state: paused;
        }

        .fade-in.animate-in {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .slide-up.animate-in {
          animation: fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .scale-in.animate-in {
          animation: scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .slide-left.animate-in {
          animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .slide-right.animate-in {
          animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .zoom-in.animate-in {
          animation: zoomIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .rotate-in.animate-in {
          animation: rotateIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .rotate-animation {
          animation: rotate360 20s linear infinite;
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .pulse-animation {
          animation: pulse 3s ease-in-out infinite;
        }

        .morph-background {
          animation: morphBackground 8s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .glass-effect {
          backdrop-filter: blur(16px) saturate(180%);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .glass-card {
          backdrop-filter: blur(20px) saturate(180%);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        .glass-nav {
          backdrop-filter: blur(24px) saturate(180%);
          background: rgba(15, 23, 42, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-gradient {
          background: radial-gradient(ellipse at center, rgba(16, 185, 129, 0.15) 0%, rgba(0, 0, 0, 0.8) 70%);
        }

        .feature-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
        }

        .product-showcase {
          perspective: 1000px;
        }

        .product-3d {
          transform-style: preserve-3d;
          transition: transform 0.4s ease;
        }

        .product-3d:hover {
          transform: rotateY(15deg) rotateX(5deg);
        }

        .eco-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
        }

        .testimonial-card {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0.7;
          transform: scale(0.95);
        }

        .testimonial-card.active {
          opacity: 1;
          transform: scale(1);
        }

        .pricing-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .pricing-card.popular {
          transform: scale(1.02);
          border: 1px solid rgba(16, 185, 129, 0.5);
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.15);
        }

        .mobile-menu {
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .process-step {
          position: relative;
        }

        .process-step::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -50%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #10b981, transparent);
          transform: translateY(-50%);
        }

        .process-step:last-child::after {
          display: none;
        }

        .timeline-indicator {
          position: relative;
          overflow: hidden;
        }

        .timeline-indicator::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5), transparent);
          animation: slideIndicator 4s infinite;
        }

        .floating-element {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 8s ease-in-out infinite;
        }

        .floating-element:nth-child(2) { animation-delay: -2s; }
        .floating-element:nth-child(3) { animation-delay: -4s; }
        .floating-element:nth-child(4) { animation-delay: -6s; }

        @media (max-width: 768px) {
          .hero-text {
            font-size: 2.5rem;
          }
          
          .hero-subtext {
            font-size: 1.5rem;
          }

          .process-step::after {
            display: none;
          }

          .section-divider {
            height: 100px;
          }
        }
      `}</style>

      {/* Navigation */}
      <div>
        <Navbar/>
      </div>

      {/* Hero Section */}
      <section 
        id="home"
        ref={heroRef}
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

      {/* Features Section */}
      <section id="solutions" ref={featuresRef} className="py-32 relative">
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
            {[
              {
                title: "Smarter Sorting",
                description: "We&apos;re developing machine learning tools to help identify and separate recyclable materials faster and more accurately, reducing contamination and increasing recovery rates.",
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
            ].map((feature, index) => (
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

      {/* Global Impact Section */}
      <section id="impact" className="py-32 bg-gradient-to-b from-green-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-thin mb-8 fade-in">
              Global <span className="gradient-text font-bold">Impact</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto fade-in">
              Together, we&apos;re creating measurable change across communities worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { number: "2.5M", unit: "Tons", desc: "Waste Processed" },
              { number: "150+", unit: "Cities", desc: "Served Globally" },
              { number: "80%", unit: "Efficiency", desc: "Improvement" },
              { number: "1.2M", unit: "Tons CO₂", desc: "Emissions Saved" }
            ].map((stat, index) => (
              <div key={index} className="zoom-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">{stat.number}</div>
                <div className="text-xl text-white/60 mb-2">{stat.unit}</div>
                <div className="text-white/80 text-lg">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
            {[
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
            ].map((process, index) => (
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
          <div className="relative">
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

      {/* Product Showcase */}
      <section id="technology" ref={productRef} className="py-32 bg-gradient-to-b from-blue-900/20 to-green-900/20">
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
                {[
                  { stat: "95%", desc: "Reduction in sorting errors" },
                  { stat: "60%", desc: "Decrease in operational costs" },
                  { stat: "40%", desc: "Lower carbon emissions" },
                  { stat: "24/7", desc: "Real-time monitoring" }
                ].map((item, index) => (
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
                  <div className="absolute top-4 left-4 w-3 h-3 bg-emerald-400 rounded-full animated-pulse"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animated-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full animated-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animated-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-gradient-to-b from-transparent to-blue-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-thin mb-8 fade-in">
              Choose Your <span className="gradient-text font-bold">Plan</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto fade-in">
              Flexible pricing options designed to scale with your waste management needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`pricing-card glass-card p-6 rounded-xl text-center scale-in ${plan.popular ? 'popular' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-white/60 text-sm">{plan.period}</span>
                </div>
                <p className="text-white/70 mb-6 text-sm">{plan.description}</p>
                <ul className="space-y-3 mb-6 text-left text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <span className="text-emerald-400 mt-0.5 text-sm">✓</span>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                    : 'glass-effect hover:bg-white/10 text-white'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 fade-in">
            <p className="text-white/60 mb-6 text-lg">All plans include 30-day free trial • No setup fees • Cancel anytime</p>
            <button className="text-green-400 hover:text-green-300 transition-colors underline text-lg">
              Compare all features →
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-gradient-to-b from-green-900/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-thin mb-8 fade-in">
              What Our <span className="gradient-text font-bold">Clients</span> Say
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto fade-in">
              Join hundreds of organizations worldwide who trust Mexwaste for their waste management needs.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-6">
                    <div className={`testimonial-card glass-effect p-12 rounded-3xl text-center ${index === currentTestimonial ? 'active' : ''}`}>
                      <div className="text-8xl mb-8">{testimonial.avatar}</div>
                      <blockquote className="text-2xl text-white/80 mb-8 italic leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div>
                        <p className="font-semibold text-xl mb-2">{testimonial.name}</p>
                        <p className="text-white/60 text-lg mb-1">{testimonial.role}</p>
                        <p className="text-green-400 text-lg">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Controls */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-emerald-400' : 'bg-white/30'
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            {[
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
            ].map((faq, index) => (
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

      {/* Newsletter Section */}
      <section id="newsletter" className="py-32 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="glass-card p-12 rounded-2xl scale-in">
            <h2 className="text-3xl md:text-4xl font-thin mb-6">
              Stay Updated with <span className="gradient-text font-bold">Mexwaste</span>
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Get the latest insights on sustainable waste management, industry trends, and product updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-lg font-medium transition-all">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-white/50 mt-4">
              No spam. Unsubscribe anytime. Privacy policy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/10 py-16 bg-slate-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-3xl" role="img" aria-label="Plant">🌱</span>
                <span className="text-2xl font-bold gradient-text">Mexwaste</span>
              </div>
              <p className="text-white/60 mb-8 max-w-md text-lg leading-relaxed">
                Leading the revolution in sustainable waste management through innovative technology and environmental responsibility.
              </p>
              <div className="flex space-x-4">
                <button className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-lg">
                  📧
                </button>
                <button className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-lg">
                  📱
                </button>
                <button className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-lg">
                  🌐
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Solutions</h4>
              <div className="space-y-3 text-white/60">
                <div className="hover:text-white transition-colors cursor-pointer">Smart Sorting</div>
                <div className="hover:text-white transition-colors cursor-pointer">Route Optimization</div>
                <div className="hover:text-white transition-colors cursor-pointer">Analytics Dashboard</div>
                <div className="hover:text-white transition-colors cursor-pointer">Mobile Apps</div>
                <div className="hover:text-white transition-colors cursor-pointer">Blockchain Tracking</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <div className="space-y-3 text-white/60">
                <div className="hover:text-white transition-colors cursor-pointer">About Us</div>
                <div className="hover:text-white transition-colors cursor-pointer">Careers</div>
                <div className="hover:text-white transition-colors cursor-pointer">Partners</div>
                <div className="hover:text-white transition-colors cursor-pointer">News & Blog</div>
                <div className="hover:text-white transition-colors cursor-pointer">Sustainability</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Support</h4>
              <div className="space-y-3 text-white/60">
                <div className="hover:text-white transition-colors cursor-pointer">Help Center</div>
                <div className="hover:text-white transition-colors cursor-pointer">Documentation</div>
                <div className="hover:text-white transition-colors cursor-pointer">Contact Sales</div>
                <div className="hover:text-white transition-colors cursor-pointer">System Status</div>
                <div className="hover:text-white transition-colors cursor-pointer">Community Forum</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10">
            <p className="text-white/50 mb-4 md:mb-0 text-lg">
              © 2024 Mexwaste Solutions. All rights reserved.
            </p>
            <div className="flex space-x-8 text-white/50">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WasteManagementLanding;