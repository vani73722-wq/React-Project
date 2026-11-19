import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  CheckCircle2,
  Stethoscope,
  Activity,
  Heart,
  Baby,
  Bone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Pill,
  Syringe,
  Microscope,
  FileText
} from 'lucide-react';
import Modal from './Modal';

export default function ServicesPage() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  // 7 Core Services as specified in prompt
  const services = [
    {
      id: 'treatments',
      title: 'Treatments',
      icon: <Stethoscope size={28} className="text-royal" />,
      image: '/images/services/general-medicine.jpg',
      shortDesc: 'Expert treatment and personalized medical care for a wide range of health conditions.',
      fullDesc:
        'Our clinical treatment programs cover inpatient and outpatient medical therapies for acute and chronic conditions. Under the care of senior consultants, each patient receives an individualized treatment protocol based on clinical guidelines.',
      benefits: [
        'Personalized treatment plans for chronic disorders',
        'Inpatient medical management and monitoring',
        'Post-operative care and rehabilitation',
        'Preventive health consultations and follow-up'
      ]
    },
    {
      id: 'scans',
      title: 'Scans',
      icon: <Activity size={28} className="text-royal" />,
      image: '/images/facilities/icu.jpg',
      shortDesc: 'Advanced diagnostic imaging services to support accurate diagnosis.',
      fullDesc:
        'NAIRA Hospital offers modern diagnostic imaging facilities to give our clinicians detailed anatomic insight. Fast, high-resolution scans allow prompt detection and accurate staging of internal medical conditions.',
      benefits: [
        'Ultrasound and Doppler imaging',
        'Advanced diagnostic evaluation protocols',
        'Immediate radiologist review for emergency cases',
        'Low-radiation high-fidelity digital systems'
      ]
    },
    {
      id: 'laboratory-tests',
      title: 'Laboratory Tests',
      icon: <Microscope size={28} className="text-royal" />,
      image: '/images/facilities/laboratory.jpg',
      shortDesc: 'Reliable diagnostic testing with quality laboratory support.',
      fullDesc:
        'Our fully automated pathology and clinical biochemistry lab delivers high-accuracy results for routine and specialized medical investigations. Rigorous daily quality control guarantees test reliability.',
      benefits: [
        'Automated hematology and biochemistry analyzers',
        'Rapid turnaround times for emergency blood work',
        'Hormone assays, serology, and urine pathology',
        'Digital reports directly integrated into doctor consultations'
      ]
    },
    {
      id: 'x-ray',
      title: 'X-Ray',
      icon: <FileText size={28} className="text-royal" />,
      image: '/images/services/xray.jpg',
      shortDesc: 'Imaging services to assist doctors in evaluating medical conditions.',
      fullDesc:
        'Digital radiography services provide sharp diagnostic images for chest, skeletal, abdominal, and trauma examinations with minimized radiation exposure for adult and pediatric patients.',
      benefits: [
        'High-resolution digital X-Ray imaging',
        'Rapid emergency fracture assessments',
        'Pulmonary and chest health screenings',
        'Immediate digital availability for orthopedic surgeons'
      ]
    },
    {
      id: 'blood-tests',
      title: 'Blood Tests',
      icon: <Syringe size={28} className="text-royal" />,
      image: '/images/services/bloodtest.jpg',
      shortDesc: 'Essential blood investigations and diagnostic testing.',
      fullDesc:
        'We conduct comprehensive blood analyses including Complete Blood Count (CBC), lipid panels, glycemic indicators (HbA1c), liver and kidney function tests, and cardiac enzyme profiles.',
      benefits: [
        'Gentle and hygienic phlebotomy sampling',
        'Same-day reporting for routine panels',
        'Comprehensive annual preventive health checkups',
        'Critical emergency cardiac marker testing'
      ]
    },
    {
      id: 'operations',
      title: 'Operations',
      icon: <ShieldCheck size={28} className="text-royal" />,
      image: '/images/facilities/operation-theatre.jpg',
      shortDesc: 'Safe surgical procedures supported by professional medical teams.',
      fullDesc:
        'Our advanced Operation Theatres feature laminar air filtration, sterile surgical fields, ergonomic anesthesia work-stations, and laparoscopy setups for safe general, gynecological, and orthopedic surgeries.',
      benefits: [
        'Strict infection-control sterilization standards',
        'Experienced surgical teams and certified anesthetists',
        'Minimally invasive laparoscopic procedure capabilities',
        'Dedicated Post-Anesthesia Care Unit (PACU)'
      ]
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      icon: <Pill size={28} className="text-royal" />,
      image: '/images/facilities/pharmacy.jpg',
      shortDesc: 'Quality medicines and medication support.',
      fullDesc:
        'Our 24/7 in-house hospital pharmacy ensures immediate access to genuine medications, surgical supplies, pediatric syrups, and critical care injectables with professional pharmacist guidance on dosage.',
      benefits: [
        'Open 24 hours a day, 7 days a week',
        'Temperature-controlled medication storage',
        'Pharmacist counseling on prescription compliance',
        'Authentic medicines sourced from certified manufacturers'
      ]
    }
  ];

  // 6 Medical Specialties with dedicated details
  const specialties = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: <Heart size={32} className="text-danger" />,
      image: '/images/services/cardiology.jpg',
      tagline: 'Heart & Vascular Health',
      shortDesc: 'Comprehensive cardiovascular care, ECG monitoring, hypertension management, and heart wellness.',
      conditions: ['Hypertension & High Blood Pressure', 'Coronary Artery Disease', 'Arrhythmia & Palpitations', 'Heart Failure Management'],
      prepTips: 'Carry your previous ECGs, list of medications, and fast for 8 hours if lipid tests are scheduled.',
      leadDoctor: 'Dr. Sarah Johnson, MD, DM (Cardiology)'
    },
    {
      id: 'gynecology',
      name: 'Gynecology & Maternity',
      icon: <Baby size={32} className="text-royal" />,
      image: '/images/services/gynecology.jpg',
      tagline: 'Women & Newborn Wellness',
      shortDesc: 'Antenatal care, safe deliveries, prenatal counseling, fertility evaluation, and women’s reproductive health.',
      conditions: ['Pregnancy & Antenatal Care', 'PCOS & Hormonal Imbalance', 'Menstrual Disorders', 'Postnatal Wellness & Lactation'],
      prepTips: 'Bring your previous ultrasound scans, blood group reports, and vaccination history.',
      leadDoctor: 'Dr. Priya Raman, MBBS, MS (OBG)'
    },
    {
      id: 'general-medicine',
      name: 'General Medicine',
      icon: <Stethoscope size={32} className="text-royal" />,
      image: '/images/services/general-medicine.jpg',
      tagline: 'Adult Primary & Chronic Care',
      shortDesc: 'Holistic management of acute fevers, diabetes, hypertension, infectious diseases, and routine health checks.',
      conditions: ['Type 2 Diabetes Mellitus', 'Seasonal Fevers & Infections', 'Thyroid Disorders', 'Respiratory Infections & Asthma'],
      prepTips: 'Keep a 7-day log of your blood sugar or blood pressure readings if being treated for chronic conditions.',
      leadDoctor: 'Dr. Michael Chen, MBBS, MD (General Medicine)'
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      icon: <Baby size={32} className="text-royal" />,
      image: '/images/services/pediatrics.jpg',
      tagline: 'Child Health & Growth Monitoring',
      shortDesc: 'Gentle, attentive care for infants, children, and adolescents, including developmental checks and immunizations.',
      conditions: ['Childhood Fevers & Viral Illnesses', 'Vaccination Schedules', 'Growth & Nutritional Deficiencies', 'Pediatric Asthma & Allergies'],
      prepTips: 'Bring your child’s official vaccination card and a favorite toy to ensure a comfortable consultation.',
      leadDoctor: 'Dr. Ananya Sharma, MBBS, DCH (Pediatrics)'
    },
    {
      id: 'dermatology',
      name: 'Dermatology',
      icon: <Sparkles size={32} className="text-royal" />,
      image: '/images/services/dermatology.jpg',
      tagline: 'Skin, Hair & Nail Care',
      shortDesc: 'Specialized clinical dermatology for eczema, psoriasis, acne, hair loss, fungal infections, and skin health.',
      conditions: ['Acne & Skin Pigmentation', 'Eczema & Psoriasis', 'Allergic Dermatitis & Hives', 'Hair Loss & Scalp Conditions'],
      prepTips: 'Avoid heavy makeup or topical creams on the day of consultation to allow clear clinical skin evaluation.',
      leadDoctor: 'Dr. Kavitha Nair, MBBS, MD (Dermatology)'
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      icon: <Bone size={32} className="text-royal" />,
      image: '/images/services/orthopedics.jpg',
      tagline: 'Bones, Joints & Mobility',
      shortDesc: 'Relief for joint pain, osteoarthritis, fracture care, spine health, sports injuries, and physical rehabilitation.',
      conditions: ['Osteoarthritis & Knee Pain', 'Fractures & Joint Dislocations', 'Back Pain & Spondylosis', 'Ligament & Sports Injuries'],
      prepTips: 'Wear loose clothing for physical joint examination and bring recent X-Rays or MRI films.',
      leadDoctor: 'Dr. Rajesh Kumar, MS (Ortho), Fellowship in Joint Replacement'
    }
  ];

  return (
    <div className="bg-light-blue">
      {/* 1. SERVICES HERO SECTION */}
      <section className="py-5 bg-white border-bottom border-light">
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-start">
              <span className="section-badge">Your Health Is Our Priority</span>
              <h1 className="fw-bolder text-navy display-5 lh-sm mb-3">
                Our Comprehensive Healthcare Services
              </h1>
              <p className="lead text-muted fs-6 mb-4">
                From diagnosis to recovery, we are with you at every step. Our healthcare team combines medical expertise, modern technology, and compassionate support to provide care you can trust.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-3">
                <Link to="/appointment" className="btn-primary-custom">
                  <Calendar size={18} /> Book Appointment
                </Link>
                <a href="#specialties" className="btn-secondary-custom">
                  View Specialties <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/about/patient-care.jpg"
                alt="Doctor caring for a patient at NAIRA Hospital"
                className="rounded-4 shadow-lg w-100 object-fit-cover border border-white border-3"
                style={{ maxHeight: '380px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/about/team.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR 7 CORE SERVICES */}
      <section className="py-5">
        <div className="container py-lg-3">
          <div className="text-center mb-5">
            <span className="section-badge">Diagnostics & Clinical Facilities</span>
            <h2 className="section-title fs-2">Our Healthcare Services</h2>
            <p className="section-subtitle">
              Click “Learn More” on any service to explore clinical details, diagnostic equipment, and patient benefits.
            </p>
          </div>

          <div className="row g-4 text-start">
            {services.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="hospital-card h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div style={{ height: '190px', backgroundColor: '#071f3d' }}>
                      <img
                        src={item.image}
                        alt={item.title}
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
                          {item.icon}
                        </div>
                        <h4 className="fw-bold text-navy fs-5 mb-0">{item.title}</h4>
                      </div>
                      <p className="text-muted small mb-0">{item.shortDesc}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      type="button"
                      className="btn-outline-custom btn-sm w-100 justify-content-center"
                      onClick={() => setSelectedService(item)}
                    >
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EMOTIONAL HEALTHCARE SECTION */}
      <section className="py-5 bg-white border-top border-bottom border-light">
        <div className="container py-lg-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-start">
              <span className="section-badge">Always by Your Side</span>
              <h2 className="section-title fs-2 mb-3">
                “Because your health is our greatest concern...”
              </h2>
              <p className="lead text-navy fw-semibold mb-3">
                “Let us care for you, today and always.”
              </p>
              <p className="text-muted mb-4">
                We believe medical care is not merely about prescriptions; it is about bringing peace of mind to patients and families. Whether it is an unexpected fever, a routine pregnancy checkup, or a complex surgical procedure, NAIRA is here with warmth and devotion.
              </p>
              <Link to="/appointment" className="btn-primary-custom">
                <Calendar size={18} /> Book Appointment
              </Link>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/about/interior.jpg"
                alt="NAIRA Hospital Healing Atmosphere"
                className="rounded-4 shadow-lg w-100 object-fit-cover"
                style={{ maxHeight: '360px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR SERVICES? */}
      <section className="py-5">
        <div className="container py-lg-3">
          <div className="text-center mb-5">
            <span className="section-badge">Why NAIRA Services</span>
            <h2 className="section-title fs-2">Why Choose Our Hospital Services?</h2>
            <p className="section-subtitle">
              Setting high benchmarks in patient comfort, clinical precision, and transparent ethical medical care.
            </p>
          </div>

          <div className="row g-4 text-start">
            {[
              { title: 'Multi-Specialty Care Under One Roof', desc: 'Consult multiple specialists without traveling across different facilities.' },
              { title: 'Experienced and Compassionate Doctors', desc: 'Board-certified physicians dedicated to empathetic communication.' },
              { title: 'Advanced Technology & Infrastructure', desc: 'Modern digital diagnostic systems and infection-controlled surgical suites.' },
              { title: 'Personalized Treatment Plans', desc: 'Tailored healthcare protocols focused on the unique needs of each patient.' },
              { title: 'Patient-Focused Healthcare', desc: 'Supportive nursing, comfortable inpatient rooms, and clear treatment discussions.' },
              { title: 'Reliable Diagnostic Support', desc: 'Rapid, high-accuracy clinical pathology, imaging, and 24/7 emergency testing.' },
            ].map((item, idx) => (
              <div className="col-md-4 col-sm-6" key={idx}>
                <div className="hospital-card p-4 h-100">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <CheckCircle2 size={22} className="text-royal flex-shrink-0" />
                    <h5 className="fw-bold text-navy fs-6 mb-0">{item.title}</h5>
                  </div>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPECIALIZED CARE FOR EVERY NEED */}
      <section className="py-5 bg-white border-top border-bottom border-light" id="specialties">
        <div className="container py-lg-3">
          <div className="text-center mb-5">
            <span className="section-badge">Specialized Clinical Care</span>
            <h2 className="section-title fs-2">Specialized Care for Every Need</h2>
            <p className="section-subtitle">
              Explore our medical departments. Click “View Details” for clinical insight or “Book Consultation” to schedule a visit.
            </p>
          </div>

          <div className="row g-4 text-start">
            {specialties.map((spec) => (
              <div className="col-lg-4 col-md-6" key={spec.id}>
                <div className="hospital-card h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div style={{ height: '180px', backgroundColor: '#071f3d' }}>
                      <img
                        src={spec.image}
                        alt={spec.name}
                        className="w-100 h-100 object-fit-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/services/general-medicine.jpg';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <div className="bg-royal-light p-2 rounded-circle">
                          {spec.icon}
                        </div>
                        <div>
                          <h4 className="fw-bold text-navy fs-5 mb-0">{spec.name}</h4>
                          <small className="text-royal fw-semibold">{spec.tagline}</small>
                        </div>
                      </div>
                      <p className="text-muted small mt-2 mb-0">{spec.shortDesc}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 d-flex flex-column gap-2">
                    <button
                      type="button"
                      className="btn-secondary-custom btn-sm w-100 justify-content-center"
                      onClick={() => setSelectedSpecialty(spec)}
                    >
                      View Details
                    </button>
                    <Link
                      to={`/appointment?department=${encodeURIComponent(spec.name.split(' ')[0])}`}
                      className="btn-primary-custom btn-sm w-100 justify-content-center"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES PAGE ENDING CTA BANNER */}
      <section className="py-5 bg-royal-light">
        <div className="container py-3">
          <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 border border-primary border-opacity-10 text-center">
            <h3 className="fw-bold text-navy mb-2 fs-2">Your Health Matters</h3>
            <p className="lead text-muted fs-6 mb-4">
              Choose NAIRA Hospital for trusted, advanced, and compassionate care for your family.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/appointment" className="btn-primary-custom">
                <Calendar size={18} /> Book Appointment
              </Link>
              <Link to="/doctors" className="btn-secondary-custom">
                Find a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL 1: SERVICE DETAILS */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
        >
          <div className="row g-4 text-start">
            <div className="col-md-5">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="rounded-3 shadow-sm w-100 h-100 object-fit-cover"
                style={{ maxHeight: '250px' }}
              />
            </div>
            <div className="col-md-7">
              <h5 className="fw-bold text-navy mb-2">{selectedService.title} Department</h5>
              <p className="text-muted small mb-3">{selectedService.fullDesc}</p>

              <h6 className="fw-semibold text-navy small mb-2">Service Benefits:</h6>
              <ul className="list-unstyled mb-4" style={{ fontSize: '0.88rem' }}>
                {selectedService.benefits.map((b, idx) => (
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
                  onClick={() => setSelectedService(null)}
                >
                  Book Appointment
                </Link>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* MODAL 2: SPECIALTY DETAILS */}
      {selectedSpecialty && (
        <Modal
          isOpen={!!selectedSpecialty}
          onClose={() => setSelectedSpecialty(null)}
          title={`${selectedSpecialty.name} Specialty`}
        >
          <div className="row g-4 text-start">
            <div className="col-md-5">
              <img
                src={selectedSpecialty.image}
                alt={selectedSpecialty.name}
                className="rounded-3 shadow-sm w-100 h-100 object-fit-cover"
                style={{ maxHeight: '260px' }}
              />
            </div>
            <div className="col-md-7">
              <h5 className="fw-bold text-navy mb-1">{selectedSpecialty.name}</h5>
              <span className="text-royal fw-semibold small d-block mb-3">{selectedSpecialty.tagline}</span>

              <h6 className="fw-bold text-navy small mb-2">Common Conditions Treated:</h6>
              <ul className="list-unstyled mb-3" style={{ fontSize: '0.88rem' }}>
                {selectedSpecialty.conditions.map((cond, idx) => (
                  <li key={idx} className="d-flex align-items-center gap-2 mb-1 text-muted">
                    <CheckCircle2 size={15} className="text-royal flex-shrink-0" />
                    <span>{cond}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-light rounded-3 mb-3" style={{ fontSize: '0.85rem' }}>
                <strong>Preparation Tips: </strong>
                <span className="text-muted">{selectedSpecialty.prepTips}</span>
              </div>

              <div className="mb-4 small text-navy">
                <strong>Department Consultant: </strong>
                <span className="text-royal fw-semibold">{selectedSpecialty.leadDoctor}</span>
              </div>

              <div className="d-flex gap-2">
                <Link
                  to={`/appointment?department=${encodeURIComponent(selectedSpecialty.name.split(' ')[0])}`}
                  className="btn-primary-custom btn-sm"
                  onClick={() => setSelectedSpecialty(null)}
                >
                  Book Consultation Now
                </Link>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                  onClick={() => setSelectedSpecialty(null)}
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
