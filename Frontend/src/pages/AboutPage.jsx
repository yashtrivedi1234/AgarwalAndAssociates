import React, { useState, useEffect, useRef } from "react";
import { Users, Award, Clock, Building, MapPin, ChevronRight, ExternalLink, Plus, Briefcase, GraduationCap, WholeWord, LaptopMinimalCheck } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import about from '../assets/about/about.jpg'

import DirectorSection from "../components/DirectorSection";
export default function AboutUsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("vision");
  const sectionRef = useRef(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    { year: "1993", title: "Firm Established", description: "Founded in Mumbai by Amit Agarwal" },
    { year: "2005", title: "First Major Project", description: "Completed the award-winning Horizon Tower" },
    { year: "2012", title: "International Expansion", description: "Opened our first international office in Dubai" },
    { year: "2018", title: "Sustainability Focus", description: "Launched eco-friendly design initiative" },
    { year: "2022", title: "Digital Transformation", description: "Pioneered VR architecture visualization" }
  ];

 
 
  
  const stats = [
    { icon: <Users size={24} />, value: "27+", label: "Team Members" },
    { icon: <Building size={24} />, value: "5k+", label: "Completed Projects" },
    { icon: <LaptopMinimalCheck size={24} />, value: "100%", label: "Client Satisfaction" },
    { icon: <Award size={24} />, value: "18", label: "Awards" }
  ];

  return (
    <>
      <Breadcrumb 
        title="ABOUT AGARWAL & ASSOCIATES" 
        items={[
          { name: "About", path: "/about" },
        ]}
      />
    
      <section ref={sectionRef} id="about" className="py-12 bg-neutral-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section with Architectural Background */}
          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
            <img 
              src={about}
              alt="Architectural Design"
              className="w-full h-[30rem] object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16">
              <div className="max-w-2xl">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                  A Legacy of <span className="text-red-500">Architectural</span> Excellence
                </h2>
                <p className={`text-neutral-200 text-lg md:text-xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                  For over two decades, we've been shaping skylines and transforming spaces with our commitment to innovative design, 
                  technical precision, and sustainable practices.
                </p>
                <div className={`mt-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                  <Link to='/projects' className="px-8 py-3 bg-red-500 hover:bg-red-500 text-slate-100 font-semibold rounded-lg transition-colors shadow-lg">
                    Our Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>

      <div className={`mb-8 transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="text-center mb-6">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent mb-4">Our Foundation</h3>
        <p className="text-neutral-600 text-lg max-w-3xl mx-auto mb-6">
          Built on strong principles and driven by innovation, our foundation represents the core values that guide every project we undertake.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100">
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-2">
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setActiveTab("vision")}
              className={`sm:w-auto w-full py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group ${
                activeTab === "vision" 
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg transform scale-105" 
                  : "text-white hover:bg-neutral-700 hover:transform hover:scale-102"
              }`}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full ${
                  activeTab === "vision" ? "bg-white/20" : "bg-white/10"
                } flex items-center justify-center mr-3 transition-all duration-300`}>
                  <Building size={18} className="text-white" />
                </div>
                <span className="font-medium">Our Vision</span>
              </div>
            </button>
            
            <button 
              onClick={() => setActiveTab("mission")}
              className={`sm:w-auto w-full py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group ${
                activeTab === "mission" 
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg transform scale-105" 
                  : "text-white hover:bg-neutral-700 hover:transform hover:scale-102"
              }`}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full ${
                  activeTab === "mission" ? "bg-white/20" : "bg-white/10"
                } flex items-center justify-center mr-3 transition-all duration-300`}>
                  <Briefcase size={18} className="text-white" />
                </div>
                <span className="font-medium">Our Mission</span>
              </div>
            </button>
            
            <button 
              onClick={() => setActiveTab("values")}
              className={`sm:w-auto w-full py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group ${
                activeTab === "values" 
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg transform scale-105" 
                  : "text-white hover:bg-neutral-700 hover:transform hover:scale-102"
              }`}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full ${
                  activeTab === "values" ? "bg-white/20" : "bg-white/10"
                } flex items-center justify-center mr-3 transition-all duration-300`}>
                  <Award size={18} className="text-white" />
                </div>
                <span className="font-medium">Our Values</span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Tab Content - Now below tabs */}
        <div className="p-4 relative min-h-[400px] bg-gradient-to-br from-neutral-50 to-white">
          <div className={`transition-all duration-500 ${activeTab === "vision" ? "opacity-100 block" : "opacity-0 hidden"}`}>
            {/* <h3 className="text-3xl font-bold mb-6 text-neutral-800 text-center">Our Vision</h3> */}
            <p className="text-neutral-600 mb-8 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              To redefine architectural boundaries through innovative design that harmonizes aesthetics, functionality, and sustainability,
              creating spaces that inspire human connection and elevate experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
              <div className="flex items-center p-6 bg-gradient-to-r from-red-50 to-red-25 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-100 to-red-200 flex items-center justify-center mr-5 shrink-0">
                  <Building size={24} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-neutral-800 text-lg">Design Excellence</h4>
                  <p className="text-neutral-600">Creating spaces that merge beauty with purpose</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-gradient-to-r from-red-50 to-red-25 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-100 to-red-200 flex items-center justify-center mr-5 shrink-0">
                  <Users size={24} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-neutral-800 text-lg">Human-Centered</h4>
                  <p className="text-neutral-600">Designing for people and their experiences</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-500 ${activeTab === "mission" ? "opacity-100 block" : "opacity-0 hidden"}`}>
            {/* <h3 className="text-3xl font-bold mb-6 text-neutral-800 text-center">Our Mission</h3> */}
            <p className="text-neutral-600 mb-8 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              To deliver architectural solutions that exceed client expectations through collaborative processes, technical excellence, and unwavering 
              attention to detail, while championing environmental responsibility and community engagement.
            </p>
            <div className="space-y-4 text-neutral-600 max-w-4xl mx-auto">
              <div className="flex items-start p-6 bg-gradient-to-r from-red-50 to-red-25 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300">
                <div className="mr-5 mt-1 text-red-500 shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-200 to-red-300 rounded-full flex items-center justify-center">
                    <Plus size={18} className="text-red-600" />
                  </div>
                </div>
                <p className="text-base">Creating sustainable designs that minimize environmental impact while maximizing functionality and beauty</p>
              </div>
              <div className="flex items-start p-6 bg-gradient-to-r from-red-50 to-red-25 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300">
                <div className="mr-5 mt-1 text-red-500 shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-200 to-red-300 rounded-full flex items-center justify-center">
                    <Plus size={18} className="text-red-600" />
                  </div>
                </div>
                <p className="text-base">Fostering innovation through research and technology integration in all our architectural solutions</p>
              </div>
              <div className="flex items-start p-6 bg-gradient-to-r from-red-50 to-red-25 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300">
                <div className="mr-5 mt-1 text-red-500 shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-200 to-red-300 rounded-full flex items-center justify-center">
                    <Plus size={18} className="text-red-600" />
                  </div>
                </div>
                <p className="text-base">Cultivating meaningful relationships with clients and communities to create spaces that truly serve their needs</p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-500 ${activeTab === "values" ? "opacity-100 block" : "opacity-0 hidden"}`}>
            {/* <h3 className="text-3xl font-bold mb-6 text-neutral-800 text-center">Our Values</h3> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-gradient-to-r from-red-50 to-red-25 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-xl mb-3 text-neutral-800">Integrity</h4>
                <p className="text-neutral-600">Maintaining the highest ethical standards in all our professional relationships and practices.</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-red-50 to-red-25 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-xl mb-3 text-neutral-800">Excellence</h4>
                <p className="text-neutral-600">Striving for exceptional quality in every aspect of our design and execution process.</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-red-50 to-red-25 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-xl mb-3 text-neutral-800">Innovation</h4>
                <p className="text-neutral-600">Embracing creativity and technological advancements to pioneer new architectural solutions.</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-red-50 to-red-25 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-xl mb-3 text-neutral-800">Sustainability</h4>
                <p className="text-neutral-600">Prioritizing environmentally responsible design principles and practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

          <div className={`transition-all duration-1000 delay-1200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl py-16 px-8 shadow-2xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 rounded-2xl bg-neutral-700 flex items-center justify-center mx-auto mb-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500/30 group-hover:rotate-6 shadow-lg">
                      {stat.icon}
                    </div>
                    <h4 className="text-5xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{stat.value}</h4>
                    <p className="text-neutral-400 uppercase tracking-wider text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              {/* <div className="mt-12 text-center">
                <a href="#" className="inline-flex items-center text-red-500 hover:text-red-300 transition-colors text-lg font-medium">
                  Discover our achievements <ChevronRight size={16} className="ml-1" />
                </a>
              </div> */}
            </div>
          </div>
          <DirectorSection/>
         </div>    

        </section>        
        </>
  )}