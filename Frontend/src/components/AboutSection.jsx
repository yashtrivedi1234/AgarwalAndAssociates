import { useEffect, useState } from "react";
import { Users, Building2, Award, Globe, ArrowRight, ChevronRight } from "lucide-react";
import image from "../assets/about.webp";
export default function ModernAboutSection() {
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    {
      icon: <Building2 size={28} />,
      count: "5k+",
      title: "Projects Completed",
    },
    {
      icon: <Users size={28} />,
      count: "27+",
      title: "Team Members",
    },
    {
      icon: <Award size={28} />,
      count: "18",
      title: "Design Awards",
    },
    {
      icon: <Globe size={28} />,
      count: "100%",
      title: "Client Satisfaction",
    },
  ];

  const values = [
    {
      title: "Design Excellence",
      description: "We pursue innovative design solutions that challenge conventions while maintaining functionality and aesthetic harmony.",
    },
    {
      title: "Sustainability",
      description: "Environmental responsibility guides our approach, integrating sustainable practices across all aspects of our design process.",
    },
    {
      title: "Client Partnership",
      description: "We build lasting relationships with our clients, treating each project as a collaborative journey toward realizing shared goals.",
    },
  ];

  const tabs = [
    { id: "story", label: "Our Story" },
    { id: "mission", label: "Mission" },
    { id: "approach", label: "Approach" },
  ];

  const tabContent = {
    story: (
      <div className="space-y-4">
  <p className="text-gray-700">
  We handle architectural as well as Interior design Projects. Our work entails preparation of complete architectural and interior design scheme, which are explained with the help of various drawings. Layout plans are prepared according to your needs and submitted for your kind approval. After the finalization of layout plan, detailed architectural drawings and working drawings for the purpose of construction supported by structural drawings, electrical layout, plumbing layout, sanitary layout etc. are provided.

  </p>
  <p className="text-gray-700">
  For the works of interior design, all the furniture details, flooring patterns, electrical layout, ceiling design, services consultancy can also be provided. Technical and auxiliary services consultancy can also be provided. Detailed specifications of materials to be used and regular site visits till completion of project are included. Overall supervision, rigid quality control on materials used, workmanship and work monitoring timely completion is taken care of by us. 
  </p>
  
</div>

    ),
    mission: (
      <div className="space-y-4">
  <p className="text-gray-700">
    Our mission is to transform spaces into meaningful experiences that inspire, engage, and endure. We believe that thoughtful design holds the power to influence how people live, work, and connect with the world around them. By prioritizing user experience, context, and environmental responsibility, we aim to create spaces that resonate with purpose and clarity. Each project is approached with curiosity, empathy, and a deep respect for its cultural and social setting.
  </p>
  <p className="text-gray-700">
    Through innovative thinking and meticulous craftsmanship, we design architecture that balances aesthetics with functionality, tradition with modernity, and creativity with precision. From initial concept to final execution, we focus on creating timeless solutions that serve both immediate needs and long-term aspirations. Our designs evolve with their environments and users, reflecting the dynamic nature of life while standing as enduring examples of quality, care, and innovation.
  </p>
</div>

    
    ),
    approach: (
      <div className="space-y-4">
      <p className="text-gray-700">
        With a collaborative approach, we transform visions into meticulously crafted realities, ensuring exceptional quality and attention to detail in every project. We believe that great design is born from meaningful partnerships—with clients, consultants, and craftspeople alike—and that open communication is key to achieving outstanding results. Every space we create reflects not only the client’s aspirations but also our commitment to precision, innovation, and integrity.
      </p>
      <p className="text-gray-700">
        We leverage cutting-edge technology, advanced tools, and sustainable practices to shape environments that are as forward-thinking as they are functional. From 3D visualization and BIM integration to eco-conscious material selection, our process is driven by both creativity and responsibility. We focus on delivering design solutions that are aesthetically impactful, environmentally sound, and tailored to exceed expectations—at every stage of development, from concept to completion and beyond.
      </p>
    </div>
    
    ),
  };



  return (
    <section className="pt-12 pb-6 bg-gradient-to-b from-white to-gray-50">
      <video id="videoPlayer" controls width="500" height={500}></video>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header with Accent Line */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">About Agarwal & Associates</h2>
          <p className="text-xl text-gray-500 max-w-2xl text-center">Reimagining spaces since 2005</p>
        </div>

        {/* Stats Banner */}
        <div className="bg-black text-white rounded-2xl p-8 mb-10 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full bg-red-500 opacity-5 clip-diagonal"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white border border-white inline-flex mb-4 p-2 rounded-full justify-center">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold mb-1">{stat.count}</h4>
                <p className="text-gray-300 text-sm">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid - Image and Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-10">
          {/* Left Column - Image with Overlay */}
          <div className="lg:col-span-2 relative h-96 lg:h-auto rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-red-500 opacity-20 group-hover:opacity-10 transition-opacity z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-20"></div>
            <img
              src={image}
              alt="Agarwal & Associates Studio"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-6 left-6 z-30">
              <span className="bg-red-500 text-slate-100 text-xs font-bold px-3 py-1 rounded-full">EST. 2005</span>
              <h3 className="text-white text-2xl font-bold mt-3">Agarwal & Associates</h3>
              <p className="text-gray-200">Award-winning architectural firm</p>
            </div>
          </div>

          {/* Right Column - Tabbed Content */}
          <div className="lg:col-span-3 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-6 font-medium text-lg transition-colors relative ${
                    activeTab === tab.id
                      ? "text-red-500 border-b-2 border-red-500 -mb-px"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-grow text-justify">
              {tabContent[activeTab]}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-500 text-gray-100 font-medium rounded-lg group transition-all"
              >
                Explore Our Services
                <ChevronRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Values Section with Geometric Backgrounds */}
        <div className="mb-10">
          <h3 className="lg:text-3xl text-2xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border-b-4 border-red-500 relative overflow-hidden group"
              >
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-100 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 relative z-10">{value.title}</h4>
                <p className="text-gray-600 relative z-10">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        {/* <div className="text-center">
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">Ready to transform your space? Let's create something extraordinary together.</p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
          >
            Start Your Project
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div> */}
      </div>



    </section>
  );
}