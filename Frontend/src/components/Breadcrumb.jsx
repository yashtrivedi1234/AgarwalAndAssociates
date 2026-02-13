import { useState, useEffect } from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import bread from '../assets/bread.jpg'
// Modern Breadcrumb Component with 3 props:
// - title: string (page title)
// - items: array of {name: string, path: string} (navigation items)
// - bgImage: string (URL for background image)
export default function Breadcrumb({ title = "Page Title", items = [], bgImage = `${bread}` }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate title scale effect based on scroll
  const titleScale = Math.max(1 - scrollPosition / 1000, 0.95);

  return (
    <div className="relative h-64 md:h-80 w-full">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${bgImage})`
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-black/20" />
      
      {/* Content container */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 py-6">
          {/* Navigation path */}
          <div className="flex items-center mb-2 text-gray-200 text-sm overflow-x-auto whitespace-nowrap pb-2">
            <Link 
              to="/" 
              className="flex items-center hover:text-white transition duration-300"
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
                {index === items.length - 1 ? (
                  <span className="text-white font-medium">{item.name}</span>
                ) : (
                  <Link 
                    to={item.path} 
                    className="hover:text-white transition duration-300"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Title with animation */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-all duration-500 ease-out origin-left"
            style={{ 
              transform: `scale(${titleScale})`
            }}
          >
            {title}
          </h1>
          
          {/* Simple accent line */}
          <div className="h-2 w-20 bg-gradient-to-l from from-red-600 to-red-500 rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
}