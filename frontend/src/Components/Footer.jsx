import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="naira-footer pt-5 pb-3">
      <div className="container">
        <div className="row g-4 pb-5 text-start">
          {/* Hospital Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="bg-royal rounded-circle d-flex align-items-center justify-content-center text-white"
                style={{ width: '40px', height: '40px' }}
              >
                <HeartPulse size={22} />
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-white fs-5">NAIRA</h4>
                <span className="text-uppercase text-light opacity-75" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                  Multi-Speciality Hospital
                </span>
              </div>
            </div>
            <p className="text-light opacity-75 pe-lg-4 mb-4" style={{ fontSize: '0.95rem' }}>
              Compassionate care, advanced healthcare, and a healthier tomorrow. Dedicated to bringing modern multi-specialty medical expertise and patient-first care together under one roof.
            </p>
            <div className="d-flex align-items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                aria-label="Facebook"
                style={{ width: '38px', height: '38px' }}
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                aria-label="Instagram"
                style={{ width: '38px', height: '38px' }}
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                aria-label="YouTube"
                style={{ width: '38px', height: '38px' }}
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                aria-label="LinkedIn"
                style={{ width: '38px', height: '38px' }}
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="fw-bold text-white mb-3 fs-6">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '0.9rem' }}>
              <li>
                <Link to="/" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> Facilities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="d-flex align-items-center gap-1 text-decoration-none text-warning fw-semibold">
                  <ArrowRight size={14} className="text-warning" /> Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Specialties */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="fw-bold text-white mb-3 fs-6">Medical Specialties</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '0.9rem' }}>
              <li>
                <Link to="/services" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> Cardiology
                </Link>
              </li>
              <li>
                <Link to="/services" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> Gynecology & Maternity
                </Link>
              </li>
              <li>
                <Link to="/services" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> Pediatrics & Child Care
                </Link>
              </li>
              <li>
                <Link to="/services" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> Orthopedics & Joint Care
                </Link>
              </li>
              <li>
                <Link to="/services" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> Dermatology & Skin Care
                </Link>
              </li>
              <li>
                <Link to="/services" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> General Medicine & Surgery
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="d-flex align-items-center gap-1 text-decoration-none">
                  <ArrowRight size={14} className="text-royal" /> 24/7 ICU & Pharmacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold text-white mb-3 fs-6">Contact & Support</h5>
            <div className="d-flex flex-column gap-3" style={{ fontSize: '0.9rem' }}>
              <div className="d-flex align-items-start gap-2">
                <MapPin size={20} className="text-royal flex-shrink-0 mt-1" />
                <span className="text-light opacity-75">
                  123 Health Ave, Sivakasi, Tamil Nadu, India
                </span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Phone size={18} className="text-warning flex-shrink-0" />
                <div>
                  <div className="text-white-50" style={{ fontSize: '0.78rem' }}>24/7 Phone Support:</div>
                  <a href="tel:8940585378" className="text-white fw-bold text-decoration-none fs-6">
                    8940585378
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Mail size={18} className="text-royal flex-shrink-0" />
                <a href="mailto:info@nairahospital.com" className="text-light opacity-75 text-decoration-none">
                  info@nairahospital.com
                </a>
              </div>
              <div className="d-flex align-items-start gap-2">
                <Clock size={18} className="text-royal flex-shrink-0 mt-1" />
                <div className="text-light opacity-75" style={{ fontSize: '0.85rem' }}>
                  <div><strong>Emergency & ICU:</strong> Open 24/7</div>
                  <div><strong>OPD Consultations:</strong> 8:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-top border-secondary border-opacity-25 pt-4 text-center">
          <p className="mb-0 text-white-50" style={{ fontSize: '0.85rem' }}>
            © 2026 NAIRA Multi-Specialty Hospital. All rights reserved. Compassionate Care for a Healthier Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
