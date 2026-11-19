import React from 'react';
import Hero from './Hero';
import ServiceCard from './ServiceCard';

function AboutPage() {
  // ----- CONTENT -----
  const tagline = '❤️ Who We Are';
  const title = 'NAIRA Multi‑Speciality Hospital';
  const description = 'Committed to delivering world‑class healthcare with a personal touch.';
  const buttonText = 'Learn More';
  const imgUrl = '/about.jpg'; // place a bright hospital image in public folder

  const values = [
    { title: 'Compassion', description: 'Patient‑first attitude', icon: '❤️' },
    { title: 'Patient Safety', description: 'Zero‑tolerance for errors', icon: '🛡️' },
    { title: 'Integrity', description: 'Transparent & trustworthy', icon: 'ℹ️' },
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
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#0B2F6B] mb-4">Our Mission & Vision</h3>
            <p className="mt-4 text-gray-700">
              Our mission is to provide accessible, high‑quality medical services.
              Our vision is to be the leading health institution in the region.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ServiceCard
                key={i}
                icon={v.icon}
                title={v.title}
                description={v.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
