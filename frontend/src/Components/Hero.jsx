import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

export default function Hero({
  tagline,
  title,
  description,
  buttonText = 'Book Appointment',
  buttonLink = '/contact',
  imgUrl,
  images: propImages,
  reverse = false,
}) {
  const defaultSlides = [
    {
      url: imgUrl || '/care.jpg',
      caption: "📍 Sivakasi's Premier Healthcare Destination",
      alt: 'Doctors caring for patients',
      badge: 'Compassionate Care',
    },
    {
      url: '/hospic.png',
      caption: '🏥 Advanced Emergency & Trauma Infrastructure',
      alt: 'Hospital exterior building',
      badge: '24/7 Casualty',
    },
    {
      url: '/scan.jpg',
      caption: '🔬 Modern CT, Ultrasound & Diagnostic Center',
      alt: 'Advanced medical diagnostics',
      badge: 'High Precision Lab',
    },
    {
      url: '/Naira.jpg',
      caption: '❤️ 10+ Years of Healing Families in Sivakasi',
      alt: 'Naira hospital front campus',
      badge: 'Trusted Legacy',
    },
  ];

  const slides = propImages && propImages.length > 0 ? propImages : defaultSlides;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  // Auto-play timer
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, slides.length]);

  return (
    <section className="relative overflow-hidden w-full py-8 md:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-[#eaf2ff] via-[#f1f6ff] to-[#f5f8ff] border-b border-blue-100 shadow-sm">
      <div className="w-full">
        <div
          className={`flex flex-col ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } items-center justify-between gap-8 lg:gap-14 xl:gap-16`}
        >
          {/* Content Column */}
          <div className="w-full lg:w-1/2 text-left space-y-4 md:space-y-5">
            {tagline && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide">
                <span>{tagline}</span>
              </div>
            )}

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#001f3f] leading-tight tracking-tight">
              {title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to={buttonLink}
                className="inline-flex items-center justify-center gap-2 bg-[#001f3f] hover:bg-[#0d6efd] text-white font-semibold rounded-full px-6 py-3 text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 text-decoration-none group"
              >
                <Calendar size={18} />
                <span>{buttonText}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:8940585378"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-full px-5 py-3 text-sm sm:text-base border border-slate-200 shadow-sm hover:shadow transition-all text-decoration-none"
              >
                <Phone size={16} className="text-emerald-600" />
                <span>Call Helpline</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2 text-xs text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-600" />
                NABH Standards
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-600" />
                24/7 Emergency Care
              </span>
            </div>
          </div>

          {/* Image Slider Column */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              className="relative w-full max-w-md lg:max-w-xl group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slider Main Container */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                {/* Slides */}
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.url}
                      alt={slide.alt || title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/care.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                    {/* Badge top-left */}
                    {slide.badge && (
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#001f3f] px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        {slide.badge}
                      </div>
                    )}

                    {/* Bottom Caption */}
                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm font-medium bg-black/45 backdrop-blur-md px-3.5 py-2 rounded-xl flex items-center justify-between">
                      <span className="truncate pr-2">{slide.caption}</span>
                      <span className="text-[11px] font-mono text-slate-300 shrink-0">
                        {currentIndex + 1}/{slides.length}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Arrow Controls */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all opacity-80 hover:opacity-100 focus:outline-none"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all opacity-80 hover:opacity-100 focus:outline-none"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Indicator Dots below slider */}
              <div className="flex items-center justify-center gap-2 mt-3">
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                      dotIdx === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Decorative accent glow */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-blue-200/50 blur-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
