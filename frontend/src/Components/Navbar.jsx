import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar sticky-top bg-white bg-opacity-90 backdrop-blur-sm border-bottom" style={{ zIndex: 1000 }}>
      <div className="container-fluid d-flex align-items-center justify-content-between py-2">
        {/* Logo */}
        <div className="d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)}>
          <img src={logo} alt="NAIRA Logo" className="rounded-circle me-2" style={{ width: '36px', height: '36px', objectFit: 'cover' }} />
          <span className="fw-bold" style={{ color: 'var(--navy)' }}>NAIRA</span>
        </div>

        {/* Hamburger for mobile */}
        <button className="navbar-toggler d-lg-none border-0" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
          <Menu size={24} color="var(--navy)" />
        </button>

        {/* Nav links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} justify-content-center`}> 
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navItems.map(item => (
              <li className="nav-item" key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-3 ${isActive ? 'bg-primary text-white' : 'text-primary'}
                    `
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Book Appointment button */}
        <div className="d-none d-lg-block">
          <NavLink
            to="/contact"
            className="btn btn-primary rounded-3 fw-medium"
          >
            Book Appointment
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
