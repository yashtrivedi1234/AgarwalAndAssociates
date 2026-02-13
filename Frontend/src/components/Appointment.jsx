import React, { useState } from "react";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  MessageSquare,
  X,
  CheckCircle,
  Home,
  Ruler,
  Clock,
  Users,
} from "lucide-react";
import axios from "axios";

export default function Appointment() {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    projectType: "",
    plotSize: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      switch (name) {
        case "name":
          newErrors.name = value.trim() ? "" : "Full name is required";
          break;
        case "email":
          if (!value.trim()) {
            newErrors.email = "Email address is required";
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            newErrors.email = "Email address is invalid";
          } else {
            newErrors.email = "";
          }
          break;
        case "phone":
          if (!value.trim()) {
            newErrors.phone = "Phone number is required";
          } else if (!/^[6-9]\d{9}$/.test(value)) {
            newErrors.phone = "Phone must start with 6-9 and be 10 digits";
          } else {
            newErrors.phone = "";
          }
          break;
        case "message":
          newErrors.message = value.trim() ? "" : "Message is required";
          break;
        default:
          break;
      }
      return newErrors;
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      formErrors.name = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email address is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      formErrors.phone = "Phone must start with 6-9 and be 10 digits";
      isValid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${backend_url}/inquiry/save`,
        formData
      );
console.log(response)
      if (response) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (err) {
      alert("Network error, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      service: "",
      projectType: "",
      plotSize: "",
      budget: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="fixed -right-20 top-1/2 transform -translate-y-1/2 z-50 rotate-90">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white
           px-3 py-2 rounded-full shadow-2xl transform transition-all duration-300 flex items-center"
        >
          <Calendar className="h-5 w-5 mr-2" />
          <span className="font-semibold">Book Free Consulting</span>
        </button>
      </div>

      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-xl w-full max-h-[95vh] overflow-y-auto"
          >
            {!isSubmitted ? (
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Let's Discuss Your Project
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                <form className="space-y-2" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter Your Full Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter Your 10 Digit Number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City, Country"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Services
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Select a Service</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Design</option>
                        <option value="interior">Interior Design</option>
                        <option value="renovation">Renovation</option>
                        <option value="consultation">Consultation Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Select Project Type</option>
                        <option value="new-construction">
                          New Construction
                        </option>
                        <option value="renovation">Renovation</option>
                        <option value="extension">Extension</option>
                        <option value="interior-only">Interior Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Plot Size
                      </label>
                      <input
                        type="text"
                        name="plotSize"
                        value={formData.plotSize}
                        onChange={handleInputChange}
                        placeholder="e.g., 1000 sq ft"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="5-10-lakh">₹5-10 Lakh</option>
                        <option value="10-25-lakh">₹10-25 Lakh</option>
                        <option value="25-50-lakh">₹25-50 Lakh</option>
                        <option value="50-lakh-plus">₹50 Lakh+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows="2"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                    ></textarea>
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 rounded-lg font-semibold transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <MessageSquare className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-600 mb-6">
                  Your consultation request has been submitted successfully.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 text-red-800">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">Next Steps:</span>
                  </div>
                  <p className="text-red-700 mt-2">
                    Our team will confirm your consultation date and time within
                    24 hours. We'll contact you via phone or email to schedule
                    the best time for your free consultation.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-1.5 rounded-lg font-semibold transition-all duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
