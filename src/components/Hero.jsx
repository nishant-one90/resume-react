import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-white px-6">
      <div className="max-w-4xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-apple-dark mb-6">
            Nishant Anand
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xl md:text-3xl text-apple-subtext font-medium mb-10 max-w-2xl mx-auto">
            Senior Manager Business Development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-apple-blue text-white rounded-full font-medium text-lg hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="group px-8 py-3 bg-apple-gray text-apple-blue rounded-full font-medium text-lg hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2"
          >
            Download Resume
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-apple-subtext animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
