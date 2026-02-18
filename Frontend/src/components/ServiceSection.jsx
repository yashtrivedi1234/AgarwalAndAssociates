import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ServiceData from '../Data/ServiceData';
import bg from '../assets/services/architectural.webp';

export default function ServicesList() {
  const [activeService, setActiveService] = useState(ServiceData[0]);
  const [prevIndex, setPrevIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('down');
  const [imageHeight, setImageHeight] = useState('auto');
  const navigate = useNavigate();
  const servicesListRef = React.useRef(null);

  React.useEffect(() => {
    const updateHeight = () => {
      if (servicesListRef.current) {
        setImageHeight(`${servicesListRef.current.offsetHeight}px`);
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleServiceHover = (service, index) => {
    if (service.id !== activeService?.id) {
      const currentIndex = ServiceData.findIndex(s => s.id === activeService.id);
      
      // Determine slide direction
      if (index > currentIndex) {
        setSlideDirection('down');
      } else {
        setSlideDirection('up');
      }
      
      setPrevIndex(currentIndex);
      setActiveService(service);
    }
  };

  const handleServiceClick = (link) => {
    navigate(`/services/${link}`);
  };

  // Stats data
  const stats = [
    {
      number: '2013',
      label: 'Years Experience',
      description: 'Improving homes with expert craftsmanship for years'
    },
    {
      number: '190+',
      label: 'Projects Completed',
      description: 'Over 250 successful projects delivered with quality and care'
    },
    {
      number: '260+',
      label: 'Skilled Tradespeople',
      description: 'Our team of 30 experts ensures top-quality results'
    },
    {
      number: '328+',
      label: 'Client Satisfaction',
      description: 'All of our clients are satisfied with our work and service'
    }
  ];

  return (
    <section className="bg-[#FAFAFA] py-24 scroll-m-20 overflow-x-hidden" id="services">
      {/* Heading and Description Centered */}
      <div className="max-w-full mx-auto px-8 mb-16">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Explore Our <span className="text-[#FF0000]">Comprehensive</span>
            <br />
            <span className="text-[#FF0000]">Architectural</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            We specialize in shaping skylines and creating iconic spaces. Discover our portfolio of innovative architectural projects designed with expertise and vision.
          </p>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="max-w-[1400px] mx-auto px-8 mb-24">
        <div className="flex gap-12 items-start">
          {/* Left Side - Image Section with animation */}
          <motion.div
            className="w-1/2"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="sticky top-24">
              <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ height: imageHeight }}>
                {/* Image with slide animation */}
                <div 
                  key={activeService?.id}
                  className={`absolute inset-0 animate-slideIn${slideDirection === 'down' ? 'Down' : 'Up'}`}
                  style={{ height: '100%' }}
                >
                  <img
                    src={activeService?.image || bg}
                    alt={activeService?.title || 'Service'}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none z-[1]"></div>

                {/* Text Content with rounded background */}
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6">
                    <p className="text-white text-base leading-relaxed">
                      {activeService?.shortDesc || 'Overhauling existing spaces to modernize and improve functionality and aesthetics.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Services List with animation */}
          <motion.div
            className="w-1/2"
            ref={servicesListRef}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-0">
              {ServiceData.map((service, index) => {
                const isActive = activeService?.id === service.id;
                const isFirst = index === 0;
                const isLast = index === ServiceData.length - 1;
                
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => handleServiceHover(service, index)}
                    onClick={() => handleServiceClick(service.id)}
                    className={`group cursor-pointer py-7 border-t border-b transition-all duration-300 ${
                      isActive 
                        ? (isFirst || isLast)
                          ? 'border-t-[#FF0000] border-b-[#FF0000]' 
                          : 'border-t-gray-200 border-b-[#FF0000] hover:border-t-[#FF0000]'
                        : (isFirst || isLast)
                          ? 'border-t-gray-200 border-b-gray-200 hover:border-t-[#FF0000] hover:border-b-[#FF0000]'
                          : 'border-t-gray-200 border-b-gray-200 hover:border-b-[#FF0000]'
                    }`}
                  >
                    <div className="flex items-center justify-between pr-4">
                      {/* Number + Title (merged) */}
                      <div className="flex items-center gap-6">
                        <span
                          className={`text-xl font-light transition-all duration-300 ${
                            isActive ? 'text-[#FF0000]' : 'text-gray-300 group-hover:text-[#FF0000]'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex items-center gap-4">
                          <h3
                            className={`text-3xl xl:text-4xl font-bold transition-all duration-300 ${
                              isActive ? 'text-[#FF0000]' : 'text-black group-hover:text-[#FF0000]'
                            }`}
                          >
                            {service.title}
                          </h3>
                          {/* Dot Indicator */}
                          {isActive && (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF0000]"></div>
                          )}
                        </div>
                      </div>
                      {/* Arrow */}
                      <div className="flex-shrink-0">
                        {isActive ? (
                          <div className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center text-white text-xl transform transition-all duration-300 hover:scale-110">
                            →
                          </div>
                        ) : (
                          <div className="text-xl text-gray-400 transition-all duration-300 group-hover:text-[#FF0000]">
                            ↗
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideInDown {
          animation: slideInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}