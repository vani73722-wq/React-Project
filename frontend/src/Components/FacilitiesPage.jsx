import Hero from './Hero';
import FacilityCard from './FacilityCard';
import { BedDouble, Stethoscope, TestTube2, ShieldPlus, Sparkles, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function FacilitiesPage() {
  const tagline = '🏥 Medical Infrastructure';
  const title = 'State-of-the-Art Facilities';
  const description =
    'Designed to ensure maximum patient safety, rapid diagnostics, sterile surgical recovery, and utmost comfort for patients and their families.';
  const buttonText = 'Contact Hospital';
  const imgUrl = '/hospic.png';

  const facilities = [
    {
      title: 'Advanced Intensive Care Unit (ICU)',
      imgUrl: '/hospic.png',
      icon: <BedDouble size={20} className="text-blue-600" />,
      description: 'Multi-parameter computerized monitoring, advanced invasive & non-invasive ventilators, and 1:1 dedicated nursing care.',
      features: ['Central Oxygen & Suction System', 'Invasive Hemodynamic Monitors', '24/7 Intensivist Cover'],
    },
    {
      title: 'Modular Operation Theatres',
      imgUrl: '/care.jpg',
      icon: <Stethoscope size={20} className="text-emerald-600" />,
      description: 'Laminar air-flow theatres equipped with HEPA filters to maintain zero-infection sterile conditions for complex surgeries.',
      features: ['Laminar Airflow & HEPA Filtration', 'HD Laparoscopy & C-Arm fluoroscopy', 'Integrated Anesthesia Workstation'],
    },
    {
      title: 'Diagnostic Scan & Imaging Centre',
      imgUrl: '/scan.jpg',
      icon: <TestTube2 size={20} className="text-cyan-600" />,
      description: 'High-definition digital radiography, computerized ultrasound, Echo, and 24-hr emergency scanning support.',
      features: ['Low Radiation Digital X-Ray', 'Color Doppler Ultrasound', 'Automated Echo & ECG'],
    },
    {
      title: '24/7 In-House Pharmacy',
      imgUrl: '/Naira.jpg',
      icon: <ShieldPlus size={20} className="text-red-500" />,
      description: 'Fully stocked with genuine life-saving emergency injectables, surgical consumables, and chronic medications.',
      features: ['Cold Chain Vaccine Storage', 'Computerized Dispensing', 'Round-the-Clock Availability'],
    },
    {
      title: 'Automated Pathology Laboratory',
      imgUrl: '/scan.jpg',
      icon: <Sparkles size={20} className="text-purple-600" />,
      description: 'Fully automated biochemistry, hematology, and serology analyzers delivering high-precision test results swiftly.',
      features: ['Barcoded Sample Processing', 'Quality Controlled Automated Analyzers', 'Emergency STAT Reporting in 30 Mins'],
    },
    {
      title: 'Patient Rooms & Deluxe Suites',
      imgUrl: '/care.jpg',
      icon: <Building2 size={20} className="text-amber-600" />,
      description: 'Air-conditioned private suites, twin sharing, and general wards with ergonomic motorized beds and attendant comfort.',
      features: ['Motorized Patient Beds', 'Nurse Call Bell System', 'Hygienic Sanitized En-Suite Bathrooms'],
    },
  ];

  return (
    <div className="w-full pb-16">
      {/* 1. Hero Section */}
      <Hero
        tagline={tagline}
        title={title}
        description={description}
        buttonText={buttonText}
        buttonLink="/contact"
        imgUrl={imgUrl}
        reverse={true}
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* 2. Facilities Grid */}
      <section className="my-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Clinical Infrastructure
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#001f3f] mt-3">
            Built for Clinical Excellence & Patient Comfort
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2">
            Click any facility card below to view detailed equipment specs and safety highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <FacilityCard
              key={i}
              imgUrl={f.imgUrl}
              icon={f.icon}
              title={f.title}
              description={f.description}
              features={f.features}
            />
          ))}
        </div>
      </section>

      {/* 3. Sanitization & Safety Standards Strip */}
      <section className="my-10 bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="p-2">
            <div className="text-2xl mb-2">🛡️</div>
            <h4 className="text-base font-bold text-[#001f3f]">100% Sterile Protocol</h4>
            <p className="text-xs sm:text-sm text-slate-600 m-0">Continuous biomedical waste disposal, hospital-grade fumigation, and air sterilization.</p>
          </div>
          <div className="p-2 border-t md:border-t-0 md:border-l border-slate-100">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="text-base font-bold text-[#001f3f]">Uninterrupted Power Backup</h4>
            <p className="text-xs sm:text-sm text-slate-600 m-0">Heavy-duty generator setups and online UPS to guarantee zero downtime in OT & ICU.</p>
          </div>
          <div className="p-2 border-t md:border-t-0 md:border-l border-slate-100">
            <div className="text-2xl mb-2">🚑</div>
            <h4 className="text-base font-bold text-[#001f3f]">Rapid Ambulance Response</h4>
            <p className="text-xs sm:text-sm text-slate-600 m-0">Equipped with transport ventilator, monitor, and trained emergency medical technicians.</p>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="my-10 text-center">
        <Link
          to="/contact"
          className="btn btn-primary rounded-pill px-6 py-3 font-semibold shadow hover:shadow-lg text-decoration-none"
        >
          Book an In-Person Consultation
        </Link>
      </section>
      </div>
    </div>
  );
}

export default FacilitiesPage;
