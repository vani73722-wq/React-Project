import { useState } from 'react';
import { Building, ShieldCheck, CheckCircle2, ArrowRight, X } from 'lucide-react';

export default function FacilitiesSection() {
  const [selectedFacility, setSelectedFacility] = useState(null);

  const facilities = [
    {
      id: 'icu',
      title: 'ICU Care',
      subtitle: '24/7 Critical Care Unit',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
      shortDesc: 'Dedicated intensive care unit featuring advanced multi-parameter monitors, ventilators, and round-the-clock intensivist coverage.',
      fullDesc: 'Our Intensive Care Unit (ICU) provides specialized monitoring and clinical life support for critically ill patients. With strict sterile controls, dedicated 1:1 nurse-to-patient ratios for critical cases, advanced mechanical ventilators, and non-invasive hemodynamic monitoring, our ICU is always ready for emergency interventions.',
      highlights: [
        'Advanced Mechanical Ventilators & BiPAP/CPAP',
        'Multi-Channel Invasive Hemodynamic Monitors',
        'Continuous Defibrillator & Emergency Crash Carts',
        'Strict Infection Control & Negative Pressure Isolation'
      ]
    },
    {
      id: 'lab',
      title: 'Advanced Laboratory',
      subtitle: 'Accredited Diagnostic Pathology',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88',
      shortDesc: 'Fully automated diagnostic laboratory delivering accurate, rapid results for biochemistry, pathology, and microbiology.',
      fullDesc: 'The central diagnostic laboratory at Naira Hospital operates 24/7 to support clinical decisions. Powered by computerized barcoded sample tracking, automated analyzers, and rigorous quality control protocols, we ensure fast turnaround times for routine as well as emergency investigations.',
      highlights: [
        'Fully Automated Biochemistry & Immunoassay Analyzers',
        'Comprehensive Hematology & Coagulation Profiling',
        'Clinical Microbiology & Culture Sensitivity Testing',
        'Digital Barcoded Sample Tracking & Online Reporting'
      ]
    },
    {
      id: 'imaging',
      title: 'Diagnostic Imaging',
      subtitle: 'Digital Radiology & Scans',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907',
      shortDesc: 'Comprehensive imaging services including high-resolution Digital X-Ray, CT scan, and 3D Color Doppler Ultrasound.',
      fullDesc: 'Our Radiology and Imaging Centre is equipped with advanced low-radiation digital imaging technology. Radiologists work directly with treating physicians to provide prompt and precise diagnostic scans for trauma, orthopedic injuries, chest conditions, and abdominal emergencies.',
      highlights: [
        'Low-Radiation High-Frequency Digital X-Ray Units',
        'Multi-Slice Helical Computed Tomography (CT Scan)',
        '3D/4D Color Doppler Sonography & Vascular Ultrasound',
        'Instant PACS Digital Archiving & Reporting System'
      ]
    },
    {
      id: 'rooms',
      title: 'Modern Patient Rooms',
      subtitle: 'Comfortable Inpatient Suites',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      shortDesc: 'Spacious, hygienic private suites and semi-private rooms thoughtfully engineered for serene patient rest and recovery.',
      fullDesc: 'Designed to offer peaceful, therapeutic recovery environments, our inpatient rooms feature ergonomic motorized hospital beds, nurse call intercoms, climate control, and attached sanitized restrooms. Each room provides comfortable accommodations for family attendants as well.',
      highlights: [
        'Motorized Ergonomic Patient Beds & Intercom Call Buttons',
        'Individual Climate Control & Air Purification',
        'Sanitized En-Suite Bathrooms with Safety Handrails',
        'Comfortable Sleeper Loungers for Accompanying Family'
      ]
    }
  ];

  return (
    <section id="facilities" className="py-5 py-lg-6" style={{ backgroundColor: 'var(--slate-50)' }}>
      <div className="container-xl">
        {/* Section Header */}
        <div className="text-center mb-5 scroll-reveal">
          <div className="section-tag">
            <Building size={16} />
            <span>Infrastructure & Technology</span>
          </div>
          <h2 className="section-title">World-Class Facilities</h2>
          <p className="section-subtitle">
            Engineered to the highest clinical safety standards, providing an optimal healing environment with cutting-edge medical equipment.
          </p>
        </div>

        {/* 4 Facilities Grid with Staggered Scroll Reveal */}
        <div className="row g-4">
          {facilities.map((facility, idx) => (
            <div key={facility.id} className={`col-md-6 scroll-reveal stagger-${idx + 1}`}>
              <div
                className="hospital-card h-100 overflow-hidden d-flex flex-column"
                style={{
                  borderRadius: '20px',
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--slate-200)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Beautiful Image Presentation with Zoom Effect */}
                <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-100 h-100 img-scroll-zoom"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-3 d-flex justify-content-between align-items-center"
                    style={{ background: 'linear-gradient(to top, rgba(10, 25, 47, 0.8), transparent)' }}
                  >
                    <span className="badge rounded-pill" style={{ backgroundColor: 'var(--teal-primary)', color: '#ffffff' }}>
                      {facility.subtitle}
                    </span>
                  </div>
                </div>

                {/* Facility Details */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h4 className="fw-bold text-navy mb-2">{facility.title}</h4>
                  <p className="text-muted small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                    {facility.shortDesc}
                  </p>

                  <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                    <span className="small text-muted d-flex align-items-center gap-1">
                      <ShieldCheck size={16} className="text-teal" /> NABH Safety Certified
                    </span>
                    <button
                      type="button"
                      className="btn btn-link p-0 text-decoration-none fw-bold text-teal d-inline-flex align-items-center gap-1"
                      onClick={() => setSelectedFacility(facility)}
                    >
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Details Modal */}
      {selectedFacility && (
        <div className="modal-backdrop-custom" onClick={() => setSelectedFacility(null)}>
          <div className="modal-content-custom" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-bottom d-flex align-items-center justify-content-between" style={{ backgroundColor: 'var(--teal-light)' }}>
              <div>
                <h5 className="fw-bold mb-0 text-navy">{selectedFacility.title}</h5>
                <small className="text-muted">{selectedFacility.subtitle}</small>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-light rounded-circle p-2"
                onClick={() => setSelectedFacility(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4">
              <div className="rounded-3 overflow-hidden mb-3" style={{ maxHeight: '240px' }}>
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <p className="text-muted mb-4 small" style={{ lineHeight: '1.7' }}>
                {selectedFacility.fullDesc}
              </p>

              <h6 className="fw-bold text-navy mb-2">Technical Capabilities & Features</h6>
              <div className="row g-2 mb-4">
                {selectedFacility.highlights.map((item, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="p-2 bg-light rounded-2 small text-navy d-flex align-items-start gap-2">
                      <CheckCircle2 size={16} className="text-teal flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary-teal px-4"
                  onClick={() => setSelectedFacility(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
