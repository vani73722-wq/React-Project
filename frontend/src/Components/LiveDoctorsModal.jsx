import { useState } from 'react';
import { X, CheckCircle, Clock, Users, Phone, Calendar, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function LiveDoctorsModal({ isOpen, onClose, onBookAppointment }) {
  const [selectedDocForToken, setSelectedDocForToken] = useState(null);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [generatedToken, setGeneratedToken] = useState(null);

  const doctorsStatus = [
    {
      id: 1,
      name: 'Dr. R. Sundaram',
      dept: 'Cardiology',
      specialty: 'Chief Cardiologist',
      room: 'OPD Suite 101',
      status: 'AVAILABLE',
      color: '#00C853',
      waitMins: '10 mins',
      patientsWaiting: 2,
      image: '/images/doctors/doctor-1.jpg'
    },
    {
      id: 2,
      name: 'Dr. A. Meenakshi',
      dept: 'Gynecology',
      specialty: 'Senior Gynecologist & Obstetrician',
      room: 'OPD Suite 104',
      status: 'AVAILABLE',
      color: '#00C853',
      waitMins: '15 mins',
      patientsWaiting: 3,
      image: '/images/doctors/doctor-2.jpg'
    },
    {
      id: 3,
      name: 'Dr. K. Rajesh',
      dept: 'Neurology',
      specialty: 'Senior Consultant Neurologist',
      room: 'OPD Suite 202',
      status: 'BUSY',
      color: '#ef4444',
      waitMins: '25 mins',
      patientsWaiting: 5,
      image: '/images/doctors/doctor-3.jpg'
    },
    {
      id: 4,
      name: 'Dr. P. Anitha',
      dept: 'Pediatrics',
      specialty: 'Consultant Pediatrician',
      room: 'OPD Suite 106 (Kids Wing)',
      status: 'AVAILABLE',
      color: '#00C853',
      waitMins: '12 mins',
      patientsWaiting: 2,
      image: '/images/doctors/doctor-4.jpg'
    },
    {
      id: 5,
      name: 'Dr. S. Vignesh',
      dept: 'Orthopedics',
      specialty: 'Orthopedic & Joint Surgeon',
      room: 'OPD Suite 205',
      status: 'AVAILABLE',
      color: '#00C853',
      waitMins: '18 mins',
      patientsWaiting: 4,
      image: '/images/doctors/doctor-5.jpg'
    },
    {
      id: 6,
      name: 'Dr. M. Karthik',
      dept: 'General Medicine',
      specialty: 'Senior Physician & Diabetologist',
      room: 'OPD Suite 102',
      status: 'AVAILABLE',
      color: '#00C853',
      waitMins: '8 mins',
      patientsWaiting: 1,
      image: '/images/doctors/doctor-6.jpg'
    },
    {
      id: 7,
      name: 'Dr. T. Revathi',
      dept: 'Dermatology',
      specialty: 'Consultant Dermatologist',
      room: 'OPD Suite 208',
      status: 'BUSY',
      color: '#ef4444',
      waitMins: '20 mins',
      patientsWaiting: 4,
      image: '/images/doctors/doctor-7.jpg'
    },
    {
      id: 8,
      name: 'Dr. V. Gokul',
      dept: 'General Surgery',
      specialty: 'Laparoscopic & General Surgeon',
      room: 'Surgical OPD 301',
      status: 'AVAILABLE',
      color: '#00C853',
      waitMins: '15 mins',
      patientsWaiting: 3,
      image: '/images/doctors/doctor-8.jpg'
    }
  ];

  if (!isOpen) return null;

  const handleGenerateToken = (e) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      alert('Please enter your full name and phone number to generate a token.');
      return;
    }
    const tokenNumber = Math.floor(10 + Math.random() * 85);
    setGeneratedToken({
      number: tokenNumber,
      patient: patientName,
      phone: patientPhone,
      doctor: selectedDocForToken.name,
      dept: selectedDocForToken.dept,
      room: selectedDocForToken.room,
      waitTime: selectedDocForToken.waitMins,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  };

  const handleReset = () => {
    setSelectedDocForToken(null);
    setGeneratedToken(null);
    setPatientName('');
    setPatientPhone('');
  };

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div
        className="modal-content-custom"
        style={{ maxWidth: '820px', borderRadius: '24px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-4 border-bottom d-flex align-items-center justify-content-between"
          style={{ background: 'linear-gradient(135deg, #071f3d 0%, #0a192f 100%)', color: '#ffffff' }}
        >
          <div className="d-flex align-items-center gap-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center text-white"
              style={{ width: '46px', height: '46px', backgroundColor: '#00C853', boxShadow: '0 0 16px rgba(0, 200, 83, 0.6)' }}
            >
              <Clock size={24} />
            </div>
            <div>
              <div className="d-flex align-items-center gap-2">
                <h5 className="fw-bolder mb-0 text-white">Live OPD Doctors & Token Queue</h5>
                <span className="badge rounded-pill bg-success px-2 py-1 small fw-bold d-inline-flex align-items-center gap-1">
                  <span className="live-pulse-dot" style={{ width: '7px', height: '7px' }} />
                  REAL-TIME
                </span>
              </div>
              <small className="text-white-50">Sivakasi Main Campus • Live Wait Times & Instant Tokens</small>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-sm btn-light rounded-circle p-2 text-navy"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4" style={{ backgroundColor: '#f8fafc' }}>
          {/* Token Confirmation View */}
          {generatedToken ? (
            <div className="text-center py-4 px-3 bg-white rounded-4 shadow-sm border border-success">
              <div
                className="rounded-circle mx-auto d-flex align-items-center justify-content-center text-white mb-3"
                style={{ width: '64px', height: '64px', backgroundColor: '#00C853', boxShadow: '0 0 20px rgba(0,200,83,0.5)' }}
              >
                <CheckCircle size={36} />
              </div>

              <span className="badge rounded-pill bg-success-subtle text-success px-3 py-1 fw-bold mb-2">
                TOKEN GENERATED SUCCESSFULLY
              </span>
              <h2 className="display-4 fw-bolder text-navy mb-1" style={{ letterSpacing: '0.04em' }}>
                TOKEN #{generatedToken.number}
              </h2>
              <p className="text-muted small mb-4">Please report to reception with this token number.</p>

              <div className="row g-2 max-w-md mx-auto text-start p-3 bg-light rounded-3 mb-4">
                <div className="col-6">
                  <small className="text-muted d-block">Patient Name</small>
                  <strong className="text-navy">{generatedToken.patient}</strong>
                </div>
                <div className="col-6">
                  <small className="text-muted d-block">Consulting Doctor</small>
                  <strong className="text-navy">{generatedToken.doctor}</strong>
                </div>
                <div className="col-6 mt-2">
                  <small className="text-muted d-block">Room / Department</small>
                  <strong className="text-teal">{generatedToken.room}</strong>
                </div>
                <div className="col-6 mt-2">
                  <small className="text-muted d-block">Estimated Wait Time</small>
                  <strong className="text-success">{generatedToken.waitTime}</strong>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a
                  href="tel:8940585378"
                  className="btn-dark-blue"
                >
                  <Phone size={17} />
                  <span>Call Hospital Reception</span>
                </a>
                <button
                  type="button"
                  className="btn-green-glow"
                  onClick={handleReset}
                >
                  Book Another Token
                </button>
              </div>
            </div>
          ) : selectedDocForToken ? (
            /* Token Request Form */
            <div className="bg-white p-4 rounded-4 shadow-sm border">
              <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={selectedDocForToken.image}
                    alt={selectedDocForToken.name}
                    className="rounded-circle"
                    style={{ width: '52px', height: '52px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="fw-bold mb-0 text-navy">{selectedDocForToken.name}</h6>
                    <small className="text-muted">{selectedDocForToken.specialty} • {selectedDocForToken.room}</small>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                  onClick={() => setSelectedDocForToken(null)}
                >
                  Change Doctor
                </button>
              </div>

              <form onSubmit={handleGenerateToken}>
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-navy">Patient Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control form-control-custom"
                    placeholder="Enter patient full name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-semibold text-navy">Phone Number (For SMS Update) *</label>
                  <input
                    type="tel"
                    required
                    className="form-control form-control-custom"
                    placeholder="e.g. 9876543210"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                  />
                </div>

                <div className="d-flex align-items-center justify-content-between pt-2">
                  <button
                    type="button"
                    className="btn btn-light rounded-pill px-4"
                    onClick={() => setSelectedDocForToken(null)}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-green-glow"
                  >
                    <span>Confirm & Get Token</span>
                    <ArrowRight size={17} />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Live Doctors List */
            <div>
              <div className="d-flex align-items-center justify-content-between mb-3 px-1">
                <span className="small text-muted">
                  Showing <strong>{doctorsStatus.length}</strong> OPD Specialists on duty today
                </span>
                <span className="small fw-semibold text-success d-flex align-items-center gap-1">
                  <span className="live-pulse-dot" style={{ backgroundColor: '#00C853', width: '8px', height: '8px' }} />
                  Fast Track Token Available
                </span>
              </div>

              <div className="row g-3">
                {doctorsStatus.map((doc) => {
                  const isAvail = doc.status === 'AVAILABLE';
                  return (
                    <div key={doc.id} className="col-12 col-md-6">
                      <div
                        className="bg-white p-3 rounded-4 border shadow-xs h-100 d-flex flex-column justify-content-between"
                        style={{
                          transition: 'all 0.3s ease',
                          borderColor: isAvail ? 'rgba(0, 200, 83, 0.25)' : 'rgba(239, 68, 68, 0.2)'
                        }}
                      >
                        <div className="d-flex align-items-start gap-3 mb-3">
                          <img
                            src={doc.image}
                            alt={doc.name}
                            className="rounded-3 flex-shrink-0"
                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                          />
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center justify-content-between mb-1">
                              <h6 className="fw-bold mb-0 text-navy" style={{ fontSize: '0.98rem' }}>{doc.name}</h6>
                              <span
                                className="badge rounded-pill small px-2 py-1"
                                style={{
                                  backgroundColor: isAvail ? '#e8f5e9' : '#fee2e2',
                                  color: isAvail ? '#1b5e20' : '#b91c1c',
                                  fontWeight: 700,
                                  fontSize: '0.72rem'
                                }}
                              >
                                {isAvail ? '🟢 AVAILABLE' : '🔴 IN OPD'}
                              </span>
                            </div>
                            <small className="text-teal fw-semibold d-block mb-1">{doc.specialty}</small>
                            <small className="text-muted d-block" style={{ fontSize: '0.76rem' }}>
                              {doc.room} • Est. Wait: <strong>{doc.waitMins}</strong> ({doc.patientsWaiting} in queue)
                            </small>
                          </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                          <span className="small text-muted">
                            Queue: <strong className="text-navy">{doc.patientsWaiting} Patients</strong>
                          </span>
                          <button
                            type="button"
                            className="btn btn-sm btn-green-glow"
                            style={{ padding: '0.42rem 1.15rem', fontSize: '0.82rem' }}
                            onClick={() => setSelectedDocForToken(doc)}
                          >
                            <span>Book Token</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
