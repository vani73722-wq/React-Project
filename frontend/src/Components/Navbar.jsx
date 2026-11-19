import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, PhoneCall, Maximize, Minimize } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Doctors', to: '/doctors' },
    { name: 'Facilities', to: '/facilities' },
    { name: 'Contact', to: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <nav className="navbar sticky-top bg-white bg-opacity-90 backdrop-blur-sm border-bottom" style={{ zIndex: 1000 }}>
      <div className="container-fluid d-flex align-items-center justify-content-between py-2">
        {/* Logo */}
        <div className="d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)}>
          <img src={logo} alt="NAIRA Logo" className="rounded-circle me-2" style={{ width: '36px', height: '36px', objectFit: 'cover' }} />
          <span className="fw-bold" style={{ color: 'var(--navy)' }}>NAIRA</span>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 px-2 space-y-2 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-base font-semibold transition-all text-decoration-none block ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen();
                  closeMenu();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100"
              >
                {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                <span>{isFullscreen ? 'Exit Full Screen Mode' : 'Enable Full Screen Mode'}</span>
              </button>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="btn btn-primary w-full rounded-xl py-2.5 font-semibold text-center text-decoration-none shadow-sm"
              >
                Book Appointment
              </Link>

              <a
                href="tel:8940585378"
                className="w-full text-center py-2 text-xs font-semibold text-slate-500 hover:text-blue-600 text-decoration-none flex items-center justify-center gap-1.5"
              >
                <PhoneCall size={14} className="text-emerald-600" />
                <span>24/7 Helpline: +91 89405 85378</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
