import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  PhoneCall,
  UserCheck,
  Cpu,
  Clock,
  Heart,
  ShieldCheck,
  Award,
  ArrowRight,
  Activity,
  CheckCircle2,
  Stethoscope,
  Sparkles,
  Users
} from 'lucide-react';
import HeroCarousel from './HeroCarousel';
import Modal from './Modal';

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);

  // 4 Feature cards data with rich expanded modal information
  const features = [
    {
      id: 'expert-doctors',
      icon: <UserCheck size={36} className="text-royal" />,
      title: 'Expert Doctors',
      subtitle: 'Experienced specialists providing the best care.',
      image: '/images/about/team.jpg',
      fullDescription:
        'Our hospital brings together seasoned specialists across Cardiology, Gynecology, Pediatrics, Orthopedics, Neurology, and General Medicine. Every doctor at NAIRA is committed to evidence-based medicine, patient education, and ethical clinical practice.',
      highlights: [
        'Board-certified senior consultants',
        'Multi-disciplinary clinical review for complex cases',
        'Personalized treatment plans tailored to each patient',
        'Continuous professional development & global protocols'
      ]
    },
    {
      id: 'advanced-care',
      icon: <Cpu size={36} className="text-royal" />,
      title: 'Advanced Care',
      subtitle: 'Modern technology and advanced diagnostic support.',
      image: '/images/facilities/icu.jpg',
      fullDescription:
        'NAIRA Multi-Speciality Hospital is equipped with state-of-the-art diagnostic imaging, high-precision laboratory analyzers, modern modular operation theatres, and continuous monitoring systems to deliver accurate diagnosis and superior clinical outcomes.',
      highlights: [
        'High-resolution diagnostic scanning & digital X-Ray',
        'Fully automated clinical pathology laboratory',
        'Laminar air-flow sterile operation theatres',
        'Comprehensive hemodynamic patient monitoring'
      ]
    },
    {
      id: '24-7-services',
      icon: <Clock size={36} className="text-royal" />,
      title: '24/7 Services',
      subtitle: 'Round-the-clock medical support whenever you need it.',
      image: '/images/facilities/emergency.jpg',
      fullDescription:
        'Medical emergencies do not wait, and neither do we. Our Emergency Department, Intensive Care Unit (ICU), in-house pharmacy, and diagnostic lab operate 24 hours a day, 365 days a year with on-duty physicians and trauma care specialists.',
      highlights: [
        '24/7 Emergency trauma & resuscitation team',
        'Round-the-clock in-house pharmacy support',
        'Immediate diagnostic blood work and emergency imaging',
        'Rapid ambulance transfer and emergency hotline (8940585378)'
      ]
    },
    {
      id: 'patient-first',
      icon: <Heart size={36} className="text-royal" />,
      title: 'Patient First',
      subtitle: 'Compassionate and personalized care focused on patients.',
      image: '/images/about/patient-care.jpg',
      fullDescription:
        'At NAIRA, we treat people, not just symptoms. From the moment you enter our reception to your full post-treatment recovery, our nursing and medical staff ensure you feel heard, respected, supported, and surrounded by warmth.',
      highlights: [
        'Compassionate bedside nursing with emotional support',
        'Transparent billing with no hidden expenses',
        'Comfortable recovery rooms designed for healing',
        'Dedicated patient relations officers for seamless care'
      ]
    }
  ];

  const specialties = [
    { name: 'Cardiology', desc: 'Heart care, ECG, echocardiogram, and hypertension management.', icon: '❤️' },
    { name: 'Gynecology & Maternity', desc: 'Comprehensive antenatal care, safe deliveries, and women’s health.', icon: '🌸' },
    { name: 'Pediatrics', desc: 'Specialized neonatal care, child immunizations, and pediatric wellness.', icon: '👶' },
    { name: 'Orthopedics', desc: 'Joint pain relief, fracture management, and spine health.', icon: '🦴' },
    { name: 'Dermatology', desc: 'Advanced clinical skin treatments, allergy management, and care.', icon: '✨' },
    { name: 'General Medicine', desc: 'Holistic chronic disease management, diabetes, and preventive health.', icon: '🩺' }
  ];

  return (
    <div className="bg-light-blue">
      {/* 1. HERO SECTION */}
      <section className="py-5 bg-white border-bottom border-light">
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6 text-start">
              <div className="section-badge d-inline-flex align-items-center gap-1 mb-3">
                <Sparkles size={16} /> Your Health, Our Priority
              </div>
              <h1 className="fw-bolder text-navy display-5 lh-sm mb-3">
                Compassionate Care for a <span className="text-royal">Healthier Tomorrow</span>
              </h1>
              <p className="lead text-muted fs-6 mb-4">
                At NAIRA Multi-Specialty Hospital, your health and happiness matter most. Our experienced medical team, advanced facilities, and compassionate care are here to support you at every step of your healing journey.
              </p>

              {/* Emotional healthcare quote */}
              <div className="p-3 rounded-3 mb-4 bg-light border-start border-4 border-primary">
                <p className="fst-italic text-navy mb-0" style={{ fontSize: '0.95rem' }}>
                  “Every heartbeat matters. Every life deserves care. At NAIRA, we believe healing begins with compassion, trust, and the promise that you are never alone on your journey to better health.”
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3">
                <Link to="/appointment" className="btn-primary-custom">
                  <Calendar size={18} /> Book Appointment
                </Link>
                <Link to="/services" className="btn-secondary-custom">
                  Explore Our Services <ArrowRight size={18} />
                </Link>
              </div>

              {/* Quick Contact hotline */}
              <div className="mt-4 pt-2 d-flex align-items-center gap-3 text-muted" style={{ fontSize: '0.9rem' }}>
                <span className="d-flex align-items-center gap-1 text-navy fw-semibold">
                  <PhoneCall size={16} className="text-royal" /> 24/7 Helpline:
                </span>
                <a href="tel:8940585378" className="text-royal fw-bold text-decoration-none fs-6">
                  8940585378
                </a>
              </div>
            </div>

            {/* Right Side Automatic Carousel */}
            <div className="col-lg-6">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR INTERACTIVE FEATURE CARDS */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Our Pillars of Excellence</span>
            <h2 className="section-title fs-2">Comprehensive Patient-Centric Care</h2>
            <p className="section-subtitle">
              Click any card below to explore our medical standards and how we ensure your complete comfort and safety.
            </p>
          </div>

          <div className="row g-4">
            {features.map((item) => (
              <div className="col-xl-3 col-md-6" key={item.id}>
                <div
                  className="feature-card-interactive h-100 d-flex flex-column justify-content-between text-start"
                  onClick={() => setSelectedFeature(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedFeature(item)}
                >
                  <div>
                    <div className="mb-3 bg-royal-light rounded-circle p-3 d-inline-flex">
                      {item.icon}
                    </div>
                    <h3 className="fs-5 fw-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-muted mb-3" style={{ fontSize: '0.92rem' }}>
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="d-flex align-items-center text-royal fw-semibold" style={{ fontSize: '0.88rem' }}>
                    Click to view details <ArrowRight size={14} className="ms-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUICK 24/7 HIGHLIGHTS STRIP */}
      <section className="py-3 bg-white border-top border-bottom border-light">
        <div className="container">
          <div className="row g-3 text-center text-md-start align-items-center">
            <div className="col-md-3 col-6 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
              <Activity className="text-royal flex-shrink-0" size={24} />
              <div>
                <strong className="d-block text-navy" style={{ fontSize: '0.95rem' }}>24/7 Emergency</strong>
                <small className="text-muted">Always open for trauma care</small>
              </div>
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
              <Stethoscope className="text-royal flex-shrink-0" size={24} />
              <div>
                <strong className="d-block text-navy" style={{ fontSize: '0.95rem' }}>OPD Consultations</strong>
                <small className="text-muted">Morning 8 AM to Evening 8 PM</small>
              </div>
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
              <ShieldCheck className="text-royal flex-shrink-0" size={24} />
              <div>
                <strong className="d-block text-navy" style={{ fontSize: '0.95rem' }}>In-House Pharmacy</strong>
                <small className="text-muted">Genuine medicines 24/7</small>
              </div>
            </div>
            <div className="col-md-3 col-6 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
              <Award className="text-royal flex-shrink-0" size={24} />
              <div>
                <strong className="d-block text-navy" style={{ fontSize: '0.95rem' }}>Accredited Labs</strong>
                <small className="text-muted">Fast & accurate diagnostics</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOSPITAL INTRODUCTION SECTION */}
      <section className="py-5">
        <div className="container py-lg-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="/images/about/interior.jpg"
                  alt="NAIRA Hospital Interior"
                  className="rounded-4 shadow-lg w-100 object-fit-cover"
                  style={{ maxHeight: '420px' }}
                />
                <div
                  className="position-absolute bottom-0 start-0 m-3 p-3 bg-white rounded-3 shadow d-flex align-items-center gap-3"
                  style={{ maxWidth: '280px' }}
                >
                  <div className="bg-royal-light p-2 rounded-circle text-royal">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-navy">Patient Trust</h6>
                    <small className="text-muted">Over 50,000+ families healed with care</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-start">
              <span className="section-badge">Welcome to NAIRA</span>
              <h2 className="section-title fs-2 mb-3">
                Where Medical Excellence Meets Compassionate Care
              </h2>
              <p className="text-muted mb-3">
                NAIRA Multi-Speciality Hospital is dedicated to delivering superior healthcare by uniting high-caliber specialists, modern surgical suites, and dedicated diagnostic equipment under a single patient-friendly environment.
              </p>
              <p className="text-muted mb-4">
                We understand that visiting a hospital can be overwhelming for patients and families. That is why our entire team is trained to deliver personalized support, transparent communication, and compassionate reassurance at every moment.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 size={18} className="text-royal flex-shrink-0" />
                    <span className="text-navy fw-medium">Multi-Disciplinary Team</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 size={18} className="text-royal flex-shrink-0" />
                    <span className="text-navy fw-medium">Modern Operation Theatres</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 size={18} className="text-royal flex-shrink-0" />
                    <span className="text-navy fw-medium">24/7 Critical Care & ICU</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 size={18} className="text-royal flex-shrink-0" />
                    <span className="text-navy fw-medium">Affordable & Ethical Care</span>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <Link to="/about" className="btn-primary-custom">
                  Know More About Us <ArrowRight size={18} />
                </Link>
                <Link to="/doctors" className="btn-secondary-custom">
                  Meet Our Doctors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY PATIENTS CHOOSE NAIRA (STATISTICS) */}
      <section className="py-5 bg-navy text-white">
        <div className="container py-3">
          <div className="text-center mb-5">
            <span className="section-badge bg-white text-navy">Why Patients Trust Us</span>
            <h2 className="text-white fw-bold fs-2">Trusted Healthcare in Sivakasi for Your Family</h2>
            <p className="text-light opacity-75 section-subtitle">
              Delivering high clinical standards and heartfelt compassion to thousands of patients.
            </p>
          </div>

          <div className="row g-4 text-center">
            <div className="col-lg-3 col-6">
              <div className="p-4 rounded-4 bg-white bg-opacity-10 h-100 border border-white border-opacity-10">
                <div className="display-5 fw-bolder text-warning mb-2">10+</div>
                <h5 className="fw-bold mb-1">Years of Service</h5>
                <p className="text-light opacity-75 small mb-0">Experience serving Sivakasi and surrounding regions</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="p-4 rounded-4 bg-white bg-opacity-10 h-100 border border-white border-opacity-10">
                <div className="display-5 fw-bolder text-warning mb-2">50,000+</div>
                <h5 className="fw-bold mb-1">Happy Patients</h5>
                <p className="text-light opacity-75 small mb-0">Recovered and returned to a healthy lifestyle</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="p-4 rounded-4 bg-white bg-opacity-10 h-100 border border-white border-opacity-10">
                <div className="display-5 fw-bolder text-warning mb-2">24/7</div>
                <h5 className="fw-bold mb-1">Emergency Support</h5>
                <p className="text-light opacity-75 small mb-0">Trauma center and casualty always operational</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="p-4 rounded-4 bg-white bg-opacity-10 h-100 border border-white border-opacity-10">
                <div className="display-5 fw-bolder text-warning mb-2">20+</div>
                <h5 className="fw-bold mb-1">Specialist Doctors</h5>
                <p className="text-light opacity-75 small mb-0">Dedicated team of qualified consultants & surgeons</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEDICAL SPECIALTIES PREVIEW */}
      <section className="py-5">
        <div className="container py-lg-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 text-start">
            <div>
              <span className="section-badge">Comprehensive Clinical Care</span>
              <h2 className="section-title fs-2 mb-1">Our Medical Specialties</h2>
              <p className="text-muted mb-0">Expert medical care across multiple departments under one roof.</p>
            </div>
            <div className="mt-3 mt-md-0">
              <Link to="/services" className="btn-outline-custom">
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="row g-4 text-start">
            {specialties.map((spec, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="hospital-card p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="fs-1 mb-2">{spec.icon}</div>
                    <h4 className="fw-bold text-navy fs-5 mb-2">{spec.name}</h4>
                    <p className="text-muted small mb-3">{spec.desc}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between pt-3 border-top border-light">
                    <Link
                      to={`/appointment?department=${encodeURIComponent(spec.name.split(' ')[0])}`}
                      className="text-royal fw-semibold text-decoration-none small"
                    >
                      Book Consultation →
                    </Link>
                    <Link to="/services" className="text-muted small text-decoration-none">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HEALTH TIPS & GUIDANCE SECTION */}
      <section className="py-5 bg-white border-top border-bottom border-light">
        <div className="container py-lg-3">
          <div className="text-center mb-5">
            <span className="section-badge">Patient Guidance</span>
            <h2 className="section-title fs-2">Daily Health & Wellness Tips</h2>
            <p className="section-subtitle">
              Simple everyday habits recommended by NAIRA doctors to protect you and your family.
            </p>
          </div>

          <div className="row g-4 text-start">
            <div className="col-md-4">
              <div className="p-4 rounded-4 bg-light-blue h-100 border border-light">
                <span className="badge bg-royal text-white mb-3 px-3 py-2 rounded-pill">Preventive Care</span>
                <h5 className="fw-bold text-navy mb-2">Annual Health Screenings</h5>
                <p className="text-muted small mb-3">
                  Early detection prevents chronic illnesses. Routine checks for blood pressure, sugar levels, and cardiac markers save lives.
                </p>
                <Link to="/appointment" className="text-royal fw-semibold small text-decoration-none">
                  Book a Preventive Health Package →
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 bg-light-blue h-100 border border-light">
                <span className="badge bg-teal text-white mb-3 px-3 py-2 rounded-pill" style={{ backgroundColor: 'var(--accent-teal)' }}>
                  Lifestyle Tip
                </span>
                <h5 className="fw-bold text-navy mb-2">Hydration & Cardiac Health</h5>
                <p className="text-muted small mb-3">
                  Drinking 2.5 to 3 liters of water daily supports kidney filtration, optimal blood viscosity, and maintains consistent energy.
                </p>
                <span className="text-muted small">Recommended by our Cardiology Team</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 bg-light-blue h-100 border border-light">
                <span className="badge bg-danger text-white mb-3 px-3 py-2 rounded-pill">Emergency Notice</span>
                <h5 className="fw-bold text-navy mb-2">When to Seek Emergency Care</h5>
                <p className="text-muted small mb-3">
                  Sudden chest pain, difficulty breathing, slurred speech, or high fever with convulsions require immediate emergency attention.
                </p>
                <a href="tel:8940585378" className="text-danger fw-bold small text-decoration-none">
                  Emergency Line: 8940585378
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PATIENT CARE & EMOTIONAL MESSAGE BANNER */}
      <section className="py-5 bg-light-blue">
        <div className="container py-lg-4">
          <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 border border-primary border-opacity-10 text-center">
            <div className="bg-royal-light rounded-circle p-3 d-inline-flex text-royal mb-3">
              <Heart size={36} />
            </div>
            <h3 className="fw-bold text-navy mb-3 fs-2">Your Health is Our Promise</h3>
            <p className="lead text-muted fs-6 max-w-3xl mx-auto mb-4" style={{ maxWidth: '750px' }}>
              “Your health is more than a priority. It is our promise. Every patient, every family, every moment of care matters to us. We are here to walk beside you toward a healthier and happier life.”
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/appointment" className="btn-primary-custom">
                <Calendar size={18} /> Book Appointment
              </Link>
              <Link to="/contact" className="btn-secondary-custom">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CONTACT STRIP WITH PHONE LINK */}
      <section className="py-4 bg-navy text-white">
        <div className="container">
          <div className="row align-items-center g-3 text-center text-lg-start">
            <div className="col-lg-7">
              <h4 className="fw-bold mb-1 text-white">Need Immediate Medical Attention or Doctor Consultation?</h4>
              <p className="text-light opacity-75 mb-0" style={{ fontSize: '0.92rem' }}>
                Our medical reception and emergency casualty are available 24/7 to guide you.
              </p>
            </div>
            <div className="col-lg-5 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end gap-3">
              <a
                href="tel:8940585378"
                className="btn btn-warning fw-bold rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2"
              >
                <PhoneCall size={18} /> 8940585378
              </a>
              <Link to="/appointment" className="btn-primary-custom">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL FOR FEATURE CARDS */}
      {selectedFeature && (
        <Modal
          isOpen={!!selectedFeature}
          onClose={() => setSelectedFeature(null)}
          title={selectedFeature.title}
        >
          <div className="row g-4 text-start">
            <div className="col-md-5">
              <img
                src={selectedFeature.image}
                alt={selectedFeature.title}
                className="rounded-3 shadow-sm w-100 h-100 object-fit-cover"
                style={{ maxHeight: '250px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/about/interior.jpg';
                }}
              />
            </div>
            <div className="col-md-7">
              <h5 className="fw-bold text-navy mb-2">{selectedFeature.subtitle}</h5>
              <p className="text-muted small mb-3">{selectedFeature.fullDescription}</p>

              <h6 className="fw-semibold text-navy small mb-2">Key Highlights:</h6>
              <ul className="list-unstyled mb-4" style={{ fontSize: '0.88rem' }}>
                {selectedFeature.highlights.map((point, index) => (
                  <li key={index} className="d-flex align-items-center gap-2 mb-1 text-muted">
                    <CheckCircle2 size={16} className="text-royal flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="d-flex gap-2">
                <Link
                  to="/appointment"
                  className="btn-primary-custom btn-sm"
                  onClick={() => setSelectedFeature(null)}
                >
                  Book Appointment
                </Link>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                  onClick={() => setSelectedFeature(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
