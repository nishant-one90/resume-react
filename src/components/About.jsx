import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: sectionRef.current,
              opacity: [0, 1],
              translateY: [50, 0],
              easing: 'easeOutExpo',
              duration: 1200
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} style={{ opacity: 0 }}>
      <h2 className="title">About</h2>
      <p style={{ maxWidth: '800px', fontSize: '24px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
        With a proven track record in business development and revenue growth, I specialize in understanding client needs and devising custom strategies to drive revenue and enhance user satisfaction. I collaborate with cross-functional teams to create impactful marketing campaigns and consistently deliver strong revenue results.
      </p>
    </section>
  );
};

export default About;
