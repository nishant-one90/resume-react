import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Eloelo",
    role: "Senior Manager",
    period: "April 2024 – Present",
    description: "Spearheading revenue generation through virtual gifting models and optimizing creator supply. Managing top talent agencies contributing 80% of total revenue."
  },
  {
    company: "Meta",
    role: "Product Content Operations (CW)",
    period: "August 2023 – February 2024",
    description: "Spearheaded content optimization for Instagram Reels, boosting engagement. Managed pilot projects for Threads feed optimization."
  },
  {
    company: "ShareChat",
    role: "Associate Manager",
    period: "May 2021 – February 2023",
    description: "Directed profit optimization programs increasing revenue by 200%. Managed 60+ agencies and streamlined operations."
  },
  {
    company: "MX Player",
    role: "Manager-Live Operations",
    period: "May 2021 – March 2022",
    description: "Managed live content operations for MX Takatak and MX Live. Analyzed live streaming performance metrics."
  },
  {
    company: "Douyu TV",
    role: "Business Development Manager India",
    period: "November 2018 – May 2020",
    description: "Led operations and business development for live streaming and gaming verticals."
  }
];

const education = [
  {
    school: "IILM University",
    degree: "Marketing & Sales",
    period: "2013 – 2015",
    details: "GPA 7.2"
  },
  {
    school: "NSHM College",
    degree: "BCA",
    period: "2009 – 2011",
    details: ""
  }
];

const TimelineItem = ({ data, type, index }) => {
  const isWork = type === 'work';
  const Icon = isWork ? Briefcase : GraduationCap;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 md:pl-0 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-apple-gray transform md:-translate-x-1/2"></div>
      
      {/* Icon Dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-white border-2 border-apple-gray flex items-center justify-center transform -translate-x-1/2 md:-translate-x-1/2 z-10 group-hover:border-apple-blue group-hover:scale-110 transition-all duration-300">
        <Icon className="w-4 h-4 text-apple-subtext group-hover:text-apple-blue" />
      </div>

      <div className={`md:flex justify-between items-start w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="hidden md:block w-5/12"></div>
        
        <div className="md:w-5/12 mb-10 pl-6 md:pl-0">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-apple-gray/50">
            <span className="inline-flex items-center gap-2 text-sm text-apple-blue font-medium mb-2 bg-blue-50 px-3 py-1 rounded-full">
              <Calendar className="w-3 h-3" />
              {data.period}
            </span>
            <h3 className="text-xl font-bold text-apple-dark mt-2">
              {isWork ? data.role : data.degree}
            </h3>
            <div className="text-lg font-medium text-apple-text mt-1">
              {isWork ? data.company : data.school}
            </div>
            <p className="text-apple-subtext mt-3 leading-relaxed text-sm">
              {isWork ? data.description : data.details}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-apple-dark text-center mb-16"
        >
          Journey
        </motion.h2>

        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem key={`work-${index}`} data={exp} type="work" index={index} />
          ))}
          
          <div className="my-12 flex justify-center items-center">
             <div className="px-4 py-2 bg-apple-gray rounded-full text-apple-subtext text-sm font-medium z-10">Education</div>
          </div>

          {education.map((edu, index) => (
            <TimelineItem key={`edu-${index}`} data={edu} type="education" index={index + experiences.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
