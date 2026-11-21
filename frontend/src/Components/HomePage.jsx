import Hero from './Hero';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import DoctorsSection from './DoctorsSection';
import FacilitiesSection from './FacilitiesSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import useScrollReveal from '../hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  return (
    <main className="w-100 overflow-hidden">
      {/* 1. Hero Section (Split Layout: Text on Left, Hospital/Doctor Photography on Right) */}
      <Hero />

      {/* 2. Services Section (Cardiology, Neurology, Pediatrics, Orthopedics, General Medicine) */}
      <ServicesSection />

      {/* 3. About Us Section (Reception Photo, "Your Health, Our Priority", Trust & Tech) */}
      <AboutSection />

      {/* 4. Doctors Section (Realistic Doctor Profiles, Specializations, View All Doctors) */}
      <DoctorsSection />

      {/* 5. Facilities Section (ICU Care, Advanced Lab, Diagnostic Imaging, Patient Rooms) */}
      <FacilitiesSection />

      {/* 6. Testimonial Section (Patient Photos, Testimonials, Ratings) */}
      <TestimonialsSection />

      {/* 7. Contact Section (Address, Phone, Email, Hours, Validated Contact Form) */}
      <ContactSection />
    </main>
  );
}
