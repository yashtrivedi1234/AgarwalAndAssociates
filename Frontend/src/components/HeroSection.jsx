import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

export default function EnhancedAntraHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [thumbnailDirection, setThumbnailDirection] = useState('left');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80',
      tagline: 'FAST AND RELIABLE',
      heading: 'Find Your Inspired Interior Design',
      paragraph: "Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life."
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80',
      tagline: 'FAST AND RELIABLE',
      heading: 'The Art of Stunning Interior Design',
      paragraph: "Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life."
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80',
      tagline: 'FAST AND RELIABLE',
      heading: 'Modern Living Spaces That Inspire',
      paragraph: "Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life."
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleSlideChange();
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  // GSAP Animation for slide change
  const handleSlideChange = () => {
    setIsTransitioning(true);
    setThumbnailDirection(prev => prev === 'left' ? 'right' : 'left');

    // Animate out current content
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }
    });

    // Heading exits with blur
    tl.to(headingRef.current, {
      x: -100,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 0.6,
      ease: 'power3.in'
    }, 0);

    // Paragraph exits
    tl.to(paragraphRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in'
    }, 0.1);

    // Button exits
    tl.to(buttonRef.current, {
      x: -80,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in'
    }, 0.15);
  };

  // Animate in new content
  useEffect(() => {
    if (!isTransitioning && headingRef.current && paragraphRef.current && buttonRef.current) {
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
    }
  }, [currentSlide, isTransitioning]);

  const goToSlide = (index) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setThumbnailDirection(thumbnailDirection === 'left' ? 'right' : 'left');
      
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentSlide(index);
          setIsTransitioning(false);
        }
      });

      tl.to(headingRef.current, {
        x: -100,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.6,
        ease: 'power3.in'
      }, 0);

      tl.to(paragraphRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      }, 0.1);

      tl.to(buttonRef.current, {
        x: -80,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      }, 0.15);
    }
  };

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

      {/* Background Images with AnimatePresence - FIXED */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].heading}
              className="object-cover w-full h-full"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
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
                  {slides[currentSlide].tagline}
                </span>
              </motion.div>

              {/* Heading with GSAP animation */}
              <h1 
                ref={headingRef}
                className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                {slides[currentSlide].heading}
              </h1>

              {/* Paragraph with GSAP animation */}
              <p 
                ref={paragraphRef}
                className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              >
                {slides[currentSlide].paragraph}
              </p>

              {/* CTA Buttons */}
              <div 
                ref={buttonRef}
                className="flex items-center gap-6"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-6 py-3 border-2 border-white/60 rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Take Counsel
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

              </div>
            </div>

            {/* Right Side - Stats Card (Only on 2nd slide) */}
            <AnimatePresence mode="wait">
              {currentSlide === 1 && (
                <motion.div 
                  initial={{ x: 100, opacity: 0, scale: 0.9 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: 100, opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
                  className="hidden lg:block"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                    {/* Main Stat */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mb-8 pb-8 border-b border-white/20"
                    >
                      <div className="text-6xl font-bold text-white mb-2">260+</div>
                      <div className="text-gray-200 text-lg">Successful Projects And Counting</div>
                    </motion.div>

                    {/* Secondary Stats */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="space-y-4 mb-6"
                    >
                      <div className="text-white text-lg">Tech Specifications</div>
                      <div className="text-white text-lg">Design Project</div>
                      <div className="text-white text-lg">3D Visualisation</div>
                    </motion.div>

                    {/* Preview Image */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="rounded-2xl overflow-hidden"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80"
                        alt="Project Preview"
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Thumbnail Indicators - Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 right-8 z-30 hidden md:flex items-center gap-3"
      >
        {slides.map((slide, index) => (
          <motion.button
            key={slide.id}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: index === currentSlide ? 1.3 : 1,
              x: isTransitioning && index === currentSlide 
                ? thumbnailDirection === 'left' ? [-30, 0] : [30, 0]
                : 0
            }}
            transition={{ 
              duration: 0.6,
              ease: [0.6, 0.01, 0.05, 0.95]
            }}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'ring-2 ring-amber-400 shadow-lg shadow-amber-500/50' 
                : 'ring-1 ring-white/30 opacity-60 hover:opacity-100'
            }`}
            style={{
              width: index === currentSlide ? '16px' : '12px',
              height: index === currentSlide ? '16px' : '12px',
            }}
          >
            <div className={`w-full h-full rounded-full ${
              index === currentSlide ? 'bg-amber-400' : 'bg-white/50'
            }`} />
          </motion.button>
        ))}
      </motion.div>

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
          <ChevronDown className="w-6 h-6 text-amber-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}