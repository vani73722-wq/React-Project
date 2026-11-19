import React from 'react';
import { Link } from 'react-router-dom';
import hospic from '../assets/hospic.png';
import care from '../assets/care.jpg';
import scan from '../assets/scan.jpg';

function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade rounded-4 overflow-hidden shadow-lg" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="position-relative" style={{ height: "450px", backgroundColor: "#071f3d" }}>
            <img
              src={hospic}
              className="d-block w-100 h-100"
              style={{ objectFit: "cover", opacity: 0.85 }}
              alt="NAIRA Multi-Speciality Hospital"
            />
            <div className="position-absolute bottom-0 start-0 p-4 p-md-5 text-start w-100" style={{ background: "linear-gradient(transparent, rgba(7,31,61,0.9))" }}>
              <div className="text-white max-w-xl">
                <h2 className="fw-bold fs-3 text-white mb-2">
                  NAIRA Multi-Speciality Hospital
                </h2>
                <p className="text-light opacity-90 small mb-3">
                  Trusted healthcare in Sivakasi with round-the-clock emergency support.
                </p>
                <Link to="/appointment" className="btn-primary-custom btn-sm">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="position-relative" style={{ height: "450px", backgroundColor: "#071f3d" }}>
            <img
              src={care}
              className="d-block w-100 h-100"
              style={{ objectFit: "cover", opacity: 0.85 }}
              alt="Expert Doctors, Caring Hands"
            />
            <div className="position-absolute bottom-0 start-0 p-4 p-md-5 text-start w-100" style={{ background: "linear-gradient(transparent, rgba(7,31,61,0.9))" }}>
              <div className="text-white max-w-xl">
                <h2 className="fw-bold fs-3 text-white mb-2">
                  Expert Doctors, Caring Hands
                </h2>
                <p className="text-light opacity-90 small mb-3">
                  Specialist team dedicated to your family's continuous well-being.
                </p>
                <a href="tel:8940585378" className="btn btn-warning rounded-pill px-4 py-2 small fw-bold text-decoration-none">
                  Emergency: 8940585378
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="position-relative" style={{ height: "450px", backgroundColor: "#071f3d" }}>
            <img
              src={scan}
              className="d-block w-100 h-100"
              style={{ objectFit: "cover", opacity: 0.85 }}
              alt="First-Class Medical Facilities"
            />
            <div className="position-absolute bottom-0 start-0 p-4 p-md-5 text-start w-100" style={{ background: "linear-gradient(transparent, rgba(7,31,61,0.9))" }}>
              <div className="text-white max-w-xl">
                <h2 className="fw-bold fs-3 text-white mb-2">
                  First-Class Medical Facilities
                </h2>
                <p className="text-light opacity-90 small mb-3">
                  Advanced Scan, Lab & ICU - Everything under one roof.
                </p>
                <Link to="/facilities" className="btn-primary-custom btn-sm">
                  Our Facilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
