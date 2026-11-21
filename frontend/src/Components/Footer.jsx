import { Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/Naira.jpg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (hash) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = hash === '#home' ? '/' : hash.replace('#', '/');
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--navy-dark)', color: 'rgba(255, 255, 255, 0.75)' }} className="pt-5 pb-3">
      <div className="container-xl">
        <div className="row g-4 pb-5 border-bottom border-secondary border-opacity-25">
          {/* Col 1: Brand & Description */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img 
                src={logo} 
                alt="NAIRA HOSPITAL" 
                className="rounded-circle"
                style={{ width: '42px', height: '42px', objectFit: 'cover', border: '2px solid var(--teal-primary)' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h5 className="fw-bolder mb-0 text-white" style={{ letterSpacing: '0.03em' }}>
                  NAIRA <span className="text-teal">HOSPITAL</span>
                </h5>
                <small className="text-teal" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                  CARE • EXCELLENCE • TRUST
                </small>
              </div>
            </div>

            <p className="small mb-4 pe-lg-3" style={{ lineHeight: '1.7', color: '#94a3b8' }}>
              Delivering clinical excellence, empathetic patient care, and state-of-the-art medical diagnostics for individuals and families across Sivakasi and South Tamil Nadu.
            </p>

            {/* Social Media Icons */}
            <div className="d-flex align-items-center gap-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-0"
                style={{ width: '36px', height: '36px', borderColor: 'rgba(255,255,255,0.2)' }}
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-0"
                style={{ width: '36px', height: '36px', borderColor: 'rgba(255,255,255,0.2)' }}
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-0"
                style={{ width: '36px', height: '36px', borderColor: 'rgba(255,255,255,0.2)' }}
                aria-label="YouTube"
              >
                <FaYoutube size={14} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-0"
                style={{ width: '36px', height: '36px', borderColor: 'rgba(255,255,255,0.2)' }}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ letterSpacing: '0.05em' }}>
              Quick Links
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#about')}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#services')}
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#doctors')}
                >
                  Doctors
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#facilities')}
                >
                  Facilities
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#contact')}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="col-lg-3 col-md-6 col-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ letterSpacing: '0.05em' }}>
              Our Services
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#services')}
                >
                  Cardiology & Heart Care
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#services')}
                >
                  Neurology & Stroke Clinic
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#services')}
                >
                  Pediatrics & Neonatal Care
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#services')}
                >
                  Orthopedics & Joint Surgery
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#services')}
                >
                  General Medicine & Diabetology
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none text-light opacity-75"
                  onClick={() => handleLinkClick('#facilities')}
                >
                  24/7 Diagnostic Pathology & Labs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Emergency Helpline */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ letterSpacing: '0.05em' }}>
              Support & Emergency
            </h6>
            <div className="d-flex flex-column gap-3 small">
              <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <span className="text-teal fw-bold d-block mb-1">24/7 EMERGENCY HELPLINE</span>
                <a href="tel:8940585378" className="h5 fw-bold text-white d-block text-decoration-none mb-1">
                  8940585378
                </a>
                <span className="text-muted d-block" style={{ fontSize: '0.8rem' }}>Immediate Ambulance & Trauma Dispatch</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <Mail size={16} className="text-teal flex-shrink-0" />
                <span>contact@nairahospital.org</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <MapPin size={16} className="text-teal flex-shrink-0" />
                <span>142/3 Bypass Road, Sivakasi, TN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 small text-muted">
          <p className="mb-2 mb-md-0">
            © {new Date().getFullYear()} <strong>NAIRA HOSPITAL</strong>. All rights reserved. Compassionate Care. Better Health.
          </p>

          <div className="d-flex align-items-center gap-3">
            <span>NABH Standards Verified</span>
            <span>•</span>
            <button 
              type="button"
              className="btn btn-sm btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              onClick={scrollToTop}
              title="Scroll to top"
              aria-label="Scroll to top"
              style={{ width: '32px', height: '32px' }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
