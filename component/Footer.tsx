'use client'

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    solutions: [
      "Smart Sorting",
      "Route Optimization", 
      "Analytics Dashboard",
      "Mobile Apps",
      "Blockchain Tracking"
    ],
    company: [
      "About Us",
      "Careers",
      "Partners",
      "News & Blog",
      "Sustainability"
    ],
    support: [
      "Help Center",
      "Documentation",
      "Contact Sales",
      "System Status",
      "Community Forum"
    ]
  };

  const socialButtons = [
    { emoji: "📧", label: "Email" },
    { emoji: "📱", label: "Twitter" },
    { emoji: "🌐", label: "LinkedIn" }
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service", 
    "Cookie Policy"
  ];

  return (
    <footer className="relative z-20 border-t border-white/10 py-16 bg-slate-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl" role="img" aria-label="Plant">🌱</span>
              <span className="text-2xl font-bold gradient-text">Mexwaste</span>
            </div>
            <p className="text-white/60 mb-8 max-w-md text-lg leading-relaxed">
              Leading the revolution in sustainable waste management through innovative technology and environmental responsibility.
            </p>
            <div className="flex space-x-4">
              {socialButtons.map((social, index) => (
                <button 
                  key={index}
                  className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-lg"
                  aria-label={social.label}
                >
                  {social.emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Solutions</h4>
            <div className="space-y-3 text-white/60">
              {footerSections.solutions.map((item, index) => (
                <div key={index} className="hover:text-white transition-colors cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <div className="space-y-3 text-white/60">
              {footerSections.company.map((item, index) => (
                <div key={index} className="hover:text-white transition-colors cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Support</h4>
            <div className="space-y-3 text-white/60">
              {footerSections.support.map((item, index) => (
                <div key={index} className="hover:text-white transition-colors cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10">
          <p className="text-white/50 mb-4 md:mb-0 text-lg">
            © {currentYear} Mexwaste Solutions. All rights reserved.
          </p>
          <div className="flex space-x-8 text-white/50">
            {legalLinks.map((link, index) => (
              <button key={index} className="hover:text-white transition-colors">
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;