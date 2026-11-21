import { useState } from 'react';
import { HeartPulse, Activity, Baby, Bone, Stethoscope, ArrowRight, CheckCircle2, Calendar, X } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const services = [
    {
      id: 'cardiology',
      title: 'Cardiology',
      icon: HeartPulse,
      image: '/images/services/cardiology.jpg',
      shortDesc: 'Comprehensive cardiovascular care including preventive checkups, 2D Echo, TMT, and 24/7 cardiac emergency management.',
      fullDesc: 'The Cardiology Center at Naira Hospital provides specialized prevention, diagnosis, and treatment for heart conditions. Equipped with state-of-the-art non-invasive and invasive diagnostics, our dedicated cardiologists treat coronary diseases, hypertension, arrhythmias, and cardiac failure with personalized therapeutic plans.',
      features: [
        'Digital ECG & 2D Color Doppler Echocardiography',
        'Treadmill Stress Testing (TMT) & Holter Monitoring',
        'Advanced Cardiac Intensive Care Unit (CCU)',
        'Hypertension & Preventive Heart Health Clinics'
      ],
      timing: 'OPD: 9:00 AM - 1:00 PM & 5:00 PM - 8:00 PM',
      leadDoctor: 'Dr. R. Sundaram (MD, DM Cardiology)'
    },
    {
      id: 'neurology',
      title: 'Neurology',
      icon: Activity,
      image: '/images/services/neurology.jpg',
      shortDesc: 'Advanced diagnosis and therapies for brain, spine, peripheral nerve disorders, migraine, and acute stroke recovery.',
      fullDesc: 'Our Neurology Department delivers clinical precision for complex disorders of the central and peripheral nervous systems. Supported by modern neuro-imaging and rapid response acute stroke protocols, we provide specialized medical intervention for epilepsy, Parkinsonism, neuropathy, and chronic headaches.',
      features: [
        'Acute Stroke Thrombolysis Protocol',
        'Digital Electroencephalogram (EEG) & EMG studies',
        'Comprehensive Epilepsy and Headache Clinic',
        'Neuro-Rehabilitation & Physical Therapy'
      ],
      timing: 'OPD: 10:00 AM - 2:00 PM & 4:00 PM - 7:00 PM',
      leadDoctor: 'Dr. K. Rajesh (MD, DM Neurology)'
    },
    {
      id: 'pediatrics',
      title: 'Pediatrics',
      icon: Baby,
      image: '/images/services/pediatrics.jpg',
      shortDesc: 'Warm, child-friendly healthcare from neonatal infancy through adolescence, including growth tracking and immunizations.',
      fullDesc: 'Naira Hospital’s Pediatrics Wing offers gentle, holistic care for infants, children, and young teens. From scheduled immunization calendars and developmental monitoring to acute respiratory management and pediatric emergency care, we prioritize your child’s health and emotional comfort.',
      features: [
        'Neonatal and Pediatric Intensive Care (NICU/PICU)',
        'Routine and Optional Childhood Immunization Programs',
        'Pediatric Asthma, Allergy and Respiratory Clinic',
        'Child Nutrition and Growth Milestones Assessment'
      ],
      timing: 'OPD: 9:00 AM - 1:00 PM & 4:30 PM - 8:30 PM',
      leadDoctor: 'Dr. P. Anitha (MD, DCH Pediatrics)'
    },
    {
      id: 'orthopedics',
      title: 'Orthopedics',
      icon: Bone,
      image: '/images/services/orthopedics.jpg',
      shortDesc: 'Expert bone, joint, fracture, and spine solutions with minimally invasive surgery, arthroscopy, and physiotherapy.',
      fullDesc: 'Our Orthopedics and Trauma Care Centre provides complete skeletal and muscular wellness. Whether treating sports injuries, complex joint trauma, osteoporosis, or severe degenerative arthritis, our orthopedic surgeons utilize modern surgical techniques and customized rehabilitation programs.',
      features: [
        'Total Knee & Hip Replacement Procedures',
        'Minimally Invasive Arthroscopy & Sports Medicine',
        '24/7 Fracture, Polytrauma & Emergency Fixation',
        'In-House Physiotherapy and Mobility Rehabilitation'
      ],
      timing: 'OPD: 9:30 AM - 1:30 PM & 5:00 PM - 8:00 PM',
      leadDoctor: 'Dr. S. Vignesh (MS Ortho, DNB)'
    },
    {
      id: 'general-medicine',
      title: 'General Medicine',
      icon: Stethoscope,
      image: '/images/services/general-medicine.jpg',
      shortDesc: 'Complete primary healthcare, diagnostic evaluations, diabetic management, lifestyle counseling, and fever clinics.',
      fullDesc: 'The Department of General Internal Medicine is the cornerstone of adult patient care at Naira Hospital. Our physicians offer comprehensive diagnoses for acute illnesses, fevers, infectious diseases, metabolic syndromes, and long-term management of chronic conditions such as diabetes and hypertension.',
      features: [
        'Comprehensive Executive Health Checkup Packages',
        'Evidence-Based Diabetic & Hypertension Control',
        'Infectious Disease, Dengue, and Fever Protocol Units',
        'Geriatric Healthcare and Preventive Wellness'
      ],
      timing: 'OPD: 8:00 AM - 8:00 PM (Daily)',
      leadDoctor: 'Dr. M. Karthik (MD General Medicine)'
    }
  ];

  const handleBookFromService = (serviceTitle) => {
    setSelectedService(null);
    setAppointmentData({ department: serviceTitle });
    setAppointmentOpen(true);
  };

  return (
    <section id="services" className="py-5 py-lg-6" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container-xl">
        {/* Section Header */}
        <div className="text-center mb-5 scroll-reveal">
          <div className="section-tag">
            <span>Specialized Medical Services</span>
          </div>
          <h2 className="section-title">Our Medical Specialties</h2>
          <p className="section-subtitle">
            Providing evidence-based clinical treatments, advanced diagnostics, and dedicated specialist care tailored to every member of your family.
          </p>
        </div>

        {/* 5 Service Cards Grid with Staggered Scroll Reveal */}
        <div className="row g-4 justify-content-center">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className={`col-md-6 col-lg-4 scroll-reveal stagger-${idx + 1}`}>
                <div 
                  className="hospital-card h-100 d-flex flex-column"
                  style={{
                    borderRadius: '18px'
                  }}
                >
                  {/* Service Image with Top Overlay */}
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                    />
                    <div 
                      className="position-absolute bottom-0 start-0 p-3 w-100 d-flex align-items-center justify-content-between"
                      style={{ background: 'linear-gradient(to top, rgba(10, 25, 47, 0.75), transparent)' }}
                    >
                      <span className="text-white small fw-semibold">Naira Specialty Care</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    {/* Icon & Title */}
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: 'var(--teal-light)',
                          color: 'var(--teal-primary)',
                          border: '1px solid var(--teal-subtle)'
                        }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <h4 className="fw-bold mb-0 text-navy">{service.title}</h4>
                    </div>

                    <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                      {service.shortDesc}
                    </p>

                    {/* Learn More Button */}
                    <div className="pt-2 border-top d-flex align-items-center justify-content-between">
                      <button 
                        type="button" 
                        className="btn btn-link p-0 text-decoration-none fw-bold text-teal d-inline-flex align-items-center gap-1"
                        onClick={() => setSelectedService(service)}
                      >
                        <span>Learn More</span>
                        <ArrowRight size={16} />
                      </button>

                      <button 
                        type="button"
                        className="btn btn-sm btn-light text-navy rounded-pill px-3"
                        onClick={() => handleBookFromService(service.title)}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Learn More Modal */}
      {selectedService && (
        <div className="modal-backdrop-custom" onClick={() => setSelectedService(null)}>
          <div className="modal-content-custom" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="p-4 border-bottom d-flex align-items-center justify-content-between" style={{ backgroundColor: 'var(--teal-light)' }}>
              <div className="d-flex align-items-center gap-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '44px', height: '44px', backgroundColor: 'var(--teal-primary)' }}
                >
                  <selectedService.icon size={22} />
                </div>
                <div>
                  <h5 className="fw-bold mb-0 text-navy">{selectedService.title} Department</h5>
                  <small className="text-muted">Lead: {selectedService.leadDoctor}</small>
                </div>
              </div>
              <button 
                type="button" 
                className="btn btn-sm btn-light rounded-circle p-2"
                onClick={() => setSelectedService(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              <div className="rounded-3 overflow-hidden mb-3" style={{ maxHeight: '220px' }}>
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
                {selectedService.fullDesc}
              </p>

              <h6 className="fw-bold text-navy mb-2">Key Diagnostic & Treatment Capabilities</h6>
              <div className="row g-2 mb-4">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <div className="d-flex align-items-start gap-2 small text-navy">
                      <CheckCircle2 size={16} className="text-teal flex-shrink-0 mt-1" />
                      <span>{feat}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-3 bg-light d-flex align-items-center justify-content-between mb-4 small">
                <div>
                  <span className="text-muted d-block">Consultation Hours:</span>
                  <strong className="text-navy">{selectedService.timing}</strong>
                </div>
                <div>
                  <span className="text-muted d-block">Emergency Support:</span>
                  <strong className="text-teal">24 Hours / 7 Days</strong>
                </div>
              </div>

              {/* Actions */}
              <div className="d-flex justify-content-end gap-2 pt-2 border-top">
                <button 
                  type="button" 
                  className="btn btn-light rounded-pill px-4"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn-primary-teal"
                  onClick={() => handleBookFromService(selectedService.title)}
                >
                  <Calendar size={18} />
                  <span>Book for {selectedService.title}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={appointmentOpen} 
        onClose={() => setAppointmentOpen(false)} 
        initialData={appointmentData || {}}
      />
    </section>
  );
}
