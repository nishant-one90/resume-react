import { useEffect, useRef } from 'react';
import anime from 'animejs';

export const useAnimeInView = (animationOptions = {}, observerOptions = { threshold: 0.1, triggerOnce: true }) => {
  const ref = useRef(null);
  // Store animation instance if we need to control it later (pause, restart)
  const animationRef = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animationRef.current = anime({
          targets: element,
          ...animationOptions
        });
        
        if (observerOptions.triggerOnce) {
          observer.unobserve(element);
        }
      } else {
        // Optional: Reset logic could go here if triggerOnce is false
      }
    }, { threshold: observerOptions.threshold });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [JSON.stringify(animationOptions), observerOptions.threshold, observerOptions.triggerOnce]);

  return ref;
};
