import React, { useState } from "react";
import { Award, Building, Heart, LaptopMinimalCheck, Lightbulb, MapPin, Users, Zap } from "lucide-react";
import DirectorSection from "../components/DirectorSection";
import AboutBackgroundDecor from "../components/about/AboutBackgroundDecor";
import AboutFoundationSection from "../components/about/AboutFoundationSection";
import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutStatsSection from "../components/about/AboutStatsSection";
import AboutTimelineSection from "../components/about/AboutTimelineSection";

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState("vision");

  const milestones = [
    { year: "1993", title: "Firm Established", description: "Founded in Mumbai by Amit Agarwal", Icon: Building },
    { year: "2005", title: "First Major Project", description: "Completed the award-winning Horizon Tower", Icon: Award },
    { year: "2012", title: "International Expansion", description: "Opened our first international office in Dubai", Icon: MapPin },
    { year: "2018", title: "Sustainability Focus", description: "Launched eco-friendly design initiative", Icon: Lightbulb },
    { year: "2022", title: "Digital Transformation", description: "Pioneered VR architecture visualization", Icon: Zap }
  ];

  const stats = [
    { Icon: Users, value: "27+", label: "Team Members", gradient: "from-blue-500 to-cyan-500" },
    { Icon: Building, value: "5k+", label: "Completed Projects", gradient: "from-purple-500 to-pink-500" },
    { Icon: LaptopMinimalCheck, value: "100%", label: "Client Satisfaction", gradient: "from-green-500 to-emerald-500" },
    { Icon: Award, value: "18", label: "Awards", gradient: "from-orange-500 to-red-500" }
  ];

  const coreValues = [
    {
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our professional relationships and practices.",
      Icon: Heart,
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Excellence",
      description: "Striving for exceptional quality in every aspect of our design and execution process.",
      Icon: Award,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Innovation",
      description: "Embracing creativity and technological advancements to pioneer new architectural solutions.",
      Icon: Lightbulb,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Sustainability",
      description: "Prioritizing environmentally responsible design principles and practices.",
      Icon: Zap,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <AboutBackgroundDecor />

      <section id="about" className="relative py-12 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <AboutHeroSection />
          <AboutStatsSection stats={stats} />
          <AboutFoundationSection activeTab={activeTab} onTabChange={setActiveTab} coreValues={coreValues} />
          <AboutTimelineSection milestones={milestones} />

          <DirectorSection />
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