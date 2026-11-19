import Hero from './Hero';
import ServiceCard from './ServiceCard';
import {
  HeartPulse,
  Activity,
  Baby,
  Bone,
  Stethoscope,
  Scissors,
  Scan,
  ShieldAlert,
  PhoneCall,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      title: 'General Medicine',
      description: 'Comprehensive adult health evaluations, fever clinic, hypertension, diabetes management, and chronic disease prevention.',
      icon: <Stethoscope size={28} className="text-blue-600" />,
      badge: 'Primary Care',
    },
    {
      title: 'Cardiology',
      description: 'Advanced cardiac diagnosis, 24-hr Holter monitoring, Echo, preventive cardiology, and immediate post-infarct stabilization.',
      icon: <HeartPulse size={28} className="text-red-500" />,
      badge: 'Specialty Care',
    },
    {
      title: 'Obstetrics & Gynecology',
      description: 'Painless delivery suites, high-risk pregnancy monitoring, prenatal care, laparoscopic hysterectomy, and women wellness checks.',
      icon: <Baby size={28} className="text-purple-600" />,
      badge: 'Mother & Child',
    },
    {
      title: 'Orthopedics & Trauma',
      description: 'Joint replacement, fracture reduction, sports injury management, spine care, and dedicated orthopedic rehabilitation.',
      icon: <Bone size={28} className="text-amber-600" />,
      badge: 'Surgery & Rehab',
    },
    {
      title: 'General & Laparoscopy',
      description: 'Minimally invasive keyhole surgeries, appendix, hernia repair, gall bladder surgery, and wound management with faster discharge.',
      icon: <Scissors size={28} className="text-emerald-600" />,
      badge: 'Day Care Surgery',
    },
    {
      title: 'Diagnostics & Radiology',
      description: 'High-definition Ultrasound, computerized digital X-ray, ECG, Echo, and 24-hr automated laboratory tests.',
      icon: <Scan size={28} className="text-cyan-600" />,
      badge: '24/7 Diagnostics',
    },
    {
      title: 'Pediatrics & Immunization',
      description: 'Newborn care, complete childhood immunization schedules, developmental tracking, and pediatric emergency treatments.',
      icon: <Activity size={28} className="text-pink-600" />,
      badge: 'Child Health',
    },
    {
      title: '24/7 Emergency Casualty',
      description: 'Rapid response trauma management, acute poison treatment, cardiac emergency triage, and dedicated life support ambulances.',
      icon: <ShieldAlert size={28} className="text-red-600" />,
      badge: 'Critical Care',
    },
  ];

  return (
    <div className="w-full pb-16">
      {/* 1. Hero Section */}
      <Hero
        tagline="🔬 Medical Specialties"
        title="Comprehensive Medical Services"
        description="From routine health screenings to round-the-clock emergency interventions, our expert multi-disciplinary team provides compassionate, advanced care for every stage of life."
        buttonText="Schedule Consultation"
        buttonLink="/contact"
        imgUrl="/scan.jpg"
        reverse={false}
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* 2. Emergency Quick Call Bar */}
      <section className="my-8 bg-red-600 text-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <PhoneCall size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold m-0 text-white">Emergency Trauma & Ambulance: +91 89405 85378</h3>
            <p className="text-xs sm:text-sm text-red-100 m-0">Available 24 hours a day, 7 days a week, 365 days a year</p>
          </div>
        </div>
        <a
          href="tel:8940585378"
          className="btn btn-light rounded-pill px-5 py-2 font-bold text-red-700 shadow-sm shrink-0"
        >
          Call Emergency
        </a>
      </section>

      {/* 3. Services Grid */}
      <section className="my-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Clinical Departments
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#001f3f] mt-3">
            Our Specialties & Treatment Capabilities
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2">
            Equipped with modern medical infrastructure, sterile environments, and dedicated nursing professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              icon={s.icon}
              title={s.title}
              description={s.description}
              badge={s.badge}
            />
          ))}
        </div>
      </section>

      {/* 4. Bottom Appointment CTA */}
      <section className="my-10 bg-white rounded-3xl p-6 sm:p-10 border border-blue-100 shadow-sm text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-[#001f3f] mb-3">
          Need a Consultation with a Specialist?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-6">
          Book an appointment in advance to avoid waiting times, or visit our outpatient department during consultation hours.
        </p>
        <Link
          to="/contact"
          className="btn btn-primary rounded-pill px-6 py-2.5 font-medium shadow text-decoration-none"
        >
          Book Your Appointment Online
        </Link>
      </section>
      </div>
    </div>
  );
}
