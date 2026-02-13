import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaLinkedin, FaPhone, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BlogData from "../Data/BlogData";
import cclogo from "../assets/ccogo-suhel.webp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogData } from "../redux/dataSlice";
const Footer = () => {
  const dispatch = useDispatch();
  const { blogData, error, status } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);
  return (
    <>
      <footer className="bg-black text-gray-200 lg:pt-14 md:pt-12 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-b pb-1 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
              <Link aria-label="about"
                to="/about"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                About Us
              </Link>
              </li>
              <li>
              <Link aria-label="services"
                to="/services"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Our Services
              </Link>
              </li>
              <li>
              <Link aria-label=""
                to="/projects"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Our Projects
              </Link>
              </li>
              <li>
              <Link
                to="/blog"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Our Blogs
              </Link>
              
              </li>
              <li>
              <Link aria-label="Li"
                to="/contact"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Contact Us
              </Link>
              </li>
              <li>
              <Link aria-label="Li"
                to="/privacy"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Privacy Policy
              </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-b pb-1 inline-block">
              Our Services
            </h3>
            <ul className="space-y-2">
            <li>
              <Link aria-label="Architectural Consultant"
                to="/services/architectural-consultant"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Architectural Consultant
              </Link>
              </li>
              <li>
              <Link aria-label="Interior Design"
                to="/services/interior-design"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Interior Design
              </Link>
              </li>
              <li>
              <Link aria-label=" Engineering Services"
                to="/services/engineering-services"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Engineering Services
              </Link>
              </li>
             
              <li>
              <Link aria-label="Project Management Services"
                to="/services/project-management"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Project Management
              </Link>
              </li>
              <li>
              <Link aria-label="Urban Planning"
                to="/services/urban-planning"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Urban Planning
              </Link>
              </li>
              <li>
              <a aria-label="Urban Planning"
                href="https://architectrajnish.in/admin"
                target="_blank"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
               Admin Login
              </a>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-b pb-1 inline-block">
              Latest Blogs
            </h3>
            <div className="space-y-4">
              {Array.isArray(blogData) &&
                blogData.length > 0 &&
                blogData?.slice(1, 4)?.map((blog, i) => (
                  <Link aria-label="Blog-details"
                    key={i}
                    to={`/blog-detail/${blog.slug}`}
                    className="flex items-start space-x-3 group cursor-pointer"
                  >
                    <img
                      src={blog.imageUrl}
                      alt="news"
                      className="w-14 aspect-square rounded group-hover:rounded-tl-2xl group-hover:rounded-br-2xl group-hove:scale-105 transition-all ease-in-out duration-500"
                    />
                    <div>
                      {/* <p className="text-sm text-gray-400"></p> */}
                      <p className="font-semibold text-white line-clamp-2 group-hover:text-white/70">
                        {blog.title}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-b pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
              <a aria-label="Phone number"
                href="tel:0522 4062110"
                target="_blank"
                className="flex items-center space-x-3"
              >
                {/* <Phone size={18} className="self-center"/> <span>+91-9415113355</span> */}
                <Phone size={18} className="self-center"/> <span>0522-4062110</span>
              </a>
              </li>
              {/* <li>
              <a aria-label="Phone number"
                href="tel:9335221186"
                target="_blank"
                className="flex items-center space-x-3"
              >
                <Phone size={18} className="self-center"/> <span>+91-9335221186</span>
              </a>
              </li> */}
              <li>
              <a aria-label="gmail"
                href="mailto:associatesagarwallko@gmail.com"
                target="_blank"
                className="flex items-center space-x-3"
              >
                <Mail size={18} className="self-center"/> <span>associatesagarwallko@gmail.com </span>
              </a>
              </li>
              <li>
              <a aria-label="map"
                href="https://maps.app.goo.gl/o5pdPpz7rtbvcN1N8"
                target="_blank"
                className="flex items-center space-x-3"
              >
                <MapPin size={20} className="self-center"/>{" "}
                <span>
                 HIG-42 Sector-E, Aliganj, Lucknow
                </span>
              </a>
              </li>
              <li>
                <div className="flex space-x-3">
                  <a aria-label="facebook"
                    href="https://www.facebook.com/profile.php?id=100081272239706"
                    target="_blank"
                    className="p-2 bg-white hover:bg-white/70 hover:scale-105 hover:rotate-12 transition-all duration-300 rounded-full text-black"
                  >
                    <FaFacebook size={18} />
                  </a>
                 
                  <a aria-label="Linkedin"
                    href="https://www.linkedin.com/in/architectrajnishagarwal/"
                    target="_blank"
                    className="p-2 bg-white hover:bg-white/70 hover:scale-105 hover:rotate-12 transition-all duration-300 rounded-full text-black"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a  aria-label="Phone"
                    href="tel:0522-4062110"
                    target="_blank"
                    className="p-2 bg-white hover:bg-white/70 hover:scale-105 hover:rotate-12 transition-all duration-300 rounded-full text-black"
                  >
                    <FaPhone size={18} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Footer Bottom */}
      <div className=" bg-black text-white  border-t border-gray-400 py-2 text-center flex lg:flex-row flex-col justify-center items-center">
        <p className=" lg:text-sm text-xs px-2">
          Copyright 2025 Agarwal & Associates || All Rights Reserved || Designed By
        </p>
        <Link  aria-label="Code Crafter" to="https://www.codecrafter.co.in/" target="_blank">
          <img
            src={cclogo}
            className="lg:w-28 w-20 transition transform hover:scale-105"
            alt="CodeCrafter Logo"
          />
        </Link>
      </div>
    </>
  );
};

export default Footer;
