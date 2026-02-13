import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import bg from '../assets/testimonial.webp'
import testimonials from '../Data/TestimonialData';
import avtar from '../assets/about/default.webp'
export default function TestimonialSection() {
  

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // For handling window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, 2000); // Auto-slide every 500ms

  return () => clearInterval(interval); // Clean up on unmount
}, [testimonials.length]);


  const isMobile = windowWidth < 768;

  const goToPrevious = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
      setSlideDirection(null);
    }, 300);
  };

  const goToNext = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
      setSlideDirection(null);
    }, 300);
  };

  const goToSlide = (index) => {
    if (index > activeIndex) setSlideDirection('left');
    else if (index < activeIndex) setSlideDirection('right');
    
    setTimeout(() => {
      setActiveIndex(index);
      setSlideDirection(null);
    }, 300);
  };

  // For handling touch swipe on mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // Swipe left
      goToNext();
    }
    
    if (touchEnd - touchStart > 150) {
      // Swipe right
      goToPrevious();
    }
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "text-black fill-black" : "text-gray-300"} 
      />
    ));
  };

  return (
    <section className="py-8 lg:py-12 md:py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-3">Client Testimonials</h2>
          {/* <div className="w-20 h-1 bg-black mx-auto mb-6"></div> */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what our clients say about their experience working with Agarwal & Associates
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Large quotes icon */}
          <div className="absolute top-0 left-0 text-red-100 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <Quote size={120} />
          </div>

          {/* Main testimonial display */}
          <div 
            className="relative bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`transition-all duration-1000 ${
              slideDirection === 'left' 
                ? 'transform -translate-x-8 opacity-0' 
                : slideDirection === 'right'
                ? 'transform translate-x-8 opacity-0'
                : ''
            }`}>
              {/* Testimonial Content */}
              <div className="grid grid-cols-1 md:grid-cols-5 min-h-[400px]">
                {/* Left Image Column (hidden on mobile) */}
                <div className="hidden md:block md:col-span-2 bg-red-600 relative">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <img 
                    src={bg}
                    alt="Architecture Project" 
                    className="w-full h-full object-cover " 
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden mb-4">
                      <img 
                        src={avtar} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{testimonials[activeIndex].name}</h3>
                    <p className="text-sm opacity-90 mb-2">{testimonials[activeIndex].position}</p>
                    <div className="flex">{renderStars(testimonials[activeIndex].rating)}</div>
                  </div>
                </div>

                {/* Right Content Column */}
                <div className="p-6 md:p-12 bg-white md:col-span-3 flex flex-col justify-center">
                  {/* Mobile-Only Image */}
                  <div className="flex items-center mb-6 md:hidden">
                    <div className="w-16 aspect-square rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{testimonials[activeIndex].name}</h3>
                      <p className="text-sm text-gray-600">{testimonials[activeIndex].position}</p>
                      <div className="flex mt-1">{renderStars(testimonials[activeIndex].rating)}</div>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="text-black mb-4">
                    <Quote size={32} />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                    {testimonials[activeIndex].quote}
                  </blockquote>

                  {/* Project Reference */}
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <p className="text-gray-500">
                      <span className="font-medium text-gray-700">Project: </span>
                      {testimonials[activeIndex].project}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute lg:bottom-6 bottom-2 right-6 flex space-x-3">
              <button 
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-red-50 text-black transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={goToNext}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-red-50 text-black transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-black w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
       
      </div>
    </section>
  );
}