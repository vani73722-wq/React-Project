import { useState } from 'react';
import { Calendar, Clock, Award, Star, ArrowRight, UserCheck, X } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export default function DoctorsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [appointmentInitialData, setAppointmentInitialData] = useState({});

  const allDoctors = [
    {
      id: 1,
      name: 'Dr. R. Sundaram',
      degree: 'MBBS, MD (Gen Med), DM (Cardiology)',
      specialty: 'Chief Cardiologist',
      department: 'Cardiology',
      experience: '18+ Years Experience',
      timings: '09:00 AM - 01:00 PM',
      rating: '4.95',
      reviews: '280+',
      image: '/images/doctors/doctor-1.jpg',
      bio: 'Senior Interventional Cardiologist specializing in preventive heart health, coronary interventions, echocardiography, and complex clinical cardiology management.',
      expertise: ['Preventive Cardiology', '2D Doppler Echocardiography', 'Hypertension & Heart Failure', 'Cardiac Critical Care']
    },
    {
      id: 2,
      name: 'Dr. A. Meenakshi',
      degree: 'MBBS, MS (OBG), DNB',
      specialty: 'Senior Gynecologist & Obstetrician',
      department: 'Gynecology',
      experience: '14+ Years Experience',
      timings: '10:00 AM - 02:00 PM',
      rating: '4.92',
      reviews: '340+',
      image: '/images/doctors/doctor-2.jpg',
      bio: 'Distinguished obstetrician providing gentle, comprehensive maternal-fetal wellness, high-risk pregnancy deliveries, and minimally invasive gynecological surgeries.',
      expertise: ['High-Risk Obstetrics', 'Laparoscopic Surgery', 'Infertility Evaluation', 'PCOS & Women Wellness']
    },
    {
      id: 3,
      name: 'Dr. K. Rajesh',
      degree: 'MBBS, MD (Medicine), DM (Neurology)',
      specialty: 'Senior Consultant Neurologist',
      department: 'Neurology',
      experience: '12+ Years Experience',
      timings: '10:30 AM - 02:30 PM',
      rating: '4.89',
      reviews: '190+',
      image: '/images/doctors/doctor-3.jpg',
      bio: 'Expert neurologist focusing on acute stroke management, epilepsy clinics, peripheral neuropathies, neuro-muscular disorders, and intractable migraines.',
      expertise: ['Acute Stroke Care', 'EEG & Nerve Conduction', 'Epilepsy & Seizures', 'Parkinsonism & Movement Disorders']
    },
    {
      id: 4,
      name: 'Dr. P. Anitha',
      degree: 'MBBS, MD (Pediatrics), DCH',
      specialty: 'Consultant Pediatrician',
      department: 'Pediatrics',
      experience: '10+ Years Experience',
      timings: '09:00 AM - 01:00 PM',
      rating: '4.97',
      reviews: '410+',
      image: '/images/doctors/doctor-4.jpg',
      bio: 'Caring pediatrician passionate about early childhood developmental milestones, infant nutrition, seasonal infections, and complete pediatric immunization.',
      expertise: ['Childhood Vaccinations', 'Neonatal Intensive Care', 'Pediatric Pulmonology', 'Growth & Nutrition Counseling']
    },
    {
      id: 5,
      name: 'Dr. S. Vignesh',
      degree: 'MBBS, MS (Ortho), DNB (Ortho)',
      specialty: 'Orthopedic & Joint Replacement Surgeon',
      department: 'Orthopedics',
      experience: '15+ Years Experience',
      timings: '11:00 AM - 03:00 PM',
      rating: '4.91',
      reviews: '230+',
      image: '/images/doctors/doctor-5.jpg',
      bio: 'Specialist in joint reconstructions, total knee and hip replacements, minimally invasive sports arthroscopy, and complex fracture fixation.',
      expertise: ['Joint Replacement', 'Arthroscopic Knee Surgery', 'Fracture & Trauma Fixation', 'Arthritis Management']
    },
    {
      id: 6,
      name: 'Dr. M. Karthik',
      degree: 'MBBS, MD (Internal Medicine)',
      specialty: 'Senior Physician & Diabetologist',
      department: 'General Medicine',
      experience: '11+ Years Experience',
      timings: '08:30 AM - 01:30 PM',
      rating: '4.88',
      reviews: '310+',
      image: '/images/doctors/doctor-6.jpg',
      bio: 'Internal medicine specialist dedicated to adult health optimization, diabetic complications management, infectious diseases, and preventive healthcare checks.',
      expertise: ['Diabetic Care & Protocols', 'Hypertension & Lipid Clinics', 'Infectious Disease & Fevers', 'Geriatric Medicine']
    },
    {
      id: 7,
      name: 'Dr. T. Revathi',
      degree: 'MBBS, MD (DVL)',
      specialty: 'Consultant Dermatologist',
      department: 'General Medicine',
      experience: '9+ Years Experience',
      timings: '04:00 PM - 07:30 PM',
      rating: '4.87',
      reviews: '180+',
      image: '/images/doctors/doctor-7.jpg',
      bio: 'Clinical dermatologist providing comprehensive treatments for acne, eczema, psoriasis, autoimmune skin conditions, and aesthetic dermatology.',
      expertise: ['Clinical Dermatology', 'Allergy & Eczema Management', 'Psoriasis Therapy', 'Laser & Aesthetic Skin Care']
    },
    {
      id: 8,
      name: 'Dr. V. Gokul',
      degree: 'MBBS, MS (General Surgery)',
      specialty: 'Laparoscopic & General Surgeon',
      department: 'General Medicine',
      experience: '13+ Years Experience',
      timings: '02:00 PM - 06:00 PM',
      rating: '4.93',
      reviews: '205+',
      image: '/images/doctors/doctor-8.jpg',
      bio: 'General and laparoscopic surgeon with vast experience in minimally invasive gallbladder, hernia, appendiceal, and acute abdominal emergency procedures.',
      expertise: ['Laparoscopic Cholecystectomy', 'Hernia Repair', 'Gastrointestinal Surgery', 'Emergency Trauma Surgery']
    }
  ];

  const visibleDoctors = showAll ? allDoctors : allDoctors.slice(0, 6);

  const handleBookDoctor = (doc) => {
    setSelectedDoctor(null);
    setAppointmentInitialData({
      doctor: `${doc.name} (${doc.department})`,
      department: doc.department
    });
    setAppointmentOpen(true);
  };

  return (
    <section id="doctors" className="py-5 py-lg-6" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container-xl">
        {/* Section Header */}
        <div className="text-center mb-5 scroll-reveal">
          <div className="section-tag">
            <span>Specialist Medical Team</span>
          </div>
          <h2 className="section-title">Meet Our Dedicated Doctors</h2>
          <p className="section-subtitle">
            Our esteemed medical specialists bring decades of clinical excellence, compassion, and cutting-edge expertise to ensure the best health outcomes for you.
          </p>
        </div>

        {/* Doctors Grid with Staggered Scroll Reveal */}
        <div className="row g-4">
          {visibleDoctors.map((doc, idx) => (
            <div key={doc.id} className={`col-md-6 col-lg-4 scroll-reveal stagger-${(idx % 6) + 1}`}>
              <div 
                className="hospital-card h-100 d-flex flex-column"
                style={{
                  borderRadius: '18px'
                }}
              >
                {/* Doctor Portrait */}
                <div className="position-relative overflow-hidden" style={{ height: '260px', backgroundColor: '#f1f5f9' }}>
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', objectPosition: 'top center', transition: 'transform 0.4s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  <div 
                    className="position-absolute bottom-0 start-0 w-100 p-2 px-3 d-flex justify-content-between align-items-center"
                    style={{ background: 'linear-gradient(to top, rgba(10, 25, 47, 0.8), transparent)' }}
                  >
                    <span className="badge rounded-pill" style={{ backgroundColor: 'var(--teal-primary)', color: '#ffffff', fontSize: '0.78rem' }}>
                      {doc.specialty}
                    </span>
                    <span className="text-white small fw-bold d-flex align-items-center gap-1">
                      <Star size={13} fill="#f59e0b" color="#f59e0b" /> {doc.rating}
                    </span>
                  </div>
                </div>

                {/* Doctor Card Content */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h4 className="fw-bold mb-1 text-navy">{doc.name}</h4>
                  <small className="text-muted d-block mb-3">{doc.degree}</small>

                  <div className="d-flex flex-column gap-2 mb-4 small text-slate-600 flex-grow-1">
                    <div className="d-flex align-items-center gap-2">
                      <Award size={16} className="text-teal flex-shrink-0" />
                      <span>{doc.experience}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Clock size={16} className="text-teal flex-shrink-0" />
                      <span>OPD: {doc.timings}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                    <button 
                      type="button" 
                      className="btn btn-link p-0 text-decoration-none fw-bold text-teal d-inline-flex align-items-center gap-1"
                      onClick={() => setSelectedDoctor(doc)}
                    >
                      <span>View Profile</span>
                      <ArrowRight size={15} />
                    </button>

                    <button 
                      type="button" 
                      className="btn-primary-teal py-1 px-3"
                      style={{ fontSize: '0.85rem' }}
                      onClick={() => handleBookDoctor(doc)}
                    >
                      <Calendar size={14} />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Doctors Button */}
        <div className="text-center mt-5">
          <button 
            type="button" 
            className="btn-outline-teal px-4"
            onClick={() => setShowAll(!showAll)}
          >
            <UserCheck size={18} />
            <span>{showAll ? 'Show Featured Doctors' : 'View All Doctors'}</span>
          </button>
        </div>
      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div className="modal-backdrop-custom" onClick={() => setSelectedDoctor(null)}>
          <div className="modal-content-custom" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-bottom d-flex align-items-center justify-content-between" style={{ backgroundColor: 'var(--teal-light)' }}>
              <div className="d-flex align-items-center gap-3">
                <img 
                  src={selectedDoctor.image} 
                  alt={selectedDoctor.name} 
                  className="rounded-circle border"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
                <div>
                  <h5 className="fw-bold mb-0 text-navy">{selectedDoctor.name}</h5>
                  <small className="text-muted">{selectedDoctor.specialty}</small>
                </div>
              </div>
              <button 
                type="button" 
                className="btn btn-sm btn-light rounded-circle p-2"
                onClick={() => setSelectedDoctor(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4">
              <p className="text-muted mb-4 small" style={{ lineHeight: '1.7' }}>
                {selectedDoctor.bio}
              </p>

              <h6 className="fw-bold text-navy mb-2">Clinical Expertise & Focus Areas</h6>
              <div className="row g-2 mb-4">
                {selectedDoctor.expertise.map((item, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="p-2 bg-light rounded-2 small text-navy fw-medium">
                      • {item}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-light rounded-3 d-flex justify-content-between align-items-center mb-4 small">
                <div>
                  <span className="text-muted d-block">Consultation Hours:</span>
                  <strong className="text-navy">{selectedDoctor.timings}</strong>
                </div>
                <div>
                  <span className="text-muted d-block">Patient Feedback:</span>
                  <strong className="text-teal">★ {selectedDoctor.rating} ({selectedDoctor.reviews} reviews)</strong>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-2 pt-2 border-top">
                <button 
                  type="button" 
                  className="btn btn-light rounded-pill px-4"
                  onClick={() => setSelectedDoctor(null)}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn-primary-teal"
                  onClick={() => handleBookDoctor(selectedDoctor)}
                >
                  <Calendar size={18} />
                  <span>Book with {selectedDoctor.name}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Booking Modal */}
      <AppointmentModal 
        isOpen={appointmentOpen} 
        onClose={() => setAppointmentOpen(false)}
        initialData={appointmentInitialData}
      />
    </section>
  );
}
