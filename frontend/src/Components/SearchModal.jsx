import { useState, useEffect } from 'react';
import { Search, X, User, Activity, Building, ArrowRight } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSelectAction }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchableData = [
    // Services
    { type: 'Service', title: 'Cardiology', desc: 'Heart care, ECG, 2D Echo, Cardiac ICU', section: '#services', category: 'Medical Specialty' },
    { type: 'Service', title: 'Neurology', desc: 'Brain, spine, stroke treatment, neuro diagnostics', section: '#services', category: 'Medical Specialty' },
    { type: 'Service', title: 'Pediatrics', desc: 'Child health, immunization, neonatal care', section: '#services', category: 'Medical Specialty' },
    { type: 'Service', title: 'Orthopedics', desc: 'Joint replacement, trauma care, arthroscopy', section: '#services', category: 'Medical Specialty' },
    { type: 'Service', title: 'General Medicine', desc: 'Comprehensive adult health, diabetic care, fever clinic', section: '#services', category: 'Medical Specialty' },
    
    // Doctors
    { type: 'Doctor', title: 'Dr. R. Sundaram', desc: 'Chief Cardiologist (MD, DM Cardiology - 18+ Yrs Exp)', section: '#doctors', category: 'Cardiology' },
    { type: 'Doctor', title: 'Dr. A. Meenakshi', desc: 'Senior Obstetrician & Gynecologist (MS OBG - 14+ Yrs Exp)', section: '#doctors', category: 'Gynecology' },
    { type: 'Doctor', title: 'Dr. K. Rajesh', desc: 'Senior Neurologist (MD, DM Neurology - 12+ Yrs Exp)', section: '#doctors', category: 'Neurology' },
    { type: 'Doctor', title: 'Dr. P. Anitha', desc: 'Consultant Pediatrician (MD, DCH - 10+ Yrs Exp)', section: '#doctors', category: 'Pediatrics' },
    { type: 'Doctor', title: 'Dr. S. Vignesh', desc: 'Orthopedic & Joint Surgeon (MS Ortho, DNB - 15+ Yrs Exp)', section: '#doctors', category: 'Orthopedics' },
    { type: 'Doctor', title: 'Dr. M. Karthik', desc: 'General Physician & Diabetologist (MD Medicine - 11+ Yrs Exp)', section: '#doctors', category: 'General Medicine' },

    // Facilities
    { type: 'Facility', title: 'ICU Care', desc: 'Advanced Intensive Care Unit with ventilators & 24/7 monitoring', section: '#facilities', category: 'Critical Care' },
    { type: 'Facility', title: 'Advanced Laboratory', desc: 'Fully automated pathology, biochemistry & microbiology', section: '#facilities', category: 'Diagnostics' },
    { type: 'Facility', title: 'Diagnostic Imaging', desc: 'Digital X-Ray, CT Scan, 3D Ultrasound, Mammography', section: '#facilities', category: 'Radiology' },
    { type: 'Facility', title: 'Modern Patient Rooms', desc: 'Comfortable private suites & hygienic inpatient care', section: '#facilities', category: 'Inpatient Care' },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = searchableData.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (item) => {
    onClose();
    if (onSelectAction) {
      onSelectAction(item);
    } else {
      const el = document.querySelector(item.section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div className="search-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="p-3 border-bottom d-flex align-items-center gap-2">
          <Search size={22} className="text-teal flex-shrink-0" />
          <input
            type="text"
            className="form-control border-0 shadow-none fs-5 py-1"
            placeholder="Search doctors, services, facilities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <button 
            type="button" 
            className="btn btn-sm btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Suggestions & Results */}
        <div className="p-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {filtered.length === 0 ? (
            <div className="text-center py-4 text-muted">
              <p className="mb-1 fw-medium">No results found for "{searchTerm}"</p>
              <small>Try searching for "Cardiology", "Neurology", "Dr. Rajesh", or "ICU"</small>
            </div>
          ) : (
            <div>
              <div className="small text-muted fw-bold text-uppercase px-2 mb-2" style={{ letterSpacing: '0.05em' }}>
                {searchTerm ? `Found ${filtered.length} matching results` : 'Popular Searches'}
              </div>
              <div className="d-flex flex-column gap-2">
                {filtered.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleItemClick(item)}
                    className="p-3 rounded-3 d-flex align-items-center justify-content-between"
                    style={{
                      backgroundColor: 'var(--slate-50)',
                      border: '1px solid var(--slate-200)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--teal-light)';
                      e.currentTarget.style.borderColor = 'var(--teal-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--slate-50)';
                      e.currentTarget.style.borderColor = 'var(--slate-200)';
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: item.type === 'Doctor' ? '#e0f2fe' : item.type === 'Service' ? '#f0fdfa' : '#fef3c7',
                          color: item.type === 'Doctor' ? '#0284c7' : item.type === 'Service' ? '#0d9488' : '#d97706'
                        }}
                      >
                        {item.type === 'Doctor' ? <User size={20} /> : item.type === 'Service' ? <Activity size={20} /> : <Building size={20} />}
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <span className="fw-bold" style={{ color: 'var(--navy)' }}>{item.title}</span>
                          <span className="badge rounded-pill" style={{ backgroundColor: 'rgba(13, 148, 136, 0.1)', color: 'var(--teal-primary)', fontSize: '0.75rem' }}>
                            {item.type}
                          </span>
                        </div>
                        <small className="text-muted d-block">{item.desc}</small>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-teal flex-shrink-0 ms-2" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-2 px-3 bg-light border-top d-flex align-items-center justify-content-between small text-muted">
          <span>Press <strong>ESC</strong> to close</span>
          <span>Emergency Assistance: <strong>8940585378</strong></span>
        </div>
      </div>
    </div>
  );
}
