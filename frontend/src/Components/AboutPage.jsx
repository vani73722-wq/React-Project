import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import {
  Heart,
  Shield,
  Award,
  Sparkles,
  CheckCircle2,
  Users,
  Building,
  Activity,
  ArrowRight,
  Calendar,
  Layers,
  HeartHandshake
} from 'lucide-react';

import useScrollReveal from '../hooks/useScrollReveal';

export default function AboutPage() {
  useScrollReveal();
  const aboutSlides = [
    { src: '/images/contact/exterior.jpg', alt: 'Hospital Exterior and Architecture' },
    { src: '/images/about/reception.jpg', alt: 'Warm and Welcoming Hospital Reception' },
    { src: '/images/about/interior.jpg', alt: 'Clean, Hygienic and Modern Hospital Environment' },
  ];

  const coreValues = [
    {
      title: 'Compassion',
      desc: 'We care with kindness, empathy, and deep understanding for every patient and family.',
      icon: <Heart size={32} className="text-royal" />
    },
    {
      title: 'Patient Safety',
      desc: 'Your safety is our highest priority through rigorous clinical protocols and sterilization.',
      icon: <Shield size={32} className="text-royal" />
    },
    {
      title: 'Integrity',
      desc: 'We uphold honesty, transparency, medical responsibility, and ethical clinical standards.',
      icon: <CheckCircle2 size={32} className="text-royal" />
    },
    {
      title: 'Excellence',
      desc: 'We continuously strive to deliver the highest international standards of clinical outcomes.',
      icon: <Award size={32} className="text-royal" />
    }
  ];

  const whyChoose = [
    {
      title: 'Multiple Specialties',
      desc: 'Comprehensive multi-disciplinary medical care, consultations, and surgeries all under one roof.',
      icon: <Layers size={30} className="text-royal" />
    },
    {
      title: 'Experienced Care Team',
      desc: 'Skilled and dedicated doctors, nurses, and technicians with decades of proven clinical expertise.',
      icon: <Users size={30} className="text-royal" />
    },
    {
      title: 'Modern Diagnostic Facilities',
      desc: 'Advanced digital imaging and fully automated clinical laboratories for accurate, rapid results.',
      icon: <Activity size={30} className="text-royal" />
    },
    {
      title: 'Patient-Friendly Support',
      desc: 'Empathetic guidance, comfortable healing ambiance, and transparent care every step of the journey.',
      icon: <HeartHandshake size={30} className="text-royal" />
    }
  ];

  return (
    <div className="bg-light-blue">
      {/* 1. ABOUT HERO SECTION WITH 3-SLIDE CAROUSEL */}
      <section className="py-5 bg-white border-bottom border-light">
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6 text-start">
              <span className="section-badge">
                <Sparkles size={16} /> Compassionate Care. Advanced Technology. Better Health.
              </span>
              <h1 className="fw-bolder text-navy display-5 lh-sm mb-3">
                About NAIRA Hospital
              </h1>
              <p className="lead text-muted fs-6 mb-3">
                NAIRA Multi-Specialty Hospital is dedicated to bringing multiple medical specialties together under one roof. We are committed to caring for your health, improving your lifestyle, and helping every patient move toward a healthier and happier life.
              </p>
              <p className="text-muted mb-4" style={{ fontSize: '0.95rem' }}>
                Our experienced doctors and dedicated healthcare professionals work together to provide compassionate care, reliable diagnosis, personalized treatment, and a supportive healing environment. At NAIRA, your well-being is always at the heart of everything we do.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <Link to="/appointment" className="btn-primary-custom">
                  <Calendar size={18} /> Book Appointment
                </Link>
                <Link to="/services" className="btn-secondary-custom">
                  Explore Our Services <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right Side 3-Slide Image Carousel (No text overlay) */}
            <div className="col-lg-6">
              <div className="shadow-lg rounded-4 overflow-hidden border border-white border-3">
                <Carousel
                  fade
                  interval={4000}
                  controls={true}
                  indicators={true}
                  className="w-100"
                >
                  {aboutSlides.map((slide, idx) => (
                    <Carousel.Item key={idx}>
                      <div style={{ height: '400px', backgroundColor: '#071f3d' }}>
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="d-block w-100 h-100"
                          style={{ objectFit: 'cover' }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/about/interior.jpg';
                          }}
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION (TWO COLUMNS) */}
      <section className="py-5">
        <div className="container py-lg-3">
          <div className="row align-items-center g-5">
            {/* Left Image */}
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="/images/about/patient-care.jpg"
                  alt="Doctors caring for patients at NAIRA Hospital"
                  className="rounded-4 shadow-lg w-100 object-fit-cover"
                  style={{ maxHeight: '440px' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/about/team.jpg';
                  }}
                />
                <div
                  className="position-absolute bottom-0 end-0 m-3 p-3 bg-white rounded-3 shadow d-flex align-items-center gap-3"
                  style={{ maxWidth: '280px' }}
                >
                  <div className="bg-royal-light p-2 rounded-circle text-royal">
                    <Building size={24} />
                  </div>
                  <div className="text-start">
                    <h6 className="fw-bold mb-0 text-navy">Modern Infrastructure</h6>
                    <small className="text-muted">Designed for patient comfort and recovery</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 text-start">
              <span className="section-badge">Our Identity</span>
              <h2 className="section-title fs-2 mb-3">Who We Are</h2>
              <p className="text-muted mb-3">
                At NAIRA Multi-Specialty Hospital, we are committed to providing high-quality healthcare with compassion, professionalism, and dedication.
              </p>
              <p className="text-muted mb-3">
                Our team of doctors, nurses, and healthcare professionals works together to provide personalized medical care, support patients through every stage of treatment, and create a comfortable and welcoming environment.
              </p>
              <p className="text-muted mb-4">
                With modern facilities, experienced specialists, and a patient-first approach, we strive to make healthcare accessible, reliable, and meaningful for every individual.
              </p>

              <div className="d-flex align-items-center gap-3">
                <Link to="/doctors" className="btn-primary-custom">
                  Meet Our Medical Team <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-secondary-custom">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION & VISION CARDS */}
      <section className="py-5 bg-white border-top border-bottom border-light">
        <div className="container py-lg-3">
          <div className="text-center mb-5">
            <span className="section-badge">Guiding Principles</span>
            <h2 className="section-title fs-2">Our Mission & Vision</h2>
            <p className="section-subtitle">
              The foundational purpose that inspires every clinical decision and patient interaction at NAIRA Hospital.
            </p>
          </div>

          <div className="row g-4 text-start">
            <div className="col-md-6">
              <div className="hospital-card p-4 p-md-5 h-100 border-start border-4 border-primary">
                <div className="bg-royal-light rounded-circle p-3 d-inline-flex text-royal mb-3">
                  <Heart size={32} />
                </div>
                <h3 className="fw-bold text-navy fs-4 mb-3">Our Mission</h3>
                <p className="lead text-muted fs-6 mb-0">
                  “To provide patient-focused healthcare through compassionate service, responsible medical practice, quality treatment, and accessible information.”
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="hospital-card p-4 p-md-5 h-100 border-start border-4 border-info">
                <div className="bg-royal-light rounded-circle p-3 d-inline-flex text-royal mb-3">
                  <Sparkles size={32} />
                </div>
                <h3 className="fw-bold text-navy fs-4 mb-3">Our Vision</h3>
                <p className="lead text-muted fs-6 mb-0">
                  “To become a trusted healthcare destination recognized for quality care, continuous improvement, compassion, and a welcoming patient experience.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR CORE VALUES (4 CARDS) */}
      <section className="py-5">
        <div className="container py-lg-3">
          <div className="text-center mb-5">
            <span className="section-badge">What We Stand For</span>
            <h2 className="section-title fs-2">Our Core Values</h2>
            <p className="section-subtitle">
              These ethical values shape our standard of clinical care, patient safety, and daily hospital governance.
            </p>
          </div>

          <div className="row g-4 text-start">
            {coreValues.map((val, i) => (
              <div className="col-lg-3 col-sm-6" key={i}>
                <div className="hospital-card p-4 h-100 text-center d-flex flex-column align-items-center">
                  <div className="bg-royal-light rounded-circle p-3 mb-3">
                    {val.icon}
                  </div>
                  <h4 className="fw-bold text-navy fs-5 mb-2">{val.title}</h4>
                  <p className="text-muted small mb-0">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE NAIRA? (4 CARDS) */}
      <section className="py-5 bg-white border-top border-bottom border-light">
        <div className="container py-lg-3">
          <div className="text-center mb-5">
            <span className="section-badge">Why NAIRA</span>
            <h2 className="section-title fs-2">Why Choose NAIRA Hospital?</h2>
            <p className="section-subtitle">
              We combine leading medical technology with genuine human empathy to ensure peace of mind for every family.
            </p>
          </div>

          <div className="row g-4 text-start">
            {whyChoose.map((item, i) => (
              <div className="col-lg-3 col-sm-6" key={i}>
                <div className="hospital-card p-4 h-100">
                  <div className="mb-3 bg-royal-light rounded-circle p-3 d-inline-flex">
                    {item.icon}
                  </div>
                  <h4 className="fw-bold text-navy fs-5 mb-2">{item.title}</h4>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOSPITAL ACHIEVEMENTS & COMMITMENT */}
      <section className="py-5">
        <div className="container py-lg-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-start">
              <span className="section-badge">Patient Welfare</span>
              <h2 className="section-title fs-2 mb-3">Our Commitment to Patients</h2>
              <p className="text-muted mb-3">
                Healing is a collaborative journey of trust. At NAIRA Multi-Speciality Hospital, we ensure every patient receives transparent treatment plans, thorough explanations of diagnoses, and respectful support without discrimination.
              </p>
              <ul className="list-unstyled mb-4" style={{ fontSize: '0.95rem' }}>
                <li className="d-flex align-items-center gap-2 mb-2 text-navy">
                  <CheckCircle2 size={18} className="text-royal" />
                  <span>Right to full clinical transparency and informed consent</span>
                </li>
                <li className="d-flex align-items-center gap-2 mb-2 text-navy">
                  <CheckCircle2 size={18} className="text-royal" />
                  <span>Respect for patient dignity, privacy, and cultural diversity</span>
                </li>
                <li className="d-flex align-items-center gap-2 mb-2 text-navy">
                  <CheckCircle2 size={18} className="text-royal" />
                  <span>Clean, quiet, and infection-controlled inpatient recovery rooms</span>
                </li>
                <li className="d-flex align-items-center gap-2 text-navy">
                  <CheckCircle2 size={18} className="text-royal" />
                  <span>Prompt emergency triage and round-the-clock doctor availability</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary-custom">
                Get in Touch with Us
              </Link>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/about/achievements.jpg"
                alt="Hospital Achievements and Quality Care"
                className="rounded-4 shadow-lg w-100 object-fit-cover"
                style={{ maxHeight: '380px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/about/interior.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT PAGE CTA BANNER */}
      <section className="py-5 bg-royal-light">
        <div className="container py-3">
          <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 border border-primary border-opacity-10 text-center">
            <h3 className="fw-bold text-navy mb-2 fs-2">Your Health Matters</h3>
            <p className="lead text-muted fs-6 mb-4">
              Take the next step towards better health with NAIRA Multi-Specialty Hospital.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/appointment" className="btn-primary-custom">
                <Calendar size={18} /> Book Appointment
              </Link>
              <Link to="/services" className="btn-secondary-custom">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
