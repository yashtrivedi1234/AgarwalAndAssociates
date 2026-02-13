import React, { useState, useEffect } from "react";
import { Wind, Droplet, Sunrise, Feather, ArrowRight } from "lucide-react";

import v1 from "../assets/project/iti-college.png";
import v2 from "../assets/project/ice-factory.png";
import v3 from "../assets/project/mrrashtogi.png";
import v4 from "../assets/vastu-section/v4.png";
export default function VastuSection() {
  const [activeElement, setActiveElement] = useState(0);

  // Auto-rotate through elements every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveElement((prev) => (prev + 1) % vastuElements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const vastuElements = [
    {
      name: "Air (Vayu)",
      icon: <Wind size={24} />,
      description:
        "Represents movement and breath in our designs, creating spaces where energy flows freely and naturally.",
      principle:
        "Our north-facing spaces harness positive energy flow, bringing vitality through carefully positioned windows and open floor plans.",
      image: "/api/placeholder/800/500",
    },
    {
      name: "Water (Jal)",
      icon: <Droplet size={24} />,
      description:
        "Embodies tranquility and purity, reflected in our water features and northeast-positioned elements.",
      principle:
        "Water features in the northeast bring prosperity, while carefully positioned bathrooms maintain energetic balance.",
      image: "/api/placeholder/800/500",
    },
    {
      name: "Light (Agni)",
      icon: <Sunrise size={24} />,
      description:
        "The sacred fire element illuminates our spaces, bringing warmth and transformation through thoughtful lighting design.",
      principle:
        "Southeast-facing kitchens and carefully positioned lighting systems honor the ancient principles of light and energy.",
      image: "/api/placeholder/800/500",
    },
    {
      name: "Space (Akasha)",
      icon: <Feather size={24} />,
      description:
        "The ether that connects all elements, represented in our designs through deliberate negative space and proportions.",
      principle:
        "Center spaces (Brahmasthan) remain open to facilitate energy movement throughout the structure, honoring ancient spatial wisdom.",
      image: "/api/placeholder/800/500",
    },
  ];


  return (
    <div className="bg-black text-white">
      <div className="container lg:px-8 mx-auto px-4 py-14">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-0 md:pr-16 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              Comprehensive Services,
              <br />
              <span className="font-bold">Expert Solutions</span>
            </h2>

            <p className="text-gray-300 mb-6">
              We provide end-to-end support across architecture, design, and
              engineering with a focus on innovation and precision.
            </p>

            <p className="text-gray-300 mb-6">
              Our expertise covers{" "}
              <span className="font-semibold">Architectural Consulting</span>,{" "}
              <span className="font-semibold">Interior Design</span>, and{" "}
              <span className="font-semibold">Engineering Services</span>{" "}
              tailored to meet client needs at every stage.
            </p>

            <p className="text-gray-300 mb-6">
              We also specialize in{" "}
              <span className="font-semibold">Project Management</span> and{" "}
              <span className="font-semibold">Urban Planning</span>, ensuring
              projects are delivered with efficiency, quality, and vision.
            </p>

            <p className="text-gray-300 mb-8">
              Our goal is to create spaces that not only meet functional
              requirements but also enhance the way people live, work, and
              interact with their environment.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src={v1}
              alt="Cultural design element"
              className="border border-white/50 h-48 object-cover"
            />
            <img
              src={v2}
              alt="Cultural design element"
              className="border border-white/50 h-48 object-cover mt-8"
            />
            <img
              src={v3}
              alt="Cultural design element"
              className="border border-white/50 h-48 object-cover"
            />
            <img
              src={v4}
              alt="Cultural design element"
              className="border border-white/50 h-48 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
