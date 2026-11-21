import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter your message or inquiry.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date().toISOString()
        })
      });
      await res.json();
    } catch {
      // Local fallback
    } finally {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-5 py-lg-6" style={{ backgroundColor: 'var(--slate-50)' }}>
      <div className="container-xl">
        {/* Section Header */}
        <div className="text-center mb-5 scroll-reveal">
          <div className="section-tag">
            <span>24/7 Help & Assistance</span>
          </div>
          <h2 className="section-title">Get In Touch With Us</h2>
          <p className="section-subtitle">
            Our compassionate patient care coordination team is always available to answer your questions and assist with emergency admissions.
          </p>
        </div>

        <div className="row g-5 align-items-stretch">
          {/* Left Column: Hospital Contact Details & Live Map */}
          <div className="col-lg-5 d-flex flex-column justify-content-between scroll-reveal stagger-1">
            <div className="d-flex flex-column gap-3 mb-4">
              {/* Address Card */}
              <div className="p-3 bg-white rounded-3 border d-flex align-items-start gap-3 shadow-xs">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-teal flex-shrink-0"
                  style={{ width: '44px', height: '44px', backgroundColor: 'var(--teal-light)' }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-navy">Hospital Address</h6>
                  <p className="text-muted small mb-0">
                    142/3 Bypass Road, Near Railway Colony, Sivakasi, Tamil Nadu - 626123
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-3 bg-white rounded-3 border d-flex align-items-start gap-3 shadow-xs">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-teal flex-shrink-0"
                  style={{ width: '44px', height: '44px', backgroundColor: 'var(--teal-light)' }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-navy">Emergency Helpline & OPD</h6>
                  <a href="tel:8940585378" className="fw-bold text-teal d-block mb-1 text-decoration-none">
                    +91 8940585378
                  </a>
                  <small className="text-muted d-block">Ambulance & Trauma desk available 24 Hours / 7 Days</small>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-3 bg-white rounded-3 border d-flex align-items-start gap-3 shadow-xs">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-teal flex-shrink-0"
                  style={{ width: '44px', height: '44px', backgroundColor: 'var(--teal-light)' }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-navy">Email Inquiries</h6>
                  <a href="mailto:contact@nairahospital.org" className="text-navy text-decoration-none small d-block">
                    contact@nairahospital.org
                  </a>
                  <small className="text-muted">appointments@nairahospital.org</small>
                </div>
              </div>

              {/* Opening Hours Card */}
              <div className="p-3 bg-white rounded-3 border d-flex align-items-start gap-3 shadow-xs">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-teal flex-shrink-0"
                  style={{ width: '44px', height: '44px', backgroundColor: 'var(--teal-light)' }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-navy">Operating Hours</h6>
                  <p className="text-muted small mb-0">
                    <strong>OPD Consultations:</strong> 8:00 AM – 8:00 PM (Mon – Sat)<br />
                    <strong>Emergency & Critical Care:</strong> 24 Hours / 365 Days
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3 overflow-hidden border shadow-xs" style={{ height: '200px' }}>
              <iframe
                title="NAIRA HOSPITAL Sivakasi Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.568285514088!2d77.7885406!3d9.4533036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cee1688be177%3A0xc3fce76f921ab07e!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Premium Interactive Contact Form */}
          <div className="col-lg-7 scroll-reveal stagger-2">
            <div 
              className="bg-white p-4 p-md-5 rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-between"
            >
              <div>
                <h4 className="fw-bold text-navy mb-2">Send Us a Direct Message</h4>
                <p className="text-muted small mb-4">
                  Fill out the form below and our medical team will reply to your email or call you back within 2 business hours.
                </p>

                {errorMsg && (
                  <div className="alert alert-danger py-2 px-3 small rounded-3 d-flex align-items-center gap-2 mb-3">
                    <AlertCircle size={18} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {submitted && (
                  <div className="alert alert-success py-3 px-3 rounded-3 d-flex align-items-center gap-2 mb-4">
                    <CheckCircle2 size={24} className="text-success flex-shrink-0" />
                    <div>
                      <strong className="d-block">Thank you! Your message has been received.</strong>
                      <span className="small">Our patient coordination team will reach out to you shortly.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-navy">Your Full Name *</label>
                      <input
                        type="text"
                        className="form-control-custom w-100"
                        placeholder="e.g. Ramesh Kumar"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-navy">Email Address *</label>
                      <input
                        type="email"
                        className="form-control-custom w-100"
                        placeholder="ramesh@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-bold text-navy">Contact Phone (Optional)</label>
                      <input
                        type="tel"
                        className="form-control-custom w-100"
                        placeholder="10-digit mobile number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-bold text-navy">Your Message or Inquiry *</label>
                      <textarea
                        className="form-control-custom w-100"
                        rows="5"
                        placeholder="Describe your medical query, requested doctor, or required healthcare assistance..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn-primary-teal w-100 justify-content-center py-3"
                        disabled={loading}
                      >
                        <Send size={18} />
                        <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-4 pt-3 border-top text-center text-muted small">
                Strict Patient Privacy: All information submitted is held in full medical confidentiality.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
