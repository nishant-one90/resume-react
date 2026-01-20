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
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: itemRef.current,
              opacity: [0, 1],
              translateY: [100, 0],
              easing: 'easeOutElastic(1, .6)',
              duration: 1500,
              delay: 100
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef} 
      className={`timeline-card ${isLeft ? 'left' : 'right'}`}
      style={{ opacity: 0 }} // Initial state hidden for animation
    >
      <h3>{data.role}</h3>
      <small style={{ display: 'block', marginBottom: '10px', color: '#666' }}>{data.period}</small>
      {data.items && (
        <ul style={{ paddingLeft: '20px' }}>
          {data.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {data.desc && <p>{data.desc}</p>}
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
              translateX: [-50, 0],
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
      <h2 className="title" ref={titleRef} style={{ opacity: 0 }}>Career Timeline</h2>
      <div className="timeline">
        {timelineData.map((data, index) => (
          <TimelineItem key={index} data={data} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
