import { useState, useEffect } from 'react';
import Hero from './Hero';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import DoctorsSection from './DoctorsSection';
import FacilitiesSection from './FacilitiesSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import useScrollReveal from '../hooks/useScrollReveal';
import { Phone, ArrowUp, ShieldAlert, HeartPulse } from 'lucide-react';

export default function HomePage() {
  useScrollReveal();

  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="w-100 overflow-hidden position-relative">
      {/* 0. Initial Page Preloader */}
      {loading && (
        <div className="page-preloader">
          <div className="preloader-pulse-ring mb-3" />
          <div className="fw-bolder text-navy h5 mb-0" style={{ letterSpacing: '0.04em' }}>
            NAIRA <span className="text-teal">HOSPITAL</span>
          </div>
          <small className="text-muted">Loading Care & Excellence...</small>
        </div>
      )}

      {/* 1. Hero Section (Split Layout: Text on Left, Auto-Running Infinite 3-Slide Carousel on Right) */}
      <Hero />

      {/* 2. Services Section (Specialties + Sunday Free Health Meeting) */}
      <ServicesSection />

      {/* 3. About Us Section (Reception Photo, "Your Health, Our Priority", Trust & Tech) */}
      <AboutSection />

      {/* 4. Doctors Section (Interactive Doctor Cards, Curtain Reveal, Hover/Touch Reveal) */}
      <DoctorsSection />

      {/* 5. Facilities Section (ICU Care, Advanced Lab, Diagnostic Imaging, Patient Rooms) */}
      <FacilitiesSection />

      {/* 6. Testimonial Section (Patient Photos, Testimonials, Ratings) */}
      <TestimonialsSection />

      {/* 7. Contact Section (Address, Phone, Email, Hours, Validated Contact Form) */}
      <ContactSection />

      {/* 8. Floating Action Buttons (WhatsApp, Phone Call, Back to Top) */}
      <div className="floating-action-buttons">
        {showBackToTop && (
          <button
            type="button"
            className="btn btn-light rounded-circle shadow border d-flex align-items-center justify-content-center text-navy"
            style={{ width: '46px', height: '46px', transition: 'all 0.3s ease' }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/918940585378?text=Hello%20Naira%20Hospital%20Team%2C%20I%20would%20like%20to%20inquire%20about%20OPD%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-float-whatsapp"
          title="Chat with Naira Hospital on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-1.107-.056-.251-.082-.576-.192-.992-.372-1.748-.758-2.883-2.535-2.97-2.652-.088-.117-.714-.951-.714-1.812 0-.86.452-1.284.613-1.458.16-.174.351-.218.468-.218.118 0 .235.001.339.006.109.005.257-.041.402.308.149.359.508 1.239.553 1.33.045.091.075.197.015.316-.06.119-.09.193-.178.297-.089.104-.187.232-.267.312-.089.09-.182.188-.078.367.104.179.463.764.994 1.237.684.609 1.261.798 1.44.887.179.09.284.076.39-.047.106-.123.454-.53.575-.712.12-.182.241-.152.404-.091.163.061 1.036.488 1.213.577.177.089.295.133.338.207.043.074.043.431-.101.836z"/>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.957-1.404C8.423 21.503 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.062c-1.637 0-3.15-.494-4.423-1.341l-.317-.212-3.284.931.933-3.208-.232-.338C3.771 14.544 3.25 12.824 3.25 11c0-4.825 3.925-8.75 8.75-8.75s8.75 3.925 8.75 8.75-3.925 8.812-8.75 8.812z"/>
          </svg>
        </a>

        {/* Floating Call Button */}
        <a
          href="tel:8940585378"
          className="btn-float-call"
          title="Call Naira Hospital 24/7 Hotline"
          aria-label="Call 24/7 Hotline"
        >
          <Phone size={22} />
        </a>
      </div>

      {/* 9. Floating 24/7 Red Emergency Bottom Strip */}
      <div className="floating-emergency-strip d-flex align-items-center justify-content-between px-3 py-2">
        <div className="container-xl d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-white text-danger fw-bolder px-2 py-1">24/7 EMERGENCY</span>
            <span className="d-none d-sm-inline">
              Trauma Care, Critical ICU & Ambulance Response active round the clock.
            </span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span className="text-white small d-none d-md-inline">Emergency Helpline:</span>
            <a
              href="tel:8940585378"
              className="text-white fw-bold d-inline-flex align-items-center gap-1 text-decoration-none bg-black bg-opacity-25 px-3 py-1 rounded-pill"
            >
              <Phone size={14} className="text-warning" />
              <span>8940585378</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
