import React from 'react';
import './HomePage.css';

const HomePage = () => (
  <div className="homepage">
    {/* NAVBAR */}
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/assets/naira-logo.png" alt="NAIRA Logo" className="logo" />
        <div className="logo-text">
          <h1>NAIRA</h1>
          <p className="tagline">MULTI-SPECIALITY HOSPITAL</p>
          <p className="slogan"><em>Heal, Care, Live Better</em></p>
        </div>
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Doctors</li>
        <li>Facilities</li>
        <li>Contact</li>
      </ul>
      <button className="appointment-btn">Book Appointment</button>
    </nav>

    {/* CAROUSEL */}
    <section className="carousel">
      <div className="slides">
        <div className="slide" style={{backgroundImage: "url('/assets/naira.jpg')"}}>
          <div className="caption">
            <h2>Your Health, Our Priority</h2>
            <p>Welcome to NAIRA Multi-Speciality Hospital</p>
            <p>Advanced care. Expert doctors. A healthier tomorrow.</p>
          </div>
        </div>
        <div className="slide" style={{backgroundImage: "url('/assets/care.png')"}}>
          <div className="caption">
            <h2>Your Health, Our Priority</h2>
            <p>Welcome to NAIRA Multi-Speciality Hospital</p>
            <p>Advanced care. Expert doctors. A healthier tomorrow.</p>
          </div>
        </div>
        <div className="slide" style={{backgroundImage: "url('/assets/scan.jpg')"}}>
          <div className="caption">
            <h2>Your Health, Our Priority</h2>
            <p>Welcome to NAIRA Multi-Speciality Hospital</p>
            <p>Advanced care. Expert doctors. A healthier tomorrow.</p>
          </div>
        </div>
      </div>
      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>

    {/* ABOUT + SERVICES */}
    <section className="about-services">
      <div className="col about">
        <h3>About Us</h3>
        <hr className="pink-underline" />
        <p>NAIRA Multi-Speciality Hospital is a trusted healthcare partner, offering comprehensive medical services with advanced technology and a caring team.</p>
        <button className="know-more">Know More</button>
      </div>
      <div className="col image-center">
        <img src="/assets/care.png" alt="Mother and baby" className="circular-img" />
      </div>
      <div className="col services">
        <h3>Our Services</h3>
        <hr className="pink-underline" />
        <div className="service-cards">
          <div className="service-card">Treatments - General &amp; Specialized</div>
          <div className="service-card">Scans - CT, MRI, Ultrasound</div>
          <div className="service-card">Laboratory Tests - Wide Range of Tests</div>
          <div className="service-card">Operations - Safe &amp; Advanced Care</div>
          <div className="service-card">ICU Care - Critical Care Unit</div>
          <div className="service-card">Emergency Care - 24/7 Support</div>
        </div>
        <p className="italic-tagline"><em>Better Care... A Healthier You...</em></p>
      </div>
    </section>

    {/* WHY PATIENTS TRUST US */}
    <section className="trust-section">
      <h3>Why Patients Trust Us</h3>
      <hr className="pink-underline" />
      <p className="subtitle">Trusted healthcare in Sivakasi for your family</p>
      <div className="trust-cards">
        <div className="trust-card">
          <i className="icon hospital-icon" />
          <h4>10+ Years</h4>
          <p>Experience Serving Sivakasi</p>
        </div>
        <div className="trust-card">
          <i className="icon smile-icon" />
          <h4>50,000+</h4>
          <p>Happy Patients Recovered &amp; Happy</p>
        </div>
        <div className="trust-card">
          <i className="icon ambulance-icon" />
          <h4>24/7 Emergency</h4>
          <p>Always Open</p>
        </div>
        <div className="trust-card">
          <i className="icon stethoscope-icon" />
          <h4>20+ Expert Doctors</h4>
          <p>Specialist Team</p>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="footer">
      <div className="footer-col">
        <h4>NAIRA Hospital</h4>
        <p>About</p>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Our Services</h4>
        <ul>
          <li>Treatments</li>
          <li>Scans</li>
          <li>Laboratory</li>
          <li>Emergency</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact Us Sivakasi</h4>
        <p>Address, Phone, Email</p>
      </div>
    </footer>
  </div>
);

export default HomePage;
