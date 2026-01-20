import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const timelineData = [
  {
    role: "Eloelo – Senior Manager",
    period: "Apr 2024 – Present | Bengaluru",
    items: [
      "Driving MoM & QoQ revenue via virtual gifting",
      "Managing top agencies contributing 80% revenue",
      "Optimized commission & creator earning policies",
      "Improved viewer-to-streamer ratios"
    ]
  },
  {
    role: "Meta – Product Content Operations",
    period: "Aug 2023 – Feb 2024 | Bengaluru",
    items: [
      "Optimized Instagram Reels content",
      "Policy & privacy decision maker",
      "Pilot project on Threads feed",
      "Tools: Salesforce, Freshdesk CMS"
    ]
  },
  {
    role: "Career Break",
    period: "Mar 2023 – Jul 2023",
    desc: "Layoff / Position eliminated"
  },
  {
    role: "ShareChat – Associate Manager",
    period: "May 2021 – Feb 2023 | Mumbai",
    items: [
      "45% interaction growth via new live model",
      "Managed 60+ agencies",
      "Revenue scaled 200% (₹2Cr GMV/month)",
      "Led team of 6 professionals"
    ]
  },
  {
    role: "MX Player – Manager Live Ops",
    period: "May 2021 – Mar 2022",
    items: [
      "DAU performance analysis",
      "Product feedback & execution"
    ]
  },
  {
    role: "LVE Innovations – BDM",
    period: "Sep 2020 – May 2021",
    items: [
      "Live audio app operations",
      "Revenue & agency management"
    ]
  },
  {
    role: "Douyu TV – India BDM",
    period: "Nov 2018 – May 2020",
    items: [
      "Live streaming & gaming ecosystem",
      "Business & operations leadership"
    ]
  },
  {
    role: "ICONS – Business Executive",
    period: "May 2016 – Aug 2018",
    items: [
      "Media sales & client servicing"
    ]
  },
  {
    role: "OYO Rooms – Demand Marketing",
    period: "Mar 2015 – Apr 2016"
  },
  {
    role: "IBM – IT Practitioner",
    period: "Jun 2011 – Jul 2013"
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
      <div 
        ref={itemRef} 
        className="timeline-content"
        style={{ opacity: 0 }}
      >
        <h3>{data.role}</h3>
        <small>{data.period}</small>
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
