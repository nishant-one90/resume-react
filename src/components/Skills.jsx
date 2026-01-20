import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const skills = [
  "Revenue Growth", 
  "Agency Management", 
  "Creator Economy", 
  "Product Operations", 
  "Market Strategy", 
  "Data Analysis"
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime.timeline({
              easing: 'easeOutExpo'
            })
            .add({
              targets: sectionRef.current.querySelector('.title'),
              opacity: [0, 1],
              translateX: [-50, 0],
              duration: 1000
            })
            .add({
              targets: sectionRef.current.querySelectorAll('.box'),
              opacity: [0, 1],
              translateY: [50, 0],
              delay: anime.stagger(100),
              duration: 800
            }, '-=800');
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef}>
      <h2 className="title" style={{ opacity: 0 }}>Expertise</h2>
      <div className="grid">
        {skills.map((skill, index) => (
          <div key={index} className="box" style={{ opacity: 0 }}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
