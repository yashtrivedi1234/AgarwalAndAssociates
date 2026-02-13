// import React, { useState } from 'react';
// import {
//   ChevronRight,
//   ArrowRight,
//   Sparkles,
// } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ServiceData from '../Data/ServiceData';
// import InquiryModal from './InquiryModal';
// import pattern from '../assets/pattern.webp';

// export default function ServiceSection() {
//   const [hoveredService, setHoveredService] = useState(null);
//   const [activeService, setActiveService] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleServiceClick = (serviceId) => {
//     setActiveService(services.find(service => service.id === serviceId));
//   };

//   const handleBackClick = () => {
//     setActiveService(null);
//   };

//   const ServiceCard = ({ service, hoveredService, setHoveredService, handleServiceClick }) => {
//     const isHovered = hoveredService === service.id;

//     return (
//       <div
//         className="relative border border-gray-200 overflow-hidden rounded-xl py-4 px-6 transition-all duration-500 cursor-pointer flex flex-col h-full group"
//         style={{
//           background: "white",
//           boxShadow: isHovered
//             ? "0 20px 30px -10px rgba(249, 168, 37, 0.15)"
//             : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//         }}
//         onMouseEnter={() => setHoveredService(service.id)}
//         onMouseLeave={() => setHoveredService(null)}
//         onClick={() => handleServiceClick(service.id)}
//         role="button"
//         aria-label={`View details about ${service.title}`}
//       >
//         {/* Pattern background */}
//         <div
//           className="absolute inset-0 opacity-60 transition-opacity duration-500 "
//           style={{ backgroundImage: `url(${pattern})`, zIndex: 1 }}
//         ></div>

//         {/* Top accent bar */}
//         <div
//           className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black to-black transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"
//           style={{ zIndex: 2 }}
//         ></div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col h-full">
//           <div className="mb-6">
//             <div className="inline-flex p-3 text-center rounded-full h-14 w-14  transition-all duration-500 bg-black text-white">
//               {service.icon || <Sparkles size={22} />}
//             </div>
//           </div>

//           <div className="relative">
//             <h3 className="text-xl font-bold  text-gray-800 transition-colors duration-300 group-hover:text-black">
//               {service.title}
//             </h3>
//             {/* <div className="absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-500 ease-out w-0 group-hover:w-16" /> */}
//           </div>

//           <p className="text-gray-600 my-2 mb-4 flex-grow leading-relaxed">
//             {service.shortDesc}
//           </p>

//           <div className="flex items-center text-black font-medium mt-auto">
//             <span className="mr-2 transition-all duration-300">Learn more</span>
//             <div
//               className={`flex items-center justify-center w-6 h-6 rounded-full bg-black/20 transition-all duration-500 ${
//                 isHovered
//                   ? 'bg-black text-white translate-x-1'
//                   : 'text-black'
//               }`}
//             >
//               <ArrowRight size={14} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const ServiceDetail = ({ service }) => (
//     <div className="bg-white rounded-lg lg:p-8 md:p-6 p-4 shadow-lg max-w-7xl mx-auto">
//       <button
//         aria-label="All Services"
//         onClick={handleBackClick}
//         className="mb-6 flex items-center text-black hover:text-black transition-all"
//       >
//         <ChevronRight className="rotate-180 mr-1" size={18} />
//         <span>Back to all services</span>
//       </button>

//       <div className="flex items-center mb-6">
//         <div className="bg-red-100 p-3 rounded-full text-black mr-4">
//           {service.icon}
//         </div>
//         <h2 className="text-3xl font-bold">{service.title}</h2>
//       </div>

//       <p className="text-lg text-gray-700 mb-8 border-l-4 border-black pl-4">
//         {service.description}
//       </p>

//       <div className="grid md:grid-cols-2 lg:gap-8 gap-4 mb-8">
//         <div className="bg-gray-50 lg:p-6 p-3 rounded-lg">
//           <h3 className="text-xl font-semibold mb-4 text-black">What We Offer</h3>
//           <ul className="space-y-3">
//             {service.features.map((feature, index) => (
//               <li key={index} className="flex items-start">
//                 <div className="mt-1 mr-3 text-black">
//                   <ChevronRight size={16} />
//                 </div>
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="bg-gray-50 lg:p-6 p-3 rounded-lg">
//           <h3 className="text-xl font-semibold mb-4 text-black">Our Process</h3>
//           <ol className="space-y-3">
//             {service.process.map((step, index) => (
//               <li key={index} className="flex items-start">
//                 <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 shrink-0">
//                   {index + 1}
//                 </div>
//                 <span className="mt-1">{step}</span>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>

//       <div className="bg-red-50 p-6 rounded-lg border border-red-100">
//         <h3 className="text-xl font-semibold mb-3 text-black">Ready to Get Started?</h3>
//         <p className="mb-4">
//           Contact our team to discuss how our {service.title.toLowerCase()} services can bring your vision to life.
//         </p>
//         <button
//           aria-label="Request Consultation"
//           onClick={() => setModalOpen(true)}
//           className="cursor-pointer bg-black hover:bg-black text-white py-2 px-6 rounded-lg transition-colors duration-300"
//         >
//           Request Consultation
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <InquiryModal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />

//       <div className="min-h-screen bg-gray-50">
//         <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//           {activeService ? (
//             <ServiceDetail service={activeService} />
//           ) : (
//             <>
//               <div className="text-center mb-16">
//                 <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Services</h2>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   Comprehensive architectural solutions tailored to your vision, from concept to completion
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {services.map((service) => (
//                   <ServiceCard
//                     key={service.id}
//                     service={service}
//                     hoveredService={hoveredService}
//                     setHoveredService={setHoveredService}
//                     handleServiceClick={handleServiceClick}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </main>
//       </div>
//     </>
//   );
// }

import React, { useState } from 'react';
import bg from '../assets/services/architectural.webp'
export default function ServicesList() {
  const [activeService, setActiveService] = useState(null);
const navigate = useNavigate()
  const handleServiceClick = (link) => {
   navigate(`/services/${link}`)
  };

  return (
    <section className="container mx-auto px-6 py-16 relative scroll-m-20" id='services' >
     

      {/* Main Content */}
      <div className="flex  space-x-12 justify-center items-center ">
       {/* Left Section */}
<div
  className="w-1/3 min-h-[350px] bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: `url(${bg})`
  }}
>
  <div className="bg-black bg-opacity-80 p-6 rounded text-white max-w-[90%]">
    <h2 className="lg:text-4xl text-2xl font-bold mb-4">Our Services</h2>
    <p className="lg:text-lg text-sm">
      Innovative design solutions across multiple disciplines, creating transformative experiences and spaces.
    </p>
  </div>
</div>



        {/* Right Section */}
        <div className="w-2/3 relative ">
          <div className="space-y-4">
            {ServiceData.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                onMouseLeave={() => setActiveService(null)}
                onClick={() => handleServiceClick(service.id)}
                className="
                  block relative group border-b border-gray-300 pb-4 
                  transition-all duration-300 ease-in-out cursor-pointer
                  hover:pl-4 hover:border-black
                "
              >
                <div className="flex items-center justify-between">
                  <h3 className="lg:text-3xl text-xl font-semibold text-gray-800 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-gray-500 group-hover:text-black transition-colors">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Hover Image Popup */}
          {activeService && (
            <div 
              className="
                fixed hidden md:block top-1/2 right-20 transform -translate-y-1/2
                w-[250px] h-[250px] 
                bg-white shadow-2xl  overflow-hidden
                transition-all duration-300 ease-in-out
                z-50 border border-gray-200
              "
            >
              <img 
                src={activeService.image} 
                alt={activeService.title} 
                className="w-full h-full object-cover grayscal"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <h4 className="text-xl font-semibold">{activeService.title}</h4>
                <p className="text-sm opacity-80">{activeService.description}</p>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}