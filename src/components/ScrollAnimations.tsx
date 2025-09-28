import { useEffect, useRef } from 'react';

const ScrollAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
      observerRef.current?.observe(section);
    });

    // Observe cards and components within sections
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((element, index) => {
      element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      (element as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
      observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    // Add staggered animation delays to cards
    const cards = document.querySelectorAll('[class*="Card"], .terminal-window');
    cards.forEach((card, index) => {
      card.classList.add('animate-on-scroll');
      (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return null;
};

export default ScrollAnimations;