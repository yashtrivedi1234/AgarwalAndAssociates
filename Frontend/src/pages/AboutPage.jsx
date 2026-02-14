import React, { useState, useEffect, useRef } from "react";
import { Users, Award, Clock, Building, MapPin, ChevronRight, ExternalLink, Plus, Briefcase, GraduationCap, WholeWord, LaptopMinimalCheck, Target, Lightbulb, Heart, Zap } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import about from '../assets/about/about.jpg'

import DirectorSection from "../components/DirectorSection";

export default function AboutUsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("vision");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const milestones = [
    { year: "1993", title: "Firm Established", description: "Founded in Mumbai by Amit Agarwal", icon: <Building size={24} /> },
    { year: "2005", title: "First Major Project", description: "Completed the award-winning Horizon Tower", icon: <Award size={24} /> },
    { year: "2012", title: "International Expansion", description: "Opened our first international office in Dubai", icon: <MapPin size={24} /> },
    { year: "2018", title: "Sustainability Focus", description: "Launched eco-friendly design initiative", icon: <Lightbulb size={24} /> },
    { year: "2022", title: "Digital Transformation", description: "Pioneered VR architecture visualization", icon: <Zap size={24} /> }
  ];

  const stats = [
    { icon: <Users size={24} />, value: "27+", label: "Team Members", gradient: "from-blue-500 to-cyan-500" },
    { icon: <Building size={24} />, value: "5k+", label: "Completed Projects", gradient: "from-purple-500 to-pink-500" },
    { icon: <LaptopMinimalCheck size={24} />, value: "100%", label: "Client Satisfaction", gradient: "from-green-500 to-emerald-500" },
    { icon: <Award size={24} />, value: "18", label: "Awards", gradient: "from-orange-500 to-red-500" }
  ];

  const coreValues = [
    {
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our professional relationships and practices.",
      icon: <Heart size={24} />,
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Excellence",
      description: "Striving for exceptional quality in every aspect of our design and execution process.",
      icon: <Award size={24} />,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Innovation",
      description: "Embracing creativity and technological advancements to pioneer new architectural solutions.",
      icon: <Lightbulb size={24} />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Sustainability",
      description: "Prioritizing environmentally responsible design principles and practices.",
      icon: <Zap size={24} />,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      
      {/* Reading Progress Bar */}
      

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>
    
      <section ref={sectionRef} id="about" className="relative py-12 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Hero Section - Split Screen Design */}
          <div className="mb-16 lg:mb-24 mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left - Content */}
              <div className="space-y-8 order-2 lg:order-1">
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-red-600">Architectural Excellence Since 1993</span>
                </div>

                {/* Mega Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] messiri">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-red-600 to-orange-600 animate-gradient">
                    A Legacy of Architectural Excellence
                  </span>
                </h1>

                {/* Decorative Separator */}
                <div className="flex items-center gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full animate-pulse"
                      style={{
                        width: `${40 - i * 5}px`,
                        background: `linear-gradient(to right, rgb(220, 38, 38), rgb(249, 115, 22))`,
                        opacity: 1 - i * 0.15,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>

                <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
                  For over two decades, we've been shaping skylines and transforming spaces with our commitment to innovative design, 
                  technical precision, and sustainable practices.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to='/projects' 
                    className="group px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      Our Projects
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <button className="px-8 py-4 bg-white text-neutral-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-neutral-200">
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Right - Image with 3D Effect */}
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
                  
                  {/* Image Container */}
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700">
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                        <img
                          src={about}
                          alt="Architectural Excellence"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/20 to-transparent"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-2xl transform rotate-12 group-hover:rotate-[20deg] transition-transform duration-500 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white text-3xl font-black">30+</p>
                        <p className="text-white/90 text-xs font-bold">Years</p>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-2xl p-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-500 font-medium">Award</p>
                          <p className="text-lg font-black text-neutral-900">Winning</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section - Premium Cards */}
          <div className="mb-16 lg:mb-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 transform group-hover:scale-105 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:rotate-6 transition-transform`}>
                      {stat.icon}
                    </div>
                    <h4 className="text-4xl font-black text-neutral-900 mb-2 text-center">{stat.value}</h4>
                    <p className="text-neutral-600 uppercase tracking-wider text-sm font-medium text-center">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision, Mission, Values - Premium Card */}
          <div className="mb-16 lg:mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 mb-4">
                <Target size={16} className="text-red-600" />
                <span className="text-sm font-bold text-red-600">Our Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent mb-4 messiri">
                Built on Strong Principles
              </h2>
              <p className="text-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Our foundation represents the core values that guide every project we undertake.
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/50">
                {/* Tabs */}
                <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-6">
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={() => setActiveTab("vision")}
                      className={`group/tab flex items-center justify-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                        activeTab === "vision" 
                          ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl scale-105" 
                          : "text-white hover:bg-neutral-700 hover:scale-102"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${
                        activeTab === "vision" ? "bg-white/20" : "bg-white/10"
                      } flex items-center justify-center transition-all duration-300`}>
                        <Building size={20} className="text-white" />
                      </div>
                      <span className="font-bold text-lg">Our Vision</span>
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab("mission")}
                      className={`group/tab flex items-center justify-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                        activeTab === "mission" 
                          ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl scale-105" 
                          : "text-white hover:bg-neutral-700 hover:scale-102"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${
                        activeTab === "mission" ? "bg-white/20" : "bg-white/10"
                      } flex items-center justify-center transition-all duration-300`}>
                        <Target size={20} className="text-white" />
                      </div>
                      <span className="font-bold text-lg">Our Mission</span>
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab("values")}
                      className={`group/tab flex items-center justify-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                        activeTab === "values" 
                          ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl scale-105" 
                          : "text-white hover:bg-neutral-700 hover:scale-102"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${
                        activeTab === "values" ? "bg-white/20" : "bg-white/10"
                      } flex items-center justify-center transition-all duration-300`}>
                        <Heart size={20} className="text-white" />
                      </div>
                      <span className="font-bold text-lg">Our Values</span>
                    </button>
                  </div>
                </div>
                
                {/* Tab Content */}
                <div className="p-8 md:p-12 relative min-h-[500px] bg-gradient-to-br from-neutral-50 to-white">
                  
                  {/* Vision Tab */}
                  <div className={`transition-all duration-500 ${activeTab === "vision" ? "opacity-100 block" : "opacity-0 hidden"}`}>
                    <p className="text-neutral-700 text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12">
                      To redefine architectural boundaries through innovative design that harmonizes aesthetics, functionality, and sustainability,
                      creating spaces that inspire human connection and elevate experiences.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      <div className="relative group/card">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20 group-hover/card:opacity-40 transition-opacity"></div>
                        <div className="relative flex items-start gap-6 p-8 bg-white rounded-3xl shadow-xl border border-neutral-100 group-hover/card:shadow-2xl transition-all duration-300">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Building size={28} className="text-white" />
                          </div>
                          <div>
                            <h4 className="font-black text-xl mb-3 text-neutral-900">Design Excellence</h4>
                            <p className="text-neutral-600 leading-relaxed">Creating spaces that merge beauty with purpose</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative group/card">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover/card:opacity-40 transition-opacity"></div>
                        <div className="relative flex items-start gap-6 p-8 bg-white rounded-3xl shadow-xl border border-neutral-100 group-hover/card:shadow-2xl transition-all duration-300">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Users size={28} className="text-white" />
                          </div>
                          <div>
                            <h4 className="font-black text-xl mb-3 text-neutral-900">Human-Centered</h4>
                            <p className="text-neutral-600 leading-relaxed">Designing for people and their experiences</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mission Tab */}
                  <div className={`transition-all duration-500 ${activeTab === "mission" ? "opacity-100 block" : "opacity-0 hidden"}`}>
                    <p className="text-neutral-700 text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12">
                      To deliver architectural solutions that exceed client expectations through collaborative processes, technical excellence, and unwavering 
                      attention to detail, while championing environmental responsibility and community engagement.
                    </p>
                    <div className="space-y-6 max-w-4xl mx-auto">
                      {[
                        "Creating sustainable designs that minimize environmental impact while maximizing functionality and beauty",
                        "Fostering innovation through research and technology integration in all our architectural solutions",
                        "Cultivating meaningful relationships with clients and communities to create spaces that truly serve their needs"
                      ].map((mission, index) => (
                        <div key={index} className="relative group/card">
                          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20 group-hover/card:opacity-40 transition-opacity"></div>
                          <div className="relative flex items-start gap-6 p-8 bg-white rounded-3xl shadow-xl border border-neutral-100 group-hover/card:shadow-2xl transition-all duration-300">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <Plus size={24} className="text-white font-bold" />
                              </div>
                            </div>
                            <p className="text-neutral-700 text-lg leading-relaxed">{mission}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Values Tab */}
                  <div className={`transition-all duration-500 ${activeTab === "values" ? "opacity-100 block" : "opacity-0 hidden"}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                      {coreValues.map((value, index) => (
                        <div key={index} className="relative group/card">
                          <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-3xl blur opacity-20 group-hover/card:opacity-40 transition-opacity`}></div>
                          <div className="relative p-8 bg-white rounded-3xl shadow-xl border-l-4 border-red-500 group-hover/card:shadow-2xl transition-all duration-300">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover/card:scale-110 transition-transform`}>
                              {React.cloneElement(value.icon, { className: "text-white" })}
                            </div>
                            <h4 className="font-black text-2xl mb-4 text-neutral-900">{value.title}</h4>
                            <p className="text-neutral-600 text-lg leading-relaxed">{value.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16 lg:mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 mb-4">
                <Clock size={16} className="text-red-600" />
                <span className="text-sm font-bold text-red-600">Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent mb-4 messiri">
                Milestones That Define Us
              </h2>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-orange-500 to-pink-500 hidden lg:block"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className="w-full lg:w-5/12">
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-300">
                          <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                              {milestone.icon}
                            </div>
                            <div>
                              <div className="text-red-600 font-black text-2xl mb-2">{milestone.year}</div>
                              <h3 className="font-black text-xl text-neutral-900 mb-3">{milestone.title}</h3>
                              <p className="text-neutral-600 leading-relaxed">{milestone.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-white rounded-full border-4 border-red-500 shadow-lg"></div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DirectorSection/>
        </div>    
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}