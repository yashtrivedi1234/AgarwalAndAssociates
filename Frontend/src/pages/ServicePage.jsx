import React, { useEffect, useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link, useNavigate, useParams } from 'react-router-dom';
import services from '../Data/ServiceData'
// Main App Component
export default function ServicePage() {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeService, setActiveService] = useState(null);

 

  const {id} = useParams();
  useEffect(() => {
    if (id) {
      const foundService = services.find(service => service.id === id);
      setActiveService(foundService || null);
    }
    
  }, [id]);
  

  const handleServiceClick = (serviceId) => {
    if(serviceId){
      setActiveService(services.find(service => service.id === serviceId));
    }
    else{
      setActiveService(null)
    }
  };

  const navigate = useNavigate()
  // Handle back button click
  const handleBackClick = () => {
    navigate('/services')
    setActiveService(null);
  };

  // Service card component
  const ServiceCard = ({ service }) => (
    <div 
      className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col h-full"
      onMouseEnter={() => setHoveredService(service.id)}
      onMouseLeave={() => setHoveredService(null)}
      onClick={() => handleServiceClick(service.id)}
    >
      <div className="text-red-600">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{service.shortDesc}</p>
      <div className={`flex items-center text-red-600 transition-all duration-300 ${hoveredService === service.id ? 'translate-x-1' : ''}`}>
        <span className="mr-2">Learn more</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );

  const ServiceDetail = ({ service }) => (
    <div className="bg-white rounded-lg lg:p-8 p-4 shadow-lg max-w-5xl mx-auto">
      <button 
        onClick={handleBackClick}
        className="mb-6 flex items-center text-red-600 hover:text-red-800 transition-all"
      >
        <ChevronRight className="rotate-180 mr-1" size={18} />
        <span>Back to all services</span>
      </button>
      
      <div className="flex items-center mb-6">
        <div className="bg-red-100 p-3 rounded-full text-red-600 mr-4">
          {service.icon}
        </div>
        <h2 className="text-3xl font-bold">{service.title}</h2>
      </div>
      
      <p className="text-lg text-gray-700 mb-8 border-l-4 border-red-500 pl-4">
        {service.description}
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 lg:p-6 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-red-800">What We Offer</h3>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mt-1 mr-3 text-red-600">
                  <ChevronRight size={16} />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 lg:p-6 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-red-800">Our Process</h3>
          <ol className="space-y-3">
            {service.process.map((step, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 shrink-0">
                  {index + 1}
                </div>
                <span className="mt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      
    
    </div>
  );

  return (
    <>
      <Breadcrumb 
  title="Our Services" 
  items={[
    { name: "Services", path: "/services" },
  ]}
  />
    <div className="min-h-screen bg-gray-50">
   

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {activeService ? (
         <div className="">
  {/* Main Service Detail */}
  <div className='flex flex-col lg:flex-row gap-8'>
  <div className="w-full lg:w-2/3">
    <ServiceDetail service={activeService} />
  </div>

  {/* Sidebar - Other Services */}
  <div className="w-full lg:w-1/3 space-y-6">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">Other Services</h3>
    {services
      .filter(service => service.id !== activeService.id)
      .map(service => (
        <div
          key={service.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
          onClick={() => {
            handleServiceClick(service.id);
            navigate(`/services/${service.id}`);
          }}
        >
          <div className="text-red-600 mb-2">{service.icon}</div>
          <h4 className="text-lg font-semibold">{service.title}</h4>
          <p className="text-gray-600 text-sm line-clamp-3">{service.shortDesc}</p>
        </div>
      ))}
  </div>
  </div>
    <div className="bg-red-50 p-6  mt-6 rounded-lg border border-red-100">
        <h3 className="text-xl font-semibold mb-3 text-red-800">Ready to Get Started?</h3>
        <p className="mb-4">Contact our team to discuss how our services can bring your vision to life.</p>
        <Link to='/contact' className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition-colors duration-300">
          Request Consultation
        </Link>
      </div>
</div>

        ) : (
          <>
            {/* Services Hero Section */}
            <div className="text-center mb-16">
              {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2> */}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive architectural solutions tailored to your vision, from concept to completion
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team of experts is ready to help you create a tailored approach for your unique architectural project
              </p>
              <Link to='/contact' className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Contact Us Today
              </Link>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
     
    </div>
    </>
  );
}