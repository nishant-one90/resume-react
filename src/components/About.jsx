import React from 'react';
import { useAnimeInView } from '../hooks/useAnimeInView';

const About = () => {
  const titleRef = useAnimeInView({
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600,
    easing: 'easeOutQuad'
  });

  const contentRef = useAnimeInView({
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600,
    delay: 200,
    easing: 'easeOutQuad'
  });

  return (
    <section className="py-24 px-6 bg-apple-gray">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            ref={titleRef}
            className="md:col-span-1 opacity-0"
          >
            <h2 className="text-4xl font-bold text-apple-dark sticky top-24">About</h2>
          </div>
          
          <div
            ref={contentRef}
            className="md:col-span-2 space-y-8 opacity-0"
          >
            <h3 className="text-2xl font-semibold text-apple-dark">
              Senior Business Development Manager | Creator Economy & Monetization Expert
            </h3>
            
            <p className="text-lg text-apple-subtext leading-relaxed">
              Results-oriented Senior Business Development Manager with over 10 years of experience scaling revenue and operations for leading social media and live-streaming platforms (Eloelo, Meta, ShareChat). Proven track record of driving 200% revenue growth and managing high-value agency ecosystems contributing to 80% of total business revenue.
            </p>

            <p className="text-lg text-apple-subtext leading-relaxed">
              Expert in virtual gifting models, creator acquisition, and cross-functional team leadership. I bridge the gap between content strategy and profitability, utilizing data-driven insights to optimize creator supply and maximize user retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
