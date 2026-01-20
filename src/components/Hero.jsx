import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1200
    });

    tl.add({
      targets: titleRef.current,
      translateY: [100, 0],
      opacity: [0, 1],
      delay: 300
    })
    .add({
      targets: subtitleRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
    }, '-=800')
    .add({
      targets: '.hero-link',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100)
    }, '-=800');
  }, []);

  return (
    <section className="hero">
      <h1 ref={titleRef} style={{ opacity: 0 }}>Nishant Anand</h1>
      <div ref={subtitleRef} style={{ opacity: 0, textAlign: 'center' }}>
        <p style={{ fontSize: 'clamp(20px, 4vw, 28px)', color: 'var(--text-primary)', marginTop: '20px', fontWeight: 600 }}>Business Development Manager</p>
        <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: 'var(--text-secondary)', marginTop: '8px' }}>Gurugram, Haryana</p>
      </div>
      
      <div className="links" ref={linksRef} style={{ marginTop: '40px', opacity: 0 }}>
        <a href="mailto:y2knishant@gmail.com" className="hero-link" style={{ margin: '0 15px', fontWeight: 500, display: 'inline-block', fontSize: '18px' }}>Email</a>
        <a href="https://linkedin.com/in/y2knishant" target="_blank" className="hero-link" style={{ margin: '0 15px', fontWeight: 500, display: 'inline-block', fontSize: '18px' }}>LinkedIn</a>
      </div>
    </section>
  );
};

export default Hero;
