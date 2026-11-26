import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Search, Phone, Clock, MapPin, Menu, X, Calendar, Activity, UserCheck, ShieldCheck } from 'lucide-react';
import logo from '../assets/Naira.jpg';
import SearchModal from './SearchModal';
import AppointmentModal from './AppointmentModal';
import LiveDoctorsModal from './LiveDoctorsModal';
import { useDoctorAuth } from '../context/DoctorAuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [liveDoctorsOpen, setLiveDoctorsOpen] = useState(false);

  const { isAuthenticated } = useDoctorAuth();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', hash: '#home' },
    { name: 'About Us', path: '/about', hash: '#about' },
    { name: 'Services', path: '/services', hash: '#services' },
    { name: 'LIVE DOCTORS', isLive: true },
    { name: 'Sunday Free Meeting', path: '/services', hash: '#sunday-meeting' },
    { name: 'Contact', path: '/contact', hash: '#contact' },
  ];

  const handleNavClick = (link) => {
    setIsOpen(false);
    if (link.isLive) {
      setLiveDoctorsOpen(true);
      return;
    }
    if (location.pathname === '/' || location.pathname === '') {
      const el = document.querySelector(link.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(link.path);
  };

  return (
    <>
      {/* Top Notification & Emergency Bar */}
      <div
        className="d-none d-lg-block border-bottom py-2 small"
        style={{ backgroundColor: 'var(--navy)', color: 'rgba(255, 255, 255, 0.85)' }}
      >
        <div className="container-xl d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-4">
            <span className="d-flex align-items-center gap-2">
              <MapPin size={15} className="text-teal" />
              142/3 Bypass Road, Sivakasi, Tamil Nadu
            </span>
            <span className="d-flex align-items-center gap-2">
              <Clock size={15} className="text-teal" />
              OPD: 8:00 AM - 8:00 PM | Emergency: 24/7 Open
            </span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span className="badge rounded-pill bg-danger px-2 py-1 fw-bold">24/7 EMERGENCY</span>
            <a
              href="tel:8940585378"
              className="text-white fw-bold d-flex align-items-center gap-2"
              style={{ textDecoration: 'none' }}
            >
              <Phone size={15} className="text-teal" />
              <span className="text-teal">8940585378</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar with Smooth Scroll Transition */}
      <nav
        className={`navbar navbar-expand-lg sticky-top navbar-custom py-2 py-lg-3 ${isScrolled ? 'is-scrolled shadow-sm' : ''
          }`}
      >
        <div className="container-xl d-flex align-items-center justify-content-between">
          {/* Brand Logo & Name */}
          <div
            className="d-flex align-items-center gap-2"
            style={{ cursor: 'pointer' }}
            onClick={() => handleNavClick({ path: '/', hash: '#home' })}
          >
            <img
              src={logo}
              alt="NAIRA HOSPITAL Logo"
              className="rounded-circle shadow-sm"
              style={{ width: '42px', height: '42px', objectFit: 'cover', border: '2px solid var(--teal-primary)' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <span className="h5 fw-bolder mb-0 d-block" style={{ color: 'var(--navy)', letterSpacing: '0.02em' }}>
                NAIRA <span className="text-teal">HOSPITAL</span>
              </span>
              <small className="text-muted d-block" style={{ fontSize: '0.72rem', marginTop: '-3px', letterSpacing: '0.04em' }}>
                CARE • EXCELLENCE • TRUST
              </small>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            {navLinks.map((link, idx) => {
              if (link.isLive) {
                return (
                  <button
                    key={idx}
                    type="button"
                    className="btn-live-doctors mx-2"
                    onClick={() => handleNavClick(link)}
                    title="View Live OPD Doctors & Real-Time Availability"
                  >
                    <span className="live-badge-top">LIVE</span>
                    <span className="live-pulse-dot" />
                    <span>LIVE DOCTORS</span>
                    <span style={{ fontSize: '0.9rem' }}>🟢</span>
                  </button>
                );
              }
              return (
                <button
                  key={idx}
                  type="button"
                  className="btn btn-link text-decoration-none nav-link-custom"
                  onClick={() => handleNavClick(link)}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Action Buttons: Search & Book Appointment */}
          <div className="d-flex align-items-center gap-2 gap-md-3">
            {/* Search Icon Button */}
            <button
              type="button"
              className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center text-navy shadow-xs border"
              style={{ width: '40px', height: '40px', transition: 'all 0.2s ease' }}
              onClick={() => setSearchOpen(true)}
              aria-label="Open Search"
              title="Search Doctors, Specialties, Facilities"
            >
              <Search size={19} className="text-teal" />
            </button>

            {/* Book Appointment Button */}
            <button
              type="button"
              className="btn-green-glow d-none d-sm-inline-flex"
              onClick={() => setAppointmentOpen(true)}
            >
              <Calendar size={17} />
              <span>Book Appointment</span>
            </button>

            {/* Chief Doctor Login Option */}
            <button
              type="button"
              className="btn btn-outline-teal d-none d-md-inline-flex align-items-center gap-1"
              style={{ padding: '0.62rem 1.15rem' }}
              onClick={() => {
                window.location.href = 'https://react-project-two-delta-61.vercel.app/login';
              }}
              title={isAuthenticated ? 'Chief Doctor CRM Portal' : 'Chief Doctor Login'}
            >
              {isAuthenticated ? <ShieldCheck size={16} /> : <UserCheck size={16} />}
              <span>{isAuthenticated ? 'CRM Portal' : 'Login'}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="btn btn-light d-lg-none p-2 rounded-3 border"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} className="text-navy" /> : <Menu size={22} className="text-navy" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="d-lg-none w-100 bg-white border-top mt-2 py-3 px-4 shadow-lg animate__animated animate__fadeIn">
            <div className="d-flex flex-column gap-2 mb-3">
              {navLinks.map((link, idx) => {
                if (link.isLive) {
                  return (
                    <button
                      key={idx}
                      type="button"
                      className="btn-live-doctors w-100 justify-content-center py-2"
                      onClick={() => handleNavClick(link)}
                    >
                      <span className="live-pulse-dot" />
                      <span>LIVE DOCTORS 🟢 (Check Wait Times)</span>
                    </button>
                  );
                }
                return (
                  <button
                    key={idx}
                    type="button"
                    className="btn btn-light text-start py-2 px-3 fw-medium text-navy border-0 rounded-2"
                    style={{ backgroundColor: 'var(--slate-50)' }}
                    onClick={() => handleNavClick(link)}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            <div className="d-flex flex-column gap-2 pt-2 border-top">
              <button
                type="button"
                className="btn-green-glow w-100 justify-content-center py-2"
                onClick={() => {
                  setIsOpen(false);
                  setAppointmentOpen(true);
                }}
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>

              <button
                type="button"
                className="btn btn-outline-teal w-100 justify-content-center py-2 d-flex align-items-center gap-2"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = 'https://react-project-two-delta-61.vercel.app/login';
                }}
              >
                {isAuthenticated ? <ShieldCheck size={18} /> : <UserCheck size={18} />}
                <span>{isAuthenticated ? 'Chief Doctor CRM Portal' : 'Chief Doctor Login'}</span>
              </button>

              <a
                href="tel:8940585378"
                className="btn btn-outline-teal w-100 justify-content-center py-2"
              >
                <Phone size={18} />
                <span>Emergency: 8940585378</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Global Interactive Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectAction={(item) => {
          if (location.pathname === '/' || location.pathname === '') {
            const el = document.querySelector(item.section);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate(item.section === '#home' ? '/' : item.section.replace('#', '/'));
          }
        }}
      />

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />

      {/* Live Doctors Availability & Token Queue Modal */}
      <LiveDoctorsModal
        isOpen={liveDoctorsOpen}
        onClose={() => setLiveDoctorsOpen(false)}
        onBookAppointment={() => {
          setLiveDoctorsOpen(false);
          setAppointmentOpen(true);
        }}
      />
    </>
  );
}
