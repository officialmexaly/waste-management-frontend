'use client'

import React from 'react';

const GlobalStyles: React.FC = () => {
  return (
    <style jsx global>{`
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
  );
};

export default GlobalStyles;