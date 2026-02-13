import React, { useState, useEffect } from "react";
import { ArrowRight, Award, Users, Clock, ChevronDown, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import InquiryModal from "./InquiryModal";
import { Link } from "react-router-dom";
import first from '../assets/banner/1.webp';
import second from '../assets/banner/2.webp';
import third from '../assets/banner/3.webp';

export default function EnhancedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState('next');

  // Featured projects images
  const featuredProjects = [
    { id: 1, imageUrl: third, title: "Modern Villa" },
    { id: 2, imageUrl: second, title: "Urban Complex" },
    { id: 3, imageUrl: first, title: "Luxury Resort" }
  ];

  // Stats for the firm with animation
  const stats = [
    { icon: <Clock size={24} />, value: "25+", label: "Years Experience", color: "from-amber-400 to-orange-500" },
    { icon: <Award size={24} />, value: "28+", label: "Projects Completed", color: "from-blue-400 to-cyan-500" },
    { icon: <Users size={24} />, value: "15+", label: "Team Members", color: "from-purple-400 to-pink-500" },
  ];

  useEffect(() => {
    // Entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Auto-rotate slides
    const slideInterval = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);
    
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      clearInterval(slideInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextSlide = () => {
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <>
      <InquiryModal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
      
      <div className="relative lg:h-screen h-[95vh] w-full overflow-hidden">
        
        {/* Image Slider Background with Ken Burns effect */}
        <div className="absolute inset-0 w-full h-full">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              {/* Gradient overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              
              {/* Image with Ken Burns zoom effect */}
              <img
                loading="eager"
                src={project.imageUrl}
                alt={project.title}
                className={`object-cover w-full h-full transition-transform duration-[10000ms] ${
                  index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
                style={{ transform: `translateY(${scrollY * 0.3}px) scale(${index === currentSlide ? 1.1 : 1})` }}
              />
            </div>
          ))}
        </div>

        {/* Animated geometric patterns */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 border-2 border-white/10 rotate-12 animate-pulse" />
          <div className="absolute bottom-32 left-10 w-24 h-24 border-2 border-white/10 -rotate-12 animate-pulse" 
               style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/5 rotate-45" />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full hover:bg-black/60 transition-all group hidden md:flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-white group-hover:-translate-x-1 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full hover:bg-black/60 transition-all group hidden md:flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-white group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Content Container */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="container px-4 lg:px-8 text-center max-w-5xl mx-auto">
            
            {/* Animated text content with staggered entrance */}
            <div className="space-y-6">
              
              
              

              {/* Main heading with split animation */}
              <h1 
                className={`text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 delay-200 mt-12 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Crafting{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                    Architectural
                  </span>
                  <span className="absolute bottom-3 left-0 w-full h-4 bg-gradient-to-r from-amber-500/40 to-red-500/40 blur-md -rotate-1 z-0 animate-pulse" />
                </span>
                <br />
                Excellence
              </h1>

              {/* Subtitle */}
              <p 
                className={`text-gray-100 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                We transform visions into iconic structures, blending aesthetic brilliance 
                with functional design to create spaces that inspire and endure.
              </p>

              {/* CTA Buttons with hover effects */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-700 delay-400 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <Link 
                  aria-label="Projects" 
                  to='/projects' 
                  className="group relative px-8 py-4 bg-white text-black font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-1 rounded-sm"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Explore Our Projects
                    <ArrowRight 
                      size={20} 
                      className="ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                    />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-300" style={{ zIndex: -1 }} />
                </Link>
                
                <a 
                  href="#services" 
                  aria-label="Explore services"  
                  className="group px-8 py-4 bg-transparent text-white border-2 border-white/60 font-bold backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/30 rounded-sm"
                >
                  <span className="flex items-center justify-center">
                    Explore Our Services
                    <ChevronDown 
                      size={20} 
                      className="ml-2 group-hover:translate-y-1 transition-transform duration-300" 
                    />
                  </span>
                </a>
              </div>

              {/* Stats Row with animated counters */}
              {/*  */}
            </div>
          </div>
        </div>

     

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/20 z-20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/20 z-20" />
        
        {/* Decorative side accent */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent z-20" />
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700;800&display=swap');
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </>
  );
}