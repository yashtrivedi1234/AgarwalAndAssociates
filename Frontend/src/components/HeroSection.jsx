import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

export default function EnhancedAntraHero() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  const slideData = {
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80',
    tagline: 'AGARWAL & ASSOCIATES',
    heading: 'Crafting Architectural Excellence',
    paragraph: "We transform visions into iconic structures, blending aesthetic brilliance with functional design to create spaces that inspire."
  };

  // GSAP Animation on page load
  useEffect(() => {
    const tl = gsap.timeline();

    // Heading enters from right with blur to sharp
    tl.fromTo(headingRef.current,
      {
        x: 100,
        opacity: 0,
        filter: 'blur(10px)'
      },
      {
        x: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out'
      },
      0.3
    );

    // Paragraph enters from bottom
    tl.fromTo(paragraphRef.current,
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      },
      0.5
    );

    // Button enters from right
    tl.fromTo(buttonRef.current,
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out'
      },
      0.6
    );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-neutral-900">
      
      {/* Navbar - Without Nav Links */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6"
      >
      
      </motion.nav>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          
          <img
            src={slideData.image}
            alt={slideData.heading}
            className="object-cover w-full h-full"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center pt-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              {/* Tagline */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="text-white text-sm font-semibold tracking-widest uppercase">
                  {slideData.tagline}
                </span>
              </motion.div>

              {/* Heading with GSAP animation */}
              <h1 
                ref={headingRef}
                className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                {slideData.heading}
              </h1>

              {/* Paragraph with GSAP animation */}
              <p 
                ref={paragraphRef}
                className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              >
                {slideData.paragraph}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4" ref={buttonRef}>
                <a
                  href="/projects"
              
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Our Projects <ArrowRight className="inline ml-2 w-5 h-5" />
                </a>
                <a
                  href="/services"

                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-red-700 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-red-600"
                >
                  Our Services <ArrowRight className="inline ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer"
          onClick={() => {
            const el = document.getElementById('about-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDown className="w-6 h-6 text-red-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}