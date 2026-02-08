import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, ChevronDown } from 'lucide-react';

const experiences = [
  {
    company: "Eloelo",
    role: "Senior Manager",
    period: "04/2024 - Present",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Revenue Growth & Monetization:</strong> Spearheading revenue generation through the virtual gifting model, ensuring consistent month-over-month and quarterly revenue growth by optimizing creator supply.</li>
        <li><strong>Key Account Management:</strong> Directly managing top talent resource agencies contributing 80% of total business revenue, fostering strong relationships to maximize profitability.</li>
        <li><strong>Business Strategy & Market Adaptation:</strong> Continuously refining agency contracts, creator earning policies, and commission structures based on competitive analysis and market trends to drive engagement and platform retention.</li>
        <li><strong>Performance Metrics & Optimization:</strong> Ensuring optimal viewer-to-streamer ratios by implementing effective creator acquisition and retention strategies, enhancing overall user engagement.</li>
      </ul>
    )
  },
  {
    company: "Meta",
    role: "Product Content Operations (CW)",
    period: "08/2023 - 02/2024",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-apple-dark mb-2">Product Content Operations:</h4>
          <p>As a seasoned content strategist, I spearheaded content optimization initiatives for Instagram Reels, resulting in a significant boost in engagement and follower growth. I played a pivotal role as a decision-maker in upholding Meta's (Instagram's) privacy and policy guidelines, ensuring content compliance while maintaining user safety. Leveraging data analysis, I developed a deep understanding of content format types, continually refining and enhancing content production for short video formats. By incorporating feedback loops, I ensured the accuracy of content suggestions, reflecting a strong commitment to user preferences and satisfaction.</p>
        </div>
        <div>
          <h4 className="font-semibold text-apple-dark mb-2">Creator Management and Optimization:</h4>
          <p>In the realm of creator management, I successfully managed a pilot project for content optimization on Instagram Threads feed, driving increased visibility and interaction for users. Through trend-spotting initiatives, I identified trending audio, hook steps, and other formats on Instagram Reels, ensuring content relevance and resonance with the target audience. Utilizing data-driven insights and best practices, I provided strategic guidance to creators, empowering them to maximize the impact of their content and achieve their goals effectively. Furthermore, I proficiently utilized tools such as Freshdesk CMS, Salesforce, and SRT Internal CMS tool to streamline workflows and optimize internal content management systems, demonstrating proficiency in leveraging technology to enhance operational efficiency.</p>
        </div>
        <p>This encapsulates a glimpse of my expertise and accomplishments in product content operations and creator management. With a proven ability to drive results and a passion for innovation, I am poised to make significant contributions to any organization.</p>
      </div>
    )
  },
  {
    company: "Career Break",
    role: "Layoff/position eliminated",
    period: "03/2023 - 07/2023",
    description: "Bengaluru, Karnataka, India"
  },
  {
    company: "ShareChat",
    role: "Associate Manager",
    period: "05/2021 - 02/2023",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-apple-dark mb-2">Business Development</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pilot tested and rolled out a new live streaming process (fixed and target model) initiative leading to an increase of 45% in daily interaction rate.</li>
            <li>We maximized user engagement and acquisition through events and activities with Live streamers, culminating in 500+ active users.</li>
            <li>Optimized overall operations using data-driven approaches to streamline the end-to-end processes, trimming turnaround time by 20%.</li>
            <li>Delivered comprehensive end-to-end streaming service for 600+ creators, increased engagement by 20%. Developed and implemented training and grooming sessions, increased performance by 15%</li>
            <li>Collaborates with other back-office team members to ensure the smooth execution of processes</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-apple-dark mb-2">Operations & Agency management</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Created an SOP for agency hiring, payments, creator acquisition and elimination</li>
            <li>Managed 60+ Agencies, leading daily workflow optimization to reduce job turnaround time by 15% and handling a team of 6 professionals to manage an agency.</li>
            <li>Mapped out process redundancies to streamline agency operations, reducing operational activities. Developed tailored approaches to training team alignment across 3 departments</li>
            <li>Conducted in-depth analyses of agency effectiveness & regulatory compliance of leading 30+ agencies</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-apple-dark mb-2">Revenue growth</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Directed the profit optimisation program to increase revenue by 200%, resulting in a total GMV of 2 cr p.m We analyzed user demand & identified capital growth investments to generate revenue.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    company: "MX Player",
    role: "Manager-Live Operations",
    period: "05/2021 - 03/2022",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Live Content Operations | MX Takatak | MX Live</li>
        <li>External operations</li>
        <li>Live streaming Performance Analyze (DAU)</li>
        <li>Problem-solving</li>
        <li>Effective execution</li>
        <li>Product/platform feedback</li>
      </ul>
    )
  },
  {
    company: "LVE Innovations",
    role: "Business Development Manager",
    period: "09/2020 - 05/2021",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Live Audio Chat Application</li>
        <li>Process Operation</li>
        <li>Business Development</li>
        <li>Revenue Targets</li>
        <li>Agency Managed</li>
      </ul>
    )
  },
  {
    company: "斗鱼TV",
    role: "Business Development Manager India",
    period: "11/2018 - 05/2020",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Douyo HK Ltd (www.nonolive.com)</li>
        <li>Live | Video | Games</li>
        <li>Operation & Business Development</li>
        <li>(Live Streaming and Video making App)</li>
      </ul>
    )
  },
  {
    company: "Interactive Communication Services (I) Pvt. Ltd. (ICONS)",
    role: "Business Development Executive",
    period: "05/2016 - 08/2018",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Media Sales, Client Servicing & Online sales</li>
      </ul>
    )
  },
  {
    company: "OYO Rooms",
    role: "Demand Marketing",
    period: "03/2015 - 04/2016",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Offline Marketing (ATL & BTL)</li>
      </ul>
    )
  },
  {
    company: "PepsiCo",
    role: "TT Cluster Correction & Outlet Mapping (Internship)",
    period: "05/2014 - 07/2014",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Internship channel sales (Real Juices)</li>
      </ul>
    )
  },
  {
    company: "IBM Global Process Services",
    role: "IT practitioner",
    period: "06/2011 - 07/2013",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Lotus, Data Management & ID Admin</li>
        <li>IBM Tools Support</li>
      </ul>
    )
  }
];

const education = [
  {
    school: "IILM University, Gurugram",
    degree: "Degree",
    period: "2013 - 2015",
    details: "Marketing & Sales"
  },
  {
    school: "NSHM College of Management and Technology",
    degree: "Degree",
    period: "2009 - 2011",
    details: "Bachelor of Computer Application"
  }
];

const TimelineItem = ({ data, type, index }) => {
  const [isOpen, setIsOpen] = useState(false);
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
          <motion.div 
            layout
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-apple-gray/50 cursor-pointer relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div>
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
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-apple-subtext mt-2"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-apple-subtext leading-relaxed text-sm pt-2 border-t border-apple-gray/30">
                    {isWork ? data.description : data.details}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
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
