import React, { useState } from 'react';
import { Star, Quote, User, Building, Calendar } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

// Sample testimonial data for the architecture firm
const testimonials = [
    {
      id: 1,
      name: "Riya Sharma",
      position: "Property Developer",
      project: "Skyline Residency, Mumbai",
      date: "March 2025",
      image: "https://picsum.photos/200/200?random=1",
      rating: 5,
      text: "The team delivered an extraordinary vision for our commercial space. Their attention to sustainable materials and natural light transformed the building into a landmark that has increased our property value by 40%."
    },
    {
      id: 2,
      name: "Arjun Mehta",
      position: "Homeowner",
      project: "Lotus Villa, Pune",
      date: "January 2025",
      image: "https://picsum.photos/200/200?random=2",
      rating: 5,
      text: "Our dream home became a reality thanks to their innovative approach. They perfectly balanced modern design elements with the natural surroundings, creating spaces that feel both luxurious and deeply connected to the landscape."
    },
    {
      id: 3,
      name: "Ananya Iyer",
      position: "Museum Director",
      project: "Chennai Modern Art Museum",
      date: "February 2025",
      image: "https://picsum.photos/200/200?random=3",
      rating: 5,
      text: "The renovation of our gallery spaces exceeded all expectations. Their understanding of how visitors interact with exhibits informed every design decision, resulting in a space that enhances the art experience."
    },
    {
      id: 4,
      name: "Vikram Singh",
      position: "Restaurant Owner",
      project: "The Royal Tandoor, Jaipur",
      date: "November 2024",
      image: "https://picsum.photos/200/200?random=4",
      rating: 4,
      text: "From concept to completion, they delivered a restaurant space that perfectly captures our culinary vision. The interplay between indoor and outdoor dining areas has been particularly praised by our customers."
    },
    {
      id: 5,
      name: "Priya Patel",
      position: "City Council Member",
      project: "Ahmedabad Community Center",
      date: "December 2024",
      image: "https://picsum.photos/200/200?random=5",
      rating: 5,
      text: "Their thoughtful approach to public architecture created a space that truly serves our diverse community. The building is not only beautiful but highly functional, with exceptional accessibility features."
    },
    {
      id: 6,
      name: "Rohan Gupta",
      position: "Tech Company CEO",
      project: "Innovation Hub, Bangalore",
      date: "October 2024",
      image: "https://picsum.photos/200/200?random=6",
      rating: 5,
      text: "Working with this firm was transformative for our company culture. The new headquarters they designed has improved collaboration, creativity, and employee satisfaction in measurable ways."
    },
    {
      id: 7,
      name: "Neha Kapoor",
      position: "Boutique Owner",
      project: "Silk Avenue Studio, Surat",
      date: "September 2024",
      image: "https://picsum.photos/200/200?random=7",
      rating: 4,
      text: "Their creative designs elevated the aesthetics of our store, providing a luxurious shopping experience for our clients while maintaining functional space optimization."
    },
    {
      id: 8,
      name: "Amit Desai",
      position: "School Principal",
      project: "Greenfield International School, Delhi",
      date: "August 2024",
      image: "https://picsum.photos/200/200?random=8",
      rating: 5,
      text: "Their commitment to blending modern architecture with child-centric design helped us build a campus that enhances both learning and safety for our students."
    },
    {
      id: 9,
      name: "Sanya Malhotra",
      position: "Hotel Manager",
      project: "The Heritage Palace, Udaipur",
      date: "July 2024",
      image: "https://picsum.photos/200/200?random=9",
      rating: 5,
      text: "They brilliantly fused traditional Rajasthani heritage with modern comforts. Our guests are always amazed by the ambiance and the thoughtful design choices."
    },
    {
      id: 10,
      name: "Karan Verma",
      position: "Event Planner",
      project: "The Grand Pavilion, Hyderabad",
      date: "June 2024",
      image: "https://picsum.photos/200/200?random=10",
      rating: 4,
      text: "Their versatile space design has helped us host events ranging from weddings to conferences, all while providing an elegant and practical layout for every occasion."
    }
  ];
  
  

export default function TestimonialsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  // Create a function to render the rating stars
  const renderRating = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "fill-red-400 text-red-400" : "text-gray-300"} 
      />
    ))
  }

  return (
    <>
      <Breadcrumb 
      title="Client Testimonials" 
      items={[
        { name: "Testimonial", path: "/testimonials" },
      ]}
      />
    <div className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              onMouseEnter={() => setActiveTestimonial(testimonial.id)}
              onMouseLeave={() => setActiveTestimonial(null)}
            >
          
              
              {/* Card Body */}
              <div className="p-6">
               
                
                {/* Rating */}
                <div className="flex mb-4">
                  {renderRating(testimonial.rating)}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-stone-700 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {/* Hover Effect */}
              <div 
                className={`absolute inset-0 bg-stone-900/90 flex items-center justify-center p-4 transition-all duration-500 ${
                  activeTestimonial === testimonial.id ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="text-center">
                  <Quote size={20} className="mx-auto mb-2 text-stone-300" />
                  <p className="text-white  italic mb-2">{testimonial.text}</p>
                  <div className="w-16 h-1 bg-stone-400 mx-auto "></div>
                  <h4 className="text-xl font-medium text-white">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}