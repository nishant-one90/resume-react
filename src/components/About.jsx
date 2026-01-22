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
      <div style={{ maxWidth: '800px' }}>
        <h3 style={{ fontSize: '28px', color: 'var(--text-primary)', marginBottom: '24px', textAlign: 'center' }}>
          Senior Business Development Manager | Creator Economy & Monetization Expert
        </h3>
        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '40px' }}>
          Results-oriented Senior Business Development Manager with over 10 years of experience scaling revenue and operations for leading social media and live-streaming platforms (Eloelo, Meta, ShareChat). Proven track record of driving 200% revenue growth and managing high-value agency ecosystems contributing to 80% of total business revenue. Expert in virtual gifting models, creator acquisition, and cross-functional team leadership. I bridge the gap between content strategy and profitability, utilizing data-driven insights to optimize creator supply and maximize user retention.
        </p>
        
        <h4 style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '20px' }}>Core Responsibilities:</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '20px', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--accent)' }}>Driving the Bottom Line:</strong> I am responsible for the health and growth of our virtual gifting economy. By optimizing how we acquire and incentivize creators, I have ensured consistent revenue growth quarter-over-quarter.
          </li>
          <li style={{ marginBottom: '20px', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--accent)' }}>Managing Critical Partners:</strong> I directly manage the portfolio of agencies that generates 80% of our revenue. This involves high-level negotiation, relationship nurturing, and ensuring our partners are profitable and engaged.
          </li>
          <li style={{ marginBottom: '20px', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--accent)' }}>Leading the Team:</strong> I manage a team of business development professionals, guiding them through the full lifecycle of agency onboarding, creator grooming, and performance tracking.
          </li>
          <li style={{ marginBottom: '20px', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--accent)' }}>Strategic Agility:</strong> The creator economy moves fast. I continuously refine our earning policies and commission structures to stay competitive, ensuring we attract the best talent in the market while maintaining healthy margins for the company.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
