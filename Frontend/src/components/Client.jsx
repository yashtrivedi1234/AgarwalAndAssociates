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
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Clients
        </h2>
      </div>

      {/* speed={50}: Controls how fast it moves
         pauseOnHover={true}: Stops when you mouse over
         gradient={true}: Adds a nice fade effect on the sides
      */}
      <div className="py-4">
        <Marquee
          pauseOnHover={true}
          speed={50}
          gradient={true}
          gradientColor="249, 250, 251"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center group"
            >
              {/* No cards, no borders, just the image properly sized */}
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 w-auto object-cover transition-all duration-300 cursor-pointer group-hover:grayscale grayscale-0"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
