import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Award, ShieldCheck, Heart } from 'lucide-react';

export default function AutoHeroCarousel() {
  const slides = [
    {
      id: 1,
      image: '/images/carousel/carousel-1.jpg',
      alt: 'Modern hospital building reception and state-of-the-art facility',
      badge: '24/7 Modern Facility',
      title: 'Modern Hospital & Reception',
      subtitle: 'Bright, welcoming environment with 24/7 clinical emergency response',
      badgeIcon: ShieldCheck,
      badgeColor: '#00C853'
    },
    {
      id: 2,
      image: '/images/carousel/carousel-2.jpg',
      alt: 'Compassionate doctor consulting patient with care and empathy',
      badge: 'Expert Clinical Specialists',
      title: 'Compassionate Doctor Consultation',
      subtitle: 'Experienced specialists committed to accurate diagnosis & gentle healing',
      badgeIcon: Heart,
      badgeColor: '#ec4899'
    },
    {
      id: 3,
      image: '/images/carousel/carousel-3.jpg',
      alt: 'Gentle newborn baby care and pediatric wellness wing',
      badge: 'Maternity & Neonatal Wing',
      title: 'Loving Mother & Newborn Care',
      subtitle: 'Dedicated NICU, pediatric clinics, and comprehensive maternal safety',
      badgeIcon: Award,
      badgeColor: '#3b82f6'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  // Auto-run every 3 seconds in infinite loop
  useEffect(() => {
    if (isPaused) return;

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPaused, slides.length]);

  // On hover: pause for 2 seconds, then resume auto-run
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);

    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  const handleMouseLeave = () => {
    // If mouse leaves before 2s, keep pause timer or resume smoothly
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }
    // Resume auto-running shortly
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 600);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="position-relative mx-auto rounded-4 overflow-hidden shadow-lg border"
      style={{
        maxWidth: '560px',
        borderColor: 'rgba(255, 255, 255, 0.85)',
        backgroundColor: '#071f3d'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slide Wrapper with Smooth Slide + Fade */}
      <div
        className="position-relative overflow-hidden"
        style={{ height: '440px', minHeight: '380px' }}
      >
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          const BadgeIcon = slide.badgeIcon;
          return (
            <div
              key={slide.id}
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive
                  ? 'scale(1) translateX(0%)'
                  : idx < currentIndex
                  ? 'scale(1.04) translateX(-8%)'
                  : 'scale(1.04) translateX(8%)',
                transition: 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
                pointerEvents: isActive ? 'auto' : 'none',
                zIndex: isActive ? 2 : 1
              }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-100 h-100"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(0.96)'
                }}
              />

              {/* Bottom Gradient Overlay & Caption */}
              <div
                className="position-absolute bottom-0 start-0 end-0 p-4"
                style={{
                  background: 'linear-gradient(to top, rgba(7, 31, 61, 0.92) 0%, rgba(7, 31, 61, 0.65) 60%, transparent 100%)',
                  zIndex: 3
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span
                    className="badge rounded-pill px-3 py-1 text-white d-inline-flex align-items-center gap-1 shadow-sm"
                    style={{ backgroundColor: slide.badgeColor, fontSize: '0.78rem', fontWeight: 600 }}
                  >
                    <BadgeIcon size={13} />
                    {slide.badge}
                  </span>
                  <span className="badge rounded-pill bg-white text-navy px-2 py-1 small fw-semibold">
                    {idx + 1} / {slides.length}
                  </span>
                </div>

                <h3
                  className="text-white fw-bold mb-1"
                  style={{ fontSize: '1.28rem', letterSpacing: '-0.01em', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
                >
                  {slide.title}
                </h3>
                <p
                  className="text-white-50 small mb-0"
                  style={{ lineHeight: '1.4', fontSize: '0.88rem' }}
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        className="btn position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle d-flex align-items-center justify-content-center text-white"
        style={{
          width: '38px',
          height: '38px',
          backgroundColor: 'rgba(7, 31, 61, 0.6)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          zIndex: 10,
          transition: 'all 0.3s ease'
        }}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="btn position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle d-flex align-items-center justify-content-center text-white"
        style={{
          width: '38px',
          height: '38px',
          backgroundColor: 'rgba(7, 31, 61, 0.6)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          zIndex: 10,
          transition: 'all 0.3s ease'
        }}
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots Indicator Below */}
      <div
        className="position-absolute d-flex align-items-center justify-content-center gap-2"
        style={{
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}
      >
        {slides.map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: isActive ? '28px' : '9px',
                height: '9px',
                borderRadius: '50px',
                backgroundColor: isActive ? '#00E676' : 'rgba(255, 255, 255, 0.45)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                boxShadow: isActive ? '0 0 10px rgba(0, 230, 118, 0.8)' : 'none'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
