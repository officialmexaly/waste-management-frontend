'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Leaf } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#blog', label: 'Blog' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

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
          color: transparent;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
        <div
          className={`relative transition-all duration-500 ease-out rounded-full border ${
            isScrolled
              ? 'py-3 px-8 bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/40 border-white/20 scale-95'
              : 'py-4 px-8 bg-black/60 backdrop-blur-lg shadow-xl shadow-black/30 border-white/10'
          }`}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-50"></div>
          
          {/* Main content */}
          <div className="relative flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center hover:scale-110 transition-all duration-300 z-10"
            >
              <div className="relative">
                {!logoError ? (
                  <Image
                    src="/logo.png"
                    alt="Mexwaste Logo"
                    width={40}
                    height={40}
                    className="rounded-lg"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
              <span className="ml-3 text-xl font-bold gradient-text">
                Mexwaste
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* CTA Button */}
              <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/25">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium py-2"
                >
                  {link.label}
                </Link>
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
    </>
  )
}

export default Navbar