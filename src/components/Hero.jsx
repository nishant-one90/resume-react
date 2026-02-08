import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    // Initial timeline
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000,
    });

    tl.add({
      targets: titleRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
    })
    .add({
      targets: subtitleRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
    }, '-=800')
    .add({
      targets: buttonsRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
    }, '-=800')
    .add({
      targets: arrowRef.current,
      opacity: [0, 1],
      duration: 1000,
    }, '-=500');

  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-white px-6">
      <div className="max-w-4xl w-full text-center z-10">
        <div ref={titleRef} className="opacity-0">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-apple-dark mb-6">
            Nishant Anand
          </h1>
        </div>

        <div ref={subtitleRef} className="opacity-0">
          <p className="text-xl md:text-3xl text-apple-subtext font-medium mb-10 max-w-2xl mx-auto">
            Senior Manager Business Development
          </p>
        </div>

        <div ref={buttonsRef} className="opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-apple-blue text-white rounded-full font-medium text-lg hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View Projects
          </a>
          <a
            href="resume.pdf"
            className="group px-8 py-3 bg-apple-gray text-apple-blue rounded-full font-medium text-lg hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2"
          >
            Download Resume
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <div
        ref={arrowRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-apple-subtext animate-bounce opacity-0"
      >
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
