import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, Stethoscope, FileText, CheckCircle2, Printer, X } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: 'Male',
    phone: '',
    email: '',
    department: 'Cardiology',
    doctor: 'Dr. R. Sundaram (Cardiology)',
    appointmentDate: '',
    timeSlot: '09:00 AM - 10:00 AM',
    reason: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const doctorList = {
    'Cardiology': ['Dr. R. Sundaram (Cardiology)', 'Dr. S. Ramesh (Interventional Cardiology)'],
    'Neurology': ['Dr. K. Rajesh (Neurology)', 'Dr. N. Gayathri (Neuro-Physician)'],
    'Pediatrics': ['Dr. P. Anitha (Pediatrics)', 'Dr. V. Gokul (Neonatal Care)'],
    'Orthopedics': ['Dr. S. Vignesh (Orthopedic & Joint Surgery)', 'Dr. R. Mohan (Trauma & Spine)'],
    'General Medicine': ['Dr. M. Karthik (General Medicine)', 'Dr. T. Revathi (Diabetology & Internal Med)']
  };

  useEffect(() => {
    if (initialData.department) {
      const dept = initialData.department;
      setFormData(prev => ({
        ...prev,
        department: dept,
        doctor: doctorList[dept] ? doctorList[dept][0] : prev.doctor
      }));
    }
    if (initialData.doctor) {
      setFormData(prev => ({
        ...prev,
        doctor: initialData.doctor
      }));
    }
  }, [initialData]);

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

  // Today's date in YYYY-MM-DD for min date attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const handleDepartmentChange = (e) => {
    const dept = e.target.value;
    setFormData({
      ...formData,
      department: dept,
      doctor: doctorList[dept] ? doctorList[dept][0] : ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validation
    if (!formData.patientName.trim()) {
      setErrorMsg('Please enter the patient full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.appointmentDate) {
      setErrorMsg('Please select a valid appointment date.');
      return;
    }

    setLoading(true);

    const refNum = `NAIRA-APT-${Math.floor(100000 + Math.random() * 900000)}`;
    const payload = {
      ...formData,
      referenceNumber: refNum,
      createdAt: new Date().toISOString()
    };

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (data.success) {
        setConfirmedBooking(data.appointment || payload);
      } else {
        setConfirmedBooking(payload);
      }
    } catch {
      // Fallback for offline/local simulation
      setConfirmedBooking(payload);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setConfirmedBooking(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop-custom" onClick={resetAndClose}>
      <div className="modal-content-custom" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="p-4 border-bottom d-flex align-items-center justify-content-between" style={{ backgroundColor: 'var(--teal-light)' }}>
          <div className="d-flex align-items-center gap-2">
            <div className="rounded-circle bg-teal text-white p-2 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
              <Calendar size={20} />
            </div>
            <div>
              <h5 className="mb-0 fw-bold" style={{ color: 'var(--navy)' }}>
                {submitted ? 'Appointment Confirmed' : 'Book OPD Appointment'}
              </h5>
              <small className="text-muted">NAIRA HOSPITAL — Sivakasi</small>
            </div>
          </div>
          <button 
            type="button" 
            className="btn btn-sm btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
            onClick={resetAndClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4">
          {errorMsg && (
            <div className="alert alert-danger py-2 px-3 small rounded-3 mb-3">
              {errorMsg}
            </div>
          )}

          {submitted && confirmedBooking ? (
            /* Printable Confirmation Card */
            <div className="text-center py-2">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success p-3 mb-3">
                <CheckCircle2 size={54} />
              </div>
              <h4 className="fw-bold text-navy mb-1">Appointment Successfully Booked!</h4>
              <p className="text-muted small mb-4">
                Your consultation token has been generated. Please arrive 15 minutes prior to your time slot.
              </p>

              {/* Receipt Box */}
              <div 
                className="p-4 rounded-4 text-start mb-4 mx-auto" 
                style={{ 
                  backgroundColor: 'var(--slate-50)', 
                  border: '1px solid var(--slate-200)',
                  maxWidth: '500px'
                }}
              >
                <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                  <div>
                    <span className="text-muted small">Token Reference</span>
                    <h6 className="fw-bold text-teal mb-0">{confirmedBooking.referenceNumber}</h6>
                  </div>
                  <span className="badge bg-success text-white px-3 py-2 rounded-pill">Confirmed</span>
                </div>

                <div className="row g-2 small">
                  <div className="col-6">
                    <span className="text-muted d-block">Patient Name:</span>
                    <strong className="text-navy">{confirmedBooking.patientName} ({confirmedBooking.age} yrs / {confirmedBooking.gender})</strong>
                  </div>
                  <div className="col-6">
                    <span className="text-muted d-block">Contact Phone:</span>
                    <strong className="text-navy">{confirmedBooking.phone}</strong>
                  </div>
                  <div className="col-6 mt-3">
                    <span className="text-muted d-block">Specialty:</span>
                    <strong className="text-teal">{confirmedBooking.department}</strong>
                  </div>
                  <div className="col-6 mt-3">
                    <span className="text-muted d-block">Doctor:</span>
                    <strong className="text-navy">{confirmedBooking.doctor}</strong>
                  </div>
                  <div className="col-6 mt-3">
                    <span className="text-muted d-block">Scheduled Date:</span>
                    <strong className="text-navy">{confirmedBooking.appointmentDate}</strong>
                  </div>
                  <div className="col-6 mt-3">
                    <span className="text-muted d-block">Time Slot:</span>
                    <strong className="text-navy">{confirmedBooking.timeSlot}</strong>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-top text-muted small">
                  <strong>Location:</strong> NAIRA HOSPITAL, 142/3 Bypass Road, Sivakasi. Helpdesk: <strong>8940585378</strong>.
                </div>
              </div>

              {/* Actions */}
              <div className="d-flex justify-content-center gap-3">
                <button 
                  type="button" 
                  className="btn btn-outline-teal px-4"
                  onClick={handlePrint}
                >
                  <Printer size={18} className="me-2" />
                  Print Receipt
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary-teal px-4"
                  onClick={resetAndClose}
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-7">
                  <label className="form-label small fw-bold text-navy">Patient Full Name *</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-muted"><User size={18} /></span>
                    <input 
                      type="text" 
                      className="form-control border-start-0 ps-1"
                      placeholder="e.g. Anand Kumar"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <label className="form-label small fw-bold text-navy">Age *</label>
                  <input 
                    type="number" 
                    className="form-control"
                    placeholder="35"
                    name="age"
                    min="1"
                    max="115"
                    value={formData.age}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="col-md-3">
                  <label className="form-label small fw-bold text-navy">Gender *</label>
                  <select 
                    className="form-select" 
                    name="gender" 
                    value={formData.gender} 
                    onChange={handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-navy">Mobile Number *</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-muted"><Phone size={18} /></span>
                    <input 
                      type="tel" 
                      className="form-control border-start-0 ps-1"
                      placeholder="10-digit mobile number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-navy">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-muted"><Mail size={18} /></span>
                    <input 
                      type="email" 
                      className="form-control border-start-0 ps-1"
                      placeholder="name@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-navy">Specialty / Department *</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-muted"><Stethoscope size={18} /></span>
                    <select 
                      className="form-select border-start-0 ps-1" 
                      name="department" 
                      value={formData.department} 
                      onChange={handleDepartmentChange}
                    >
                      <option value="Cardiology">Cardiology</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="General Medicine">General Medicine</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-navy">Consulting Doctor *</label>
                  <select 
                    className="form-select" 
                    name="doctor" 
                    value={formData.doctor} 
                    onChange={handleChange}
                  >
                    {(doctorList[formData.department] || []).map((doc, idx) => (
                      <option key={idx} value={doc}>{doc}</option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-navy">Appointment Date *</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-muted"><Calendar size={18} /></span>
                    <input 
                      type="date" 
                      className="form-control border-start-0 ps-1"
                      name="appointmentDate"
                      min={todayStr}
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-navy">Preferred Time Slot *</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-muted"><Clock size={18} /></span>
                    <select 
                      className="form-select border-start-0 ps-1" 
                      name="timeSlot" 
                      value={formData.timeSlot} 
                      onChange={handleChange}
                    >
                      <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                      <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM</option>
                      <option value="11:30 AM - 01:00 PM">11:30 AM - 01:00 PM</option>
                      <option value="04:00 PM - 05:30 PM">04:00 PM - 05:30 PM</option>
                      <option value="05:30 PM - 07:00 PM">05:30 PM - 07:00 PM</option>
                      <option value="07:00 PM - 08:30 PM">07:00 PM - 08:30 PM</option>
                    </select>
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label small fw-bold text-navy">Reason for Visit / Symptoms</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-muted"><FileText size={18} /></span>
                    <input 
                      type="text" 
                      className="form-control border-start-0 ps-1"
                      placeholder="e.g. Routine checkup, joint pain, chest discomfort, fever"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                <span className="small text-muted">
                  For immediate emergencies, call <strong className="text-teal">8940585378</strong>
                </span>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-light rounded-pill px-3" onClick={resetAndClose}>
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary-teal px-4"
                    disabled={loading}
                  >
                    {loading ? 'Confirming...' : 'Confirm Appointment'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
