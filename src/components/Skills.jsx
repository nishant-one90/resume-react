import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Video, Settings, Target, BarChart3 } from 'lucide-react';

const skills = [
  { name: "Revenue Growth", icon: TrendingUp },
  { name: "Agency Management", icon: Users },
  { name: "Creator Economy", icon: Video },
  { name: "Product Operations", icon: Settings },
  { name: "Market Strategy", icon: Target },
  { name: "Data Analysis", icon: BarChart3 }
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-apple-dark text-center mb-16"
        >
          Expertise
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-apple-gray p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <skill.icon className="w-10 h-10 text-apple-text mb-4" strokeWidth={1.5} />
              <span className="text-lg font-medium text-apple-text">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
