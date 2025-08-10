'use client'

import { useEffect, useState } from 'react';

export const useScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

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
    // Enhanced Intersection Observer for scroll animations - exactly like your original
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

  // Calculate parallax and opacity values - same as your original
  const parallaxOffset = scrollY * 0.5;
  const heroOpacity = Math.max(1 - scrollY / 600, 0);
  const heroScale = Math.max(1 - scrollY / 2000, 0.8);

  return {
    scrollY,
    scrollDirection,
    parallaxOffset,
    heroOpacity,
    heroScale
  };
};