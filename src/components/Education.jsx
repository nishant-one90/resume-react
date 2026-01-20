import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Education = () => {
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
      <h2 className="title" style={{ opacity: 0 }}>Education</h2>
      
      <div className="grid">
        <div className="box education-box" style={{ opacity: 0 }}>
          <h3>IILM University</h3>
          <p>Marketing & Sales</p>
          <small>2013 – 2015 | GPA 7.2</small>
        </div>
        
        <div className="box education-box" style={{ opacity: 0 }}>
          <h3>NSHM College</h3>
          <p>BCA</p>
          <small>2009 – 2011</small>
        </div>
      </div>
    </section>
  );
};

export default Education;
