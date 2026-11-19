import React from 'react';
import { Carousel } from 'react-bootstrap';
import NairaImg from '../assets/Naira.jpg';
import HospicImg from '../assets/hospic.png';
import ScanImg from '../assets/scan.jpg';
import CareImg from '../assets/care.jpg';

/**
 * Premium Hero Carousel for the NAIRA Hospital Home Page.
 * Strictly preserves the existing images: Naira.jpg, hospic.png, scan.jpg, care.jpg.
 * Automatic sliding, manual arrows, dots indicators, rounded corners, no text overlay.
 */
export default function HeroCarousel() {
  const images = [
    { src: NairaImg, alt: 'NAIRA Hospital Building & Exterior' },
    { src: HospicImg, alt: 'NAIRA Hospital Modern Facilities' },
    { src: ScanImg, alt: 'Diagnostic Imaging and Advanced Scans' },
    { src: CareImg, alt: 'Compassionate Patient Care and Healing' },
  ];

  return (
    <div className="position-relative shadow-lg rounded-4 overflow-hidden border border-white border-3">
      <Carousel
        fade
        interval={4500}
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
