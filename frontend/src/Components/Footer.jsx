import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Hospital Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">NAIRA MULTI‑SPECIALTY HOSPITAL</h2>
          <p className="text-sm">Compassionate care, advanced healthcare, and a healthier tomorrow.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
            <li><NavLink to="/services" className="hover:underline">Services</NavLink></li>
            <li><NavLink to="/doctors" className="hover:underline">Doctors</NavLink></li>
            <li><NavLink to="/facilities" className="hover:underline">Facilities</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Phone: <a href="tel:8940585378" className="text-light hover:underline">8940585378</a></p>
          <p className="text-sm">Email: <a href="mailto:info@nairahospital.com" className="text-light hover:underline">info@nairahospital.com</a> {/* placeholder */}</p>
          <p className="text-sm">Address: 123 Health Ave, Sivakasi, India {/* placeholder */}</p>
          <div className="flex space-x-3 mt-2">
            <a href="#" aria-label="Facebook" className="text-light hover:text-white"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="text-light hover:text-white"><Instagram size={20} /></a>
            <a href="#" aria-label="YouTube" className="text-light hover:text-white"><Youtube size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="text-light hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-xs text-light">
        © 2026 NAIRA Multi‑Specialty Hospital. All rights reserved.
      </div>
    </footer>
  );
}
