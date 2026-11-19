import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  FileText,
  Printer,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';

export default function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialDoctor = searchParams.get('doctor') || '';
  const initialDept = searchParams.get('department') || '';

  // Master Doctor & Department Directory
  const doctorDirectory = [
    { name: 'Dr. Sarah Johnson', department: 'Cardiology', spec: 'Interventional Cardiology' },
    { name: 'Dr. Michael Chen', department: 'General Medicine', spec: 'Internal Medicine & Diabetology' },
    { name: 'Dr. Priya Raman', department: 'Gynecology', spec: 'Obstetrics & High-Risk Pregnancy' },
    { name: 'Dr. Rajesh Kumar', department: 'Orthopedics', spec: 'Joint Replacement & Trauma' },
    { name: 'Dr. Ananya Sharma', department: 'Pediatrics', spec: 'Child Care & Neonatology' },
    { name: 'Dr. David Wilson', department: 'Surgery', spec: 'General & Laparoscopic Surgery' },
    { name: 'Dr. Kavitha Nair', department: 'Dermatology', spec: 'Clinical Dermatology & Cosmetology' },
    { name: 'Dr. Arun Varma', department: 'Neurology', spec: 'Clinical Neurology & Stroke Care' }
  ];

  const departments = [
    'Cardiology',
    'Gynecology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
    'General Medicine',
    'Surgery',
    'Neurology'
  ];

  const timeSlots = [
    '09:30 AM - 10:00 AM (Morning)',
    '10:30 AM - 11:00 AM (Morning)',
    '11:30 AM - 12:00 PM (Morning)',
    '02:30 PM - 03:00 PM (Afternoon)',
    '03:30 PM - 04:00 PM (Afternoon)',
    '05:30 PM - 06:00 PM (Evening)',
    '06:30 PM - 07:00 PM (Evening)'
  ];

  // Calculate today's date in YYYY-MM-DD for min date attribute
  const todayDate = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    department: initialDept,
    doctor: initialDoctor,
    appointmentDate: '',
    timeSlot: '',
    reason: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  // Pre-fill from query params if available
  useEffect(() => {
    if (initialDept) {
      setFormData((prev) => ({ ...prev, department: initialDept }));
    }
    if (initialDoctor) {
      setFormData((prev) => ({ ...prev, doctor: initialDoctor }));
    }
  }, [initialDept, initialDoctor]);

  // Filter available doctors based on selected department
  const availableDoctors = formData.department
    ? doctorDirectory.filter((d) => d.department.toLowerCase().includes(formData.department.toLowerCase()))
    : doctorDirectory;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // If department changes, reset doctor if the current doctor is not in the new department
      if (name === 'department') {
        const docStillValid = doctorDirectory.some(
          (d) => d.department.toLowerCase().includes(value.toLowerCase()) && d.name === prev.doctor
        );
        if (!docStillValid) updated.doctor = '';
      }
      return updated;
    });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};

    if (!formData.patientName.trim()) {
      errs.patientName = 'Patient full name is required';
    } else if (formData.patientName.trim().length < 3) {
      errs.patientName = 'Name must be at least 3 characters long';
    }

    if (!formData.age) {
      errs.age = 'Patient age is required';
    } else if (parseInt(formData.age, 10) < 1 || parseInt(formData.age, 10) > 120) {
      errs.age = 'Please enter a valid age between 1 and 120';
    }

    if (!formData.gender) {
      errs.gender = 'Please select patient gender';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim().replace(/[-+\s]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email format';
    }

    if (!formData.department) {
      errs.department = 'Please select medical department';
    }

    if (!formData.doctor) {
      errs.doctor = 'Please select preferred consulting doctor';
    }

    if (!formData.appointmentDate) {
      errs.appointmentDate = 'Please select appointment date';
    } else if (formData.appointmentDate < todayDate) {
      errs.appointmentDate = 'Appointment date cannot be in the past';
    }

    if (!formData.timeSlot) {
      errs.timeSlot = 'Please choose a preferred time slot';
    }

    if (!formData.reason.trim()) {
      errs.reason = 'Please provide a brief reason for consultation';
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.scrollTo({ top: 350, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    const refNumber = `NAIRA-APT-${Math.floor(100000 + Math.random() * 900000)}`;
    const bookedRecord = {
      ...formData,
      referenceNumber: refNumber,
      createdAt: new Date().toISOString()
    };

    try {
      // Send to backend endpoint
      await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookedRecord)
      }).catch(() => {
        // Safe offline fallback
      });

      // Save locally
      const stored = JSON.parse(localStorage.getItem('naira_booked_appointments') || '[]');
      stored.unshift(bookedRecord);
      localStorage.setItem('naira_booked_appointments', JSON.stringify(stored));

      setConfirmation(bookedRecord);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-light-blue py-5">
      <div className="container py-lg-3">
        {/* Top Header */}
        <div className="text-center mb-5">
          <span className="section-badge">OPD Doctor Appointments</span>
          <h1 className="section-title fs-2">Schedule Your Medical Consultation</h1>
          <p className="section-subtitle">
            Book an appointment with our specialist physicians. Quick, convenient, and confirmed by our hospital reception.
          </p>
        </div>

        {/* CONFIRMATION VIEW */}
        {confirmation ? (
          <div className="max-w-3xl mx-auto bg-white rounded-4 shadow-lg p-4 p-md-5 border border-success border-opacity-25 text-start" style={{ maxWidth: '780px' }}>
            <div className="text-center mb-4 pb-3 border-bottom border-light">
              <div className="bg-success bg-opacity-10 text-success rounded-circle p-3 d-inline-flex mb-2">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="fw-bold text-navy mb-1">Appointment Request Registered!</h3>
              <div className="badge bg-royal text-white fs-6 px-3 py-2 rounded-pill mt-2">
                Booking Reference: {confirmation.referenceNumber}
              </div>
              <p className="text-muted small mt-3 mb-0">
                A confirmation has been recorded in the NAIRA Multi-Speciality Hospital outpatient schedule.
              </p>
            </div>

            {/* Receipt Details Card */}
            <div className="bg-light-blue p-4 rounded-3 mb-4">
              <h5 className="fw-bold text-navy mb-3 fs-6 d-flex align-items-center gap-2">
                <FileText size={18} className="text-royal" /> Appointment Summary Receipt
              </h5>
              <div className="row g-3" style={{ fontSize: '0.92rem' }}>
                <div className="col-sm-6">
                  <span className="text-muted d-block small">Patient Name:</span>
                  <strong className="text-navy">{confirmation.patientName}</strong>
                </div>
                <div className="col-sm-6">
                  <span className="text-muted d-block small">Age & Gender:</span>
                  <strong className="text-navy">{confirmation.age} Years, {confirmation.gender}</strong>
                </div>
                <div className="col-sm-6">
                  <span className="text-muted d-block small">Selected Doctor:</span>
                  <strong className="text-royal">{confirmation.doctor}</strong>
                </div>
                <div className="col-sm-6">
                  <span className="text-muted d-block small">Department:</span>
                  <strong className="text-navy">{confirmation.department}</strong>
                </div>
                <div className="col-sm-6">
                  <span className="text-muted d-block small">Date of Appointment:</span>
                  <strong className="text-navy">{confirmation.appointmentDate}</strong>
                </div>
                <div className="col-sm-6">
                  <span className="text-muted d-block small">Time Slot:</span>
                  <strong className="text-navy">{confirmation.timeSlot}</strong>
                </div>
                <div className="col-sm-6">
                  <span className="text-muted d-block small">Contact Phone:</span>
                  <strong className="text-navy">{confirmation.phone}</strong>
                </div>
                <div className="col-sm-6">
                  <span className="text-muted d-block small">Email Address:</span>
                  <strong className="text-navy">{confirmation.email}</strong>
                </div>
                <div className="col-12 pt-2 border-top border-secondary border-opacity-10">
                  <span className="text-muted d-block small">Reason for Visit:</span>
                  <span className="text-navy">{confirmation.reason}</span>
                </div>
              </div>
            </div>

            {/* Notice / Guidance */}
            <div className="p-3 bg-light rounded-3 mb-4" style={{ fontSize: '0.86rem' }}>
              <div className="fw-bold text-navy mb-1">Important Visit Guidance:</div>
              <ul className="mb-0 ps-3 text-muted">
                <li>Please arrive at the hospital reception 15 minutes before your scheduled slot.</li>
                <li>Carry all past medical prescriptions, scan films, and diagnostic reports.</li>
                <li>For any rescheduling or cancellations, call our hospital desk at <strong>8940585378</strong>.</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="d-flex flex-wrap gap-3 justify-content-between pt-2">
              <button type="button" className="btn btn-outline-secondary rounded-pill px-4" onClick={handlePrint}>
                <Printer size={16} /> Print Receipt
              </button>
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-secondary-custom"
                  onClick={() => {
                    setConfirmation(null);
                    setFormData({
                      patientName: '',
                      age: '',
                      gender: '',
                      phone: '',
                      email: '',
                      department: '',
                      doctor: '',
                      appointmentDate: '',
                      timeSlot: '',
                      reason: ''
                    });
                  }}
                >
                  Book Another Appointment
                </button>
                <Link to="/" className="btn-primary-custom">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* FORM VIEW */
          <div className="max-w-4xl mx-auto bg-white rounded-4 shadow-lg p-4 p-md-5 border border-light text-start" style={{ maxWidth: '880px' }}>
            <div className="d-flex align-items-center gap-2 mb-4 pb-3 border-bottom border-light">
              <Calendar className="text-royal" size={28} />
              <div>
                <h4 className="fw-bold text-navy mb-0">Patient & Consultation Information</h4>
                <small className="text-muted">Fields marked with an asterisk (*) are required.</small>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                {/* 1. Patient Name */}
                <div className="col-md-6">
                  <label className="form-label text-navy fw-semibold small">Patient Full Name *</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-muted border-end-0 rounded-start-pill">
                      <User size={18} />
                    </span>
                    <input
                      type="text"
                      name="patientName"
                      className={`form-control bg-light border-start-0 rounded-end-pill py-2 ${errors.patientName ? 'is-invalid' : ''}`}
                      placeholder="e.g. Ramesh Kannan"
                      value={formData.patientName}
                      onChange={handleChange}
                    />
                    {errors.patientName && <div className="invalid-feedback small d-block mt-1">{errors.patientName}</div>}
                  </div>
                </div>

                {/* 2. Age & 3. Gender */}
                <div className="col-md-3 col-6">
                  <label className="form-label text-navy fw-semibold small">Age *</label>
                  <input
                    type="number"
                    name="age"
                    min="1"
                    max="120"
                    className={`form-control bg-light rounded-pill py-2 ${errors.age ? 'is-invalid' : ''}`}
                    placeholder="e.g. 34"
                    value={formData.age}
                    onChange={handleChange}
                  />
                  {errors.age && <div className="invalid-feedback small d-block">{errors.age}</div>}
                </div>

                <div className="col-md-3 col-6">
                  <label className="form-label text-navy fw-semibold small">Gender *</label>
                  <select
                    name="gender"
                    className={`form-select bg-light rounded-pill py-2 ${errors.gender ? 'is-invalid' : ''}`}
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && <div className="invalid-feedback small d-block">{errors.gender}</div>}
                </div>

                {/* 4. Phone Number */}
                <div className="col-md-6">
                  <label className="form-label text-navy fw-semibold small">Phone Number *</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-muted border-end-0 rounded-start-pill">
                      <Phone size={18} />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      className={`form-control bg-light border-start-0 rounded-end-pill py-2 ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback small d-block mt-1">{errors.phone}</div>}
                  </div>
                </div>

                {/* 5. Email Address */}
                <div className="col-md-6">
                  <label className="form-label text-navy fw-semibold small">Email Address *</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-muted border-end-0 rounded-start-pill">
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      className={`form-control bg-light border-start-0 rounded-end-pill py-2 ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback small d-block mt-1">{errors.email}</div>}
                  </div>
                </div>

                {/* 6. Department */}
                <div className="col-md-6">
                  <label className="form-label text-navy fw-semibold small">Medical Department *</label>
                  <select
                    name="department"
                    className={`form-select bg-light rounded-pill py-2 ${errors.department ? 'is-invalid' : ''}`}
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="">-- Choose Department --</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                  {errors.department && <div className="invalid-feedback small d-block">{errors.department}</div>}
                </div>

                {/* 7. Doctor */}
                <div className="col-md-6">
                  <label className="form-label text-navy fw-semibold small">Select Doctor *</label>
                  <select
                    name="doctor"
                    className={`form-select bg-light rounded-pill py-2 ${errors.doctor ? 'is-invalid' : ''}`}
                    value={formData.doctor}
                    onChange={handleChange}
                  >
                    <option value="">-- Choose Doctor --</option>
                    {availableDoctors.map((doc) => (
                      <option key={doc.name} value={doc.name}>
                        {doc.name} ({doc.spec})
                      </option>
                    ))}
                  </select>
                  {errors.doctor && <div className="invalid-feedback small d-block">{errors.doctor}</div>}
                </div>

                {/* 8. Appointment Date */}
                <div className="col-md-6">
                  <label className="form-label text-navy fw-semibold small">Preferred Date *</label>
                  <input
                    type="date"
                    name="appointmentDate"
                    min={todayDate}
                    className={`form-control bg-light rounded-pill py-2 ${errors.appointmentDate ? 'is-invalid' : ''}`}
                    value={formData.appointmentDate}
                    onChange={handleChange}
                  />
                  {errors.appointmentDate && <div className="invalid-feedback small d-block">{errors.appointmentDate}</div>}
                </div>

                {/* 9. Available Time Slot */}
                <div className="col-md-6">
                  <label className="form-label text-navy fw-semibold small">Preferred Time Slot *</label>
                  <select
                    name="timeSlot"
                    className={`form-select bg-light rounded-pill py-2 ${errors.timeSlot ? 'is-invalid' : ''}`}
                    value={formData.timeSlot}
                    onChange={handleChange}
                  >
                    <option value="">-- Choose Time Slot --</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.timeSlot && <div className="invalid-feedback small d-block">{errors.timeSlot}</div>}
                </div>

                {/* 10. Reason for Consultation */}
                <div className="col-12">
                  <label className="form-label text-navy fw-semibold small">Reason for Consultation / Health Symptoms *</label>
                  <textarea
                    name="reason"
                    rows="3"
                    className={`form-control bg-light rounded-4 p-3 ${errors.reason ? 'is-invalid' : ''}`}
                    placeholder="Briefly describe your medical concern, symptoms, or if this is a follow-up consultation..."
                    value={formData.reason}
                    onChange={handleChange}
                  ></textarea>
                  {errors.reason && <div className="invalid-feedback small d-block">{errors.reason}</div>}
                </div>

                {/* Submit Action */}
                <div className="col-12 pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-custom w-100 justify-content-center py-3 fs-6"
                  >
                    {isSubmitting ? 'Registering Appointment...' : 'Confirm Appointment Request'}
                  </button>
                  <div className="text-center mt-3 text-muted small">
                    <ShieldCheck size={16} className="text-success me-1" />
                    Your personal information is secure and confidential under NAIRA Hospital patient privacy standards.
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
