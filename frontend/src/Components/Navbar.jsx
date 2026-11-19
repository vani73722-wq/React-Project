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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-decoration-none group shrink-0"
            onClick={closeMenu}
          >
            <img
              src="/Naira.jpg"
              alt="NAIRA Logo"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border-2 border-blue-200 shadow-sm group-hover:scale-105 transition-transform"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/care.jpg';
              }}
            />
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-[#001f3f] text-lg md:text-xl tracking-tight leading-none">
                NAIRA
              </span>
              <span className="text-[10px] md:text-xs font-bold text-blue-600 tracking-widest uppercase">
                HOSPITAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3 mx-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all text-decoration-none ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA: Fullscreen + Phone + Book Appointment */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-200 focus:outline-none"
              title={isFullscreen ? 'Exit Full Screen' : 'View Full Screen'}
            >
              {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
              <span>{isFullscreen ? 'Exit Full Screen' : 'Full Screen'}</span>
            </button>

            <a
              href="tel:8940585378"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors text-decoration-none"
            >
              <PhoneCall size={16} className="text-emerald-600" />
              <span>8940585378</span>
            </a>

            <Link
              to="/contact"
              className="btn btn-primary rounded-full px-5 py-2.5 font-semibold text-sm shadow-sm hover:shadow-md transition-all text-decoration-none"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Right Controls: Fullscreen + Call + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 focus:outline-none"
              aria-label="Toggle Fullscreen"
              title={isFullscreen ? 'Exit Full Screen' : 'Full Screen'}
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>

            <a
              href="tel:8940585378"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold text-decoration-none"
              aria-label="Call Emergency"
            >
              <PhoneCall size={14} />
              <span>Call</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-[#001f3f] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
