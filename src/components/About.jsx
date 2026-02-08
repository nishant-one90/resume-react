import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 px-6 bg-apple-gray">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h2 className="text-4xl font-bold text-apple-dark sticky top-24">About</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
