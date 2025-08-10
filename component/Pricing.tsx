'use client'

import React from 'react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

const Pricing: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
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

  return (
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
  );
};

export default Pricing;