import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsHomePage } from "../hooks/useIsHomePage";
import { useHasBreadcrumb } from "../hooks/useHasBreadcrumb";
import {
  X,
  ChevronDown,
  Phone,
  Menu,
  ArrowUpRight,
  MapPin,
  Mail,
} from "lucide-react";
import logo from "../assets/logo-removebg.png";

// ─── Nav Data ────────────────────────────────────────────────────────────────
const navItems = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about",
    id: "about",
    isDropdown: true,
    dropdownItems: [
      { name: "About Agarwal & Associates", path: "/about" },
      { name: "Our Team", path: "/about/our-team" },
    ],
  },
  {
    name: "Projects",
    path: "/projects",
    id: "projects",
    isDropdown: true,
    dropdownItems: [
      { name: "All Projects", path: "/projects" },
      { name: "Residential", path: "/projects?type=Residential" },
      { name: "Commercial", path: "/projects?type=Commercial" },
      { name: "Institutional", path: "/projects?type=Institutional" },
      { name: "Urban Planning", path: "/projects?type=Urban-Planning" },
    ],
  },
  {
    name: "Services",
    path: "#",
    id: "services",
    isDropdown: true,
    dropdownItems: [
      { name: "Architectural Consultant", path: "/services/architectural-consultant" },
      { name: "Interior Design", path: "/services/interior-design" },
      { name: "Engineering Services", path: "/services/engineering-services" },
      { name: "Project Management", path: "/services/project-management" },
      { name: "Urban Planning", path: "/services/urban-planning" },
    ],
  },
  {
    name: "Gallery",
    path: "/gallery",
    id: "gallery",
    isDropdown: true,
    dropdownItems: [
      { name: "Photo Gallery", path: "/gallery?type=photo" },
      { name: "Event Gallery", path: "/gallery?type=event" },
    ],
  },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact", isCta: true },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Header() {
  const isHomePage = useIsHomePage();
  const hasBreadcrumb = useHasBreadcrumb();
  const { pathname } = useLocation();

  const isBlogDetail = /^\/blog-detail(s)?\//.test(pathname);
  const isScrolled = useScrolled();
  const isLight = isBlogDetail || isScrolled || (!isHomePage && !hasBreadcrumb);
  const isTransparent = !isLight;

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // desktop hover/click
  const [openDropdown, setOpenDropdown] = useState(null);     // mobile accordion
  const headerRef = useRef(null);
  const closeTimer = useRef(null);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
        setActiveDropdown(null);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Escape key support
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setActiveDropdown(null);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const isItemActive = useCallback((item) => {
    if (item.path === "/") return pathname === "/";
    if (item.isDropdown) return pathname === item.path || pathname.startsWith(`${item.path}/`);
    return pathname === item.path;
  }, [pathname]);

  const handleMouseEnter = (id) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  // ── Derived classes ──────────────────────────────────────────────────────
  const shellBg = isLight
    ? "border-slate-200/80 bg-white/95 shadow-[0_8px_32px_rgba(15,23,42,0.10)]"
    : "border-white/15 bg-white/8 shadow-[0_8px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl";

  const navPillBg = isLight
    ? "border-slate-100 bg-slate-50/80"
    : "border-white/12 bg-white/10 backdrop-blur-md";

  const textBase = isTransparent ? "text-white" : "text-slate-800";

  const getNavClass = (item, dropOpen = false) => {
    const active = isItemActive(item) || dropOpen;
    const base = "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[15px] font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400";
    if (active) return `${base} bg-red-500 text-white shadow-md shadow-red-500/25`;
    return isLight
      ? `${base} text-slate-600 hover:bg-slate-100 hover:text-slate-950`
      : `${base} text-white/85 hover:bg-white/15 hover:text-white`;
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
          isLight
            ? "bg-white/95 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-5 lg:px-8">
          <div className={`relative flex items-center justify-between gap-2 rounded-[28px] border px-2 py-2 mt-2 lg:px-3 ${shellBg}`}>

            {/* Gradient shimmer for transparent state */}
            {isTransparent && (
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-r from-black/5 via-transparent to-black/5" />
            )}

            {/* ── Logo ───────────────────────────────────────────── */}
            <Link
              to="/"
              aria-label="Agarwal & Associates – Home"
              className="flex shrink-0 items-center gap-2.5 rounded-full pr-1 outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <img
                src={logo}
                alt="Agarwal & Associates logo"
                className="h-11 w-auto sm:h-12 lg:h-[3.8rem]"
              />

            </Link>

            {/* ── Desktop Nav ─────────────────────────────────────── */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex flex-1 justify-center"
            >
              <ul className={`flex items-center gap-0.5 rounded-full border px-2 py-1.5 ${navPillBg}`}>
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.isDropdown && handleMouseEnter(item.id)}
                    onMouseLeave={() => item.isDropdown && handleMouseLeave()}
                  >
                    {item.isCta ? (
                      <Link
                        to={item.path}
                        className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-red-500 px-4 py-2 text-[13px] font-bold tracking-wide text-white shadow-lg shadow-red-500/30 transition-all duration-200 hover:bg-red-600 hover:shadow-red-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                      >
                        {item.name}
                      </Link>
                    ) : item.isDropdown ? (
                      <>
                        <button
                          aria-haspopup="true"
                          aria-expanded={activeDropdown === item.id}
                          onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                          className={getNavClass(item, activeDropdown === item.id)}
                        >
                          {item.name}
                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-200 ${activeDropdown === item.id ? "rotate-180" : ""}`}
                          />
                        </button>

                        {/* Dropdown panel */}
                        <div
                          role="menu"
                          className={`absolute left-0 top-full pt-2.5 z-50 ${
                            item.id === "services" ? "w-68" : "w-56"
                          } transition-all duration-200 origin-top ${
                            activeDropdown === item.id
                              ? "translate-y-0 opacity-100 scale-100 visible"
                              : "-translate-y-1.5 opacity-0 scale-[0.97] invisible"
                          }`}
                          onMouseEnter={() => { clearTimeout(closeTimer.current); setActiveDropdown(item.id); }}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-[0_16px_48px_rgba(15,23,42,0.14)]">
                            <div className="px-3 pb-2 pt-2.5 border-b border-slate-100">
                              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-slate-400">{item.name}</p>
                            </div>
                            <div className="mt-1 space-y-0.5">
                              {item.dropdownItems.map((di) => (
                                <Link
                                  key={di.path}
                                  to={di.path}
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-50 hover:text-red-600 focus-visible:outline-none focus-visible:bg-slate-50"
                                >
                                  <span>{di.name}</span>
                                  <ArrowUpRight size={13} className="text-slate-300" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={getNavClass(item)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── Desktop Contact ──────────────────────────────────── */}
            <div className="hidden xl:flex items-center gap-2 shrink-0">
              <a
                href="tel:05224062110"
                className={`flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 transition-all duration-200 hover:border-red-200 hover:bg-red-50 group ${
                  isLight ? "border-slate-200 bg-white" : "border-white/15 bg-white/10 backdrop-blur-md hover:bg-white/20"
                }`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow-sm">
                  <Phone size={13} />
                </span>
                <div className="leading-tight">
                  <p className={`text-[9px] font-bold uppercase tracking-[0.24em] ${isLight ? "text-slate-400" : "text-white/55"}`}>Call Us</p>
                  <p className={`text-[13px] font-bold tracking-wide group-hover:text-red-600 transition-colors ${isLight ? "text-slate-800" : "text-white"}`}>
                    0522-4062110
                  </p>
                </div>
              </a>
            </div>

            {/* ── Mobile Hamburger ─────────────────────────────────── */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex lg:hidden items-center justify-center rounded-2xl border p-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${
                isLight
                  ? "border-slate-200 bg-white text-slate-900 shadow-sm"
                  : "border-white/20 bg-white/12 text-white backdrop-blur-md"
              }`}
            >
              <span className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}>
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </span>
            </button>
          </div>
        </div>

        {/* ── Mobile Nav Drawer ──────────────────────────────────────────── */}
        <div
          id="mobile-nav"
          aria-hidden={!menuOpen}
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          } overflow-y-auto overflow-x-hidden`}
          style={{ scrollbarWidth: "none" }}
        >
          <div className="container mx-auto px-3 sm:px-5 pb-4 pt-2">
            <div className="rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.14)] overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">Navigation</p>
                  <p className="mt-0.5 text-sm font-bold text-slate-900">Explore our studio</p>
                </div>
                <span className="rounded-full bg-red-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-500">
                  Menu
                </span>
              </div>

              {/* Nav items */}
              <ul className="px-3 py-3 space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.isCta ? (
                      <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 flex items-center justify-center gap-1.5 rounded-2xl bg-red-500 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all duration-200 hover:bg-red-600 active:scale-[0.98]"
                      >
                        {item.name}
                        <ArrowUpRight size={15} />
                      </Link>
                    ) : item.isDropdown ? (
                      <div className="rounded-2xl border border-slate-100 bg-slate-50/60 overflow-hidden">
                        <button
                          aria-expanded={openDropdown === item.id}
                          onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                          className={`flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-semibold transition-colors duration-200 ${
                            openDropdown === item.id
                              ? "bg-white text-slate-950"
                              : "text-slate-700 hover:bg-white/80 hover:text-slate-950"
                          }`}
                        >
                          {item.name}
                          <ChevronDown
                            size={15}
                            className={`transition-transform duration-200 ${openDropdown === item.id ? "rotate-180 text-red-500" : "text-slate-400"}`}
                          />
                        </button>

                        <div className={`transition-all duration-300 ease-in-out ${
                          openDropdown === item.id ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden`}>
                          <div className="border-t border-slate-100 px-2 py-2 space-y-0.5">
                            {item.dropdownItems.map((di) => (
                              <Link
                                key={di.path}
                                to={di.path}
                                onClick={() => { setOpenDropdown(null); setMenuOpen(false); }}
                                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-600 transition-colors duration-150 hover:bg-white hover:text-red-600 active:scale-[0.98]"
                              >
                                <span>{di.name}</span>
                                <ArrowUpRight size={13} className="text-slate-300" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                          isItemActive(item)
                            ? "bg-red-500 text-white shadow-md shadow-red-500/20"
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Contact strip */}
              <div className="grid grid-cols-2 gap-2 border-t border-slate-100 bg-slate-50/50 px-3 py-3">
                <a
                  href="tel:05224062110"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 transition-colors hover:border-red-200 hover:bg-red-50 active:scale-[0.98]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                    <Phone size={14} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Call</p>
                    <p className="truncate text-[13px] font-bold text-slate-900">0522-4062110</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3.5 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <MapPin size={14} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Studio</p>
                    <p className="truncate text-[13px] font-bold text-slate-900">Lucknow, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay backdrop ─────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[9998] bg-slate-950/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
}