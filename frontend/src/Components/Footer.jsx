import { NavLink, Link } from 'react-router-dom';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowUp,
  HeartPulse,
  CalendarCheck,
  Award,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Specialties & Services', to: '/services' },
    { name: 'Find Doctors', to: '/doctors' },
    { name: 'Hospital Facilities', to: '/facilities' },
    { name: 'Contact & Appointments', to: '/contact' },
  ];

  const medicalSpecialties = [
    { name: 'Cardiology & Heart Care', to: '/services' },
    { name: 'Orthopedics & Joint Trauma', to: '/services' },
    { name: 'Obstetrics & Gynecology', to: '/services' },
    { name: 'General Medicine & Diabetology', to: '/services' },
    { name: 'Pediatrics & Neonatal Care', to: '/services' },
    { name: '24/7 Emergency & ICU Care', to: '/facilities' },
    { name: 'Digital Diagnostics & Radiology', to: '/facilities' },
  ];

  return (
    <footer className="relative bg-[#001429] text-white mt-auto w-full border-t border-blue-900/40 overflow-hidden">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Top Callout Strip: 24/7 Emergency & Instant Action */}
      <div className="relative border-b border-blue-900/50 bg-[#001a36]/80 backdrop-blur-md">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            {/* Left: Emergency highlight */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-slate-100">
                <HeartPulse className="text-red-400" size={20} />
                <span>24/7 Emergency, Trauma & Critical Care Services</span>
              </div>
              <span className="hidden sm:inline text-blue-400/50">•</span>
              <span className="text-xs md:text-sm text-cyan-300 font-medium bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-0.5 rounded-full">
                Sivakasi Campus
              </span>
            </div>

            {/* Right: Emergency call and Book appointment CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href="tel:8940585378"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-red-950/40 text-decoration-none group"
              >
                <PhoneCall size={16} className="group-hover:rotate-12 transition-transform" />
                <span>Emergency: 8940585378</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-950/40 text-decoration-none"
              >
                <CalendarCheck size={16} />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Hospital Info & Accreditations (Span 4) */}
          <div className="lg:col-span-4 space-y-5 text-start">
            <Link to="/" className="inline-flex items-center gap-3 text-decoration-none group">
              <img
                src="/Naira.jpg"
                alt="NAIRA Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/50 shadow-md group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/care.jpg';
                }}
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-xl tracking-wide group-hover:text-blue-300 transition-colors">
                  NAIRA MULTI-SPECIALTY
                </span>
                <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
                  HOSPITAL & TRAUMA CENTRE
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed pr-2">
              Compassionate care, advanced medical technology, and an experienced team of specialists dedicated to delivering trusted healthcare for a healthier tomorrow.
            </p>

            {/* Accreditation / Registration Badges */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="inline-flex items-center gap-2 text-xs text-slate-300 bg-blue-950/60 border border-blue-800/40 rounded-lg px-3 py-1.5 w-fit">
                <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                <span>Reg. No: <strong className="text-white">NMSH-2016-TN</strong></span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-slate-300 bg-blue-950/60 border border-blue-800/40 rounded-lg px-3 py-1.5 w-fit">
                <Award size={15} className="text-amber-400 shrink-0" />
                <span>NABH Standard Compliance • 24/7 Pharmacy</span>
              </div>
            </div>

            {/* Timings */}
            <div className="pt-2 text-xs text-slate-400 flex items-start gap-2">
              <Clock size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="m-0 font-medium text-slate-200">OPD: Mon – Sat: 8:00 AM – 9:00 PM</p>
                <p className="m-0 text-slate-400">Emergency & Ambulance: Open 24 Hours / 7 Days</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 text-start">
            <h3 className="text-base font-bold text-white tracking-wide uppercase border-b-2 border-blue-600 pb-2 mb-4 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 list-unstyled p-0 m-0 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1 transition-all text-decoration-none"
                  >
                    <ChevronRight
                      size={14}
                      className="text-blue-400 group-hover:text-cyan-300 transition-colors"
                    />
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Medical Specialties (Span 3) */}
          <div className="lg:col-span-3 text-start">
            <h3 className="text-base font-bold text-white tracking-wide uppercase border-b-2 border-blue-600 pb-2 mb-4 inline-block">
              Specialties
            </h3>
            <ul className="space-y-2.5 list-unstyled p-0 m-0 text-sm">
              {medicalSpecialties.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1 transition-all text-decoration-none"
                  >
                    <ChevronRight
                      size={14}
                      className="text-cyan-500 group-hover:text-white transition-colors"
                    />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information & Socials (Span 3) */}
          <div className="lg:col-span-3 space-y-4 text-start">
            <h3 className="text-base font-bold text-white tracking-wide uppercase border-b-2 border-blue-600 pb-2 mb-4 inline-block">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-900/60 border border-blue-700/50 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                  <PhoneCall size={16} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    24/7 Helpline
                  </span>
                  <a
                    href="tel:8940585378"
                    className="text-white hover:text-cyan-300 font-semibold transition-colors text-decoration-none"
                  >
                    +91 89405 85378
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-900/60 border border-blue-700/50 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:info@nairahospital.com"
                    className="text-slate-200 hover:text-cyan-300 transition-colors text-decoration-none break-all"
                  >
                    info@nairahospital.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-900/60 border border-blue-700/50 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Hospital Campus
                  </span>
                  <p className="m-0 text-slate-200 text-xs leading-relaxed">
                    123 Health Ave, Sivakasi, Tamil Nadu, 626123, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                Follow NAIRA Hospital
              </span>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:scale-105 transition-all"
                >
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 6.57 11.75 5 14.33 5c1.24 0 2.4.22 2.4.22v2.64h-1.35c-1.45 0-1.9.9-1.9 1.83V12h3l-.48 3h-2.52v6.8C18.56 20.87 22 16.84 22 12z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-500 hover:scale-105 transition-all"
                >
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 hover:border-red-500 hover:scale-105 transition-all"
                >
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-700 hover:border-blue-600 hover:scale-105 transition-all"
                >
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar: Copyright, Legal Links, and Back-to-Top Button */}
        <div className="mt-12 pt-6 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            <span>© {new Date().getFullYear()} NAIRA Multi‑Specialty Hospital. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-slate-400">
            <Link to="/about" className="hover:text-slate-200 transition-colors text-decoration-none">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/about" className="hover:text-slate-200 transition-colors text-decoration-none">
              Terms of Care
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/about" className="hover:text-slate-200 transition-colors text-decoration-none">
              Patient Charter
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/80 hover:bg-blue-900 text-slate-300 hover:text-white border border-blue-800/50 transition-all text-xs font-medium focus:outline-none"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
