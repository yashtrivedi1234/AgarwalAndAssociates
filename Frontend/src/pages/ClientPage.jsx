import React from "react";
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

const ClientPage = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section with a modern look */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            Trusted Partners
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our Valued Clients
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We are honored to have collaborated with these industry leaders and
            government bodies.
          </p>
          <div className="mt-6 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-16 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative w-full flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-24 w-full flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="
                    h-full w-auto max-w-[140px] object-contain 
                    grayscale opacity-70 
                    transition-all duration-500 ease-in-out
                    group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
                    /* This creates a shadow around the LOGO shape, not a box */
                    group-hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)]
                  "
                />
              </div>

              {/* Optional: Text appears on hover (remove if you want ONLY images) */}
              <span className="mt-4 text-sm font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA (Optional) */}
        <div className="mt-24 text-center">
          <p className="text-gray-500">
            Join our list of satisfied clients today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientPage;
