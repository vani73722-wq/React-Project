import { useState } from 'react';
import Hero from './Hero';
import DoctorCard from './DoctorCard';
import { Search, Filter } from 'lucide-react';

function DoctorsPage() {
  const tagline = '👩‍⚕️ Our Medical Specialists';
  const title = 'Meet Our Renowned Doctors';
  const description =
    'Our highly certified team of doctors and surgeons are dedicated to providing compassionate, evidence-based care with unmatched clinical precision.';
  const buttonText = 'Book Appointment';
  const imgUrl = '/care.jpg';

  const doctorsList = [
    {
      id: 1,
      name: 'Dr. A. Rajesh Kumar',
      speciality: 'Cardiology',
      qualification: 'MBBS, MD, DM (Cardiology)',
      experience: 16,
      timings: '9:00 AM - 1:00 PM',
      phone: '+91 89405 85378',
    },
    {
      id: 2,
      name: 'Dr. Priya S. Sundaram',
      speciality: 'Gynecology',
      qualification: 'MBBS, DGO, DNB (OBG)',
      experience: 14,
      timings: '10:00 AM - 3:00 PM',
      phone: '+91 89405 85378',
    },
    {
      id: 3,
      name: 'Dr. K. Venkatesh',
      speciality: 'Neurology',
      qualification: 'MBBS, MD, DM (Neurology)',
      experience: 18,
      timings: '11:00 AM - 4:00 PM',
      phone: '+91 89405 85378',
    },
    {
      id: 4,
      name: 'Dr. M. Senthil Nathan',
      speciality: 'Orthopedics',
      qualification: 'MBBS, MS (Ortho), Fellowship in Arthroplasty',
      experience: 15,
      timings: '9:30 AM - 1:30 PM',
      phone: '+91 89405 85378',
    },
    {
      id: 5,
      name: 'Dr. Deepa Ramakrishnan',
      speciality: 'Pediatrics',
      qualification: 'MBBS, MD (Pediatrics), DCH',
      experience: 11,
      timings: '4:00 PM - 8:00 PM',
      phone: '+91 89405 85378',
    },
    {
      id: 6,
      name: 'Dr. R. Karthik',
      speciality: 'General Medicine',
      qualification: 'MBBS, MD (General Medicine)',
      experience: 12,
      timings: '8:00 AM - 12:00 PM',
      phone: '+91 89405 85378',
    },
    {
      id: 7,
      name: 'Dr. V. Lakshmi Narayanan',
      speciality: 'General Surgery',
      qualification: 'MBBS, MS (Gen Surgery), FMAS',
      experience: 17,
      timings: '2:00 PM - 6:00 PM',
      phone: '+91 89405 85378',
    },
    {
      id: 8,
      name: 'Dr. Sneha Balaji',
      speciality: 'Radiology',
      qualification: 'MBBS, DMRD, DNB (Radiology)',
      experience: 9,
      timings: '9:00 AM - 5:00 PM',
      phone: '+91 89405 85378',
    },
  ];

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const specialties = ['All', 'Cardiology', 'Gynecology', 'Neurology', 'Orthopedics', 'Pediatrics', 'General Medicine'];

  const filtered = doctorsList.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.speciality.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || d.speciality === filter;
    return matchesSearch && matchesFilter;
  });

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
        {/* 2. Search & Filter Bar */}
      <section className="my-8 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-blue-50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Department Select & Filter chips */}
          <div className="w-full md:w-auto flex items-center gap-2">
            <Filter size={18} className="text-slate-500 shrink-0 hidden sm:block" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full sm:w-auto px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {specialties.map((spec) => (
                <option key={spec} value={spec}>
                  {spec === 'All' ? 'All Specialties' : spec}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Filter Badges for Mobile & Desktop */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 mt-3 border-t border-slate-100 no-scrollbar">
          <span className="text-xs font-semibold text-slate-400 shrink-0">Quick Filter:</span>
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setFilter(spec)}
              className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-colors ${
                filter === spec
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Doctors Cards Grid */}
      <section className="my-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-[#001f3f] m-0">
            Available Specialists ({filtered.length})
          </h2>
          {search || filter !== 'All' ? (
            <button
              onClick={() => {
                setSearch('');
                setFilter('All');
              }}
              className="text-xs text-blue-600 hover:underline font-medium"
            >
              Clear filters
            </button>
          ) : null}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((doc) => (
              <DoctorCard key={doc.id} {...doc} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center border border-blue-50">
            <p className="text-base text-slate-600 mb-2">No doctors found matching "{search || filter}".</p>
            <button
              onClick={() => {
                setSearch('');
                setFilter('All');
              }}
              className="btn btn-primary btn-sm rounded-pill px-4"
            >
              Reset Search
            </button>
          </div>
        )}
      </section>
      </div>
    </div>
  );
}

export default DoctorsPage;
