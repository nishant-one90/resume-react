import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useAnimeInView } from '../hooks/useAnimeInView';
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
  const titleRef = useAnimeInView({
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600,
    easing: 'easeOutQuad'
  });
  
  const gridRef = useRef(null);

  useEffect(() => {
    const element = gridRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        anime({
          targets: element.children,
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(100),
          easing: 'easeOutQuad',
          duration: 600
        });
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="opacity-0">
          <h2 className="text-4xl font-bold text-apple-dark text-center mb-16">
            Expertise
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-apple-gray p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 hover:scale-105 opacity-0"
            >
              <skill.icon className="w-10 h-10 text-apple-text mb-4" strokeWidth={1.5} />
              <span className="text-lg font-medium text-apple-text">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
