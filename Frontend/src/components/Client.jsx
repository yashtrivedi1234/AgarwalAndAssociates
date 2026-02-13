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
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Clients
        </h2>
      </div>

      <Marquee pauseOnHover speed={50} gradient={false}>
        {clients.map((client, index) => (
        <div className="mx-6 flex items-center justify-center">
  <div className="bg-white rounded-xl border shadow-sm w-[220px] h-[150px] flex items-center justify-center overflow-hidden">
    <img
      src={client.logo}
      alt={client.name}
      className="block w-full h-full object-contain p-2"
    />
  </div>
</div>

        ))}
      </Marquee>
    </section>
  );
};

export default Clients;
