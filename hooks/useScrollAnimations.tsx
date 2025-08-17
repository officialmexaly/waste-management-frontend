"use client"
import React, { useState, useEffect, useRef } from 'react';

const ScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll tracking
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

  // Intersection Observer for scroll animations
  useEffect(() => {
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

  // Parallax calculations
  const parallaxOffset = scrollY * 0.5;
  const heroOpacity = Math.max(1 - scrollY / 600, 0);
  const heroScale = Math.max(1 - scrollY / 2000, 0.8);

  return (
    <>
      {/* CSS Animations */}
      <style jsx>{`
        /* Keyframe Animations */
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

        /* Animation Classes */
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
      `}</style>

      {/* Example usage of the scroll animations */}
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section with Parallax */}
        <section 
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            opacity: heroOpacity,
          }}
        >
          <div 
            className="text-center fade-in"
            style={{ transform: `scale(${heroScale})` }}
          >
            <h1 className="text-6xl font-bold mb-4">Scroll Animation Demo</h1>
            <p className="text-xl">Scroll down to see animations in action</p>
          </div>
        </section>

        {/* Content sections with different animations */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 slide-up">Fade In Up Animation</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item, index) => (
                <div 
                  key={item}
                  className="bg-white/10 p-6 rounded-lg scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-xl font-semibold mb-4">Scale In {item}</h3>
                  <p>This card scales in when it enters the viewport.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="slide-left">
                <h2 className="text-3xl font-bold mb-6">Slide from Left</h2>
                <p className="text-lg">This content slides in from the left when it becomes visible.</p>
              </div>
              <div className="slide-right">
                <h2 className="text-3xl font-bold mb-6">Slide from Right</h2>
                <p className="text-lg">This content slides in from the right when it becomes visible.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 zoom-in">Zoom In Animation</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item, index) => (
                <div 
                  key={item}
                  className="bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-lg rotate-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold">Item {item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-6">Scroll Info</h2>
              <p className="text-lg">Scroll Position: {scrollY}px</p>
              <p className="text-lg">Direction: {scrollDirection}</p>
              <p className="text-lg">Hero Opacity: {heroOpacity.toFixed(2)}</p>
              <p className="text-lg">Hero Scale: {heroScale.toFixed(2)}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScrollAnimations;