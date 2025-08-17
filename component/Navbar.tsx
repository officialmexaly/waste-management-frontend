'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Zap, Globe, Shield } from 'lucide-react'

const WorldClassNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [logoError, setLogoError] = useState(false)

  // Debug: Check if we can access the logo
  useEffect(() => {
    fetch('/logo.png')
      .then(response => {
        if (!response.ok) {
          console.error('Logo not found:', response.status);
          setLogoError(true);
        }
      })
      .catch(error => {
        console.error('Error loading logo:', error);
        setLogoError(true);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const navSections = [
    {
      label: 'Solutions',
      href: '#solutions',
      hasDropdown: true,
      items: [
        { 
          title: 'AI Waste Sorting', 
          description: 'Revolutionary machine learning for precise waste categorization',
          icon: <Zap className="w-5 h-5" />,
          href: '#ai-sorting',
          tag: 'New'
        },
        { 
          title: 'Smart Analytics', 
          description: 'Real-time insights and predictive waste management',
          icon: <Sparkles className="w-5 h-5" />,
          href: '#analytics'
        },
        { 
          title: 'Route Optimization', 
          description: 'AI-powered collection route efficiency',
          icon: <Globe className="w-5 h-5" />,
          href: '#routes'
        },
        { 
          title: 'Blockchain Tracking', 
          description: 'Transparent, immutable waste lifecycle records',
          icon: <Shield className="w-5 h-5" />,
          href: '#blockchain',
          tag: 'Beta'
        }
      ]
    },
    { label: 'Technology', href: '#technology' },
    { label: 'Impact', href: '#impact' },
    { 
      label: 'Company', 
      href: '#company',
      hasDropdown: true,
      items: [
        { title: 'About Us', description: 'Our mission to revolutionize waste management', href: '#about' },
        { title: 'Careers', description: 'Join our team of innovators', href: '#careers' },
        { title: 'News', description: 'Latest updates and announcements', href: '#news' },
        { title: 'Sustainability', description: 'Our commitment to the environment', href: '#sustainability' }
      ]
    }
  ]

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-glow {
          background: radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(16, 185, 129, 0.15),
            transparent 40%
          );
        }

        .glass-nav {
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-dropdown {
          backdrop-filter: blur(24px) saturate(180%);
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .hover-glow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-glow:hover {
          text-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
          transform: translateY(-1px);
        }

        .nav-item {
          position: relative;
          overflow: hidden;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(16, 185, 129, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .nav-item:hover::before {
          left: 100%;
        }

        .cta-button {
          background: linear-gradient(135deg, #10b981, #3b82f6);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInMobile {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .dropdown-enter {
          animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-enter {
          animation: slideInMobile 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .logo-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-container:hover {
          transform: scale(1.05) rotate(1deg);
        }

        .tag {
          background: linear-gradient(135deg, #10b981, #3b82f6);
          color: white;
          font-size: 0.625rem;
          font-weight: 600;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dropdown-item {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dropdown-item:hover {
          background: rgba(16, 185, 129, 0.1);
          transform: translateX(4px);
        }

        .mobile-nav-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-nav-item:hover {
          background: rgba(16, 185, 129, 0.1);
          transform: translateX(8px);
        }

        @media (max-width: 768px) {
          .nav-glow {
            display: none;
          }
        }
      `}</style>

      {/* Global glow effect that follows mouse */}
      {isHovering && (
        <div 
          className="fixed inset-0 nav-glow pointer-events-none z-40 transition-opacity duration-300"
          style={{ opacity: isHovering ? 1 : 0 }}
        />
      )}

      {/* Main Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
        <div
          className={`glass-nav relative transition-all duration-500 ease-out rounded-full border ${
            isScrolled
              ? 'py-4 px-10 bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/40 border-white/20 scale-95'
              : 'py-5 px-12 bg-black/60 backdrop-blur-lg shadow-xl shadow-black/30 border-white/10'
          }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-50"></div>
          
          {/* Main content */}
          <div className="relative flex items-center">
            {/* Logo */}
            <div className="logo-container flex items-center cursor-pointer z-10">
              <div className="flex items-center space-x-3">
                {!logoError ? (
                  <img
                    src="/logo.png"
                    alt="Mexwaste Logo"
                    width="32"
                    height="32"
                    className="rounded-lg"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="text-2xl font-bold gradient-text">
                    Mexaly
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center flex-1 justify-center">
              <div className="flex items-center space-x-12">
                {navSections.map((section, index) => (
                  <div key={index} className="relative">
                    {section.hasDropdown ? (
                      <button
                        onClick={() => handleDropdown(index)}
                        className="nav-item flex items-center space-x-1 text-white/90 hover:text-white hover-glow transition-colors duration-300 text-base font-normal"
                      >
                        <span>{section.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                      </button>
                    ) : (
                      <a
                        href={section.href}
                        className="nav-item text-white/90 hover:text-white hover-glow transition-colors duration-300 text-base font-normal"
                      >
                        {section.label}
                      </a>
                    )}

                    {/* Dropdown Menu */}
                    {section.hasDropdown && activeDropdown === index && (
                      <div className="dropdown-enter absolute top-full left-0 mt-2 w-80 glass-dropdown rounded-xl p-4 z-50">
                        <div className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <a
                              key={itemIndex}
                              href={item.href}
                              className="dropdown-item flex items-start space-x-3 p-3 rounded-lg group cursor-pointer"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex-shrink-0 mt-0.5 text-emerald-400">
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                                    {item.title}
                                  </h4>
                                  {item.tag && (
                                    <span className="tag">{item.tag}</span>
                                  )}
                                </div>
                                <p className="text-sm text-white/60 mt-1 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button - positioned absolutely to the right */}
            <div className="hidden md:block">
              <button className="cta-button px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full text-white text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-6 px-8 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex flex-col space-y-4">
              {navSections.map((section, index) => (
                <div key={index}>
                  {section.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdown(index)}
                        className="mobile-nav-item w-full flex items-center justify-between text-white/80 hover:text-white transition-colors duration-300 font-medium py-2"
                      >
                        <span>{section.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === index && (
                        <div className="mt-2 ml-4 space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <a
                              key={itemIndex}
                              href={item.href}
                              className="flex items-center space-x-3 p-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setActiveDropdown(null)
                              }}
                            >
                              <div className="text-emerald-400">
                                {item.icon}
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium">{item.title}</span>
                                  {item.tag && (
                                    <span className="tag">{item.tag}</span>
                                  )}
                                </div>
                                <p className="text-xs text-white/60 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={section.href}
                      className="mobile-nav-item block text-white/80 hover:text-white transition-colors duration-300 font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {section.label}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/25 text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Click outside to close dropdown */}
      {(activeDropdown !== null || isMobileMenuOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setActiveDropdown(null)
            setIsMobileMenuOpen(false)
          }}
        />
      )}
    </>
  )
}

export default WorldClassNavbar