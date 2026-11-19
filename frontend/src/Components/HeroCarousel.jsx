import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HeroCarousel() {
  const slides = [
    {
      src: '/hospic.png',
      alt: 'Hospital exterior and advanced emergency care',
      badge: '24/7 Multi-Specialty',
      title: 'Modern Healthcare Infrastructure',
      subtitle: 'Equipped with the latest medical technology and emergency trauma care in Sivakasi.',
      action: 'Explore Facilities',
      link: '/facilities',
    },
    {
      src: '/care.jpg',
      alt: 'Doctors caring for patients',
      badge: 'Expert Doctors',
      title: 'Compassionate Patient-First Care',
      subtitle: 'Our renowned doctors provide personalized attention for you and your family.',
      action: 'Meet Our Doctors',
      link: '/doctors',
    },
    {
      src: '/scan.jpg',
      alt: 'Advanced diagnostics and imaging center',
      badge: 'Advanced Diagnostics',
      title: 'State-of-the-Art Scan & Lab',
      subtitle: 'High-precision MRI, CT Scan, Ultrasound, and automated pathology laboratories.',
      action: 'View Services',
      link: '/services',
    },
    {
      src: '/Naira.jpg',
      alt: 'Naira Hospital front campus',
      badge: 'Trusted Legacy',
      title: '10+ Years of Healing Sivakasi',
      subtitle: 'Over 50,000 satisfied patients treated with clinical excellence and warmth.',
      action: 'Book Appointment',
      link: '/contact',
    },
  ];

  return (
    <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-blue-100 bg-white">
      <Carousel
        fade
        interval={4500}
        controls={true}
        indicators={true}
        className="hero-carousel"
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[460px] bg-slate-900">
              <img
                className="w-full h-full object-cover opacity-90"
                src={slide.src}
                alt={slide.alt}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/care.jpg';
                }}
              />
              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

              {/* Responsive Slide Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 text-white text-left max-w-2xl">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-600/90 text-white shadow-sm">
                  {slide.badge}
                </span>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight mb-2 text-white">
                  {slide.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-200 mb-3 line-clamp-2 sm:line-clamp-none max-w-lg">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="btn btn-sm btn-primary rounded-pill px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all text-decoration-none inline-block"
                >
                  {slide.action} →
                </Link>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
