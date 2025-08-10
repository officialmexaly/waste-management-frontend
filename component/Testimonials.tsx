'use client'

import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
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
      quote: "The environmental impact data is incredibly detailed. We've seen measurable improvements in carbon footprint across all client sites.",
      avatar: "👩‍🔬"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
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
  );
};

export default Testimonials;