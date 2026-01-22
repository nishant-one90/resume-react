import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const timelineData = [
  {
    company: "Eloelo",
    role: "Senior Manager",
    period: "April 2024 – Present",
    location: "Bengaluru, Karnataka, India",
    items: [
      "Revenue Growth & Monetization: Spearheading revenue generation through the virtual gifting model, ensuring consistent month-over-month and quarterly revenue growth by optimizing creator supply.",
      "Key Account Management: Directly managing top talent resource agencies contributing 80% of total business revenue, fostering strong relationships to maximize profitability.",
      "Business Strategy & Market Adaptation: Continuously refining agency contracts, creator earning policies, and commission structures based on competitive analysis and market trends to drive engagement and platform retention.",
      "Performance Metrics & Optimization: Ensuring optimal viewer-to-streamer ratios by implementing effective creator acquisition and retention strategies, enhancing overall user engagement."
    ]
  },
  {
    company: "Meta",
    role: "Product Content Operations (CW)",
    period: "August 2023 – February 2024",
    location: "Bengaluru, Karnataka, India",
    items: [
      "Product Content Operations: As a seasoned content strategist, I spearheaded content optimization initiatives for Instagram Reels, resulting in a significant boost in engagement and follower growth. I played a pivotal role as a decision-maker in upholding Meta's (Instagram's) privacy and policy guidelines, ensuring content compliance while maintaining user safety. Leveraging data analysis, I developed a deep understanding of content format types, continually refining and enhancing content production for short video formats. By incorporating feedback loops, I ensured the accuracy of content suggestions, reflecting a strong commitment to user preferences and satisfaction.",
      "Creator Management and Optimization: In the realm of creator management, I successfully managed a pilot project for content optimization on Instagram Threads feed, driving increased visibility and interaction for users. Through trend-spotting initiatives, I identified trending audio, hook steps, and other formats on Instagram Reels, ensuring content relevance and resonance with the target audience. Utilizing data-driven insights and best practices, I provided strategic guidance to creators, empowering them to maximize the impact of their content and achieve their goals effectively. Furthermore, I proficiently utilized tools such as Freshdesk CMS, Salesforce, and SRT Internal CMS tool to streamline workflows and optimize internal content management systems, demonstrating proficiency in leveraging technology to enhance operational efficiency."
    ]
  },
  {
    company: "Career Break",
    role: "",
    period: "March 2023 – July 2023",
    location: "Bengaluru, Karnataka, India",
    desc: "Layoff/position eliminated"
  },
  {
    company: "ShareChat",
    role: "Associate Manager",
    period: "May 2021 – February 2023",
    location: "Mumbai, Maharashtra, India",
    items: [
      "Business Development: Pilot tested and rolled out a new live streaming process (fixed and target model) initiative leading to an increase of 45% in daily interaction rate.",
      "We maximized user engagement and acquisition through events and activities with Live streamers, culminating in 500+ active users.",
      "Optimized overall operations using data-driven approaches to streamline the end-to-end processes, trimming turnaround time by 20%.",
      "Delivered comprehensive end-to-end streaming service for 600+ creators, increased engagement by 20%. Developed and implemented training and grooming sessions, increased performance by 15%",
      "Collaborates with other back-office team members to ensure the smooth execution of processes",
      "Operations & Agency management: Created an SOP for agency hiring, payments, creator acquisition and elimination",
      "Managed 60+ Agencies, leading daily workflow optimization to reduce job turnaround time by 15% and handling a team of 6 professionals to manage an agency.",
      "Mapped out process redundancies to streamline agency operations, reducing operational activities. Developed tailored approaches to training team alignment across 3 departments",
      "Conducted in-depth analyses of agency effectiveness & regulatory compliance of leading 30+ agencies",
      "Revenue growth: Directed the profit optimisation program to increase revenue by 200%, resulting in a total GMV of 2 cr p.m We analyzed user demand & identified capital growth investments to generate revenue."
    ]
  },
  {
    company: "MX Player",
    role: "Manager-Live Operations",
    period: "May 2021 – March 2022",
    location: "Bengaluru, KA, India",
    items: [
      "Live Content Operations | MX Takatak | MX Live",
      "External operations",
      "Live streaming Performance Analyze (DAU)",
      "Problem-solving",
      "Effective execution",
      "Product/platform feedback"
    ]
  },
  {
    company: "LVE Innovations",
    role: "Business Development Manager",
    period: "September 2020 – May 2021",
    location: "Gurgaon, Haryana, India",
    items: [
      "Live Audio Chat Application",
      "Process Operation",
      "Business Development",
      "Revenue Targets",
      "Agency Managed"
    ]
  },
  {
    company: "Douyu TV",
    role: "Business Development Manager India",
    period: "November 2018 – May 2020",
    location: "Gurgaon, India",
    items: [
      "Douyo HK Ltd (www.nonolive.com)",
      "Live | Video | Games",
      "Operation & Business Development",
      "(Live Streaming and Video making App)"
    ]
  },
  {
    company: "ICONS",
    role: "Business Development Executive",
    period: "May 2016 – August 2018",
    location: "Gurgaon, Haryana, India",
    items: [
      "Media Sales, Client Servicing & Online sales"
    ]
  },
  {
    company: "OYO Rooms",
    role: "Demand Marketing",
    period: "March 2015 – April 2016",
    location: "Gurgaon, India",
    items: [
      "Offline Marketing (ATL & BTL)"
    ]
  },
  {
    company: "PepsiCo",
    role: "Internship",
    period: "May 2014 – July 2014",
    location: "Gurgaon, India",
    items: [
      "TT Cluster Correction & Outlet Mapping",
      "Internship channel sales (Real Juices)"
    ]
  },
  {
    company: "IILM University",
    role: "Marketing & Sales",
    period: "2013 – 2015",
    location: "",
    desc: "PGDM / MBA | GPA 7.2"
  },
  {
    company: "IBM Global Process Services",
    role: "IT Practitioner",
    period: "June 2011 – July 2013",
    location: "Gurgaon, Haryana, India",
    items: [
      "Lotus, Data Management & ID Admin",
      "IBM Tools Support"
    ]
  },
  {
    company: "NSHM College",
    role: "BCA",
    period: "2009 – 2011",
    location: "",
    desc: "Bachelor of Computer Applications"
  }
];

const TimelineItem = ({ data, index }) => {
  const itemRef = useRef(null);
  const isRight = index % 2 !== 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: itemRef.current,
              opacity: [0, 1],
              translateY: [50, 0],
              easing: 'easeOutCubic',
              duration: 1000,
              delay: 200
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
  }, []);

  return (
    <div className={`timeline-row ${isRight ? 'right' : ''}`}>
      <div className="timeline-spacer"></div>
      <div className="timeline-dot"></div>
      <div className="timeline-date-desktop">
        {data.period}
      </div>
      <div 
        ref={itemRef} 
        className="timeline-content"
        style={{ opacity: 0 }}
      >
        <h3>
          <span style={{ color: 'var(--accent)' }}>{data.company}</span>
          {data.role && <span> – {data.role}</span>}
        </h3>
        <small className="timeline-date-mobile" style={{ 
          color: '#ff9500', 
          fontWeight: 700, 
          fontSize: '14px',
          display: 'block',
          marginBottom: '4px'
        }}>
          {data.period}
        </small>
        {data.location && (
          <span style={{ 
            display: 'block', 
            fontSize: '13px', 
            color: 'var(--text-secondary)',
            marginBottom: '16px' 
          }}>
            {data.location}
          </span>
        )}
        
        {data.items && (
          <ul>
            {data.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
        {data.desc && <p style={{ fontSize: '17px', color: 'var(--text-secondary)' }}>{data.desc}</p>}
      </div>
    </div>
  );
};

const Timeline = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: titleRef.current,
              opacity: [0, 1],
              translateY: [-20, 0],
              easing: 'easeOutExpo',
              duration: 1000
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
  }, []);

  return (
    <section>
      <h2 className="title" ref={titleRef} style={{ opacity: 0 }}>Career Journey</h2>
      <div className="timeline-container">
        {timelineData.map((data, index) => (
          <TimelineItem key={index} data={data} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
