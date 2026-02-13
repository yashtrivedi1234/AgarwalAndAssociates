import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';  // direct import (no lazy load)
import PageNotFound from './pages/PageNotFound';
import TeamDetailPage from './pages/TeamDetailPage';
import OurTeam from './pages/OurTeam';
import CookieBanner from './cookie/CookieBanner';
import Appointment from './components/Appointment';
import ClientPage from './pages/ClientPage';
import Clients from './components/Client';
// Lazy loaded pages
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const Gallery = lazy(() => import('./pages/Gallery'));
const TestimonialsPage = lazy(() => import('./pages/Testimonial'));
const AboutUsPage = lazy(() => import('./pages/AboutPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const BlogDetail = lazy(() => import('./pages/BlogDetailPage'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));

// Spinner Component
const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Appointment/>
        <CookieBanner />
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Home />} />  {/* Loaded instantly */}
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog-detail/:slug' element={<BlogDetail />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/client-page' element={<ClientPage />} />
          <Route path='/testimonials' element={<TestimonialsPage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/project/:slug' element={<ProjectDetail />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/services/:id' element={<ServicePage />} />
          <Route path='/privacy' element={<PrivacyPolicyPage />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/:slug' element={<TeamDetailPage />} />
          <Route path='/about/our-team' element={<OurTeam />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
