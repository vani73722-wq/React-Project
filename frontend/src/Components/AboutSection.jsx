import { useState } from 'react';
import { ShieldAlert, Cpu, Award, Stethoscope, ArrowRight, CheckCircle2, Clock, X } from 'lucide-react';

export default function AboutSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-5 py-lg-6" style={{ backgroundColor: 'var(--slate-50)' }}>
      <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Left Column: Hospital Reception Photograph */}
          <div className="col-lg-6">
            <div className="position-relative mx-auto" style={{ maxWidth: '520px' }}>
              <div 
                className="rounded-4 overflow-hidden shadow-lg border"
                style={{ borderColor: 'rgba(255,255,255,0.8)' }}
              >
                <img 
                  src="/images/about/reception.jpg" 
                  alt="Naira Hospital Reception and Patient Care" 
                  className="img-fluid w-100"
                  style={{ maxHeight: '460px', objectFit: 'cover', display: 'block' }}
                  onError={(e) => {
                    e.currentTarget.src = '/images/contact/reception.jpg';
                  }}
                />
              </div>

              {/* Decorative Trust Badge on Image */}
              <div 
                className="position-absolute bg-white p-3 rounded-3 shadow-md border d-none d-sm-flex align-items-center gap-3"
                style={{ bottom: '-20px', right: '-15px', zIndex: 2 }}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: '44px', height: '44px', backgroundColor: 'var(--teal-primary)' }}
                >
                  <Award size={24} />
                </div>
                <div>
                  <div className="fw-bold text-navy" style={{ fontSize: '0.92rem' }}>NABH Accredited</div>
                  <small className="text-muted" style={{ fontSize: '0.78rem' }}>Excellence in Patient Safety</small>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="col-lg-6">
            <div className="section-tag">
              <span>About Naira Hospital</span>
            </div>

            <h2 className="section-title mb-3">Your Health, Our Priority</h2>

            <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              Founded with the noble mission to make world-class healthcare accessible, ethical, and patient-centered, <strong>NAIRA HOSPITAL</strong> has evolved into a premier multi-specialty institution in Sivakasi. Our medical ecosystem pairs distinguished specialist physicians with state-of-the-art clinical infrastructure to provide empathetic and precise care for every patient.
            </p>

            {/* Trust, Emergency Care & Advanced Technology Pillars */}
            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                <div className="p-3 bg-white rounded-3 border h-100 shadow-xs">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <ShieldAlert size={20} className="text-teal" />
                    <h6 className="fw-bold mb-0 text-navy">24/7 Emergency Care</h6>
                  </div>
                  <small className="text-muted">Dedicated trauma bay, rapid ambulance dispatch, and critical care intensivists.</small>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="p-3 bg-white rounded-3 border h-100 shadow-xs">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <Cpu size={20} className="text-teal" />
                    <h6 className="fw-bold mb-0 text-navy">Advanced Technology</h6>
                  </div>
                  <small className="text-muted">Digital imaging, modern ICU ventilators, and automated robotic lab analyzers.</small>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="p-3 bg-white rounded-3 border h-100 shadow-xs">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <Stethoscope size={20} className="text-teal" />
                    <h6 className="fw-bold mb-0 text-navy">Expert Specialists</h6>
                  </div>
                  <small className="text-muted">Senior consultants across Cardiology, Neurology, Pediatrics, and Orthopedics.</small>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="p-3 bg-white rounded-3 border h-100 shadow-xs">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <Clock size={20} className="text-teal" />
                    <h6 className="fw-bold mb-0 text-navy">Zero-Wait OPD</h6>
                  </div>
                  <small className="text-muted">Seamless digital booking and prioritized patient triage protocols.</small>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div>
              <button 
                type="button" 
                className="btn-outline-teal"
                onClick={() => setModalOpen(true)}
              >
                <span>Learn More About Us</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Detailed Modal */}
      {modalOpen && (
        <div className="modal-backdrop-custom" onClick={() => setModalOpen(false)}>
          <div className="modal-content-custom" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-bottom d-flex align-items-center justify-content-between" style={{ backgroundColor: 'var(--teal-light)' }}>
              <div className="d-flex align-items-center gap-2">
                <div className="rounded-circle bg-teal text-white p-2">
                  <Award size={20} />
                </div>
                <div>
                  <h5 className="fw-bold mb-0 text-navy">About NAIRA HOSPITAL</h5>
                  <small className="text-muted">Committed to Clinical Excellence & Compassion</small>
                </div>
              </div>
              <button 
                type="button" 
                className="btn btn-sm btn-light rounded-circle p-2"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4">
              <div className="rounded-3 overflow-hidden mb-3" style={{ maxHeight: '220px' }}>
                <img 
                  src="/images/about/team.jpg" 
                  alt="Naira Hospital Medical Team" 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <h5 className="fw-bold text-navy mb-2">Our Mission & Vision</h5>
              <p className="text-muted small mb-3" style={{ lineHeight: '1.6' }}>
                To provide compassionate, comprehensive, and high-quality healthcare to our community with integrity, clinical excellence, and state-of-the-art medical technology. We envision becoming the benchmark for healthcare in Tamil Nadu through clinical outcomes, patient safety, and accessible treatment.
              </p>

              <h6 className="fw-bold text-navy mb-2">Our Core Commitments</h6>
              <div className="d-flex flex-column gap-2 mb-4 small">
                <div className="d-flex align-items-center gap-2 text-navy">
                  <CheckCircle2 size={16} className="text-teal flex-shrink-0" />
                  <span><strong>Ethical Transparency:</strong> Clear treatment pricing with no hidden charges.</span>
                </div>
                <div className="d-flex align-items-center gap-2 text-navy">
                  <CheckCircle2 size={16} className="text-teal flex-shrink-0" />
                  <span><strong>Rapid Emergency Response:</strong> Fully prepared 24/7 triage and trauma team.</span>
                </div>
                <div className="d-flex align-items-center gap-2 text-navy">
                  <CheckCircle2 size={16} className="text-teal flex-shrink-0" />
                  <span><strong>Patient-First Dignity:</strong> Empathetic nursing care focused on recovery and comfort.</span>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button 
                  type="button" 
                  className="btn btn-primary-teal px-4"
                  onClick={() => setModalOpen(false)}
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
