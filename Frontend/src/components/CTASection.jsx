import { useState } from "react";
import { Send, ArrowRight, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaXTwitter } from "react-icons/fa6";

export default function CTASection() {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backend_url}/inquiry/agarwal/save`,
        formState
      );
      setFormStatus({ submitted: true });
      alert('Your Form Has Been Submitted!')
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.log(err)
      setError("Something Went Wrong , Try Later !");
    }
    finally{
      setFormStatus({ loading: false})
    }
  };

  return (
    <section className="relative py-8 lg:py-12 md:py-10 overflow-hidden">
      {/* Background with geometric patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-black opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-5 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-red-300 opacity-5 rounded-full"></div>

        {/* Diagonal line */}
        <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-50 to-transparent opacity-70"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
            Let's Bring Your Vision to Life
          </h2>
          {/* <div className="w-20 h-1 bg-black mx-auto mb-6"></div> */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a consultation
            and discover how Agarwal & Associates can create architectural
            solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Left Contact Info Panel */}
          <div className="lg:col-span-2 bg-gradient-to-br from-black to-black/90 text-white rounded-xl lg:p-8 p-4 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-white text-black bg-opacity-20 rounded-lg mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Call Us</h4>
                  <a href="tel:9335221186" className="mt-1 opacity-90">+91-9335221186</a>, <br/>
                  <a href="tel:9415113355" className="opacity-90">+91-9415113355</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-white text-black bg-opacity-20 rounded-lg mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email Us</h4>
                  <p className="mt-1 opacity-90">info@agarwalassociates.com</p>
                  <p className="opacity-90">projects@agarwal.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-white text-black bg-opacity-20 rounded-lg mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Visit Us</h4>
                  <a href="https://maps.app.goo.gl/o5pdPpz7rtbvcN1N8" className="mt-1 opacity-90">
                  HIG-42 Sector-E, Aliganj, Lucknow
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-medium text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4 text-black">
                <a aria-label="facebook"
                  href="#"
                  className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a aria-label="instagram"
                  href="#"
                  className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a aria-label="Twitter or X"
                  href="#"
                  className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300"
                >
                  <FaXTwitter size={20}/>
                </a>
                <a aria-label="youtube"
                  href="#"
                  className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="lg:p-8 p-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              {formStatus.submitted ? (
              <div className="flex flex-col items-center justify-center h-80 text-center">
                <div className="bg-green-100 rounded-full p-4 mb-6">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Thank you for reaching out!
                </h4>
                <p className="text-gray-600 mb-6">
                  We've received your message and will get back to you as soon
                  as possible.
                </p>
                <button
                aria-label="send another message"
                  onClick={() =>
                    setFormStatus({ submitted: false, loading: false })
                  }
                  className="flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300"
                >
                  Send Another Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (<div className="text-lg font-medium text-center text-black">
                  {error}
                </div>)}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      pattern="^[6-9]\d{9}$" 
                      title="Phone Number should be 10 digits and start with 6 to 9" 
                      inputMode="numeric" 
                      maxLength="10"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                      placeholder="Enter 10 Digit Phone Number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                      required
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

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                  aria-label="Submit"
                  disabled={formStatus.loading}
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-black transition-all duration-300 shadow-lg"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                   {formStatus.loading ? 'Sending..':'Send Message'} 
                    <span
                      className={`ml-2 transition-all duration-300 ${
                        isHovered ? "translate-x-1" : ""
                      }`}
                    >
                      <Send size={18} />
                    </span>
                  </button>
                </div>
              </form>
            )}
            </div>
          </div>
        </div>

        {/* Bottom Appointment Prompt */}
        <div className="mt-12 bg-gradient-to-r from-transparent to-black/5 rounded-2xl p-8 md:p-12 shadow-md">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="lg:text-2xl text-xl font-bold text-gray-900 mb-3">
                Schedule a Consultation
              </h3>
              <p className="text-gray-600 max-w-2xl">
                Interested in discussing your project in person? Our team of
                expert architects is available for one-on-one consultations to
                explore your vision.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
              aria-label="contact"
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-black text-white font-medium rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
