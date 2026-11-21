import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Mrs. Priya Ramachandran',
      department: 'Cardiology Care',
      condition: 'Emergency Cardiac Stenting',
      image: '/images/patients/patient-1.jpg',
      rating: 5,
      feedback: 'When I experienced sudden severe chest pain, Naira Hospital’s emergency team acted within minutes. Dr. Sundaram’s calm diagnosis and the ICU nursing care were phenomenal. They did not just treat my heart, they treated my entire family with reassurance and dignity.'
    },
    {
      id: 2,
      name: 'Mr. S. Balasubramanian',
      department: 'Orthopedics & Joint Care',
      condition: 'Total Knee Replacement',
      image: '/images/patients/patient-2.jpg',
      rating: 5,
      feedback: 'I had been struggling with severe osteoarthritis for four years. Under Dr. Vignesh’s surgical expertise and the subsequent physiotherapy team, I was able to walk without pain in just two weeks. The hospital is spotless, modern, and very transparent with billing.'
    },
    {
      id: 3,
      name: 'Mrs. Kavitha Murugan',
      department: 'Pediatric Care',
      condition: 'Child Bronchial Infection Treatment',
      image: '/images/patients/patient-3.jpg',
      rating: 5,
      feedback: 'My 4-year-old daughter was admitted with high fever and respiratory distress. Dr. Anitha and the pediatric nurses were so gentle and comforting with her. Today she is healthy and smiling. As parents, having such expert pediatric care right here in Sivakasi gives immense peace of mind.'
    }
  ];

  return (
    <section className="py-5 py-lg-6" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container-xl">
        {/* Section Header */}
        <div className="text-center mb-5 scroll-reveal">
          <div className="section-tag">
            <span>Patient Experiences</span>
          </div>
          <h2 className="section-title">Stories of Healing & Hope</h2>
          <p className="section-subtitle">
            Every recovery is a testament to our commitment to compassionate medicine, clinical expertise, and patient well-being.
          </p>
        </div>

        {/* 3 Testimonials Grid with Staggered Scroll Reveal */}
        <div className="row g-4">
          {testimonials.map((item, idx) => (
            <div key={item.id} className={`col-lg-4 scroll-reveal stagger-${idx + 1}`}>
              <div className="testimonial-card">
                <div>
                  {/* Top: Quote Icon & Stars */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center text-teal"
                      style={{ width: '42px', height: '42px', backgroundColor: 'var(--teal-light)' }}
                    >
                      <Quote size={20} />
                    </div>
                    <div className="d-flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <p className="text-muted small mb-4" style={{ lineHeight: '1.7', fontStyle: 'italic' }}>
                    "{item.feedback}"
                  </p>
                </div>

                {/* Patient Profile */}
                <div className="d-flex align-items-center gap-3 pt-3 border-top">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="rounded-circle border"
                    style={{ width: '52px', height: '52px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="fw-bold mb-0 text-navy d-flex align-items-center gap-1">
                      {item.name}
                      <CheckCircle2 size={15} className="text-teal" title="Verified Patient" />
                    </h6>
                    <small className="text-muted d-block">{item.department}</small>
                    <small className="badge bg-light text-navy rounded-pill mt-1" style={{ fontSize: '0.7rem' }}>
                      {item.condition}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
