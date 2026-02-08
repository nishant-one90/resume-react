import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useAnimeInView } from '../hooks/useAnimeInView';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Market Expansion Strategy",
    description: "Spearheaded the entry into tier-2 and tier-3 markets, increasing user base by 40%.",
    tags: ["Strategy", "Growth Hacking", "Market Analysis"],
    link: "#"
  },
  {
    title: "Agency Partnership Program",
    description: "Developed a framework for onboarding 50+ agencies, contributing to 80% of revenue.",
    tags: ["Partnerships", "B2B", "Revenue Optimization"],
    link: "#"
  },
  {
    title: "Creator Monetization Framework",
    description: "Designed and implemented virtual gifting models to boost creator earnings.",
    tags: ["Product Operations", "Monetization", "Data Analytics"],
    link: "#"
  }
];

const Projects = () => {
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
          translateY: [30, 0],
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
    <section id="projects" className="py-24 px-6 bg-apple-gray">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="opacity-0">
          <h2 className="text-4xl font-bold text-apple-dark text-center mb-16">
            Key Projects
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:scale-102 opacity-0"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-apple-dark group-hover:text-apple-blue transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-apple-subtext group-hover:text-apple-blue transition-colors" />
                </div>
                
                <p className="text-apple-subtext text-lg mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-apple-gray text-apple-subtext text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
