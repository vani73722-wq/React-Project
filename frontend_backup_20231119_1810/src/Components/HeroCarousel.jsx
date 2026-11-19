import React from 'react';
import { Carousel } from 'react-bootstrap';
import NairaImg from '../assets/Naira.jpg';
import HospicImg from '../assets/hospic.png';
import ScanImg from '../assets/scan.jpg';
import CareImg from '../assets/care.jpg';

/**
 * Premium carousel for the hero section.
 * Uses Bootstrap carousel with automatic slide, manual arrows, indicators,
 * rounded corners and responsive sizing.
 */
export default function HeroCarousel() {
  const images = [
    { src: NairaImg, alt: 'Hospital exterior' },
    { src: HospicImg, alt: 'Hospital interior' },
    { src: ScanImg, alt: 'Diagnostic scanning' },
    { src: CareImg, alt: 'Compassionate care' },
  ];

  return (
    <Carousel
      fade
      interval={5000}
      controls={true}
      indicators={true}
      className="rounded-3 overflow-hidden shadow"
    >
      {images.map((img, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100 object-fit-cover"
            src={img.src}
            alt={img.alt}
            style={{ maxHeight: '500px' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
