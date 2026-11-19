import Hero from './Hero';
import ServiceCard from './ServiceCard';
import { Heart, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function AboutPage() {
  const tagline = '❤️ About NAIRA Multi-Specialty Hospital';
  const title = 'Dedicated to Healing with Humanity';
  const description =
    'Founded with the vision to provide accessible, high-quality, and ethical healthcare in Sivakasi and surrounding regions. We combine modern medical technology with genuine human empathy.';
  const buttonText = 'Explore Services';
  const imgUrl = '/care.jpg';

  const values = [
    {
      title: 'Compassion',
      description: 'Listening with patience, understanding patient vulnerabilities, and treating every individual like family.',
      icon: <Heart size={26} className="text-red-500" />,
    },
    {
      title: 'Patient Safety',
      description: 'Rigorous sanitization, zero-tolerance infection protocols, and strict compliance with national healthcare guidelines.',
      icon: <ShieldCheck size={26} className="text-emerald-600" />,
    },
    {
      title: 'Clinical Integrity',
      description: 'Complete transparency in treatment plans, diagnostic reporting, and ethical billing without hidden charges.',
      icon: <CheckCircle2 size={26} className="text-blue-600" />,
    },
  ];

  const highlights = [
    { title: 'NABH Accreditations in Progress', desc: 'Highest standards of clinical protocol and patient safety.' },
    { title: 'Modern Modular Operation Theatres', desc: 'Ultra-clean laminar air flow for high success surgical outcomes.' },
    { title: 'In-House Automated Pathology', desc: 'Accurate and rapid diagnostic reporting within minutes.' },
    { title: '24/7 Dedicated Trauma & Ambulance', desc: 'Swift emergency retrieval and immediate life-saving care.' },
  ];

  return (
    <div className="w-full pb-16">
      {/* 1. Hero Section */}
      <Hero
        tagline={tagline}
        title={title}
        description={description}
        buttonText={buttonText}
        buttonLink="/services"
        imgUrl={imgUrl}
        reverse={true}
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* 2. Mission & Vision */}
      <section className="my-10 bg-white rounded-3xl p-6 sm:p-10 border border-blue-50 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Our Medical Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001f3f] mt-3 mb-4">
              Our Mission & Vision for Sivakasi
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              <strong>Our Mission:</strong> To bridge the gap in specialist healthcare by delivering affordable, world-class medical and surgical solutions with unmatched compassion and dignity.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              <strong>Our Vision:</strong> To emerge as Southern Tamil Nadu's most trusted hospital, recognized for clinical excellence, innovative research, patient recovery speed, and selfless community service.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">10+</div>
                <div className="text-xs sm:text-sm text-slate-600">Years of Service</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-xs sm:text-sm text-slate-600">Smiles Restored</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100">
            <img
              src="/hospic.png"
              alt="Hospital Campus"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/Naira.jpg';
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="my-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Guiding Philosophy
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#001f3f] mt-3">
            Our Core Values
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2">
            Every doctor, nurse, and support staff member is dedicated to upholding these foundational principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ServiceCard
              key={i}
              icon={v.icon}
              title={v.title}
              description={v.description}
            />
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us / Highlights */}
      <section className="my-10 bg-gradient-to-r from-blue-50 to-indigo-50/60 rounded-3xl p-6 sm:p-10 border border-blue-100">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#001f3f]">
            Why Families Choose NAIRA
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Setting the benchmark for regional healthcare infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-blue-100/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <Award size={18} />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 m-0">{h.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 m-0">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="my-10 text-center">
        <Link
          to="/contact"
          className="btn btn-primary rounded-pill px-6 py-3 font-semibold shadow hover:shadow-lg text-decoration-none"
        >
          Get in Touch with Our Medical Desk
        </Link>
      </section>
      </div>
    </div>
  );
}

export default AboutPage;
