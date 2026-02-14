import React from "react";
import Marquee from "react-fast-marquee";

import upTourism from "../assets/clients/up-tourism.png";
import upGov from "../assets/clients/up-gov.png";
import indianOil from "../assets/clients/indian-oil.png";
import toyota from "../assets/clients/toyota.png";
import maruti from "../assets/clients/maruti.png";
import cds from "../assets/clients/cds.png";
import chetak from "../assets/clients/chetak.png";
import ktm from "../assets/clients/KTM-logo.png";
import hero from "../assets/clients/hero.png";
import hyundai from "../assets/clients/hyundai.png";
import lda from "../assets/clients/lda.png";
import gda from "../assets/clients/gda.png";
import kda from "../assets/clients/kda.png";
import uprnn from "../assets/clients/uprnn.png";
import mh from "../assets/clients/mh.png";

const clients = [
  { name: "UP Tourism", logo: upTourism },
  { name: "UP Government", logo: upGov },
  { name: "Indian Oil", logo: indianOil },
  { name: "Toyota", logo: toyota },
  { name: "Maruti Suzuki", logo: maruti },
  { name: "C&DS", logo: cds },
  { name: "KDA", logo: kda },
  { name: "Chetak", logo: chetak },
  { name: "KTM", logo: ktm },
  { name: "Hero", logo: hero },
  { name: "Hyundai", logo: hyundai },
  { name: "Maharashtra", logo: mh },
  { name: "UPRNN", logo: uprnn },
  { name: "Lucknow Development Authority", logo: lda },
  { name: "GDA", logo: gda },
];

const Clients = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden relative">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 mb-16 relative z-10">
        <div className="text-center space-y-3">
          <p className="text-gray-400 text-sm font-medium tracking-wider uppercase">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Clients</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Marquee pauseOnHover speed={40} gradient={false}>
          {clients.map((client, index) => (
            <div key={index} className="mx-4 group">
              <div className="bg-white rounded-2xl border border-gray-200 w-[240px] h-[160px] flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="block max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                  />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-purple-500/0 group-hover:from-red-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Clients;