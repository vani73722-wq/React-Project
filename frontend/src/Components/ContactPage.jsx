import { useState } from 'react';
import Hero from './Hero';
import ContactInfoCard from './ContactInfoCard';
import { Send, CheckCircle2 } from 'lucide-react';

function ContactPage() {
  const tagline = '📞 We Are Here For You';
  const title = 'Contact & Appointments';
  const description =
    'Have a question or wish to book a consultation? Reach out to our 24/7 helpline, visit our campus in Sivakasi, or submit the booking form below.';
  const buttonText = 'Call Emergency: 8940585378';
  const imgUrl = '/hospic.png';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'General Medicine',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="w-full pb-16">
      {/* 1. Hero Section */}
      <Hero
        tagline={tagline}
        title={title}
        description={description}
        buttonText={buttonText}
        buttonLink="tel:8940585378"
        imgUrl={imgUrl}
        reverse={true}
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* 2. Main Grid: Info Cards + Form */}
      <section className="my-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Details & Campus Info (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Hospital Helpdesk
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#001f3f] mt-2 mb-1">
              Reach Our Care Coordinators
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our patient services team is ready to assist you round-the-clock.
            </p>
          </div>

          <ContactInfoCard
            icon="📍"
            title="Hospital Campus Location"
            value="123 Health Ave, Near New Bus Stand, Sivakasi, Tamil Nadu 626123"
          />

          <ContactInfoCard
            icon="📞"
            title="Emergency & Appointments"
            value="+91 89405 85378 / (04562) 223456"
            actionLink="tel:8940585378"
          />

          <ContactInfoCard
            icon="✉️"
            title="Official Email"
            value="info@nairahospital.com"
            actionLink="mailto:info@nairahospital.com"
          />

          <ContactInfoCard
            icon="🕒"
            title="OPD & Emergency Hours"
            value="OPD: Mon-Sat 8:00 AM - 8:00 PM | Emergency & Casualty: 24/7 365 Days"
          />

          {/* Quick ambulance banner */}
          <div className="p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-3">
            <span className="text-2xl">🚑</span>
            <div>
              <div className="text-xs font-bold text-red-700 uppercase">Immediate Ambulance Dispatch</div>
              <a href="tel:8940585378" className="text-sm font-bold text-red-900 hover:underline">
                Tap to Call +91 89405 85378
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Appointment Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-blue-50">
          <h2 className="text-xl sm:text-2xl font-bold text-[#001f3f] mb-1">
            Book an Appointment Online
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Fill in your details and our front-desk will confirm your consultation slot within 30 minutes.
          </p>

          {submitted ? (
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-lg font-bold text-emerald-900 m-0">Appointment Request Received!</h3>
              <p className="text-xs sm:text-sm text-emerald-800 m-0 leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. We have registered your request for the <strong>{formData.department}</strong> department. Our team will call you at <strong>{formData.phone}</strong> shortly to confirm your token.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    department: 'General Medicine',
                    date: '',
                    message: '',
                  });
                }}
                className="btn btn-outline-success btn-sm rounded-pill px-4 mt-2"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="patientName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Patient Full Name *
                  </label>
                  <input
                    id="patientName"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="patientPhone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Mobile Phone Number *
                  </label>
                  <input
                    id="patientPhone"
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="patientEmail" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    id="patientEmail"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="patientDept" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Select Specialty Department
                  </label>
                  <select
                    id="patientDept"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer"
                  >
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Obstetrics & Gynecology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>General Surgery</option>
                    <option>Radiology & Diagnostics</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preferred Appointment Date
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="patientMessage" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Health Concern / Reason for Visit
                </label>
                <textarea
                  id="patientMessage"
                  rows={3}
                  placeholder="Briefly describe your symptoms or specific requests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary rounded-xl py-3 font-semibold shadow hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send size={16} />
                <span>Submit Appointment Request</span>
              </button>
            </form>
          )}
        </div>
      </section>
      </div>
    </div>
  );
}

export default ContactPage;
