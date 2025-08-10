'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

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
                    width={45}
                    height={15}
                    className="object-contain brightness-110"
                    priority
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-2xl font-bold gradient-text">Mexwaste</span>
                )}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-full hover:bg-white/10 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/login"
              className="hidden md:inline-flex relative px-6 py-2.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 group overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2.5 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 scale-0' : 'rotate-0 scale-100'
                  }`}
                >
                  <Menu size={24} />
                </span>
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-0 scale-100' : '-rotate-45 scale-0'
                  }`}
                >
                  <X size={24} />
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? 'opacity-100 transform translate-y-0 scale-100'
              : 'opacity-0 transform -translate-y-4 scale-95 pointer-events-none'
          }`}
        >
          <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/40 p-6">
            {/* Mobile glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-xl"></div>
            
            <div className="relative flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-3 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-xl hover:bg-white/10 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/login"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar