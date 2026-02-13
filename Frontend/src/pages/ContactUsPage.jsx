import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";

export default function ContactUsPage() {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
    setError(null);
    try {
      setFormStatus({ loading: true });
      const response = await axios.post(
        `${backend_url}/inquiry/save`,
        formState
      );
      setFormStatus({ submitted: true });
      console.log(response);
      alert("Your Form Has Been Submitted!");
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError("Something Went Wrong , Try Later !");
    } finally {
      setFormStatus({ loading: false });
    }
  };

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "0522-4062110",
      details: "Monday to Friday, 9am to 6pm",
      link: "tel:0522 4062110",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "associatesagarwallko@gmail.com",
      details: "We'll respond within 24 hours",
      link: "mailto:associatesagarwallko@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "HIG-42 Sector-E, Aliganj, Lucknow",
      details: "Find us on Google Maps",
      link: "https://maps.app.goo.gl/o5pdPpz7rtbvcN1N8",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb
        title="Contact Us"
        items={breadcrumbItems}
        // bgImage="/api/placeholder/1920/600"
      />

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:py-12 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question, feedback, or need assistance? We're here to help.
            Reach out to us using any of the methods below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-4 mb-10">
          {contactMethods.map((method, index) => (
            <a
              aria-label={method.title}
              href={method.link}
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group border-b-4 border-transparent hover:border-red-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-lg text-red-600 font-medium mb-1">
                {method.content}
              </p>
              <p className="text-sm text-gray-500">{method.details}</p>
            </a>
          ))}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="col-span-3 bg-white rounded-2xl shadow-lg md:p-6 p-4 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
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
                  onClick={() =>
                    setFormStatus({ submitted: false, loading: false })
                  }
                  className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300"
                >
                  Send Another Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="text-lg font-medium text-center text-red-600">
                    {error}
                  </div>
                )}
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    disabled={formStatus.loading}
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {formStatus.loading ? "Sending.." : "Send Message"}
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

          {/* Business Info */}
          <div className="lg:col-span-2 col-span-3 space-y-8 ">
            {/* Hours */}
            <div className="bg-white  rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
              <div className="flex items-start mb-5">
                <div className="bg-red-50 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Business Hours
                  </h4>
                  <p className="text-gray-500 text-sm">When you can reach us</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-red-600">Closed</span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-lg lg:p-8 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-5">
                Frequently Asked Questions
              </h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">
                    How quickly will I get a response?
                  </h5>
                  <p className="text-sm text-gray-600">
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-1">
                    Do you offer support on weekends?
                  </h5>
                  <p className="text-sm text-gray-600">
                    Limited support is available on Saturdays. For urgent
                    matters, please use our priority email.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-1">
                    Can I schedule a call with your team?
                  </h5>
                  <p className="text-sm text-gray-600">
                    Yes! Use our form to request a call and we'll arrange a time
                    that works for both parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="lg:mt-16 mt-10 bg-white rounded-2xl shadow-lg lg:p-6 p-4 overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Our Location
          </h3>
          <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden lg:h-96">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5013528711643!2d80.93925357468287!3d26.88757947666216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999562b42ee1ea1%3A0xc9ab179186eddb10!2sAgarwal%20and%20associates!5e0!3m2!1sen!2sin!4v1746380775936!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
