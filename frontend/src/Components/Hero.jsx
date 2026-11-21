import { useState, useEffect, useRef } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Heart, Award, Clock, Users } from 'lucide-react';
import AppointmentModal from './AppointmentModal';
import AutoHeroCarousel from './AutoHeroCarousel';

function StatCount({ end, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Apple-like smooth cubic ease-out curve
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const handleExploreServices = () => {
    const el = document.querySelector('#services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/services';
    }
  };

  return (
    <section id="home" className="py-5 py-lg-6 position-relative overflow-hidden" style={{ backgroundColor: 'var(--slate-50)' }}>
      {/* Decorative Background Blob */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container-xl position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="col-lg-6">
            <div className="section-tag animate-hero-badge">
              <ShieldCheck size={16} />
              <span>Leading Healthcare in Sivakasi</span>
            </div>

            <h1
              className="display-4 fw-bolder mb-3 animate-hero-title"
              style={{
                color: 'var(--navy)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em'
              }}
            >
              Compassionate care. <br />
              <span className="text-teal" style={{ background: 'var(--teal-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Better health.
              </span>
            </h1>

            <p className="lead text-muted mb-4 animate-hero-subtitle" style={{ fontSize: '1.18rem', lineHeight: '1.6', maxWidth: '540px' }}>
              Expert care, modern facilities, and a team dedicated to you. Experience personalized medical attention backed by advanced diagnostics and 24/7 critical emergency response.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="d-flex flex-wrap gap-3 mb-4 small text-slate-700 animate-hero-bullets">
              <span className="d-inline-flex align-items-center gap-1 fw-semibold text-navy">
                <Heart size={16} className="text-teal" /> 24/7 Emergency & ICU
              </span>
              <span className="d-inline-flex align-items-center gap-1 fw-semibold text-navy">
                <Users size={16} className="text-teal" /> Experienced Specialists
              </span>
              <span className="d-inline-flex align-items-center gap-1 fw-semibold text-navy">
                <Clock size={16} className="text-teal" /> Instant Online OPD Booking
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap align-items-center gap-3 pt-2 animate-hero-ctas">
              <button
                type="button"
                className="btn-green-glow"
                onClick={() => setAppointmentOpen(true)}
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>

              <button
                type="button"
                className="btn-dark-blue"
                onClick={handleExploreServices}
              >
                <span>Explore Services</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Trust Stats Bar with Smooth Count-Up Animation */}
            <div className="row g-3 pt-4 mt-3 border-top animate-hero-stats">
              <div className="col-4">
                <h3 className="fw-bolder mb-0 text-navy">
                  <StatCount end={10} suffix="+" />
                </h3>
                <small className="text-muted">Years of Trust</small>
              </div>
              <div className="col-4">
                <h3 className="fw-bolder mb-0 text-navy">
                  <StatCount end={50} suffix="k+" />
                </h3>
                <small className="text-muted">Patients Treated</small>
              </div>
              <div className="col-4">
                <h3 className="fw-bolder mb-0 text-teal">24/7</h3>
                <small className="text-muted">Emergency Care</small>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Auto-Running Hero Carousel with Floating Badges */}
          <div className="col-lg-6 position-relative animate-hero-image">
            <div className="position-relative mx-auto" style={{ maxWidth: '560px' }}>
              <AutoHeroCarousel />

              {/* Floating Badge Top-Right: Rating */}
              <div
                className="hero-floating-badge position-absolute d-none d-sm-flex"
                style={{
                  top: '-15px',
                  right: '-15px',
                  zIndex: 12,
                  animation: 'floatSlow 4s ease-in-out infinite'
                }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '42px', height: '42px', backgroundColor: '#f59e0b' }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <div className="fw-bold text-navy" style={{ fontSize: '0.92rem' }}>4.9 / 5 Rating</div>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>From 12,000+ Reviews</small>
                </div>
              </div>

              {/* Floating Badge Bottom-Left: Emergency Support */}
              <div
                className="hero-floating-badge position-absolute d-none d-sm-flex"
                style={{
                  bottom: '-15px',
                  left: '-15px',
                  zIndex: 12
                }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '42px', height: '42px', backgroundColor: '#00C853' }}
                >
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="fw-bold text-navy" style={{ fontSize: '0.92rem' }}>NABH Standards</div>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>Certified Clinical Safety</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </section>
  );
}
