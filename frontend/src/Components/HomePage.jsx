import React from 'react';
import { NavLink } from 'react-router-dom';
import HeroCarousel from './HeroCarousel';
import FeatureCard from './FeatureCard';
import Hero from './Hero';

function HomePage() {
  // Hero content
  const tagline = '🩺 Your Health, Our Priority';
  const title = 'Compassionate Care for a Healthier Tomorrow';
  const description = 'At NAIRA Multi‑Specialty Hospital, your health and happiness matter most. Our experienced medical team, advanced facilities, and compassionate care are here to support you at every step of your healing journey.';
  const buttonText = 'Book Appointment';

  // Feature cards data
  const features = [
    { type: 'expert', title: 'Expert Doctors', description: 'Experienced specialists providing the best care.' },
    { type: 'advanced', title: 'Advanced Care', description: 'Modern technology and advanced diagnostic support.' },
    { type: 'services24', title: '24/7 Services', description: 'Round‑the‑clock medical support whenever you need it.' },
    { type: 'patient', title: 'Patient First', description: 'Compassionate and personalized care focused on patients.' },
  ];

  return (
    <div className="py-12 px-4 md:px-12 bg-[#F5F8FF]">
      {/* Hero carousel on the right side */}
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-12">
        <div className="md:w-1/2">
          <Hero
            tagline={tagline}
            title={title}
            description={description}
            buttonText={buttonText}
            imgUrl="/home-hero.jpg" // placeholder, replace with actual image if needed
            reverse={false}
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <HeroCarousel />
        </div>
      </div>

      {/* Feature cards */}
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
}

export default HomePage;
