import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Activity,
  ShieldCheck,
  Bed,
  CheckCircle2,
  Pill,
  Microscope,
  PhoneCall,
  Clock,
  Sparkles,
  Droplets,
  Apple,
  Dumbbell,
  Moon,
  HeartHandshake
} from 'lucide-react';
import Modal from './Modal';
import useScrollReveal from '../hooks/useScrollReveal';

export default function FacilitiesPage() {
  useScrollReveal();
  const [selectedFacility, setSelectedFacility] = useState(null);

  // 6 Image-based Facility Cards as specified
  const facilities = [
    {
      id: 'icu',
      title: 'ICU – Intensive Care Unit',
      image: '/images/facilities/icu.jpg',
      icon: <Activity size={28} className="text-royal" />,
      shortDesc: 'Advanced monitoring and intensive medical care for patients who need close observation and critical support.',
      purpose: 'To provide round-the-clock life-support monitoring, invasive hemodynamic tracking, and rapid resuscitative interventions for critically ill medical, surgical, and cardiac patients.',
      benefits: [
        '1:1 specialized nurse-to-patient ratio for intensive monitoring',
        'Advanced multiparameter monitors & motorized ICU beds',
        'Central oxygen, air, and negative-pressure isolation capabilities',
        '24/7 on-site critical care physicians and anesthetists'
      ]
    },
    {
      id: 'operation-theatre',
      title: 'Operation Theatre',
      image: '/images/facilities/operation-theatre.jpg',
      icon: <ShieldCheck size={28} className="text-royal" />,
      shortDesc: 'Modern surgical environments supported by trained medical professionals and appropriate equipment.',
      purpose: 'To provide a strictly sterile surgical environment with HEPA laminar air-flow filtration, allowing surgeons to perform general, laparoscopic, orthopedic, and emergency procedures safely.',
      benefits: [
        'Laminar air flow with positive pressure to prevent surgical infections',
        'High-definition laparoscopic surgical imaging towers',
        'Advanced anesthesia workstations with continuous gas monitoring',
        'Strict autoclave sterilization and antimicrobial protocols'
      ]
    },
    {
      id: 'patient-rooms',
      title: 'Premium Patient Rooms',
      image: '/images/facilities/patient-rooms.jpg',
      icon: <Bed size={28} className="text-royal" />,
      shortDesc: 'Comfortable, hygienic, and patient-friendly accommodation designed for recovery.',
      purpose: 'To create a peaceful, dignified, and restful healing atmosphere for inpatient recovery, equipped with nurse call systems, attached sanitization facilities, and family comfort amenities.',
      benefits: [
        'Spacious private rooms and semi-private recovery suites',
        'Dedicated attendant seating and couch arrangements',
        'Daily infection-control sanitization and fresh linens',
        'Direct nurse call bell with instant bedside response'
      ]
    },
    {
      id: 'scan-centre',
      title: 'Scan Centre',
      image: '/images/facilities/emergency.jpg',
      icon: <Sparkles size={28} className="text-royal" />,
      shortDesc: 'Diagnostic imaging facilities designed to support medical evaluation and diagnosis.',
      purpose: 'To empower our medical consultants with clear, rapid diagnostic imaging for soft tissues, skeletal structures, abdominal organs, and vascular networks.',
      benefits: [
        'High-frequency digital ultrasound with Doppler capabilities',
        'Diagnostic evaluation for obstetrics, abdomen, and cardiology',
        'Low radiation digital radiographic screening systems',
        'Rapid report generation for emergency decision making'
      ]
    },
    {
      id: 'laboratory',
      title: 'Laboratory',
      image: '/images/facilities/laboratory.jpg',
      icon: <Microscope size={28} className="text-royal" />,
      shortDesc: 'Diagnostic laboratory support for essential investigations and medical testing.',
      purpose: 'To provide clinicians with rapid, accurate diagnostic pathology, biochemistry, microbiology, and hematology results to ensure precise treatment decisions.',
      benefits: [
        'Fully automated clinical chemistry and hematology analyzers',
        'Emergency cardiac marker and critical electrolyte testing',
        'Strict daily calibration and internal quality control validation',
        'Hygienic and gentle blood sampling for children and adults'
      ]
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      image: '/images/facilities/pharmacy.jpg',
      icon: <Pill size={28} className="text-royal" />,
      shortDesc: 'Convenient access to medicines and pharmacy support.',
      purpose: 'To ensure patients and attendants have seamless, immediate access to authentic, quality-tested medications, surgical disposables, and pediatric formulations at all hours.',
      benefits: [
        'Open 24 hours every day of the week',
        'Temperature-monitored cold storage for vaccines & injectables',
        'Professional pharmacist guidance on dosage and precautions',
        'Authentic procurement directly from licensed pharmaceutical companies'
      ]
    }
  ];

  const healthTips = [
    {
      icon: <Apple size={28} className="text-royal" />,
      title: 'Maintain a Balanced Diet',
      tip: 'Incorporate fresh fruits, vegetables, whole grains, and lean proteins while minimizing excessive refined sugars and processed salts.'
    },
    {
      icon: <Droplets size={28} className="text-royal" />,
      title: 'Drink Sufficient Water',
      tip: 'Stay hydrated with at least 8-10 glasses (2.5L) of pure water daily to support kidney filtration and cellular vitality.'
    },
    {
      icon: <Dumbbell size={28} className="text-royal" />,
      title: 'Exercise Regularly',
      tip: 'Engage in 30 minutes of moderate physical activity such as brisk walking, cycling, or yoga at least 5 days a week.'
    },
    {
      icon: <Moon size={28} className="text-royal" />,
      title: 'Get Adequate Sleep',
      tip: 'Aim for 7 to 8 hours of uninterrupted, quality sleep every night to facilitate physical tissue repair and immune resilience.'
    },
    {
      icon: <ShieldCheck size={28} className="text-royal" />,
      title: 'Maintain Daily Hygiene',
      tip: 'Regular hand washing with soap, oral dental care twice daily, and food hygiene prevent common viral and bacterial infections.'
    },
    {
      icon: <Activity size={28} className="text-royal" />,
      title: 'Attend Regular Checkups',
      tip: 'Periodic health screenings help diagnose conditions like high blood pressure and diabetes long before symptoms manifest.'
    }
  ];

  return (
    <div className="bg-light-blue">
      {/* 1. FACILITIES HERO SECTION */}
      <section className="py-5 bg-white border-bottom border-light">
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-start">
              <span className="section-badge">Modern Infrastructure. Better Care.</span>
              <h1 className="fw-bolder text-navy display-5 lh-sm mb-3">Our Facilities</h1>
              <p className="lead text-muted fs-6 mb-4">
                At NAIRA Multi-Specialty Hospital, we bring together advanced technology, modern infrastructure, and a healing environment designed around your well-being.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-3">
                <Link to="/appointment" className="btn-primary-custom">
                  <Calendar size={18} /> Book Appointment
                </Link>
                <a href="#facility-cards" className="btn-secondary-custom">
                  Explore Infrastructure
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/facilities/building.jpg"
                alt="NAIRA Multi-Speciality Hospital Exterior Infrastructure"
                className="rounded-4 shadow-lg w-100 object-fit-cover border border-white border-3"
                style={{ maxHeight: '380px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/facilities/patient-rooms.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMAGE-BASED FACILITY CARDS */}
      <section className="py-5" id="facility-cards">
        <div className="container py-lg-3">
          <div className="text-center mb-5">
            <span className="section-badge">World-Class Infrastructure</span>
            <h2 className="section-title fs-2">Advanced Medical Facilities</h2>
            <p className="section-subtitle">
              Every department is designed with patient safety, sterilization, and swift medical attention at its core.
            </p>
          </div>

          <div className="row g-4 text-start">
            {facilities.map((fac) => (
              <div className="col-lg-4 col-md-6" key={fac.id}>
                <div className="hospital-card h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div style={{ height: '210px', backgroundColor: '#071f3d' }}>
                      <img
                        src={fac.image}
                        alt={fac.title}
                        className="w-100 h-100 object-fit-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/about/interior.jpg';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="bg-royal-light p-2 rounded-circle">
                          {fac.icon}
                        </div>
                        <h4 className="fw-bold text-navy fs-5 mb-0">{fac.title}</h4>
                      </div>
                      <p className="text-muted small mb-0">{fac.shortDesc}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      type="button"
                      className="btn-outline-custom btn-sm w-100 justify-content-center"
                      onClick={() => setSelectedFacility(fac)}
                    >
                      Learn More <Activity size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE NAIRA FACILITIES? */}
      <section className="py-5 bg-white border-top border-bottom border-light">
        <div className="container py-lg-3">
          <div className="text-center mb-5">
            <span className="section-badge">Why Our Facilities</span>
            <h2 className="section-title fs-2">Why Choose NAIRA Facilities?</h2>
            <p className="section-subtitle">
              Built to meet rigorous healthcare accreditation benchmarks and deliver compassionate care 24/7.
            </p>
          </div>

          <div className="row g-4 text-start">
            {[
              {
                title: 'Advanced Infrastructure',
                desc: 'Clean, sterile modular environments equipped with high-precision diagnostic and monitoring equipment.',
                icon: <Activity size={28} className="text-royal" />
              },
              {
                title: 'Expert Medical Team',
                desc: 'Experienced doctors, intensivists, certified nurses, and lab technicians operating the facilities.',
                icon: <HeartHandshake size={28} className="text-royal" />
              },
              {
                title: '24/7 Emergency Support',
                desc: 'Trauma casualty, emergency imaging, and critical care units ready without pause at all hours.',
                icon: <Clock size={28} className="text-royal" />
              },
              {
                title: 'Compassionate Care',
                desc: 'Patient comfort, dignity, and respectful communication prioritised in every single room and ward.',
                icon: <ShieldCheck size={28} className="text-royal" />
              }
            ].map((item, idx) => (
              <div className="col-lg-3 col-sm-6" key={idx}>
                <div className="hospital-card p-4 h-100">
                  <div className="bg-royal-light p-3 rounded-circle d-inline-flex mb-3">
                    {item.icon}
                  </div>
                  <h5 className="fw-bold text-navy fs-6 mb-2">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMON HEALTHCARE & WELLNESS TIPS SECTION */}
      <section className="py-5">
        <div className="container py-lg-3">
          <div className="text-center mb-5">
            <span className="section-badge">Wellness Education</span>
            <h2 className="section-title fs-2">Daily Healthcare & Preventive Tips</h2>
            <p className="section-subtitle">
              Practical health habits recommended by NAIRA medical specialists for lifelong well-being.
            </p>
          </div>

          <div className="row g-4 text-start">
            {healthTips.map((tip, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="hospital-card p-4 h-100">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div className="bg-royal-light p-2 rounded-circle">
                      {tip.icon}
                    </div>
                    <h5 className="fw-bold text-navy fs-6 mb-0">{tip.title}</h5>
                  </div>
                  <p className="text-muted small mb-0">{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EMERGENCY CALL BANNER */}
      <section className="py-5 bg-navy text-white">
        <div className="container text-center py-2">
          <h3 className="fw-bold mb-2 text-white">Need Hospital Admission or Emergency Assistance?</h3>
          <p className="text-light opacity-75 max-w-2xl mx-auto mb-4" style={{ maxWidth: '650px' }}>
            Our emergency department and admission desk operate 24 hours a day, 7 days a week in Sivakasi.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="tel:8940585378"
              className="btn btn-warning fw-bold rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2"
            >
              <PhoneCall size={18} /> Call 8940585378
            </a>
            <Link to="/contact" className="btn-outline-white">
              Contact Hospital Reception
            </Link>
          </div>
        </div>
      </section>

      {/* FACILITY DETAILS MODAL */}
      {selectedFacility && (
        <Modal
          isOpen={!!selectedFacility}
          onClose={() => setSelectedFacility(null)}
          title={selectedFacility.title}
        >
          <div className="row g-4 text-start">
            <div className="col-md-5">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="rounded-3 shadow-sm w-100 h-100 object-fit-cover"
                style={{ maxHeight: '250px' }}
              />
            </div>
            <div className="col-md-7">
              <h5 className="fw-bold text-navy mb-2">{selectedFacility.title}</h5>
              <p className="text-muted small mb-3">{selectedFacility.purpose}</p>

              <h6 className="fw-semibold text-navy small mb-2">Key Patient Benefits & Standards:</h6>
              <ul className="list-unstyled mb-4" style={{ fontSize: '0.88rem' }}>
                {selectedFacility.benefits.map((b, idx) => (
                  <li key={idx} className="d-flex align-items-center gap-2 mb-1 text-muted">
                    <CheckCircle2 size={16} className="text-royal flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="d-flex gap-2">
                <Link
                  to="/appointment"
                  className="btn-primary-custom btn-sm"
                  onClick={() => setSelectedFacility(null)}
                >
                  Book Appointment
                </Link>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                  onClick={() => setSelectedFacility(null)}
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
