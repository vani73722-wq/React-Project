import React, { useState } from 'react';
import Hero from './Hero';
import DoctorCard from './DoctorCard';

function DoctorsPage() {
  // ----- CONTENT -----
  const tagline = '👩‍⚕️ Our Experts';
  const title = 'Meet Our Doctors';
  const description = 'Highly qualified specialists ready to care for you.';
  const buttonText = 'Book Appointment';

  // Dummy doctor data – replace with real data later
  const dummyDoctors = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    photo: `/doctor${i + 1}.jpg`, // put doctor1.jpg … doctor12.jpg in public folder
    name: `Dr. Jane Doe ${i + 1}`,
    speciality: ['Cardiology', 'Gynecology', 'Neurology'][i % 3],
    experience: 5 + i,
    phone: '+91 98765 4321',
    timings: '9am‑5pm',
  }));

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = dummyDoctors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === 'All' || d.speciality === filter)
  );

  // ----- IMAGE -----
  const imgUrl = '/doctors.jpg';

  // ----- RENDER -----
  return (
    <div className="py-12 px-4 md:px-12 bg-[#F5F8FF]">
      <Hero
        tagline={tagline}
        title={title}
        description={description}
        buttonText={buttonText}
        imgUrl={imgUrl}
        reverse={true}
      />

      <section className="mt-8 max-w-6xl mx-auto">
        {/* Search & filter */}
        <div className="flex flex-col md:flex-row justify-between mb-6 space-y-3 md:space-y-0">
          <div className="flex items-center gap-2 bg-[#FFFFFF] rounded-full px-3 py-1 shadow">
            <span role="img" aria-label="search">🔍</span>
            <input
              type="text"
              placeholder="Search doctors..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="outline-none"
            />
          </div>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="bg-[#FFFFFF] rounded-full px-4 py-1 shadow"
          >
            <option>All</option>
            <option>Cardiology</option>
            <option>Gynecology</option>
            <option>Neurology</option>
          </select>
        </div>
        {/* Doctor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(doc => (
            <DoctorCard key={doc.id} {...doc} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default DoctorsPage;
