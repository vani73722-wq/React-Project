import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, PhoneCall, Calendar, HeartPulse } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Doctors', to: '/doctors' },
    { name: 'Facilities', to: '/facilities' },
    { name: 'Contact', to: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Top Emergency & Info Banner */}
      <div className="bg-navy text-white py-1 px-3 d-none d-md-block border-bottom border-secondary border-opacity-25" style={{ fontSize: '0.85rem' }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <span className="d-flex align-items-center gap-1 text-teal">
              <HeartPulse size={16} /> 24/7 Emergency & Critical Care Hospital
            </span>
            <span className="text-white-50">|</span>
            <span className="text-white-75">Sivakasi, Tamil Nadu</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="text-white-50">Emergency Hotline:</span>
            <a href="tel:8940585378" className="text-warning fw-bold text-decoration-none d-flex align-items-center gap-1">
              <PhoneCall size={14} /> 8940585378
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="navbar navbar-expand-lg naira-navbar sticky-top py-2">
        <div className="container">
          {/* Logo & Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2" onClick={closeMenu}>
            <div
              className="bg-royal rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm"
              style={{ width: '42px', height: '42px' }}
            >
              <HeartPulse size={24} />
            </div>
            <div className="d-flex flex-column text-start">
              <span className="fw-bolder fs-4 lh-1 text-navy" style={{ letterSpacing: '0.5px' }}>NAIRA</span>
              <span className="text-uppercase text-muted fw-semibold" style={{ fontSize: '0.68rem', letterSpacing: '1px' }}>
                Multi-Speciality Hospital
              </span>
            </div>
          </Link>

          {/* Mobile hamburger button */}
          <button
            className="navbar-toggler border-0 shadow-none p-1"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={28} className="text-navy" /> : <Menu size={28} className="text-navy" />}
          </button>

          {/* Links & CTA */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} justify-content-between`}>
            <ul className="navbar-nav mx-auto mb-3 mb-lg-0 gap-1 align-items-center">
              {navItems.map((item) => (
                <li className="nav-item" key={item.name}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="d-flex flex-column flex-lg-row align-items-center gap-2">
              <a
                href="tel:8940585378"
                className="d-lg-none btn btn-sm btn-outline-custom w-100 mb-1"
              >
                <PhoneCall size={16} /> Call 8940585378
              </a>
              <Link
                to="/appointment"
                className="btn-primary-custom w-100 text-center"
                onClick={closeMenu}
              >
                <Calendar size={18} /> Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
