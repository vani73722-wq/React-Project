import React from 'react';
import { Carousel } from 'react-bootstrap';

/**
 * Premium Hero Carousel for NAIRA Multi-Speciality Hospital.
 * Auto-runs every 3 seconds in infinite loop.
 * 3 distinct premium hospital images:
 * 1. Modern hospital building / reception
 * 2. Caring doctor with patient
 * 3. Newborn baby and maternal care
 */
export default function HeroCarousel() {
  const images = [
    { src: '/images/carousel/carousel-1.jpg', alt: 'NAIRA Hospital Reception & Modern Infrastructure' },
    { src: '/images/carousel/carousel-2.jpg', alt: 'Caring Doctor Consulting Patient with Compassion' },
    { src: '/images/carousel/carousel-3.jpg', alt: 'Newborn Baby & Maternity Advanced Clinical Wing' },
  ];

  return (
    <div className="position-relative shadow-lg rounded-4 overflow-hidden border border-white border-3">
      <Carousel
        fade
        interval={3000}
        controls={true}
        indicators={true}
        pause="hover"
        className="w-100"
      >
        {images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <div style={{ height: '440px', backgroundColor: '#071f3d' }}>
              <img
                className="d-block w-100 h-100"
                src={img.src}
                alt={img.alt}
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/about/interior.jpg';
                }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
