import { Link } from 'react-router-dom';
import Hero from './Hero';
import HeroCarousel from './HeroCarousel';
import FeatureCard from './FeatureCard';
import StatsSection from './StatsSection';
import { Calendar, Clock, ShieldAlert, Stethoscope } from 'lucide-react';

function HomePage() {
  const tagline = '🩺 Your Health, Our Utmost Priority';
  const title = 'Compassionate Care for a Healthier Tomorrow';
  const description =
    'At NAIRA Multi‑Specialty Hospital in Sivakasi, your health and well-being come first. Our experienced team of medical specialists, modern diagnostic facilities, and compassionate nursing care are here to support your healing journey 24/7.';

  const features = [
    {
      type: 'expert',
      title: 'Expert Doctors',
      description: 'Over 20+ dedicated specialists across cardiology, neurology, surgery, and pediatrics.',
    },
    {
      type: 'advanced',
      title: 'Advanced Care',
      description: 'State-of-the-art scanning, digital radiography, modern ICUs, and automated laboratories.',
    },
    {
      type: 'services24',
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency casualty, critical care units, pharmacy, and ambulance service.',
    },
    {
      type: 'patient',
      title: 'Patient First',
      description: 'Empathetic and affordable patient-centric care focused on comfortable and rapid recovery.',
    },
  ];

  return (
    <div className="w-full pb-16">
      {/* 1. Main Full-Width Hero Banner with Image Slider */}
      <Hero
        tagline={tagline}
        title={title}
        description={description}
        buttonText="Book Appointment"
        buttonLink="/contact"
        imgUrl="/care.jpg"
        reverse={false}
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* 2. Emergency Quick Action Ribbon */}
        <section className="my-8 bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-blue-100">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-3">
            <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
              <ShieldAlert size={24} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-600">24/7 Emergency</div>
              <a href="tel:8940585378" className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 text-decoration-none">
                +91 89405 85378
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Calendar size={24} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600">OPD Consultation</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800">Mon - Sat: 8:00 AM - 8:00 PM</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">Pharmacy & Lab</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800">Open 24 Hours / 365 Days</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visual Gallery Carousel */}
      <section className="my-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Campus & Infrastructure</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#001f3f] m-0">
              Explore NAIRA Multi-Specialty Hospital
            </h2>
          </div>
          <Link to="/facilities" className="text-sm font-semibold text-blue-600 hover:underline text-decoration-none">
            All Facilities →
          </Link>
        </div>
        <HeroCarousel />
      </section>

      {/* 4. Core Features Section */}
      <section className="my-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Our Pillars of Excellence
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#001f3f] mt-3">
            Comprehensive Healthcare You Can Depend On
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2">
            Click on any card to read in-depth information about our standards and medical capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f, i) => (
            <FeatureCard
              key={i}
              type={f.type}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </section>

      {/* 5. Animated Numbers & Trust Section */}
      <StatsSection />

      {/* 6. Bottom Call to Action */}
      <section className="my-10 bg-white rounded-3xl p-6 sm:p-10 border border-blue-100 shadow-sm text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-2">
            <Stethoscope size={24} />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#001f3f]">
            Ready to Prioritize Your Health?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Schedule an in-person appointment with our specialist doctors today or contact our 24/7 helpdesk for any emergency inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="btn btn-primary rounded-pill px-6 py-2.5 font-medium shadow-sm hover:shadow text-decoration-none"
            >
              Book an Appointment
            </Link>
            <Link
              to="/doctors"
              className="btn btn-outline-primary rounded-pill px-6 py-2.5 font-medium text-decoration-none"
            >
              Meet Our Doctors
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default HomePage;
