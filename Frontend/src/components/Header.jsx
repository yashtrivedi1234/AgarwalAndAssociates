import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Building2, Phone, ListFilter } from "lucide-react";
import logo from '../assets/logo-removebg.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { 
      name: "About Us", 
      path: "/about",
      id: 'about',
      isDropdown: true,
      dropdownItems: [
        { name: "About Agarwal & associates", path: "/about" },
        { name: "Our Team", path: "/about/our-team" },
        
      ],
    },
    { name: "Projects", path: "/projects",
       isDropdown: true,
      dropdownItems: [
  { name: "All Projects", path: "/projects" },
  { name: "Residential", path: "/projects?type=Residential" },
  { name: "Commercial", path: "/projects?type=Commercial" },
  { name: "Institutional", path: "/projects?type=Institutional" },
  { name: "Urban Planning", path: "/projects?type=Urban-Planning" }
]
     },
    {
      name: "Services",
      path: "#",
      id: 'services',
      isDropdown: true,
      dropdownItems: [
        { name: "Architectural Consultant", path: "/services/architectural-consultant" },
        { name: "Interior Design", path: "/services/interior-design" },
        { name: "Engineering Services", path: "/services/engineering-services" },
        { name: "Project Management", path: "/services/project-management" },
        { name: "Urban Planning", path: "/services/urban-planning" },
      ],
    },
    { name: "Gallery", path: "/gallery" ,
      id: 'gallery',
       isDropdown: true,
      dropdownItems: [
  { name: "Photo Gallery", path: "/gallery?type=photo" },
  { name: "Event Gallery", path: "/gallery?type=event" },
]
    },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300  ${
        isScrolled
          ? "bg-white shadow-md pt-1"
          : "lg:bg-transparent bg-white lg:text-white pt-1"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link aria-label="Logo" to="/" className="flex items-center">
              <img src={logo} alt="logo" className="lg:h-20 h-16" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center text-lg font-medium lg:ml-10">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.isDropdown ? (
                    <div>
                      <button
                        aria-label="dropdown"
                        className="flex items-center transition-colors"
                        onClick={() => toggleDropdown(item.id)}
                        onMouseEnter={() => toggleDropdown(item.id)}
                      >
                        {item.name}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      <div
                        className={`absolute top-full left-0 mt-2 text-black bg-white shadow-lg py-2 w-56 transform transition-all origin-top ${
                          openDropdown === item.id
                            ? "scale-y-100 opacity-100"
                            : "scale-y-0 opacity-0"
                        }`}
                        onMouseLeave={() => toggleDropdown(null)}
                      >
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <Link
                            aria-label="dropdown-items"
                            key={idx}
                            to={dropdownItem.path}
                            className="block px-4 py-1 hover:bg-slate-100 text-sm transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      aria-label="items"
                      to={item.path}
                      className={`transition-colors ${
                        item.name === "Contact Us"
                          ? "px-4 py-2 bg-red-500 text-slate-100 hover:bg-red-600 "
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info - Desktop */}
          <a href='tel:0522 4062110' className="hidden lg:flex items-center">
            <Phone size={16} className="" />
            {/* <span className="ml-2 tracking-wider">+91-9415113355</span> */}
            <span className="ml-2 tracking-wider">0522-4062110</span>
          </a>

          {/* Mobile Menu Button */}
          <button aria-label="Menu" title="Nav-Menu" className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={30} /> : <ListFilter size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen shadow-lg" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <ul className="py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.isDropdown ? (
                  <div>
                    <button
                      aria-label="Nav-item"
                      className="flex items-center justify-between w-full text-gray-900 py-2 hover:text-gray-900"
                      onClick={() => toggleDropdown(item.id)}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-4 space-y-2 mt-2 transition-all ${
                        openDropdown === item.id ? "block" : "hidden"
                      }`}
                    >
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <Link
                          aria-label="dropdown"
                          key={idx}
                          to={dropdownItem.path}
                          className="block py-0.5 text-gray-600 hover:text-gray-900"
                          onClick={() => {
                            setOpenDropdown(null);
                            setIsMenuOpen(false);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    aria-label="Nav-item"
                    to={item.path}
                    className={`block py-2 text-gray-900 hover:text-gray-900 ${
                      item.name === "Contact Us"
                        ? "mt-4 px-4 py-2 bg-red-500 text-white rounded-md text-center"
                        : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Info - Mobile */}
          <a target="_blank" href="tel:0522 4062110" className="cursor-pointer flex items-center py-4 border-t border-gray-100">
            <Phone size={16} className="text-gray-900" />
            <span className="ml-2 text-gray-900">0522-4062110</span>
          </a>
        </div>
      </div>
    </header>
  );
}