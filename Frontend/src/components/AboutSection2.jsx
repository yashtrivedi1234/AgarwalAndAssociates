import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutSection2() {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side - Main text */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12">
              We are transforming spaces through architectural innovation.
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
              Agarwal & Associates is a premier architecture, design, and planning firm with projects across all major cities in India. 
              Every day we impact thousands of people's lives with the spaces we create, which is why people are at 
              the center of everything we do. Designing for the human experience is what allows us to tackle the 
              toughest challenges facing modern cities and shape a more sustainable and inclusive future for India.
            </p>
            
            <Link 
              to="/about" 
              className="inline-flex items-center bg-transparent border border-white/50 hover:bg-white/10 text-white font-medium px-8 py-4 rounded transition-all group"
            >
              LEARN MORE ABOUT US
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Right side - Stats */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="border-b border-gray-700 pb-8">
                <p className="text-gray-400 text-sm mb-2">FOUNDED</p>
                <p className="text-3xl font-semibold">1993</p>
              </div>
              
              <div className="border-b border-gray-700 pb-8">
                <p className="text-gray-400 text-sm mb-2">HEADQUARTERS</p>
                <p className="text-3xl font-semibold">Lucknow, India</p>
              </div>
              
              <div className="border-b border-gray-700 pb-8">
                <p className="text-gray-400 text-sm mb-2">PROJECTS COMPLETED</p>
                <p className="text-3xl font-semibold">5k+</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-2">TEAM MEMBERS</p>
                <p className="text-3xl font-semibold">27+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}