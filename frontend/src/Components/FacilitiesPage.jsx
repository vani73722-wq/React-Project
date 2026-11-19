import React from 'react';
import Hero from './Hero';
import FacilityCard from './FacilityCard';

function FacilitiesPage() {
  // ----- CONTENT -----
  const tagline = '🏥 Our Infrastructure';
  const title = 'State‑of‑the‑art Facilities';
  const description = 'Every department equipped with modern technology and comfort.';
  const buttonText = 'Explore Facilities';
  const imgUrl = '/facilities.jpg'; // bright hospital image in public folder

  const facilities = [
    { title: 'ICU', imgUrl: '/icu.jpg', icon: '🛏️' },
    { title: 'Operation Theatre', imgUrl: '/operation.jpg', icon: '🩺' },
    { title: 'Patient Rooms', imgUrl: '/rooms.jpg', icon: '✅' },
    { title: 'Scan Centre', imgUrl: '/scan.jpg', icon: '🧪' },
    { title: 'Laboratory', imgUrl: '/lab.jpg', icon: '💊' },
    { title: 'Pharmacy', imgUrl: '/pharmacy.jpg', icon: '❤️' },
  ];

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

      <section className="mt-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0B2F6B] mb-6">Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <FacilityCard
              key={i}
              imgUrl={f.imgUrl}
              icon={f.icon}
              title={f.title}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default FacilitiesPage;
