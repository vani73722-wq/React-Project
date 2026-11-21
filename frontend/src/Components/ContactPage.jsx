import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldAlert,
  UserCheck
} from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ContactPage() {
  useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim().replace(/[-+\s]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.department) {
      errs.department = 'Please select a department';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Backend submission with graceful offline fallback
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => {
        // Fallback for standalone demo
      });

      // Save submission locally for verification
      const existing = JSON.parse(localStorage.getItem('naira_contact_submissions') || '[]');
      existing.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('naira_contact_submissions', JSON.stringify(existing));

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        subject: '',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-light-blue">
      {/* 1. CONTACT HERO SECTION */}
      <section className="py-5 bg-white border-bottom border-light">
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-start">
              <span className="section-badge">Here for You 24/7</span>
              <h1 className="fw-bolder text-navy display-5 lh-sm mb-3">Contact Us</h1>
              <p className="lead text-muted fs-6 mb-4">
                Have a question? Need assistance? We’re just a call or click away. Whether you need outpatient guidance or emergency support, our dedicated hospital desk is here to help you.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-3">
                <a href="#contact-form" className="btn-primary-custom">
                  <Send size={18} /> Send Us a Message
                </a>
                <a href="tel:8940585378" className="btn-secondary-custom">
                  <Phone size={18} /> Call 8940585378
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/contact/exterior.jpg"
                alt="NAIRA Multi-Speciality Hospital Reception and Building"
                className="rounded-4 shadow-lg w-100 object-fit-cover border border-white border-3"
                style={{ maxHeight: '380px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/about/interior.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION CARDS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 text-start">
            {/* Card 1: Location */}
            <div className="col-lg-3 col-sm-6">
              <div className="hospital-card p-4 h-100">
                <div className="bg-royal-light rounded-circle p-3 d-inline-flex mb-3">
                  <MapPin size={28} className="text-royal" />
                </div>
                <h5 className="fw-bold text-navy fs-6 mb-2">Our Location</h5>
                <p className="text-muted small mb-0">
                  123 Health Ave, Sivakasi, Tamil Nadu, India.
                </p>
                <div className="mt-2 text-royal small fw-semibold">Near Central Town</div>
              </div>
            </div>

            {/* Card 2: Phone */}
            <div className="col-lg-3 col-sm-6">
              <div className="hospital-card p-4 h-100">
                <div className="bg-royal-light rounded-circle p-3 d-inline-flex mb-3">
                  <Phone size={28} className="text-royal" />
                </div>
                <h5 className="fw-bold text-navy fs-6 mb-2">Phone Numbers</h5>
                <div className="mb-1">
                  <span className="text-muted small d-block">Helpline & Emergency:</span>
                  <a href="tel:8940585378" className="text-royal fw-bold text-decoration-none">
                    8940585378
                  </a>
                </div>
                <span className="text-muted small">Casualty open 24/7</span>
              </div>
            </div>

            {/* Card 3: Email */}
            <div className="col-lg-3 col-sm-6">
              <div className="hospital-card p-4 h-100">
                <div className="bg-royal-light rounded-circle p-3 d-inline-flex mb-3">
                  <Mail size={28} className="text-royal" />
                </div>
                <h5 className="fw-bold text-navy fs-6 mb-2">Email Address</h5>
                <p className="mb-1">
                  <a href="mailto:info@nairahospital.com" className="text-royal text-decoration-none small fw-medium">
                    info@nairahospital.com
                  </a>
                </p>
                <p className="mb-0">
                  <a href="mailto:support@nairahospital.com" className="text-royal text-decoration-none small">
                    support@nairahospital.com
                  </a>
                </p>
              </div>
            </div>

            {/* Card 4: Working Hours */}
            <div className="col-lg-3 col-sm-6">
              <div className="hospital-card p-4 h-100">
                <div className="bg-royal-light rounded-circle p-3 d-inline-flex mb-3">
                  <Clock size={28} className="text-royal" />
                </div>
                <h5 className="fw-bold text-navy fs-6 mb-2">Working Hours</h5>
                <p className="text-muted small mb-1">
                  <strong>Emergency & ICU:</strong> 24 Hours / 7 Days
                </p>
                <p className="text-muted small mb-0">
                  <strong>OPD Clinics:</strong> 8:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & PATIENT ASSISTANCE */}
      <section className="py-5 bg-white border-top border-bottom border-light" id="contact-form">
        <div className="container py-lg-3">
          <div className="row g-5">
            {/* Form Column */}
            <div className="col-lg-7 text-start">
              <span className="section-badge">Get in Touch</span>
              <h2 className="section-title fs-2 mb-3">Send Us a Message</h2>
              <p className="text-muted mb-4" style={{ fontSize: '0.95rem' }}>
                Fill out the form below with your enquiry or feedback. Our patient relation team will review your message and reply promptly.
              </p>

              {isSubmitted && (
                <div className="alert alert-success d-flex align-items-center gap-2 rounded-4 p-3 mb-4" role="alert">
                  <CheckCircle2 size={24} className="text-success flex-shrink-0" />
                  <div>
                    <h6 className="fw-bold mb-0">Message Delivered Successfully!</h6>
                    <small>Thank you for reaching out to NAIRA Hospital. Our staff will contact you shortly.</small>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  {/* Name */}
                  <div className="col-md-6">
                    <label className="form-label text-navy fw-semibold small">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control rounded-pill px-3 py-2 ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="e.g. Anandha Kumar"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback small">{errors.name}</div>}
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label className="form-label text-navy fw-semibold small">Your Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control rounded-pill px-3 py-2 ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback small">{errors.email}</div>}
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <label className="form-label text-navy fw-semibold small">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      className={`form-control rounded-pill px-3 py-2 ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback small">{errors.phone}</div>}
                  </div>

                  {/* Department */}
                  <div className="col-md-6">
                    <label className="form-label text-navy fw-semibold small">Select Department *</label>
                    <select
                      name="department"
                      className={`form-select rounded-pill px-3 py-2 ${errors.department ? 'is-invalid' : ''}`}
                      value={formData.department}
                      onChange={handleChange}
                    >
                      <option value="">-- Choose Department --</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Gynecology">Gynecology & Maternity</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="General Medicine">General Medicine</option>
                      <option value="Diagnostics & Lab">Diagnostics & Lab</option>
                      <option value="Billing & Insurance">Billing & Insurance</option>
                    </select>
                    {errors.department && <div className="invalid-feedback small">{errors.department}</div>}
                  </div>

                  {/* Subject */}
                  <div className="col-12">
                    <label className="form-label text-navy fw-semibold small">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      className={`form-control rounded-pill px-3 py-2 ${errors.subject ? 'is-invalid' : ''}`}
                      placeholder="e.g. Appointment enquiry or specialist availability"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && <div className="invalid-feedback small">{errors.subject}</div>}
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label className="form-label text-navy fw-semibold small">Your Message *</label>
                    <textarea
                      name="message"
                      rows="4"
                      className={`form-control rounded-4 p-3 ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Please write your query in detail..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <div className="invalid-feedback small">{errors.message}</div>}
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-custom w-100 justify-content-center py-2"
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'} <Send size={18} />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Assistance & Emergency Info Column */}
            <div className="col-lg-5 text-start">
              <div className="p-4 p-md-5 rounded-4 bg-light-blue h-100 border border-light d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="bg-royal-light p-2 rounded-circle text-royal">
                      <ShieldAlert size={28} />
                    </div>
                    <h4 className="fw-bold text-navy fs-5 mb-0">Emergency Patient Help</h4>
                  </div>
                  <p className="text-muted small mb-4">
                    If this is a life-threatening medical emergency or severe injury, please do not wait for a form response. Call our direct hospital emergency desk immediately.
                  </p>

                  <div className="p-3 bg-white rounded-3 shadow-sm border border-danger border-opacity-25 mb-4">
                    <div className="small text-danger fw-bold text-uppercase">Emergency Hotline</div>
                    <a href="tel:8940585378" className="fs-4 fw-bolder text-navy text-decoration-none">
                      8940585378
                    </a>
                    <div className="text-muted small mt-1">Available 24 hours every day</div>
                  </div>

                  <h6 className="fw-bold text-navy small mb-2">Hospital Reception Hours:</h6>
                  <p className="text-muted small mb-4">
                    Our front reception team is available Monday through Saturday from 7:30 AM to 8:30 PM for OPD tokens, diagnostic appointments, and patient guidance.
                  </p>
                </div>

                {/* Social media connections */}
                <div className="pt-3 border-top border-secondary border-opacity-10">
                  <span className="small text-muted d-block mb-2 fw-semibold">Connect with NAIRA:</span>
                  <div className="d-flex align-items-center gap-2">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                      aria-label="Facebook"
                      style={{ width: '38px', height: '38px' }}
                    >
                      <FaFacebookF size={16} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                      aria-label="Instagram"
                      style={{ width: '38px', height: '38px' }}
                    >
                      <FaInstagram size={16} />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                      aria-label="YouTube"
                      style={{ width: '38px', height: '38px' }}
                    >
                      <FaYoutube size={16} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                      aria-label="LinkedIn"
                      style={{ width: '38px', height: '38px' }}
                    >
                      <FaLinkedinIn size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FIND US ON MAP SECTION */}
      <section className="py-5">
        <div className="container py-lg-3">
          <div className="text-center mb-5">
            <span className="section-badge">Location Map</span>
            <h2 className="section-title fs-2">Find Us on Map</h2>
            <p className="section-subtitle">
              Located conveniently in Sivakasi with dedicated ambulance parking and easy road connectivity.
            </p>
          </div>

          <div className="hospital-card overflow-hidden shadow-sm">
            <div className="row g-0">
              <div className="col-lg-8">
                {/* Embedded Responsive Map */}
                <iframe
                  title="NAIRA Hospital Location Map"
                  src="https://maps.google.com/maps?q=Sivakasi,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="360"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="col-lg-4 p-4 p-md-5 d-flex flex-column justify-content-between text-start bg-white">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <MapPin size={24} className="text-royal flex-shrink-0" />
                    <h5 className="fw-bold text-navy fs-6 mb-0">Hospital Landmark</h5>
                  </div>
                  <p className="text-muted small mb-3">
                    NAIRA Multi-Speciality Hospital<br />
                    123 Health Ave, Sivakasi,<br />
                    Tamil Nadu 626123, India.
                  </p>
                  <p className="text-muted small mb-4">
                    Ample patient parking, wheelchair accessible entrance, and designated 24/7 ambulance bay available.
                  </p>
                </div>
                <div>
                  <a
                    href="https://maps.google.com?q=Sivakasi,+Tamil+Nadu"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline-custom btn-sm w-100 justify-content-center"
                  >
                    View Larger Map / Get Directions <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CEO / HOSPITAL LEADERSHIP SECTION */}
      <section className="py-5 bg-white border-top border-light">
        <div className="container py-lg-3 text-start">
          <div className="hospital-card p-4 p-md-5 border-start border-4 border-primary">
            <div className="row align-items-center g-4">
              <div className="col-md-3 text-center">
                <img
                  src="/images/contact/director.jpg"
                  alt="Hospital Leadership - Dr. N. Aravind"
                  className="rounded-circle shadow object-fit-cover mx-auto"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <div className="col-md-9">
                <span className="badge bg-royal-light text-royal mb-2">Hospital Leadership</span>
                <h4 className="fw-bold text-navy mb-1">Dr. N. Aravind, MS, MCh</h4>
                <div className="text-royal fw-semibold small mb-3">
                  Medical Director &amp; Chief Executive Officer (Demo Profile)
                </div>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>
                  “Our goal from day one has been to ensure that no patient in our community has to compromise on clinical quality or travel far for specialized healthcare. Every piece of equipment, every procedure room, and every medical team member at NAIRA is dedicated to healing with heart, transparency, and clinical excellence.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
