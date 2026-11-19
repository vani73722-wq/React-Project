import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white py-12 mt-auto w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
          {/* Hospital Info */}
          <div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="text-2xl">🏥</span>
              <h2 className="text-xl md:text-2xl font-bold m-0 text-white tracking-wide">
                NAIRA MULTI‑SPECIALTY HOSPITAL
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Compassionate care, advanced medical technology, and a dedicated team for a healthier tomorrow.
            </p>
            <div className="mt-3 text-xs text-slate-400">
              Registration No: NMSH-2016-TN | Emergency 24/7
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ps-6">
            <h3 className="text-lg font-semibold mb-3 text-white border-b border-blue-900 pb-1 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 list-unstyled p-0 m-0 text-sm">
              <li><NavLink to="/" className="text-slate-300 hover:text-white transition-colors text-decoration-none">Home</NavLink></li>
              <li><NavLink to="/about" className="text-slate-300 hover:text-white transition-colors text-decoration-none">About Us</NavLink></li>
              <li><NavLink to="/services" className="text-slate-300 hover:text-white transition-colors text-decoration-none">Services</NavLink></li>
              <li><NavLink to="/doctors" className="text-slate-300 hover:text-white transition-colors text-decoration-none">Doctors</NavLink></li>
              <li><NavLink to="/facilities" className="text-slate-300 hover:text-white transition-colors text-decoration-none">Facilities</NavLink></li>
              <li><NavLink to="/contact" className="text-slate-300 hover:text-white transition-colors text-decoration-none">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white border-b border-blue-900 pb-1 inline-block">
              Contact Us
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="m-0">
                <span className="text-white font-medium">📞 Phone:</span>{' '}
                <a href="tel:8940585378" className="text-blue-300 hover:underline text-decoration-none">8940585378</a>
              </p>
              <p className="m-0">
                <span className="text-white font-medium">✉️ Email:</span>{' '}
                <a href="mailto:info@nairahospital.com" className="text-blue-300 hover:underline text-decoration-none">info@nairahospital.com</a>
              </p>
              <p className="m-0">
                <span className="text-white font-medium">📍 Address:</span> 123 Health Ave, Sivakasi, Tamil Nadu, India
              </p>
            </div>

            <div className="d-flex align-items-center gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="text-slate-300 hover:text-white transition-colors">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 6.57 11.75 5 14.33 5c1.24 0 2.4.22 2.4.22v2.64h-1.35c-1.45 0-1.9.9-1.9 1.83V12h3l-.48 3h-2.52v6.8C18.56 20.87 22 16.84 22 12z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-white transition-colors">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-slate-300 hover:text-white transition-colors">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-300 hover:text-white transition-colors">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-4 border-t border-blue-900/60 text-xs text-slate-400">
          © 2026 NAIRA Multi‑Specialty Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
