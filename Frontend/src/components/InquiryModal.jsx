import React, { useState } from 'react';
import axios from 'axios';

const InquiryModal = ({ isOpen, closeModal }) => {
  const backend_url = import.meta.env.VITE_BACKEND_URL
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    projectType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Validate required fields
    if (!formData.name.trim()) {
      formErrors.name = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email address is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      formErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      formErrors.phone = 'Phone must start with 6-9 and be 10 digits';
      isValid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(`${backend_url}/inquiry/agarwal/save`, formData);
        setSubmitStatus('success');
        setTimeout(() => {
          closeModal();
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            location: '',
            projectType: '',
            message: '',
          });
          setSubmitStatus(null);
        }, 4000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;
  
  return (
    <>
      {/* Full Screen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/70 flex items-center justify-center p-2 lg:p-4" onClick={closeModal}>
          <div className="bg-white w-full max-w-xl lg:max-h-[95vh] max-h-[80vh] overflow-y-auto rounded-xl animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 lg:px-6 px-3">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-gray-900 lora">Let's Discuss Your Project</h2>
                <button 
                aria-label='close'
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-200 bg-gray-100 cursor-pointer transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-200 text-green-800 p-3 rounded mb-4">
                  Your inquiry has been successfully submitted. We'll get back to you soon!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded mb-4">
                  There was an error submitting your form. Please try again later.
                </div>
              )}
              
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`p-2 rounded-md w-full bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded- focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all`}
                      placeholder="Enter Your Full Name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`p-2 rounded-md w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded- focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all`}
                      placeholder="email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`p-2 rounded-md w-full bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded- focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all`}
                      placeholder="Enter Your 10 Digit Number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Services</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="p-2 rounded-md w-full bg-gray-50 border border-gray-300 rounded- focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all appearance-none"
                    >
                      <option value="" selected>
                        Select a Service
                      </option>
                      <option value="architectural-consultant">
                        Architectural Consultant
                      </option>
                      <option value="interior-design">Interior Design</option>
                      <option value="engineering-services">
                        Engineering Services
                      </option>
                      <option value="vastu-services">Vastu Services</option>
                      <option value="project-management">
                        Project Management
                      </option>
                      <option value="urban-planning">Urban Planning</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Project Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="p-2 rounded-md w-full bg-gray-50 border border-gray-300 rounded- focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
                      placeholder="City, Country"
                    />
                  </div>
                
              
                
            
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Project Type</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="p-2 rounded-md w-full bg-gray-50 border border-gray-300 rounded- focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all appearance-none"
                    >
                      <option value="">Select Project Type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="institutional">Institutional</option>
                      <option value="industrial">Industrial</option>
                      <option value="mixed-use">Mixed-Use</option>
                      <option value="landscape">Landscape</option>
                      <option value="urban">Urban Design</option>
                    </select>
                  </div>
          </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`p-2 rounded-md min-h-24 w-full bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded- h-16 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all`}
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                
            
                
                <button 
                 aria-label='sumbit'
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 rounded- text-white font-semibold transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InquiryModal;