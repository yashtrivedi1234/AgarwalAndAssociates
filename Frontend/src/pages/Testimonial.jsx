// import React, { useState } from 'react';
// import { Star, Quote, User, Building, Calendar } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

// // Sample testimonial data for the architecture firm
// const testimonials = [
//     {
//       id: 1,
//       name: "Riya Sharma",
//       position: "Property Developer",
//       project: "Skyline Residency, Mumbai",
//       date: "March 2025",
//       image: "https://picsum.photos/200/200?random=1",
//       rating: 5,
//       text: "The team delivered an extraordinary vision for our commercial space. Their attention to sustainable materials and natural light transformed the building into a landmark that has increased our property value by 40%."
//     },
//     {
//       id: 2,
//       name: "Arjun Mehta",
//       position: "Homeowner",
//       project: "Lotus Villa, Pune",
//       date: "January 2025",
//       image: "https://picsum.photos/200/200?random=2",
//       rating: 5,
//       text: "Our dream home became a reality thanks to their innovative approach. They perfectly balanced modern design elements with the natural surroundings, creating spaces that feel both luxurious and deeply connected to the landscape."
//     },
//     {
//       id: 3,
//       name: "Ananya Iyer",
//       position: "Museum Director",
//       project: "Chennai Modern Art Museum",
//       date: "February 2025",
//       image: "https://picsum.photos/200/200?random=3",
//       rating: 5,
//       text: "The renovation of our gallery spaces exceeded all expectations. Their understanding of how visitors interact with exhibits informed every design decision, resulting in a space that enhances the art experience."
//     },
//     {
//       id: 4,
//       name: "Vikram Singh",
//       position: "Restaurant Owner",
//       project: "The Royal Tandoor, Jaipur",
//       date: "November 2024",
//       image: "https://picsum.photos/200/200?random=4",
//       rating: 4,
//       text: "From concept to completion, they delivered a restaurant space that perfectly captures our culinary vision. The interplay between indoor and outdoor dining areas has been particularly praised by our customers."
//     },
//     {
//       id: 5,
//       name: "Priya Patel",
//       position: "City Council Member",
//       project: "Ahmedabad Community Center",
//       date: "December 2024",
//       image: "https://picsum.photos/200/200?random=5",
//       rating: 5,
//       text: "Their thoughtful approach to public architecture created a space that truly serves our diverse community. The building is not only beautiful but highly functional, with exceptional accessibility features."
//     },
//     {
//       id: 6,
//       name: "Rohan Gupta",
//       position: "Tech Company CEO",
//       project: "Innovation Hub, Bangalore",
//       date: "October 2024",
//       image: "https://picsum.photos/200/200?random=6",
//       rating: 5,
//       text: "Working with this firm was transformative for our company culture. The new headquarters they designed has improved collaboration, creativity, and employee satisfaction in measurable ways."
//     },
//     {
//       id: 7,
//       name: "Neha Kapoor",
//       position: "Boutique Owner",
//       project: "Silk Avenue Studio, Surat",
//       date: "September 2024",
//       image: "https://picsum.photos/200/200?random=7",
//       rating: 4,
//       text: "Their creative designs elevated the aesthetics of our store, providing a luxurious shopping experience for our clients while maintaining functional space optimization."
//     },
//     {
//       id: 8,
//       name: "Amit Desai",
//       position: "School Principal",
//       project: "Greenfield International School, Delhi",
//       date: "August 2024",
//       image: "https://picsum.photos/200/200?random=8",
//       rating: 5,
//       text: "Their commitment to blending modern architecture with child-centric design helped us build a campus that enhances both learning and safety for our students."
//     },
//     {
//       id: 9,
//       name: "Sanya Malhotra",
//       position: "Hotel Manager",
//       project: "The Heritage Palace, Udaipur",
//       date: "July 2024",
//       image: "https://picsum.photos/200/200?random=9",
//       rating: 5,
//       text: "They brilliantly fused traditional Rajasthani heritage with modern comforts. Our guests are always amazed by the ambiance and the thoughtful design choices."
//     },
//     {
//       id: 10,
//       name: "Karan Verma",
//       position: "Event Planner",
//       project: "The Grand Pavilion, Hyderabad",
//       date: "June 2024",
//       image: "https://picsum.photos/200/200?random=10",
//       rating: 4,
//       text: "Their versatile space design has helped us host events ranging from weddings to conferences, all while providing an elegant and practical layout for every occasion."
//     }
//   ];
  
  

// To use the TestimonialsPage component, uncomment this block and remove the other default export below.
// export default function TestimonialsPage() {
//   const [activeTestimonial, setActiveTestimonial] = useState(null);

//   // Create a function to render the rating stars
//   const renderRating = (rating) => {
//     return Array(5).fill(0).map((_, i) => (
//       <Star 
//         key={i} 
//         size={16} 
//         className={i < rating ? "fill-red-400 text-red-400" : "text-gray-300"} 
//       />
//     ))
//   }

//   return (
//     <>
//       <Breadcrumb 
//       title="Client Testimonials" 
//       items={[
//         { name: "Testimonial", path: "/testimonials" },
//       ]}
//       />
//     <div className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
       

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="relative bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
//               onMouseEnter={() => setActiveTestimonial(testimonial.id)}
//               onMouseLeave={() => setActiveTestimonial(null)}
//             >
          
              
//               {/* Card Body */}
//               <div className="p-6">
               
                
//                 {/* Rating */}
//                 <div className="flex mb-4">
//                   {renderRating(testimonial.rating)}
//                 </div>
                
//                 {/* Testimonial Text */}
//                 <p className="text-stone-700 leading-relaxed">
//                   {testimonial.text}
//                 </p>
//               </div>

//               {/* Hover Effect */}
//               <div 
//                 className={`absolute inset-0 bg-stone-900/90 flex items-center justify-center p-4 transition-all duration-500 ${
//                   activeTestimonial === testimonial.id ? "opacity-100" : "opacity-0 pointer-events-none"
//                 }`}
//               >
//                 <div className="text-center">
//                   <Quote size={20} className="mx-auto mb-2 text-stone-300" />
//                   <p className="text-white  italic mb-2">{testimonial.text}</p>
//                   <div className="w-16 h-1 bg-stone-400 mx-auto "></div>
//                   <h4 className="text-xl font-medium text-white">{testimonial.name}</h4>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }




export default function GoogleMapEmbed() {
  return (
    <>
      <Breadcrumb 
        title="Client Testimonials" 
        items={[{ name: "Home", path: "/" }, { name: "Testimonials", path: "/testimonials" }]} 
      />
      <div className="w-full min-h-screen bg-white pt-24 md:pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                ⭐ Trusted by Thousands
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Customer <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Reviews</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-red-500 rounded"></div>
              <div className="w-8 h-1 bg-red-600 rounded"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-transparent to-red-800 rounded"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
              Discover authentic experiences from our valued customers
            </p>
          </div>

          {/* Reviews Embed Container */}
          <div className="relative w-full pb-[55%] md:pb-[40%] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-50 to-white border-2 border-red-200 hover:shadow-[0_20px_60px_-15px_rgba(255,0,0,0.2)] hover:scale-[1.01] transition-all duration-500">
            <iframe 
              src="https://widget.tagembed.com/316966?website=1" 
              allow="fullscreen"
              loading="lazy"
              title="Customer Reviews Feed"
              className="absolute top-0 left-0 w-full h-full border-0"
            />
            
            {/* Decorative Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-transparent rounded-bl-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-800/10 to-transparent rounded-tr-full pointer-events-none"></div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 max-w-4xl mx-auto">
            <div className="group text-center p-6 md:p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-100 hover:border-red-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-base md:text-lg text-gray-700 font-medium">Happy Customers</div>
            </div>

            <div className="group text-center p-6 md:p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-100 hover:border-red-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2">4.9</div>
              <div className="text-base md:text-lg text-gray-700 font-medium">Average Rating</div>
            </div>

            <div className="group text-center p-6 md:p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-100 hover:border-red-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-base md:text-lg text-gray-700 font-medium">Satisfaction</div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-70">
            <div className="text-gray-500 text-sm font-semibold">TRUSTED BY</div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Verified Reviews</span>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Secure & Private</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}